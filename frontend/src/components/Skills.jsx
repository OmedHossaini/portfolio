import { skillCategories, achievements } from '../data'

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <span className="eyebrow">Skills &amp; Toolkit</span>

        <div className="skills__grid">
          {skillCategories.map((cat) => (
            <div key={cat.label} className="skillcat">
              <div className="skillcat__label">{cat.label}</div>
              <div className="skillcat__list">{cat.items.join(' · ')}</div>
            </div>
          ))}
        </div>

        <div className="skills__divider" />

        <div className="achievements">
          {achievements.map((a) => (
            <a
              key={a.title}
              className="achievement"
              href={a.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="achievement__head">
                <span className="achievement__emoji">{a.emoji}</span>
                <span className="achievement__title">{a.title}</span>
                <span className="achievement__cta">{a.cta}</span>
              </div>
              <p className="achievement__detail">{a.detail}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
