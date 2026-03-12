{/* PageHero.jsx */}
function PageHero({ eyebrow, title, text, compact = false }) {
    return (
      <section className={`page-hero ${compact ? 'page-hero-compact' : ''}`}>
        <div className="container page-hero-inner">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="page-hero-title">{title}</h1>
          {text && <p className="page-hero-text">{text}</p>}
        </div>
      </section>
    )
  }
  
  export default PageHero