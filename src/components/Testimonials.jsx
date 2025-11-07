import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Rina Putri',
    role: 'Brand Manager, Tokopedia',
    quoteEn: 'Studio AI delivered a stunning AI-driven ad that boosted our campaign CTR by 42%. The team is fast, visionary, and detail-obsessed.',
    quoteId: 'Studio AI menghasilkan iklan berbasis AI yang memukau dan meningkatkan CTR campaign kami hingga 42%. Timnya cepat, visioner, dan sangat detail.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'Arif Setiawan',
    role: 'Head of Creative, Gojek',
    quoteEn: 'They bring cinematic quality and AI innovation in one package. Our short film went viral in days.',
    quoteId: 'Mereka menghadirkan kualitas sinematik dan inovasi AI dalam satu paket. Short film kami viral dalam hitungan hari.',
    avatar: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'Maya Sasmita',
    role: 'Marketing Lead, Indomie',
    quoteEn: 'The brand visuals felt premium and inevitable. It moved the needle across our social channels.',
    quoteId: 'Visual brand kami terasa premium dan kuat. Dampaknya signifikan di seluruh kanal sosial.',
    avatar: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=400&auto=format&fit=crop',
  },
];

export default function Testimonials({ lang = 'en' }) {
  const t = {
    en: { title: 'Client Testimonials' },
    id: { title: 'Testimoni Klien' },
  }[lang];

  return (
    <section className="relative w-full bg-[#0b0b0f] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(236,72,153,0.08),transparent_60%)]" />
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

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <motion.figure
              key={item.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
            >
              <div className="flex items-center gap-3">
                <img src={item.avatar} alt={item.name} className="h-10 w-10 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-xs text-slate-400">{item.role}</p>
                </div>
              </div>
              <blockquote className="mt-4 grow text-sm text-slate-200">
                {lang === 'en' ? item.quoteEn : item.quoteId}
              </blockquote>
              <div className="mt-4 flex items-center gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-amber-400" />
                ))}
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
