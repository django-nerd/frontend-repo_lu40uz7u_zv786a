export default function Footer() {
  return (
    <footer className="w-full bg-[#0b0b0f] py-8 text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 text-sm text-slate-400">
        <nav className="flex gap-6">
          <a href="#about" className="hover:text-white/90">About</a>
          <a href="#works" className="hover:text-white/90">Works</a>
          <a href="#contact" className="hover:text-white/90">Contact</a>
        </nav>
        <p className="">© 2025 STUDIO AI BY JR.</p>
      </div>
    </footer>
  );
}
