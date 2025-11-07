import { motion } from 'framer-motion';

const brands = [
  { name: 'Mercedes-Benz', country: 'Global' },
  { name: 'Apple', country: 'Global' },
  { name: 'Samsung', country: 'Global' },
  { name: 'Nike', country: 'Global' },
  { name: 'Coca-Cola', country: 'Global' },
  { name: 'Tokopedia', country: 'Indonesia' },
  { name: 'Gojek', country: 'Indonesia' },
  { name: 'Grab', country: 'Regional' },
  { name: 'Indomie', country: 'Indonesia' },
  { name: 'Telkomsel', country: 'Indonesia' },
  { name: 'Bank BCA', country: 'Indonesia' },
  { name: 'Bank Mandiri', country: 'Indonesia' },
  { name: 'Traveloka', country: 'Indonesia' },
  { name: 'Unilever', country: 'Global' },
  { name: 'Adidas', country: 'Global' },
  { name: 'Shopee', country: 'Regional' },
];

export default function Partners({ lang = 'en' }) {
  const t = {
    en: {
      title: 'Our Partners',
      subtitle: 'Trusted by global and Indonesian brands across automotive, tech, fashion, and food.',
    },
    id: {
      title: 'Mitra Kami',
      subtitle: 'Dipercaya merek global dan Indonesia di otomotif, teknologi, fashion, dan F&B.',
    },
  }[lang];

  return (
    <section className="relative w-full bg-[#0b0b0f] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.08),transparent_60%)]" />
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
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.05 }}
          className="mt-3 max-w-3xl text-slate-300"
        >
          {t.subtitle}
        </motion.p>

        <div className="mt-10 grid items-stretch gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {brands.map((b, i) => (
            <motion.div
              key={b.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.03 }}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl hover:border-white/20 hover:bg-white/10"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-white">
                {b.name.split(' ').map(w => w[0]).join('').slice(0, 2)}
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-medium">{b.name}</p>
                <p className="truncate text-xs text-slate-400">{b.country}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
