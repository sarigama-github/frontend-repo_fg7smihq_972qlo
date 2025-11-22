import { Cpu, Code2, Bot, Sparkles, Database, Wrench } from "lucide-react";
import { motion } from "framer-motion";

const skills = [
  { icon: Cpu, title: "AI & Robotics", items: ["Computer Vision", "Path Planning", "ROS Basics"] },
  { icon: Code2, title: "Frontend", items: ["React", "TailwindCSS", "Framer Motion"] },
  { icon: Database, title: "Backend", items: ["FastAPI", "Node.js", "MongoDB"] },
  { icon: Bot, title: "Automation", items: ["Python", "Scripting", "CI/CD"] },
  { icon: Wrench, title: "Tooling", items: ["Git", "Docker", "Testing"] },
  { icon: Sparkles, title: "Design", items: ["UI/UX", "Prototyping", "Accessibility"] },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 bg-gradient-to-b from-sky-50 to-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_300px_at_80%_20%,rgba(14,165,233,0.12),transparent)]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Core Skills</h2>
          <p className="mt-2 text-slate-600">A streamlined toolkit for building futuristic experiences.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map(({ icon: Icon, title, items }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, boxShadow: "0 25px 60px rgba(2,132,199,0.2)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4 }}
              className="group rounded-2xl border border-sky-400/30 bg-white/60 p-6 backdrop-blur hover:border-sky-500/50"
            >
              <div className="mb-4 flex items-center gap-3">
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.05 }}
                  className="h-10 w-10 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 text-white flex items-center justify-center shadow-[0_0_25px_rgba(2,132,199,0.35)]"
                >
                  <Icon className="h-5 w-5" />
                </motion.div>
                <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              </div>
              <ul className="space-y-2 text-slate-700">
                {items.map((i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
                    {i}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
