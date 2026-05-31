"use client";

import { useCallback, useEffect, useRef, useState } from "react";

// ── Constants (ported from original pet project) ───────────────────────────────
const PET_SIZE = 60; // 80 * 0.75
const FOLLOW_SPEED = 0.2; // PetAvatar.tsx: FOLLOW_SPEED = 0.2
const DRAG_THRESHOLD = 4;

// Launch pad — ported from cornerZone.ts
const PAD_R = 28; // CORNER_RADIUS
const PAD_OFFSET = 20; // CORNER_BOTTOM_RIGHT_PADDING
const TRIGGER_SLACK = 20; // CORNER_TRIGGER_SLACK
// Trigger: distance from pet-center to pad-center < PAD_R + PET_SIZE/2 + TRIGGER_SLACK
const TRIGGER_RADIUS = PAD_R + PET_SIZE / 2 + TRIGGER_SLACK; // 78 px

// Flight physics — ported from DragLaunch.tsx / steeringFlight.ts
const LAUNCH_SPEED = 5000; // px/s, integrated at fixed 1/60 s per frame
const WALL_BOUNCE = 0.6; // WALL_BOUNCE in DragLaunch
const STOP_MIN_SPEED = 15; // LAUNCH_STOP_MIN_SPEED
const STOP_FRAMES = 8; // LAUNCH_STOP_LOW_SPEED_FRAMES
const MAX_FLIGHT_MS = 7000; // LAUNCH_MAX_FLIGHT_MS

type Phase = "idle" | "dragging" | "anchored" | "flying";
type Pos = { x: number; y: number };
/** Combined render state — batches pos + tilt to avoid extra renders */
type RS = { x: number; y: number; tilt: number };

function defaultPos(): Pos {
  return {
    x: window.innerWidth - PET_SIZE - 100,
    y: window.innerHeight - PET_SIZE - 100,
  };
}
function padCenter() {
  return {
    cx: window.innerWidth - PAD_R - PAD_OFFSET,
    cy: window.innerHeight - PAD_R - PAD_OFFSET,
  };
}
function anchorPos(cx: number, cy: number): Pos {
  // bottomAnchor: pet bottom-center aligns to pad center
  return { x: cx - PET_SIZE / 2, y: cy - PET_SIZE };
}
function clampPos(p: Pos): Pos {
  return {
    x: Math.max(0, Math.min(window.innerWidth - PET_SIZE, p.x)),
    y: Math.max(0, Math.min(window.innerHeight - PET_SIZE, p.y)),
  };
}
/** Clamp aim to north-west quadrant (-pi ... -pi/2) — cornerAim.ts clampAimAngle('northWest') */
function clampAimAngle(raw: number): number {
  let angle = raw;
  if (angle > -Math.PI / 2) {
    const northDist = angle + Math.PI / 2;
    const westDist = angle >= 0 ? Math.PI - angle : angle + Math.PI;
    angle = northDist < westDist ? -Math.PI / 2 : -Math.PI;
  }
  return angle;
}
/** Per-frame velocity friction — steeringFlight.ts applyLaunchSpeedFriction */
function launchFriction(speed: number): number {
  const t = Math.min(speed / 3000, 1);
  return 0.955 + t * 0.043;
}

