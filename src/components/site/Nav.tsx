import { motion } from "framer-motion";
import { Magnetic } from "./Magnetic";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 inset-x-0 z-50 px-6 md:px-10 py-5 flex items-center justify-between mix-blend-difference text-foreground"
    >
      <Magnetic>
        <a href="#" className="font-display text-2xl tracking-tight inline-block">AYUSH<sup className="text-xs align-super">®</sup></a>
      </Magnetic>
      <ul className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.2em]">
        {links.map((l) => (
          <li key={l.href}>
            <Magnetic strength={0.4}>
              <a href={l.href} className="relative inline-block hover:text-flame transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-flame hover:after:w-full after:transition-all after:duration-500">
                {l.label}
              </a>
            </Magnetic>
          </li>
        ))}
      </ul>
      <Magnetic strength={0.5}>
        <a href="mailto:ayushgnarkhede0121@gmail.com" className="text-xs uppercase tracking-[0.2em] border border-current px-4 py-2 inline-block hover:bg-flame hover:text-ink hover:border-flame transition-colors">
          Hire me
        </a>
      </Magnetic>
    </motion.nav>
  );
}
