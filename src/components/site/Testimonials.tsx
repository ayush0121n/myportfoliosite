import { motion } from "framer-motion";

const certs = [
  { issuer: "Oracle University", title: "OCI 2025 AI Foundations Associate", date: "Oct 2025" },
  { issuer: "Oracle University", title: "OCI 2025 Data Science Professional", date: "Oct 2025" },
  { issuer: "Deloitte / Forage", title: "Australia Technology Job Simulation", date: "Dec 2025" },
  { issuer: "nasscom FutureSkills", title: "Experiential Learning · NSQF L5 (92/100)", date: "Mar 2026" },
  { issuer: "Infosys Springboard", title: "Full Stack Java Development", date: "May 2026" },
  { issuer: "IBM SkillsBuild", title: "LLMs + AI Fundamentals", date: "2025–26" },
];

export function Testimonials() {
  return (
    <section className="px-6 md:px-10 py-24 md:py-40 border-t border-border">
      <div className="flex items-end justify-between mb-16">
        <h2 className="font-display text-[clamp(2.5rem,6vw,6rem)] max-w-4xl">
          Certified <span className="text-flame italic">across the stack.</span>
        </h2>
        <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">(Certifications)</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {certs.map((t, i) => (
          <motion.figure
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.7 }}
            className="border border-border p-8 flex flex-col justify-between min-h-[220px] bg-card"
          >
            <span className="text-xs uppercase tracking-[0.25em] text-flame">{t.issuer}</span>
            <div>
              <h3 className="font-display text-2xl md:text-3xl mt-6">{t.title}</h3>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-3">{t.date}</div>
            </div>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