// ── Component ──────────────────────────────────────────────────────────────────
export function DraggablePet() {
  const [rs, setRs] = useState<RS | null>(null);
  const [phase, setPhase] = useState<Phase>("idle");
  const [squash, setSquash] = useState(false);
  const [land, setLand] = useState(false);
  const [padVisible, setPadVisible] = useState(false);
  const [padActive, setPadActive] = useState(false);
  const [padReady, setPadReady] = useState(false);
  const [aimAngle, setAimAngle] = useState(0);

  const phaseRef = useRef<Phase>("idle");
  const target = useRef<Pos>({ x: 0, y: 0 });
  const latest = useRef<Pos>({ x: 0, y: 0 });
  const tilt = useRef(0);
  const dragOff = useRef<Pos>({ x: 0, y: 0 });
  const downScreen = useRef<Pos>({ x: 0, y: 0 });
  const moved = useRef(false);
  const settling = useRef(false);
  const rafId = useRef(0);
  const vel = useRef<Pos>({ x: 0, y: 0 });
  const flyStartTs = useRef(0);
  const lowSpeedFrames = useRef(0);
  const aimRef = useRef(0);
  const mouse = useRef<Pos>({ x: 0, y: 0 });
  // Callback refs — avoids self-reference TDZ and ref-during-render lint errors
  const dragTickRef = useRef<() => void>(() => {});
  const flyTickRef = useRef<FrameRequestCallback>(() => {});

  useEffect(() => {
    const p = defaultPos();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setRs({ ...p, tilt: 0 });
    latest.current = p;
    target.current = p;
  }, []);

  useEffect(() => {
    const h = (e: MouseEvent) => { mouse.current = { x: e.clientX, y: e.clientY }; };
    document.addEventListener("mousemove", h, { passive: true });
    return () => document.removeEventListener("mousemove", h);
  }, []);

  // Pad entrance: double-rAF triggers CSS transition
  useEffect(() => {
    if (!padVisible) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPadReady(false);
      return;
    }
    let id2 = 0;
    const id1 = requestAnimationFrame(() => {
      id2 = requestAnimationFrame(() => setPadReady(true));
    });
    return () => { cancelAnimationFrame(id1); cancelAnimationFrame(id2); };
  }, [padVisible]);

  // ── Stable helpers ──
  const syncPhase = useCallback((p: Phase) => {
    phaseRef.current = p;
    setPhase(p);
  }, []);

  const stopRaf = useCallback(() => {
    if (rafId.current) { cancelAnimationFrame(rafId.current); rafId.current = 0; }
  }, []);

  const updateAim = useCallback((mx: number, my: number) => {
    const { cx, cy } = padCenter();
    const angle = clampAimAngle(Math.atan2(my - cy, mx - cx));
    aimRef.current = angle;
    setAimAngle(angle);
  }, []);

  // ── Drag follow RAF (lerp, FOLLOW_SPEED = 0.2 matching original) ──
  const dragTick = useCallback(() => {
    if (phaseRef.current !== "dragging") { rafId.current = 0; return; }
    const tx = target.current.x, ty = target.current.y;
    const cx = latest.current.x, cy = latest.current.y;
    const dx = tx - cx, dy = ty - cy;
    tilt.current =
      Math.min(Math.sqrt(dx * dx + dy * dy) * 0.3, 15) * (dx >= 0 ? 1 : -1);

    if (Math.abs(dx) < 0.3 && Math.abs(dy) < 0.3) {
      latest.current = { x: tx, y: ty };
      setRs({ x: tx, y: ty, tilt: 0 });
      tilt.current = 0;
      rafId.current = 0;
      if (settling.current) {
        settling.current = false;
        syncPhase("idle");
        setLand(true);
      }
      return;
    }
    const np = clampPos({ x: cx + dx * FOLLOW_SPEED, y: cy + dy * FOLLOW_SPEED });
    latest.current = np;

    // Zone detection every frame — handles fast drags (original uses continuous RAF loop)
    if (!settling.current) {
      const { cx: padCx, cy: padCy } = padCenter();
      const petCx = np.x + PET_SIZE / 2, petCy = np.y + PET_SIZE / 2;
      if (Math.sqrt((petCx - padCx) ** 2 + (petCy - padCy) ** 2) < TRIGGER_RADIUS) {
        const ap = anchorPos(padCx, padCy);
        latest.current = ap;
        target.current = ap;
        setRs({ ...ap, tilt: 0 });
        tilt.current = 0;
        rafId.current = 0;
        syncPhase("anchored");
        setPadActive(true);
        const angle = clampAimAngle(Math.atan2(mouse.current.y - padCy, mouse.current.x - padCx));
        aimRef.current = angle;
        setAimAngle(angle);
        return;
      }
    }

    setRs({ ...np, tilt: tilt.current });
    rafId.current = requestAnimationFrame(dragTickRef.current);
  }, [syncPhase]);

  // ── Flight RAF (fixed dt=1/60, no gravity, wall-bounce pinball, friction) ──
  const flyTick = useCallback((ts: number) => {
    if (phaseRef.current !== "flying") { rafId.current = 0; return; }
    const elapsed = ts - flyStartTs.current;
    const dt = 1 / 60; // fixed step matching SteeringBody integrateSteeringEuler

    let vx = vel.current.x;
    let vy = vel.current.y;
    let nx = latest.current.x + vx * dt;
    let ny = latest.current.y + vy * dt;

    const maxX = window.innerWidth - PET_SIZE;
    const maxY = window.innerHeight - PET_SIZE;

    if (nx < 0) { nx = 0; vx = Math.abs(vx) * WALL_BOUNCE; }
    if (nx > maxX) { nx = maxX; vx = -Math.abs(vx) * WALL_BOUNCE; }
    if (ny < 0) { ny = 0; vy = Math.abs(vy) * WALL_BOUNCE; }
    if (ny > maxY) { ny = maxY; vy = -Math.abs(vy) * WALL_BOUNCE; }

    // Apply per-frame friction (matching applyLaunchSpeedFriction)
    const speed = Math.hypot(vx, vy);
    if (speed > 1) {
      const f = launchFriction(speed);
      vx *= f;
      vy *= f;
    }

    vel.current = { x: vx, y: vy };
    latest.current = { x: nx, y: ny };
    tilt.current = Math.max(-15, Math.min(15, vx * 0.015));
    setRs({ x: nx, y: ny, tilt: tilt.current });

    const newSpeed = Math.hypot(vx, vy);
    const lf = newSpeed < STOP_MIN_SPEED ? lowSpeedFrames.current + 1 : 0;
    lowSpeedFrames.current = lf;

    if (lf >= STOP_FRAMES || elapsed > MAX_FLIGHT_MS) {
      tilt.current = 0;
      setRs({ x: nx, y: ny, tilt: 0 });
      rafId.current = 0;
      syncPhase("idle");
      setLand(true);
      return;
    }
    rafId.current = requestAnimationFrame(flyTickRef.current);
  }, [syncPhase]);

  // Keep callback refs in sync
  useEffect(() => { dragTickRef.current = dragTick; }, [dragTick]);
  useEffect(() => { flyTickRef.current = flyTick; }, [flyTick]);

  // ── Pointer handlers ──
  const onPointerDown = useCallback(
    (e: React.PointerEvent<HTMLImageElement>) => {
      e.preventDefault();
      e.currentTarget.setPointerCapture(e.pointerId);
      stopRaf();
      settling.current = false;
      const lp = latest.current;
      dragOff.current = { x: e.clientX - lp.x, y: e.clientY - lp.y };
      downScreen.current = { x: e.clientX, y: e.clientY };
      moved.current = false;
      target.current = lp;
      mouse.current = { x: e.clientX, y: e.clientY };
      setSquash(true);
      syncPhase("dragging");
      setPadVisible(true);
    },
    [stopRaf, syncPhase],
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent<HTMLImageElement>) => {
      const p = phaseRef.current;
      if (p !== "dragging" && p !== "anchored") return;
      mouse.current = { x: e.clientX, y: e.clientY };

      if (
        Math.abs(e.clientX - downScreen.current.x) > DRAG_THRESHOLD ||
        Math.abs(e.clientY - downScreen.current.y) > DRAG_THRESHOLD
      ) moved.current = true;

      const newTarget = clampPos({
        x: e.clientX - dragOff.current.x,
        y: e.clientY - dragOff.current.y,
      });

      if (p === "anchored") {
        const { cx, cy } = padCenter();
        const pcx = newTarget.x + PET_SIZE / 2, pcy = newTarget.y + PET_SIZE / 2;
        if (Math.sqrt((pcx - cx) ** 2 + (pcy - cy) ** 2) < TRIGGER_RADIUS) {
          updateAim(e.clientX, e.clientY);
        } else {
          setPadActive(false);
          syncPhase("dragging");
          target.current = newTarget;
          if (!rafId.current) rafId.current = requestAnimationFrame(dragTickRef.current);
        }
        return;
      }

      // dragging: just update target, dragTick RAF detects zone every frame
      target.current = newTarget;
      if (!rafId.current) rafId.current = requestAnimationFrame(dragTickRef.current);
    },
    [syncPhase, updateAim],
  );

  const onPointerUp = useCallback(() => {
    setPadVisible(false);
    setPadActive(false);
    const p = phaseRef.current;

    if (p === "anchored") {
      const angle = aimRef.current;
      vel.current = {
        x: Math.cos(angle) * LAUNCH_SPEED,
        y: Math.sin(angle) * LAUNCH_SPEED,
      };
      lowSpeedFrames.current = 0;
      flyStartTs.current = performance.now();
      syncPhase("flying");
      rafId.current = requestAnimationFrame(flyTickRef.current);
      return;
    }

    if (p === "dragging") {
      if (!moved.current) { syncPhase("idle"); return; }
      settling.current = true;
      if (!rafId.current) rafId.current = requestAnimationFrame(dragTickRef.current);
    }
  }, [syncPhase]);

  const onPointerCancel = useCallback(() => {
    setPadVisible(false);
    setPadActive(false);
    stopRaf();
    settling.current = false;
    syncPhase("idle");
  }, [stopRaf, syncPhase]);

  if (!rs) return null;

  const isActive = phase === "dragging" || phase === "anchored" || phase === "flying";
  const { cx: padCx, cy: padCy } = padCenter();
  const aimLen = PAD_R + 30; // r + 30 matches original LaunchCircle
  const aimX2 = padCx + Math.cos(aimAngle) * aimLen;
  const aimY2 = padCy + Math.sin(aimAngle) * aimLen;
  const imgAnim: string | undefined = squash
    ? "pudding-squash 0.35s ease-out"
    : land ? "pudding-land 0.30s ease-out" : undefined;

  return (
    <>
      {/* Launch pad circle — visual matches original LaunchCircle */}
      {padVisible && (
        <div
          style={{
            position: "fixed",
            zIndex: 49,
            left: padCx - PAD_R,
            top: padCy - PAD_R,
            width: PAD_R * 2,
            height: PAD_R * 2,
            borderRadius: "50%",
            border: padActive
              ? "2px dashed #f59e0b"
              : "2px dashed rgba(148,163,184,0.5)",
            background: padActive
              ? "radial-gradient(circle, rgba(245,158,11,0.2), rgba(245,158,11,0.05) 60%, transparent)"
              : "radial-gradient(circle, rgba(148,163,184,0.06), transparent 70%)",
            pointerEvents: "none",
            opacity: padReady ? 1 : 0,
            transform: padReady ? "scale(1)" : "scale(0.7)",
            animation: padActive ? "launch-pulse 0.5s ease-in-out infinite" : undefined,
            transition: "opacity 0.18s ease, transform 0.18s ease, border 0.15s, background 0.15s",
          }}
        />
      )}

      {/* Aim indicator — matches original LaunchCircle SVG */}
      {padActive && (
        <svg
          style={{
            position: "fixed",
            zIndex: 49,
            inset: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            overflow: "visible",
          }}
        >
          <line
            x1={padCx} y1={padCy} x2={aimX2} y2={aimY2}
            stroke="#f59e0b"
            strokeWidth="2"
            strokeDasharray="4 3"
            strokeLinecap="round"
            opacity={0.7}
          />
          <circle cx={aimX2} cy={aimY2} r={3} fill="#f59e0b" opacity={0.8} />
        </svg>
      )}

      {/* Pet image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/doge_normal.webp"
        alt="Pudding"
        draggable={false}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerCancel}
        onAnimationEnd={() => { setSquash(false); setLand(false); }}
        className={`fixed z-50 select-none touch-none ${isActive ? "cursor-grabbing" : "cursor-grab"}`}
        style={{
          left: rs.x,
          top: rs.y,
          width: PET_SIZE,
          height: "auto",
          transform: imgAnim ? undefined : `rotate(${rs.tilt}deg)`,
          filter: isActive
            ? "drop-shadow(0 8px 12px rgba(99,102,241,0.45))"
            : "drop-shadow(2px 2px 4px rgba(0,0,0,0.22))",
          transition: isActive ? "filter 0.1s ease" : "filter 0.4s ease",
          animation: imgAnim,
        }}
      />
    </>
  );
}
