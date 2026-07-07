import { config, contact } from '../data'

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <p className="contact__label">Let's build something</p>

        <a href={`mailto:${contact.email}`} className="contact__email">
          Omed_Hossaini
          <br />
          @Outlook.com
        </a>

        <div className="contact__actions">
          <a href={`mailto:${contact.email}`} className="btn btn--filled">
            Email me →
          </a>
          <a
            href={config.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline"
          >
            Download resume
          </a>
        </div>
      </div>
    </section>
  )
}
