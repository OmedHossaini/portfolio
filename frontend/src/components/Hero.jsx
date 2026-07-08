import { config, mailto } from '../data'
import Placeholder from './Placeholder'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__grid">
        <div className="hero__left">
          {config.availableForWork && (
            <div className="hero__eyebrow">
              <span className="hero__dot" />
              Open to work · Montréal, QC
            </div>
          )}

          <h1 className="hero__title">
            Full-stack
            <br />
            developer
            <br />
            <span className="accent">who ships.</span>
          </h1>

          <p className="hero__desc">
            Hi, I'm Omed. I build web and mobile apps end to end, from the first
            line of code to the App Store, mostly in React, React Native and
            Node. I founded <strong>TheCrib</strong> and I've got a PolyHacks
            2025 win under my belt.
          </p>

          <div className="hero__actions">
            <a href="#work" className="btn btn--outline">
              See my work
            </a>
            <a href={mailto} className="btn btn--filled">
              Get in touch →
            </a>
          </div>
        </div>

        <Placeholder
          className="hero__photo"
          hero
          src={config.headshot}
          alt="Portrait of Omed Hossaini"
          label="[ headshot ]"
        />
      </div>
    </section>
  )
}
