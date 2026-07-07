import { useState } from 'react'
import { about, interests } from '../data'

function Tile({ item }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      className={`tile${open ? ' is-open' : ''}`}
      onClick={() => setOpen((o) => !o)}
    >
      <div className="tile__emoji">{item.emoji}</div>
      <div className="tile__label">{item.label}</div>
      <div className="tile__sub">{item.sub}</div>
      <div className="tile__detail">{item.detail}</div>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about__grid">
        <div className="about__left">
          <span className="eyebrow accent">About</span>
          <p className="about__hint">Off the clock · hover a tile</p>
          <div className="interests">
            {interests.map((item) => (
              <Tile key={item.label} item={item} />
            ))}
          </div>
        </div>

        <div className="about__right">
          <h2 className="about__title">{about.heading}</h2>
          <div className="about__body">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="about__stats">
            {about.stats.map((s) => (
              <div key={s.value} className="astat">
                <div className="astat__value">{s.value}</div>
                <div className="astat__sub">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
