"use client";
import { useCallback, useEffect, useState, type ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import { useReducedMotion } from "framer-motion";
export function Carousel({
  children,
  label,
  variant = "single",
  autoplay = false,
}: {
  children: ReactNode[];
  label: string;
  variant?: "single" | "cards" | "deliverables";
  autoplay?: boolean;
}) {
  const [ref, api] = useEmblaCarousel({ align: "start", loop: false });
  const [index, setIndex] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [visible, setVisible] = useState(true);
  const reduced = useReducedMotion();
  const sync = useCallback(() => {
    if (api) {
      setIndex(api.selectedScrollSnap());
      setSnaps(api.scrollSnapList());
    }
  }, [api]);
  useEffect(() => {
    if (!api) return;
    sync();
    api.on("select", sync).on("reInit", sync);
    return () => {
      api.off("select", sync).off("reInit", sync);
    };
  }, [api, sync]);
  useEffect(() => {
    const update = () => setVisible(!document.hidden);
    update();
    document.addEventListener("visibilitychange", update);
    return () => document.removeEventListener("visibilitychange", update);
  }, []);
  useEffect(() => {
    if (!api || !autoplay || paused || hovered || focused || reduced || !visible) return;
    const timer = setInterval(() => {
      if (api.canScrollNext()) api.scrollNext();
      else api.scrollTo(0);
    }, 6500);
    return () => clearInterval(timer);
  }, [api, autoplay, paused, hovered, focused, reduced, visible]);
  return (
    <div
      className={`carousel carousel--${variant}`}
      role="region"
      aria-roledescription="carrossel"
      aria-label={label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setFocused(false);
      }}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") {
          e.preventDefault();
          api?.scrollNext();
        }
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          api?.scrollPrev();
        }
      }}
    >
      <div className="carousel-viewport" ref={ref}>
        <div className="carousel-track">
          {children.map((child, i) => (
            <div
              className="carousel-slide"
              key={i}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} de ${children.length}`}
            >
              {child}
            </div>
          ))}
        </div>
      </div>
      <div className="carousel-controls">
        <div
          className="carousel-count"
          aria-live={autoplay && !paused && !reduced ? "off" : "polite"}
        >
          {" "}
          {String(index + 1).padStart(2, "0")}{" "}
          <span>/ {String(snaps.length || children.length).padStart(2, "0")}</span>
        </div>
        <div className="carousel-actions">
          {autoplay && !reduced && (
            <button
              className="icon-button"
              aria-label={
                paused ? "Retomar apresentação automática" : "Pausar apresentação automática"
              }
              onClick={() => setPaused((v) => !v)}
            >
              {paused ? <Play size={17} /> : <Pause size={17} />}
            </button>
          )}
          <button
            className="icon-button"
            aria-label="Slide anterior"
            disabled={index === 0}
            onClick={() => api?.scrollPrev()}
          >
            <ArrowLeft size={19} />
          </button>
          <button
            className="icon-button"
            aria-label="Próximo slide"
            disabled={index === snaps.length - 1}
            onClick={() => api?.scrollNext()}
          >
            <ArrowRight size={19} />
          </button>
        </div>
      </div>
    </div>
  );
}
