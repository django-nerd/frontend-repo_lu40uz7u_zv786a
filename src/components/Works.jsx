import { motion } from 'framer-motion';

export default function Works() {
  return (
    <section className="relative w-full bg-[#0b0b0f] py-24 text-white">
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-2xl font-semibold sm:text-3xl"
        >
          Showreel & Works
        </motion.h2>

        {/* Reel */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.05 }}
          className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg"
        >
          <div className="aspect-video w-full">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&controls=1"
              title="AI Showreel"
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </motion.div>

        {/* Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Luxury Fashion — Motion Portraits',
              img: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop',
            },
            {
              title: 'Automotive — Electric Elegance',
              img: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=1200&auto=format&fit=crop',
            },
            {
              title: 'Beverage — Neon City Story',
              img: 'https://images.unsplash.com/photo-1526406915894-6c1d6d5f3d15?q=80&w=1200&auto=format&fit=crop',
            },
          ].map((card, i) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.05 * i }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg backdrop-blur-md"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img src={card.img} alt={card.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium">{card.title}</h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
