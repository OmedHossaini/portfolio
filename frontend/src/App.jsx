import { config } from './data'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import SelectedWork from './components/SelectedWork'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  // Allow the accent to be themed from a single source.
  const accentStyle = { '--acc': config.accent }

  return (
    <div style={accentStyle}>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <SelectedWork />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
