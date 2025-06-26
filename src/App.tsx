import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Authors from './components/Authors';
import TableOfContents from './components/TableOfContents';
import Purchase from './components/Purchase';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Authors />
      <TableOfContents />
      <Purchase />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;