/**
 * Image slot. Renders the provided `src` when set, otherwise a labeled
 * placeholder fill so the layout is complete before real images arrive.
 */
export default function Placeholder({ src, alt, label, className = '', hero = false }) {
  if (src) {
    return <img className={className} src={src} alt={alt} loading="lazy" />
  }
  return (
    <div className={`ph ${hero ? 'ph--hero' : ''} ${className}`} role="img" aria-label={alt}>
      <span className="ph__label">{label}</span>
    </div>
  )
}
