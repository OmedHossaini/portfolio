import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutMe';
import TechnologiesPage from './components/Technologies';
import ContactPage from './components/Contact';
import NavBar from './components/NavBar';
import ProjectsPage from './components/Projects';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/technologies" element={<TechnologiesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;



