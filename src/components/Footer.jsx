export default function Footer({ lang = 'en' }) {
  const t = {
    en: { about: 'About', works: 'Works', contact: 'Contact', copyright: '© 2025 STUDIO AI BY JR.' },
    id: { about: 'Tentang', works: 'Karya', contact: 'Kontak', copyright: '© 2025 STUDIO AI BY JR.' },
  }[lang];

  return (
    <footer className="w-full bg-[#0b0b0f] py-8 text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 text-sm text-slate-400">
        <nav className="flex gap-6">
          <a href="#about" className="hover:text-white/90">{t.about}</a>
          <a href="#works" className="hover:text-white/90">{t.works}</a>
          <a href="#contact" className="hover:text-white/90">{t.contact}</a>
        </nav>
        <p className="">{t.copyright}</p>
      </div>
    </footer>
  );
}
