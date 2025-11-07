import { motion } from 'framer-motion';
import { Film, Sparkles, Rocket, Palette } from 'lucide-react';

const servicesEN = [
  { icon: Film, title: 'AI Ad Production', description: 'Concept-to-delivery cinematic ads crafted with generative AI pipelines.' },
  { icon: Sparkles, title: 'AI Short Film Creation', description: 'Original short films blending narrative, design, and machine imagination.' },
  { icon: Palette, title: 'Brand Story Visuals', description: 'Art-directed visuals that make your brand feel iconic and inevitable.' },
  { icon: Rocket, title: 'Creative Campaign Direction', description: 'End-to-end creative leadership for viral, premium, and on-brand campaigns.' },
];

const servicesID = [
  { icon: Film, title: 'Produksi Iklan AI', description: 'Iklan sinematik dari konsep hingga rilis, dibuat dengan pipeline AI generatif.' },
  { icon: Sparkles, title: 'Pembuatan Film Pendek AI', description: 'Film pendek orisinal yang memadukan narasi, desain, dan imajinasi mesin.' },
  { icon: Palette, title: 'Visual Cerita Brand', description: 'Visual berarahan seni yang membuat brand terasa ikonik dan kuat.' },
  { icon: Rocket, title: 'Creative Campaign Direction', description: 'Kepemimpinan kreatif end-to-end untuk kampanye viral, premium, dan on-brand.' },
];

export default function Services({ lang = 'en' }) {
  const t = {
    en: { title: 'Services', list: servicesEN },
    id: { title: 'Layanan', list: servicesID },
  }[lang];

  return (
    <section className="relative w-full bg-[#0b0b0f] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-2xl font-semibold sm:text-3xl"
        >
          {t.title}
        </motion.h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.list.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.05 * idx }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition hover:border-white/20 hover:bg-white/10 hover:shadow-[0_0_32px_rgba(99,102,241,0.25)]"
            >
              <div className="flex items-center gap-3">
                <s.icon className="h-5 w-5 text-slate-200" />
                <h3 className="text-base font-medium">{s.title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-300">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
