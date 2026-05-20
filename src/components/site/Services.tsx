import { motion } from "framer-motion";
import { useState } from "react";

const skills = [
  { n: "01", title: "AI / Machine Learning", desc: "Production deep learning pipelines, transfer learning, model evaluation.", items: ["TensorFlow / Keras", "CNN · EfficientNetB0", "MobileNetV2", "Scikit-learn", "Computer Vision", "NLP & LLMs"] },
  { n: "02", title: "Full-Stack Engineering", desc: "End-to-end MERN platforms with auth, real-time, and CI/CD.", items: ["React 18/19 · TS", "Node · Express", "MongoDB · Mongoose", "REST · JWT", "Socket.IO", "Tailwind · Vite"] },
  { n: "03", title: "Languages & Core CS", desc: "Strong fundamentals across the stack.", items: ["Python · Java", "JavaScript / TS", "C++ · SQL", "DSA · OOP", "DBMS · OS", "System Design"] },
  { n: "04", title: "Cloud & DevOps", desc: "Ship to production with CI/CD on managed clouds.", items: ["Oracle Cloud (OCI)", "Vercel · Render", "Git / GitHub", "CI/CD Pipelines", "Postman · Colab", "Power BI · EDA"] },
];

export function Services() {
  const [open, setOpen] = useState(0);
  return (
    <section id="skills" className="px-6 md:px-10 py-24 md:py-40 border-t border-border">
      <div className="flex items-end justify-between mb-16">
        <h2 className="font-display text-[clamp(3rem,8vw,9rem)]">What I <br/><span className="text-flame italic">build with.</span></h2>
        <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">(Skills)</span>
      </div>

      <div className="border-t border-border">
        {skills.map((s, i) => {
          const isOpen = open === i;
          return (
            <div key={s.n} className="border-b border-border">
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="w-full flex items-center justify-between gap-6 py-8 md:py-10 text-left group"
              >
                <span className="text-sm text-muted-foreground tabular-nums w-12">{s.n}</span>
                <h3 className="flex-1 font-display text-3xl md:text-6xl group-hover:text-flame transition-colors">{s.title}</h3>
                <motion.span animate={{ rotate: isOpen ? 45 : 0 }} className="text-3xl md:text-5xl text-flame">+</motion.span>
              </button>
              <motion.div
                initial={false}
                animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="pb-10 pl-12 md:pl-20 grid md:grid-cols-2 gap-8">
                  <p className="text-base md:text-lg max-w-md">{s.desc}</p>
                  <ul className="grid grid-cols-2 gap-2 text-sm uppercase tracking-[0.15em] text-muted-foreground">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-center gap-2"><span className="size-1 bg-flame rounded-full" /> {it}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
