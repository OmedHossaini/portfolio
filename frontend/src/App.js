import React from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Project';
import CV from './Components/CV';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Header />
      <main className="l-main">
        <Home />
        <About />
        <Skills />
        <Projects />
        <CV />
      </main>
      <Footer />
    </div>
  );
}

export default App;
