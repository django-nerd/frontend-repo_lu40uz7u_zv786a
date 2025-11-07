import { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Works from './components/Works';
import Services from './components/Services';
import Partners from './components/Partners';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  const [lang, setLang] = useState('en');
  const isEN = lang === 'en';

  return (
    <div className="min-h-screen bg-[#0b0b0f] font-inter text-white">
      {/* Top language switcher */}
      <div className="fixed top-4 left-1/2 z-20 -translate-x-1/2">
        <div className="inline-flex items-center overflow-hidden rounded-full border border-white/10 bg-white/5 p-1 text-xs backdrop-blur-xl">
          <button
            onClick={() => setLang('en')}
            className={`px-3 py-1.5 transition ${isEN ? 'bg-white/20 text-white' : 'text-slate-300 hover:text-white'}`}
            aria-pressed={isEN}
          >
            English
          </button>
          <button
            onClick={() => setLang('id')}
            className={`px-3 py-1.5 transition ${!isEN ? 'bg-white/20 text-white' : 'text-slate-300 hover:text-white'}`}
            aria-pressed={!isEN}
          >
            Indonesia
          </button>
        </div>
      </div>

      {/* Hero */}
      <Hero lang={lang} />

      {/* About */}
      <div id="about">
        <About lang={lang} />
      </div>

      {/* Works */}
      <div id="works">
        <Works lang={lang} />
      </div>

      {/* Services */}
      <Services lang={lang} />

      {/* Partners */}
      <Partners lang={lang} />

      {/* Testimonials */}
      <Testimonials lang={lang} />

      {/* CTA */}
      <div id="contact">
        <CTA lang={lang} />
      </div>

      {/* Footer */}
      <Footer lang={lang} />
    </div>
  );
}

export default App;
