import Hero from './components/Hero';
import About from './components/About';
import Works from './components/Works';
import Services from './components/Services';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0b0b0f] font-inter text-white">
      {/* Hero */}
      <Hero />

      {/* About */}
      <div id="about">
        <About />
      </div>

      {/* Works */}
      <div id="works">
        <Works />
      </div>

      {/* Services */}
      <Services />

      {/* CTA */}
      <div id="contact">
        <CTA />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
