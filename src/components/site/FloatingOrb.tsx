import { motion, useScroll, useTransform } from "framer-motion";
import orb from "@/assets/orb.png";

export function FloatingOrb({ className = "" }: { className?: string }) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <motion.img
      src={orb}
      alt=""
      aria-hidden
      style={{ y, rotate, willChange: "transform" }}
      animate={{ scale: [1, 1.08, 1] }}
      transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      className={`pointer-events-none select-none drop-shadow-[0_40px_80px_rgba(255,90,30,0.4)] ${className}`}
    />
  );
}
