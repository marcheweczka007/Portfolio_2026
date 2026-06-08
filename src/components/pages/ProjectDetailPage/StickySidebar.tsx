import React, { useEffect, useRef } from "react";

interface StickySidebarProps {
  children: React.ReactNode;
  className?: string;
  /** Offset from viewport top (px). Matches top-40 / nav clearance. */
  stickyTop?: number;
}

export function StickySidebar({
  children,
  className = "hidden xl:block w-48 flex-shrink-0",
  stickyTop = 160,
}: StickySidebarProps) {
  const asideRef = useRef<HTMLElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const aside = asideRef.current;
    const inner = innerRef.current;
    if (!aside || !inner) return;

    const clearStyles = () => {
      inner.style.position = "";
      inner.style.top = "";
      inner.style.left = "";
      inner.style.width = "";
    };

    const updatePosition = () => {
      if (window.innerWidth < 1280) {
        clearStyles();
        return;
      }

      const rect = aside.getBoundingClientRect();
      const innerHeight = inner.offsetHeight;

      if (rect.top >= stickyTop) {
        inner.style.position = "relative";
        inner.style.top = "0";
        inner.style.left = "0";
        inner.style.width = "100%";
      } else if (rect.bottom <= stickyTop + innerHeight) {
        inner.style.position = "absolute";
        inner.style.top = `${aside.offsetHeight - innerHeight}px`;
        inner.style.left = "0";
        inner.style.width = "100%";
      } else {
        inner.style.position = "fixed";
        inner.style.top = `${stickyTop}px`;
        inner.style.left = `${rect.left}px`;
        inner.style.width = `${rect.width}px`;
      }
    };

    updatePosition();
    window.addEventListener("scroll", updatePosition, { passive: true });
    window.addEventListener("resize", updatePosition);

    const observer = new ResizeObserver(updatePosition);
    observer.observe(aside);

    return () => {
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
      observer.disconnect();
      clearStyles();
    };
  }, [stickyTop]);

  return (
    <aside ref={asideRef} className={`${className} relative`}>
      <div
        ref={innerRef}
        className="z-30 max-h-[calc(100vh-11rem)] overflow-y-auto"
      >
        {children}
      </div>
    </aside>
  );
}
