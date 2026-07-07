import { contact } from '../data'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__copy">
          © 2025 Omed Hossaini · {contact.location} · {contact.phone}
        </p>
        <div className="footer__links">
          <a
            className="footer__link"
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="footer__link"
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="footer__link"
            href={contact.thecrib}
            target="_blank"
            rel="noopener noreferrer"
          >
            TheCrib
          </a>
        </div>
      </div>
    </footer>
  )
}
