import { navLinks } from '../data'

export default function Nav() {
  return (
    <header className="nav">
      <div className="container nav__inner">
        <a href="#top" className="nav__logo">
          OMED<span className="accent">.</span>
        </a>
        <nav className="nav__links">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav__link${link.accent ? ' accent' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
