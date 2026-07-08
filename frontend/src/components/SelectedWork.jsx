import { featured, projects, contact } from '../data'
import Placeholder from './Placeholder'

function renderDesc(text, highlight) {
  if (!highlight || !text.includes(highlight)) return text
  const [before, after] = text.split(highlight)
  return (
    <>
      {before}
      <strong>{highlight}</strong>
      {after}
    </>
  )
}

function FeaturedCard() {
  return (
    <article className="featured">
      <div className="featured__left">
        <div className="featured__toprow">
          <span className="pill pill--accent">{featured.pill}</span>
          <span className="featured__metatxt">{featured.meta}</span>
        </div>

        <h3 className="featured__title">{featured.title}</h3>
        <p className="featured__tagline">{featured.tagline}</p>
        <p className="featured__desc">
          {renderDesc(featured.description, featured.descriptionHighlight)}
        </p>

        <div className="featured__stats">
          {featured.stats.map((s) => (
            <div key={s.value} className="fstat">
              <div className="fstat__value">{s.value}</div>
              <div className="fstat__sub">{s.sub}</div>
            </div>
          ))}
        </div>

        <div className="featured__chips">
          {featured.chips.map((c) => (
            <span key={c} className="chip">
              {c}
            </span>
          ))}
        </div>

        <div className="featured__actions">
          <a
            href={contact.thecrib}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--filled"
          >
            Visit thecrib.ca →
          </a>
          <a
            href={contact.appstore}
            target="_blank"
            rel="noopener noreferrer"
            className="featured__link"
          >
            Download on the App Store ↗
          </a>
        </div>

        <p className="featured__tech">{featured.tech}</p>
      </div>

      <div className="featured__right">
        {featured.image ? (
          <div className="browser">
            <div className="browser__bar">
              <span />
              <span />
              <span />
              <em className="browser__url">thecrib.ca</em>
            </div>
            <img
              className="browser__img"
              src={featured.image}
              alt="TheCrib web app"
              loading="lazy"
            />
          </div>
        ) : (
          <Placeholder
            className="featured__media"
            alt="TheCrib web app"
            label="[ TheCrib screenshot ]"
          />
        )}
        <span className="featured__badge">{featured.built}</span>
      </div>
    </article>
  )
}

function ProjectRow({ project }) {
  return (
    <a
      className="project-row"
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="project-row__num">{project.number}</span>
      <Placeholder
        className="project-row__thumb"
        alt={`${project.title} thumbnail`}
        label={`[ ${project.title} ]`}
        src={project.image}
      />
      <div className="project-row__content">
        <div className="project-row__title">
          {project.title}
          {project.badge && (
            <span
              className={`pill ${project.badge.accent ? 'pill--accent' : 'pill--hairline'}`}
            >
              {project.badge.label}
            </span>
          )}
        </div>
        <p className="project-row__desc">{project.description}</p>
        <div className="project-row__tags">
          {project.tech.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
      </div>
      <span className="project-row__arrow">↗</span>
    </a>
  )
}

export default function SelectedWork() {
  return (
    <section id="work" className="section">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow accent">Selected Work</span>
          <span className="section__meta">2024 · 2025</span>
        </div>

        <FeaturedCard />

        <div className="projects">
          {projects.map((p) => (
            <ProjectRow key={p.number} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
