import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** stagger index — adds a small transition delay */
  delay?: 0 | 1 | 2 | 3 | 4;
  id?: string;
}

/**
 * Fades + lifts content into view once it enters the viewport.
 * Respects prefers-reduced-motion via the global `.rv` styles.
 */
export function Reveal({ children, as, className = "", delay = 0, id }: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            obs.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      id={id}
      className={`rv${shown ? " in" : ""} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay * 0.09}s` } : undefined}
    >
      {children}
    </Tag>
  );
}
