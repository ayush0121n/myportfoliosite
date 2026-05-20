import { motion } from "framer-motion";

const items = [
  {
    n: "2027",
    title: "MCA — Artificial Intelligence",
    desc: "Sri Balaji University, Pune · CGPA 8.58 / 10 (expected).",
  },
  {
    n: "2026",
    title: "AI Research Intern",
    desc: "YuvaIntern (remote) — 6-week mentored ML capstone program.",
  },
  {
    n: "2026",
    title: "Intern · Cloud Counselage",
    desc: "240-hour Global Internship Program · Gift-A-Career Foundation.",
  },
  {
    n: "2025",
    title: "Student Council President",
    desc: "Sri Balaji University — leading 2000+ students, 5+ tech & cultural fests.",
  },
];

export function Process() {
  return (
    <section className="px-6 md:px-10 py-24 md:py-40 border-t border-border">
      <div className="flex items-end justify-between mb-16">
        <h2 className="font-display text-[clamp(3rem,8vw,9rem)]">
          Recent <br />
          <span className="text-flame italic">timeline.</span>
        </h2>
        <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          (Experience)
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-border">
        {items.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.7 }}
            className="bg-background p-8 min-h-[260px] flex flex-col justify-between"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-flame">
              {s.n}
            </span>
            <div>
              <h3 className="font-display text-3xl md:text-4xl">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
