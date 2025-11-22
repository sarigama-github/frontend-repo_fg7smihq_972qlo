import { Menu, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-6 flex items-center justify-between rounded-2xl border border-cyan-400/30 bg-white/60 backdrop-blur-xl p-3 shadow-[0_10px_30px_rgba(59,130,246,0.25)]"
        >
          <div className="flex items-center gap-3">
            <motion.div
              whileHover={{ rotate: 8, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="h-9 w-9 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center text-white shadow-[0_0_30px_rgba(59,130,246,0.5)]"
            >
              <span className="font-black">R</span>
            </motion.div>
            <span className="font-semibold tracking-wide text-slate-800">Robotic Portfolio</span>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {[
              { label: "About", href: "#about" },
              { label: "Skills", href: "#skills" },
              { label: "Projects", href: "#projects" },
              { label: "Contact", href: "#contact" },
            ].map((item) => (
              <motion.a
                whileHover={{ y: -2 }}
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-sm text-slate-700 hover:text-sky-700 transition-colors"
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <motion.a
              whileHover={{ scale: 1.15, rotate: -6 }}
              href="https://github.com/"
              target="_blank"
              className="p-2 rounded-lg border border-cyan-400/30 text-slate-700 hover:text-sky-700 hover:border-sky-400/50 transition-colors bg-white/40"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.15, rotate: 6 }}
              href="https://linkedin.com/"
              target="_blank"
              className="p-2 rounded-lg border border-cyan-400/30 text-slate-700 hover:text-sky-700 hover:border-sky-400/50 transition-colors bg-white/40"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.15 }}
              href="#contact"
              className="p-2 rounded-lg border border-cyan-400/30 text-slate-700 hover:text-sky-700 hover:border-sky-400/50 transition-colors bg-white/40"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </motion.a>
          </div>

          <button className="md:hidden p-2 rounded-lg border border-cyan-400/30 text-slate-700 bg-white/60">
            <Menu className="h-5 w-5" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}
