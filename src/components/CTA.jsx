import { motion } from 'framer-motion';

const wa1 = 'https://wa.me/6281929163094?text=Halo%20STUDIO%20AI%20BY%20JR.%20Saya%20ingin%20membuat%20project%20iklan%2Fvideo%20berbasis%20AI.%20Bisa%20dibantu%3F';
const wa2 = 'https://wa.me/6285761541984?text=Halo%20STUDIO%20AI%20BY%20JR.%20Saya%20ingin%20membuat%20project%20iklan%2Fvideo%20berbasis%20AI.%20Bisa%20dibantu%3F';
const wa3 = 'https://wa.me/6282166575377?text=Halo%20STUDIO%20AI%20BY%20JR.%20Saya%20ingin%20membuat%20project%20iklan%2Fvideo%20berbasis%20AI.%20Bisa%20dibantu%3F';

export default function CTA() {
  return (
    <section className="relative w-full bg-[#0b0b0f] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_60%)]" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-semibold sm:text-4xl"
        >
          Ready to make your brand legendary?
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
        >
          <a href={wa1} target="_blank" rel="noreferrer noopener" className="inline-flex w-full max-w-xs items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur-xl transition hover:border-white/20 hover:bg-white/10 hover:shadow-[0_0_32px_rgba(99,102,241,0.45)] sm:text-base">💬 Chat Admin 1</a>
          <a href={wa2} target="_blank" rel="noreferrer noopener" className="inline-flex w-full max-w-xs items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur-xl transition hover:border-white/20 hover:bg-white/10 hover:shadow-[0_0_32px_rgba(99,102,241,0.45)] sm:text-base">💬 Chat Admin 2</a>
          <a href={wa3} target="_blank" rel="noreferrer noopener" className="inline-flex w-full max-w-xs items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur-xl transition hover:border-white/20 hover:bg-white/10 hover:shadow-[0_0_32px_rgba(99,102,241,0.45)] sm:text-base">💬 Chat Admin 3</a>
        </motion.div>
        <p className="mt-3 text-xs text-slate-300/80">We respond in minutes. Your brand deserves cinematic excellence.</p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-10"
        >
          <a
            href={wa1}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-3 text-base font-medium backdrop-blur-md transition hover:bg-white/20 hover:shadow-[0_0_30px_rgba(168,85,247,0.35)]"
          >
            🚀 Let’s Talk on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
