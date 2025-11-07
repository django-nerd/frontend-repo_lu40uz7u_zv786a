import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const wa1 = 'https://wa.me/6281929163094?text=Halo%20STUDIO%20AI%20BY%20JR.%20Saya%20ingin%20membuat%20project%20iklan%2Fvideo%20berbasis%20AI.%20Bisa%20dibantu%3F';
const wa2 = 'https://wa.me/6285761541984?text=Halo%20STUDIO%20AI%20BY%20JR.%20Saya%20ingin%20membuat%20project%20iklan%2Fvideo%20berbasis%20AI.%20Bisa%20dibantu%3F';
const wa3 = 'https://wa.me/6282166575377?text=Halo%20STUDIO%20AI%20BY%20JR.%20Saya%20ingin%20membuat%20project%20iklan%2Fvideo%20berbasis%20AI.%20Bisa%20dibantu%3F';

export default function Hero({ lang = 'en' }) {
  const t = {
    en: {
      kicker: 'STUDIO AI BY JR.',
      title: 'AI-Driven Creativity for Brands That Dare to Stand Out.',
      desc: 'We turn your ideas into cinematic ads, short films, and viral campaigns powered by Artificial Intelligence.',
      cta: '💬 Chat With Studio AI',
      admin1: '💬 Chat Admin 1',
      admin2: '💬 Chat Admin 2',
      admin3: '💬 Chat Admin 3',
      note: 'We respond in minutes. Your brand deserves cinematic excellence.',
    },
    id: {
      kicker: 'STUDIO AI BY JR.',
      title: 'Kreativitas Berbasis AI untuk Merek yang Berani Beda.',
      desc: 'Kami mengubah ide Anda menjadi iklan sinematik, film pendek, dan kampanye viral yang digerakkan oleh AI.',
      cta: '💬 Chat dengan Studio AI',
      admin1: '💬 Chat Admin 1',
      admin2: '💬 Chat Admin 2',
      admin3: '💬 Chat Admin 3',
      note: 'Kami merespons dalam hitungan menit. Merek Anda pantas mendapatkan kualitas sinematik.',
    },
  }[lang];

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-[#0b0b0f] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(128,90,213,0.25),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(56,189,248,0.15),transparent_55%)]" />

      <div className="relative z-10 mx-auto flex h-[100svh] max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-3 text-sm tracking-[0.25em] text-slate-300/90"
        >
          {t.kicker}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mx-auto max-w-4xl text-balance text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl"
        >
          {t.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="mx-auto mt-5 max-w-2xl text-pretty text-base text-slate-300 sm:text-lg"
        >
          {t.desc}
        </motion.p>

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
            {t.cta}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
        >
          <a href={wa1} target="_blank" rel="noreferrer noopener" className="group inline-flex w-full max-w-xs items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur-xl transition hover:border-white/20 hover:bg-white/10 hover:shadow-[0_0_32px_rgba(99,102,241,0.45)] sm:text-base">{t.admin1}</a>
          <a href={wa2} target="_blank" rel="noreferrer noopener" className="group inline-flex w-full max-w-xs items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur-xl transition hover:border-white/20 hover:bg-white/10 hover:shadow-[0_0_32px_rgba(99,102,241,0.45)] sm:text-base">{t.admin2}</a>
          <a href={wa3} target="_blank" rel="noreferrer noopener" className="group inline-flex w-full max-w-xs items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur-xl transition hover:border-white/20 hover:bg-white/10 hover:shadow-[0_0_32px_rgba(99,102,241,0.45)] sm:text-base">{t.admin3}</a>
        </motion.div>
        <p className="mt-3 text-xs text-slate-300/80">{t.note}</p>
      </div>
    </section>
  );
}
