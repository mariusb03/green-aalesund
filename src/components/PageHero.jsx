{/* PageHero.jsx */}
function PageHero({ eyebrow, title, text, compact = false }) {
  return (
    <section className={compact ? 'pt-12 pb-0' : 'pt-12 pb-3'}>
      <div className="mx-auto w-[min(1160px,calc(100%-40px))]">
        <p className="mb-3 text-[0.82rem] font-extrabold uppercase tracking-[0.12em] text-[#5c7e5d]">
          {eyebrow}
        </p>

        <h1 className="max-w-[1000px] text-left text-[clamp(2.5rem,5vw,5rem)] leading-[0.98] tracking-[-0.05em] text-[#244e30]">
          {title}
        </h1>

        {text && (
          <p className="mt-4 max-w-[720px] text-[1.06rem] font-semibold leading-7 text-[#4d5f52]">
            {text}
          </p>
        )}
      </div>
    </section>
  )
}

export default PageHero