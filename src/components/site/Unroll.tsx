import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, type ReactNode } from "react";

/** Parallax unroll wrapper — element scales/unrolls as you scroll into view. */
export function Unroll({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 80, damping: 20, mass: 0.4 });
  const scaleY = useTransform(smooth, [0, 0.5, 1], [0.4, 1, 1]);
  const rotateX = useTransform(smooth, [0, 0.5, 1], [55, 0, -10]);
  const opacity = useTransform(smooth, [0, 0.3, 1], [0, 1, 1]);
  const y = useTransform(smooth, [0, 1], ["10%", "-10%"]);

  return (
    <div ref={ref} className={className} style={{ perspective: 1400 }}>
      <motion.div
        style={{ scaleY, rotateX, opacity, y, transformOrigin: "top center", willChange: "transform" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
