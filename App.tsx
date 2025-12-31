import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Menu from './components/Menu';
import Pricing from './components/Pricing';
import About from './components/About';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-ag-grey">
      <Header />
      <main>
        <Hero />
        <Services />
        <Menu />
        <Pricing />
        <About />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;