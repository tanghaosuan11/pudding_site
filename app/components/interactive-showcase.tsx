"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type InteractiveLabels = {
  title: string;
  videoPlaceholder: string;
  petHint: string;
  greeting: string;
  translationTitle: string;
  translationSource: string;
  translationResult: string;
  pomodoroIdle: string;
  pomodoroActive: string;
  pomodoroHint: string;
};

export function InteractiveShowcase({ labels }: { labels: InteractiveLabels }) {
  const areaRef = useRef<HTMLDivElement>(null);
  const hideTimerRef = useRef<number | null>(null);
  const greetingTimerRef = useRef<number | null>(null);
  const blinkTimerRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);
  const wanderTimerRef = useRef<number | null>(null);
  const inactiveAtRef = useRef<number>(0);
  const speakCooldownAtRef = useRef<number>(0);
  const posRef = useRef({ x: 24, y: 56 });
  const velRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 24, y: 56 });
  const [petPos, setPetPos] = useState({ x: 24, y: 56 });
  const [petBlink, setPetBlink] = useState(false);
  const [petGreeting, setPetGreeting] = useState(false);
  const [translated, setTranslated] = useState(false);
  const [pomodoroActive, setPomodoroActive] = useState(false);
  const [showBigPet, setShowBigPet] = useState(false);

  useEffect(() => {
    const timer = window.setInterval(() => setTranslated((v) => !v), 1700);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    inactiveAtRef.current = Date.now();

    const step = () => {
      const area = areaRef.current;
      if (area) {
        const width = area.clientWidth;
        const height = area.clientHeight;

        if (Date.now() - inactiveAtRef.current > 1200) {
          if (wanderTimerRef.current === null) {
            wanderTimerRef.current = window.setTimeout(() => {
              targetRef.current = {
                x: Math.random() * Math.max(20, width - 36),
                y: Math.random() * Math.max(20, height - 36),
              };
              wanderTimerRef.current = null;
            }, 800 + Math.random() * 900);
          }
        } else if (wanderTimerRef.current !== null) {
          window.clearTimeout(wanderTimerRef.current);
          wanderTimerRef.current = null;
        }

        const stiffness = 0.11;
        const damping = 0.82;
        velRef.current.x += (targetRef.current.x - posRef.current.x) * stiffness;
        velRef.current.y += (targetRef.current.y - posRef.current.y) * stiffness;
        velRef.current.x *= damping;
        velRef.current.y *= damping;

        posRef.current.x = Math.max(8, Math.min(width - 36, posRef.current.x + velRef.current.x));
        posRef.current.y = Math.max(8, Math.min(height - 36, posRef.current.y + velRef.current.y));
        setPetPos({ x: posRef.current.x, y: posRef.current.y });
      }
      rafRef.current = window.requestAnimationFrame(step);
    };
    rafRef.current = window.requestAnimationFrame(step);

    const blinkLoop = () => {
      setPetBlink(true);
      window.setTimeout(() => setPetBlink(false), 180);
      blinkTimerRef.current = window.setTimeout(blinkLoop, 1800 + Math.random() * 2200);
    };
    blinkTimerRef.current = window.setTimeout(blinkLoop, 1400);

    return () => {
      if (hideTimerRef.current !== null) {
        window.clearTimeout(hideTimerRef.current);
      }
      if (greetingTimerRef.current !== null) {
        window.clearTimeout(greetingTimerRef.current);
      }
      if (blinkTimerRef.current !== null) {
        window.clearTimeout(blinkTimerRef.current);
      }
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
      }
      if (wanderTimerRef.current !== null) {
        window.clearTimeout(wanderTimerRef.current);
      }
    };
  }, []);

  const bubbleText = useMemo(
    () => (translated ? labels.translationResult : labels.translationSource),
    [translated, labels.translationResult, labels.translationSource],
  );

  return (
    <section className="pet-card space-y-4 rounded-3xl p-5">
      <div className="flex items-center justify-between">
        <h3 className="pet-title text-xl font-medium text-slate-900">{labels.title}</h3>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="pet-card relative rounded-2xl p-4">
          <p className="text-sm font-medium text-indigo-700">{labels.videoPlaceholder}</p>
          <div className="mt-3 flex h-36 items-center justify-center rounded-xl border border-dashed border-indigo-200 bg-indigo-50/60 text-xs text-slate-600">
            16:9 Demo Video Placeholder
          </div>
        </div>

        <div className="pet-card rounded-2xl p-4">
          <p className="text-sm font-medium text-indigo-700">{labels.petHint}</p>
          <div
            ref={areaRef}
            className="relative mt-3 h-36 overflow-hidden rounded-xl border border-indigo-100 bg-white"
            onMouseMove={(event) => {
              const area = areaRef.current;
              if (!area) return;
              const rect = area.getBoundingClientRect();
              const x = Math.max(10, Math.min(event.clientX - rect.left - 18, rect.width - 36));
              const y = Math.max(10, Math.min(event.clientY - rect.top - 18, rect.height - 36));
              targetRef.current = { x, y };
              inactiveAtRef.current = Date.now();
            }}
            onMouseLeave={() => {
              inactiveAtRef.current = Date.now() - 2000;
            }}
          >
            {petGreeting ? (
              <p className="pet-bubble absolute left-2 top-2 z-10 px-2 py-1 text-[11px]">
                {labels.greeting}
              </p>
            ) : null}
            <button
              type="button"
              className={`absolute transition-all duration-150 ${petBlink ? "pet-blink" : ""}`}
              style={{ left: petPos.x, top: petPos.y }}
              onClick={() => {
                const now = Date.now();
                if (now - speakCooldownAtRef.current < 1200) return;
                speakCooldownAtRef.current = now;
                setPetBlink(true);
                setPetGreeting(true);
                window.setTimeout(() => setPetBlink(false), 220);
                if (greetingTimerRef.current !== null) {
                  window.clearTimeout(greetingTimerRef.current);
                }
                greetingTimerRef.current = window.setTimeout(() => setPetGreeting(false), 1300);
              }}
            >
              <Image
                src="/images/doge_normal.webp"
                alt="interactive pet"
                width={36}
                height={36}
                className="h-9 w-9"
              />
            </button>
          </div>
        </div>

        <div className="pet-card rounded-2xl p-4">
          <p className="text-sm font-medium text-indigo-700">{labels.translationTitle}</p>
          <div className="mt-3 space-y-2 rounded-xl border border-indigo-100 bg-white p-3">
            <div className="h-2 w-24 rounded bg-indigo-100" />
            <div className={`pet-bubble px-3 py-2 text-sm transition-all duration-500 ${translated ? "translate-x-1 bg-indigo-100" : ""}`}>
              {bubbleText}
            </div>
          </div>
          <button
            type="button"
            className="pet-btn-primary mt-3 rounded-full px-4 py-2 text-xs font-semibold"
            onClick={() => {
              setPomodoroActive(true);
              setShowBigPet(true);
              if (hideTimerRef.current !== null) {
                window.clearTimeout(hideTimerRef.current);
              }
              hideTimerRef.current = window.setTimeout(() => {
                setShowBigPet(false);
                setPomodoroActive(false);
              }, 2300);
            }}
          >
            {pomodoroActive ? labels.pomodoroActive : labels.pomodoroIdle}
          </button>
          <p className="mt-2 text-xs text-slate-500">{labels.pomodoroHint}</p>
          {showBigPet ? (
            <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center rounded-2xl bg-white/70 backdrop-blur-sm">
              <Image
                src="/images/doge_normal.webp"
                alt="big pet"
                width={130}
                height={130}
                className="pet-pop h-[130px] w-[130px]"
              />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
