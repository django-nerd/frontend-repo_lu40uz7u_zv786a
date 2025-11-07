import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const wa1 = 'https://wa.me/6281929163094?text=Halo%20STUDIO%20AI%20BY%20JR.%20Saya%20ingin%20membuat%20project%20iklan%2Fvideo%20berbasis%20AI.%20Bisa%20dibantu%3F';
const wa2 = 'https://wa.me/6285761541984?text=Halo%20STUDIO%20AI%20BY%20JR.%20Saya%20ingin%20membuat%20project%20iklan%2Fvideo%20berbasis%20AI.%20Bisa%20dibantu%3F';
const wa3 = 'https://wa.me/6282166575377?text=Halo%20STUDIO%20AI%20BY%20JR.%20Saya%20ingin%20membuat%20project%20iklan%2Fvideo%20berbasis%20AI.%20Bisa%20dibantu%3F';

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-[#0b0b0f] text-white">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(128,90,213,0.25),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(56,189,248,0.15),transparent_55%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-[100svh] max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-3 text-sm tracking-[0.25em] text-slate-300/90"
        >
          STUDIO AI BY JR.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mx-auto max-w-4xl text-balance text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl"
        >
          AI-Driven Creativity for Brands That Dare to Stand Out.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="mx-auto mt-5 max-w-2xl text-pretty text-base text-slate-300 sm:text-lg"
        >
          We turn your ideas into cinematic ads, short films, and viral campaigns powered by Artificial Intelligence.
        </motion.p>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-8"
        >
          <a
            href={wa1}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-3 text-base font-medium backdrop-blur-md transition hover:bg-white/20 hover:shadow-[0_0_30px_rgba(168,85,247,0.35)]"
          >
            💬 Chat With Studio AI
          </a>
        </motion.div>

        {/* High-priority Admin buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
        >
          <a
            href={wa1}
            target="_blank"
            rel="noreferrer noopener"
            className="group inline-flex w-full max-w-xs items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur-xl transition hover:border-white/20 hover:bg-white/10 hover:shadow-[0_0_32px_rgba(99,102,241,0.45)] sm:text-base"
          >
            💬 Chat Admin 1
          </a>
          <a
            href={wa2}
            target="_blank"
            rel="noreferrer noopener"
            className="group inline-flex w-full max-w-xs items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur-xl transition hover:border-white/20 hover:bg-white/10 hover:shadow-[0_0_32px_rgba(99,102,241,0.45)] sm:text-base"
          >
            💬 Chat Admin 2
          </a>
          <a
            href={wa3}
            target="_blank"
            rel="noreferrer noopener"
            className="group inline-flex w-full max-w-xs items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur-xl transition hover:border-white/20 hover:bg-white/10 hover:shadow-[0_0_32px_rgba(99,102,241,0.45)] sm:text-base"
          >
            💬 Chat Admin 3
          </a>
        </motion.div>
        <p className="mt-3 text-xs text-slate-300/80">We respond in minutes. Your brand deserves cinematic excellence.</p>
      </div>
    </section>
  );
}
