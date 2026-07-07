import { marqueeTokens } from '../data'

function Group({ ariaHidden }) {
  return (
    <div className="marquee__group" aria-hidden={ariaHidden}>
      {marqueeTokens.map((token, i) => (
        <span key={i} className="marquee__item">
          <span className={token.accent ? 'accent' : undefined}>
            {token.label}
          </span>
          <span className="marquee__sep"> · </span>
        </span>
      ))}
    </div>
  )
}

export default function Marquee() {
  return (
    <div className="marquee">
      <div className="marquee__track">
        {/* Duplicated once for a seamless -50% loop */}
        <Group />
        <Group ariaHidden />
      </div>
    </div>
  )
}
