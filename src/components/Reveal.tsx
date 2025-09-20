"use client";
import React, { ElementType, useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number; // ms
  id?: string;
};

export default function Reveal({ children, as: Tag = "div", className = "", delay = 0, id }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            // small delay support
            const t = setTimeout(() => setVisible(true), delay);
            return () => clearTimeout(t);
          }
        });
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <Tag
      ref={ref}
      id={id}
      className={`reveal translate-y-6 opacity-0 will-change-transform will-change-opacity ${
        visible ? "reveal-in" : ""
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
