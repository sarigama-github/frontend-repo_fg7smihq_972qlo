import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Autonomous Rover UI",
    desc: "Realtime telemetry dashboard and control interface for a small rover.",
    tags: ["React", "WebSockets", "Three.js"],
    link: "#",
  },
  {
    title: "Vision Toolkit",
    desc: "Reusable components for object detection and tracking pipelines.",
    tags: ["Python", "OpenCV", "FastAPI"],
    link: "#",
  },
  {
    title: "Robotic Arm Planner",
    desc: "Web visualizer for IK solutions and motion planning experiments.",
    tags: ["TypeScript", "D3", "Math"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-gradient-to-b from-white to-sky-50">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(700px_300px_at_20%_40%,rgba(14,165,233,0.12),transparent)]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Selected Projects</h2>
            <p className="mt-2 text-slate-600">A few highlights from recent work.</p>
          </div>
          <motion.a whileHover={{ y: -2 }} href="#" className="hidden sm:inline-flex rounded-xl border border-sky-400/40 px-4 py-2 text-sky-700 bg-white/60 backdrop-blur hover:border-sky-500/60">See all</motion.a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <motion.a
              key={p.title}
              href={p.link}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, boxShadow: "0 25px 60px rgba(2,132,199,0.18)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4 }}
              className="group relative overflow-hidden rounded-2xl border border-sky-400/30 bg-white/60 p-6 backdrop-blur hover:border-sky-500/50"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-sky-400/10 to-blue-600/10 blur-2xl" />
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-semibold text-slate-900">{p.title}</h3>
                <ExternalLink className="h-5 w-5 text-sky-700 opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <p className="mt-2 text-slate-700">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-sky-400/40 px-3 py-1 text-xs text-sky-700 bg-white/60">{t}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
