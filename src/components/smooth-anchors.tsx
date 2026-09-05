"use client";

import { useEffect } from "react";

export function SmoothAnchors() {
  useEffect(() => {
    let rafId: number | null = null;

    const cleanup = () => {
      window.removeEventListener("wheel", onUserScroll);
      window.removeEventListener("touchstart", onUserScroll);
      window.removeEventListener("keydown", onUserScroll);
    };

    const cancel = () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
      cleanup();
    };

    const onUserScroll = () => cancel();

    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest?.<HTMLAnchorElement>('a[href^="#"]');
      if (!anchor) return;
      const id = anchor.getAttribute("href")!;
      const el = document.querySelector<HTMLElement>(id);
      if (!el) return;
      e.preventDefault();

      cancel();
      const startY = window.scrollY;
      const idTop = id === "#top";
      const targetY = idTop
        ? 0
        : startY + el.getBoundingClientRect().top;
      const maxY = document.documentElement.scrollHeight - window.innerHeight;
      const endY = Math.max(0, Math.min(targetY, maxY));
      const dist = endY - startY;
      if (Math.abs(dist) < 2) return;

      const duration = Math.min(1000, Math.max(300, Math.abs(dist) * 0.3));
      const start = performance.now();

      window.addEventListener("wheel", onUserScroll, { passive: true });
      window.addEventListener("touchstart", onUserScroll, { passive: true });
      window.addEventListener("keydown", onUserScroll, { passive: true });

      const step = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        window.scrollTo(0, startY + dist * eased);
        if (t < 1) rafId = requestAnimationFrame(step);
        else {
          rafId = null;
          cleanup();
        }
      };
      rafId = requestAnimationFrame(step);
      history.replaceState(null, "", id);
    };

    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
      cancel();
    };
  }, []);

  return null;
}
