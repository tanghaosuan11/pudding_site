"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { featureVisuals } from "@/app/lib/feature-visuals";
import type { FeatureSlug } from "@/app/lib/feature-pages-i18n";

export type FeatureOverviewItem = {
  slug: string;
  title: string;
  detail: string;
  longDetail: string;
  points: string[];
};

type FeatureOverviewProps = {
  cards: FeatureOverviewItem[];
  learnMore: string;
};

type Anchor = {
  slug: string;
  rect: DOMRect;
};

const POPOVER_W = 300;
const GAP = 10;

function computePos(rect: DOMRect, popoverH: number) {
  const vw = window.innerWidth;
  const pad = 12;

  const top = Math.max(pad, rect.top - popoverH - GAP);

  let left = rect.left + rect.width / 2 - POPOVER_W / 2;
  left = Math.max(pad, Math.min(left, vw - POPOVER_W - pad));

  const arrowLeft = rect.left + rect.width / 2 - left;

  return { top, left, arrowLeft };
}

export function FeatureOverview({ cards, learnMore }: FeatureOverviewProps) {
  const [anchor, setAnchor] = useState<Anchor | null>(null);
  const [pos, setPos] = useState<ReturnType<typeof computePos> | null>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Map<string, HTMLElement>>(new Map());

  const active = cards.find((card) => card.slug === anchor?.slug) ?? null;
  const visual = active ? featureVisuals[active.slug as FeatureSlug] ?? featureVisuals.pet : null;

  const dismiss = useCallback(() => setAnchor(null), []);

  const toggleCard = useCallback((slug: string, el: HTMLElement) => {
    setAnchor((prev) => (prev?.slug === slug ? null : { slug, rect: el.getBoundingClientRect() }));
  }, []);

  useLayoutEffect(() => {
    if (!anchor || !popoverRef.current) {
      setPos(null);
      return;
    }
    const run = () => {
      const h = popoverRef.current?.offsetHeight ?? 0;
      setPos(computePos(anchor.rect, h));
    };
    run();
    const ro = new ResizeObserver(run);
    ro.observe(popoverRef.current);
    return () => ro.disconnect();
  }, [anchor, active?.longDetail, active?.points]);

  useEffect(() => {
    if (!anchor) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };
    const onPointer = (e: MouseEvent) => {
      const t = e.target as Node;
      if (popoverRef.current?.contains(t)) return;
      if (cardRefs.current.get(anchor.slug)?.contains(t)) return;
      dismiss();
    };
    const onScroll = () => dismiss();

    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onPointer);
    window.addEventListener("scroll", onScroll, true);
    window.addEventListener("resize", dismiss);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onPointer);
      window.removeEventListener("scroll", onScroll, true);
      window.removeEventListener("resize", dismiss);
    };
  }, [anchor, dismiss]);

  return (
    <>
      <div className="grid gap-3 md:grid-cols-2">
        {cards.map((card) => {
          const cardVisual = featureVisuals[card.slug as FeatureSlug] ?? featureVisuals.pet;
          const isOpen = anchor?.slug === card.slug;
          return (
            <article
              key={card.slug}
              ref={(el) => {
                if (el) cardRefs.current.set(card.slug, el);
                else cardRefs.current.delete(card.slug);
              }}
              className={`pet-card pet-card-hover cursor-pointer p-5 transition-shadow ${cardVisual.cardClass} ${
                isOpen ? "ring-2 ring-[var(--pet-primary)]/35" : ""
              }`}
              onClick={(e) => toggleCard(card.slug, e.currentTarget)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggleCard(card.slug, e.currentTarget);
                }
              }}
              role="button"
              tabIndex={0}
              aria-expanded={isOpen}
            >
              <div className="flex items-start gap-3">
                <span className={`feature-icon feature-icon-sm ${cardVisual.iconBg}`} aria-hidden>
                  {cardVisual.emoji}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-semibold text-[var(--foreground)]">{card.title}</h3>
                  <p className="mt-1.5 text-sm text-[var(--muted)]">{card.detail}</p>
                  <span className="pet-link mt-3 inline-flex text-xs font-medium">{learnMore}</span>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {active && visual && anchor && typeof document !== "undefined"
        ? createPortal(
            <div
              ref={popoverRef}
              role="tooltip"
              className="feature-popover"
              style={{
                position: "fixed",
                top: pos?.top ?? anchor.rect.top - GAP,
                left: pos?.left ?? anchor.rect.left,
                width: POPOVER_W,
                zIndex: 60,
                visibility: pos ? "visible" : "hidden",
              }}
            >
              {pos ? (
                <span
                  className="feature-popover-arrow feature-popover-arrow-top"
                  style={{ left: pos.arrowLeft }}
                  aria-hidden
                />
              ) : null}
              <p className="text-sm font-medium text-[var(--foreground)]">{active.title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-[var(--muted)]">{active.longDetail}</p>
              <ul className="mt-2.5 space-y-1 border-t border-[var(--pet-border)] pt-2.5">
                {active.points.map((point) => (
                  <li key={point} className="flex gap-2 text-xs leading-relaxed text-[var(--muted)]">
                    <span className="mt-0.5 text-[var(--pet-primary-strong)]" aria-hidden>
                      ·
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
