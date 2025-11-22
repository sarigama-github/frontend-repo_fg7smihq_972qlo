import { motion } from "framer-motion";

// Animated floating blobs background with soft light-blue glow
export default function Background() {
  const blobs = [
    { size: 520, x: -20, y: -10, from: "rgba(56,189,248,0.18)", to: "rgba(99,102,241,0.14)", delay: 0 },
    { size: 420, x: 70, y: 10, from: "rgba(59,130,246,0.18)", to: "rgba(56,189,248,0.14)", delay: 2 },
    { size: 360, x: 10, y: 60, from: "rgba(20,184,166,0.16)", to: "rgba(59,130,246,0.12)", delay: 1.2 },
  ];

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(14,165,233,0.25),transparent),radial-gradient(900px_500px_at_110%_10%,rgba(99,102,241,0.18),transparent)]" />
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          initial={{ x: `${b.x}%`, y: `${b.y}%` }}
          animate={{
            x: [`${b.x}%`, `${b.x + 5}%`, `${b.x - 4}%`, `${b.x}%`],
            y: [`${b.y}%`, `${b.y - 6}%`, `${b.y + 8}%`, `${b.y}%`],
          }}
          transition={{ duration: 18 + i * 4, repeat: Infinity, ease: "easeInOut", delay: b.delay }}
          style={{
            width: b.size,
            height: b.size,
            background: `radial-gradient(circle at 30% 30%, ${b.from}, ${b.to})`,
            filter: "blur(45px)",
          }}
          className="absolute rounded-full"
        />
      ))}
    </div>
  );
}
