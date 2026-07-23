"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, type ReactNode } from "react";

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Remove class, force reflow, re-add to restart animation
    el.classList.remove("page-enter");
    void el.offsetHeight;
    el.classList.add("page-enter");
    const t = setTimeout(() => el.classList.remove("page-enter"), 500);
    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <div ref={ref} className="page-transition page-enter">
      {children}
    </div>
  );
}

