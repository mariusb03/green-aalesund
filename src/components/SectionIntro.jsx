{/* SectionIntro.jsx */}
function SectionIntro({ label, title, text }) {
    return (
      <div className="section-heading">
        <p className="section-label">{label}</p>
        <h2>{title}</h2>
        {text && <p>{text}</p>}
      </div>
    )
  }
  
  export default SectionIntro