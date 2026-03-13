{/* SectionIntro.jsx */}
function SectionIntro({ label, title, text }) {
  return (
    <div className="mb-8 max-w-[1060px]">
      <p className="mb-3 text-[0.82rem] font-extrabold uppercase tracking-[0.12em] text-[#5c7e5d]">
        {label}
      </p>

      <h2 className="m-0 max-w-[1200px] text-[clamp(2.5rem,5vw,5rem)] leading-[0.98] tracking-[-0.05em] text-[#244e30]">
        {title}
      </h2>

      {text && (
        <p className="mt-4 leading-7 font-semibold text-[#244e30]">
          {text}
        </p>
      )}
    </div>
  )
}

export default SectionIntro