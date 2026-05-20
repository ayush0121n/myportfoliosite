import { motion } from "framer-motion";
import { TiltCard } from "./TiltCard";
import { Unroll } from "./Unroll";
import malariascopeCover from "@/assets/malariascope_cover.png";
import estatexaiCover from "@/assets/estatexai_cover.png";
import proconnectCover from "@/assets/proconnect_cover.png";

const projects = [
  {
    n: "01",
    title: "MalariaScope",
    desc: "AI-powered malaria detection — 93% val accuracy, 0.97 ROC-AUC on 27,558 NIH blood-smear images.",
    tag: "Python · TensorFlow · Flask",
    img: malariascopeCover,
    href: "https://github.com/ayush0121n/malaria-detection",
  },
  {
    n: "02",
    title: "EstateXAI",
    desc: "AI-driven real estate & PG finder. MERN, role-based auth, 9 REST endpoints, geospatial filters.",
    tag: "MERN · JWT · Vercel",
    img: estatexaiCover,
    href: "https://estate-xai.vercel.app",
  },
  {
    n: "03",
    title: "ProConnect",
    desc: "Professional networking platform with real-time Socket.IO messaging and 20+ atomic-design components.",
    tag: "React 19 · TS · Socket.IO",
    img: proconnectCover,
    href: "https://github.com/ayush0121n/ai",
  },
];

export function Work() {
  return (
    <section
      id="work"
      className="px-6 md:px-10 py-24 md:py-40 border-t border-border"
    >
      <div className="flex items-end justify-between mb-16">
        <h2 className="font-display text-[clamp(3rem,8vw,9rem)]">
          Selected <span className="text-flame italic">work</span>
        </h2>
        <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          (03 / 2025)
        </span>
      </div>

      <Unroll>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.a
              key={p.n}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group block"
            >
              <TiltCard className="relative overflow-hidden aspect-[4/5] bg-muted">
                <motion.img
                  src={p.img}
                  alt={p.title}
                  width={1280}
                  height={1600}
                  loading="lazy"
                  className="size-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 left-4 text-xs uppercase tracking-[0.2em] text-bone mix-blend-difference">
                  {p.n}
                </div>
                <motion.div
                  className="absolute bottom-4 right-4 size-12 rounded-full bg-flame text-ink flex items-center justify-center opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0, rotate: -90 }}
                  whileHover={{ scale: 1.2 }}
                  animate={{ rotate: 0 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  ↗
                </motion.div>
              </TiltCard>
              <div className="mt-5 flex items-baseline justify-between gap-4">
                <h3 className="font-display text-3xl group-hover:text-flame transition-colors">
                  {p.title}
                </h3>
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground text-right">
                  {p.tag}
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            </motion.a>
          ))}
        </div>
      </Unroll>
    </section>
  );
}
