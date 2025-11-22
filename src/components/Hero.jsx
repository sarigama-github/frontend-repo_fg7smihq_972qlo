import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-28 overflow-hidden">
      {/* Running animated background hue */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-50 via-white to-sky-50" />

      {/* Spline scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Geb1kGWmIba9zPiH/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Light blue overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-sky-100/80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_300px_at_20%_20%,rgba(14,165,233,0.20),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-8 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-white/60 px-3 py-1 text-xs text-sky-700 backdrop-blur"
          >
            <motion.div className="h-1.5 w-1.5 rounded-full bg-sky-500" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1.6 }} />
            Futuristic • Robotic • Portfolio
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-900"
          >
            Showcasing Vision in Robotics & Code
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-lg sm:text-xl text-slate-600 max-w-xl"
          >
            I build immersive, high-performance interfaces and intelligent systems. Explore my skills, selected projects, and how I can help your next mission.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="flex gap-4"
          >
            <motion.a
              whileHover={{ y: -3, boxShadow: '0 15px 40px rgba(2,132,199,0.35)' }}
              whileTap={{ scale: 0.98 }}
              href="#projects"
              className="rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 px-5 py-3 font-semibold text-white"
            >
              View Projects
            </motion.a>
            <motion.a
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="rounded-xl border border-sky-400/40 px-5 py-3 font-semibold text-sky-700 bg-white/60 backdrop-blur hover:border-sky-500/60"
            >
              Contact Me
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
