import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-sky-50 to-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Let’s build something</h2>
          <p className="mt-2 text-slate-600">Tell me about your idea and I’ll get back within 24 hours.</p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4 }}
          onSubmit={(e) => {
            e.preventDefault();
            const data = Object.fromEntries(new FormData(e.currentTarget).entries());
            alert(`Thanks ${data.name}! I will reach out at ${data.email}.`);
            e.currentTarget.reset();
          }}
          className="grid gap-4 sm:grid-cols-2"
        >
          <motion.input whileFocus={{ scale: 1.01 }} name="name" placeholder="Your name" required className="rounded-xl border border-sky-400/40 bg-white/60 p-3 text-slate-800 placeholder:text-slate-500 outline-none focus:border-sky-500" />
          <motion.input whileFocus={{ scale: 1.01 }} name="email" type="email" placeholder="Email address" required className="rounded-xl border border-sky-400/40 bg-white/60 p-3 text-slate-800 placeholder:text-slate-500 outline-none focus:border-sky-500" />
          <motion.textarea whileFocus={{ scale: 1.01 }} name="message" placeholder="Your message" rows="5" className="sm:col-span-2 rounded-xl border border-sky-400/40 bg-white/60 p-3 text-slate-800 placeholder:text-slate-500 outline-none focus:border-sky-500" />
          <div>
            <motion.button whileHover={{ y: -2, boxShadow: '0 15px 40px rgba(2,132,199,0.35)' }} whileTap={{ scale: 0.98 }} className="rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 px-5 py-3 font-semibold text-white">
              Send message
            </motion.button>
          </div>
        </motion.form>

        <p className="mt-6 text-xs text-slate-500">No spam. Your details are safe.</p>
      </div>
    </section>
  );
}
