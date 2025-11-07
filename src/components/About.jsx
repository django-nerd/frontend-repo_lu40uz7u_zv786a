import { motion } from 'framer-motion';

export default function About({ lang = 'en' }) {
  const t = {
    en: {
      title: 'Built by Visionaries, Powered by AI.',
      desc:
        'Founded by Javier Regan — an AI filmmaker and creative director — STUDIO AI BY JR. helps brands rise to global-level visuals through next-gen storytelling. We craft cinematic ads, short films, and brand campaigns that feel inevitable and iconic.',
    },
    id: {
      title: 'Dibangun oleh Visioner, Digerakkan oleh AI.',
      desc:
        'Didirikan oleh Javier Regan — AI filmmaker dan creative director — STUDIO AI BY JR. membantu brand mencapai visual kelas dunia melalui storytelling generasi berikutnya. Kami membuat iklan sinematik, film pendek, dan kampanye brand yang terasa ikonik dan tak terelakkan.',
    },
  }[lang];

  return (
    <section className="relative w-full bg-[#0b0b0f] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(168,85,247,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-5xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-2xl font-semibold sm:text-3xl"
        >
          {t.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-5 max-w-3xl text-slate-300"
        >
          {t.desc}
        </motion.p>
      </div>
    </section>
  );
}
