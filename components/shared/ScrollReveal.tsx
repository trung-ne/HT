"use client";
import { useEffect, useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3 | 4;
  threshold?: number;
};

export function ScrollReveal({ children, className = "", delay = 0, threshold = 0.12 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("is-visible"); observer.disconnect(); } },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const delayClass = delay ? ` c-reveal--delay-${delay}` : "";
  return (
    <div ref={ref} className={`c-reveal${delayClass}${className ? ` ${className}` : ""}`}>
      {children}
    </div>
  );
}

