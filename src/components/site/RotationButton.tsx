import { motion } from "framer-motion";

interface Props {
  text?: string;
  href?: string;
  label?: string;
}

export function RotationButton({
  text = "AVAILABLE FOR HIRE • 2026 • ",
  href = "#contact",
  label = "Hire",
}: Props) {
  const chars = text.split("");
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="relative inline-flex items-center justify-center size-40 md:size-48 rounded-full bg-flame text-ink group"
      style={{ willChange: "transform" }}
    >
      <motion.svg
        viewBox="0 0 200 200"
        className="absolute inset-0 size-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 14, ease: "linear" }}
      >
        <defs>
          <path
            id="circlePath"
            d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"
          />
        </defs>
        <text className="text-[14px] uppercase tracking-[0.3em] fill-current font-display">
          <textPath href="#circlePath">{chars.join("").repeat(2)}</textPath>
        </text>
      </motion.svg>
      <motion.span
        className="font-display text-3xl"
        animate={{ rotate: [0, 12, -12, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      >
        ↗
      </motion.span>
    </motion.a>
  );
}
