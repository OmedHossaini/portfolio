import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Project';
import Extracurricular from './Components/Extracurricular';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import ProjectDetail from './Components/ProjectDetail';
import HighlightedProjects from './Components/HighlightedProjects';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={
            <main className="l-main">
              <Home />
              <About />
              <Skills />
              <HighlightedProjects />
              <Projects />
              <Extracurricular />
              <Contact />
            </main>
          } />
          <Route path="/project/:projectId" element={<ProjectDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;