import PageHero from '../components/PageHero'

function About() {
  return (
    <>
      <PageHero
        compact
        eyebrow="Om Green Ålesund"
        title={
          <span className="font-black">
            Litt om{' '}
            <span className="text-[1.08em] text-[#3f6b49]">Green Ålesund</span>
          </span>
        }
        text="En lokal secondhand-butikk bygget på bærekraft, gjenbruk og engasjement."
      />

      <section className="px-0 py-[72px]">
        <div className="mx-auto grid w-[min(1160px,calc(100%-40px))] gap-[34px] lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-3 text-[0.82rem] font-extrabold uppercase tracking-[0.12em] text-[#5c7e5d]">
              Historien
            </p>

            <h2 className="m-0 max-w-[900px] text-[clamp(2.2rem,4vw,4rem)] font-black leading-[0.98] tracking-[-0.05em] text-[#244e30]">
              Et lokalt konsept med varme og tydelig identitet.
            </h2>

            <p className="mt-4 leading-7 font-semibold text-[#244e30]">
              Green Ålesund AS ble grunnlagt av Linn Therese Dimmen, en engasjert gründer
              med lidenskap for bærekraft og gjenbruk.
            </p>

            <p className="leading-7 font-semibold text-[#244e30]">
              Hun har tidligere vært med på å etablere Racoon Coffee & More og har bakgrunn
              som daglig leder i flere virksomheter. I 2025 fikk hun med seg onkelen Peder
              Waage som medeier i Green Ålesund.
            </p>

            <p className="leading-7 font-semibold text-[#244e30]">
              Sammen har de skapt en unik secondhand-butikk i Kipervikgata i Ålesund, med et
              bredt utvalg av klær, sko og interiørartikler.
            </p>

            <p className="leading-7 font-semibold text-[#244e30]">
              Butikken har blitt en møteplass for folkene i byen, og har fått mye positiv
              respons fra lokalsamfunnet.
            </p>
          </div>

          <div className="rounded-[28px] border-2 border-[#244e30] bg-[rgba(255,255,255,0.75)] p-[30px] shadow-[0_24px_60px_rgba(38,52,40,0.08)]">
            <div className="flex gap-[18px] py-[18px]">
              <span className="grid h-[46px] w-[46px] shrink-0 place-items-center rounded-[14px] bg-[rgba(87,124,88,0.12)] font-extrabold text-[#35523e]">
                01
              </span>
              <div>
                <h3 className="mb-[10px] text-[1.18rem] font-semibold tracking-[-0.03em] text-[#244e30]">
                  Lokalt forankret
                </h3>
                <p className="m-0 leading-7 font-medium text-[#3f6b49]">
                  Butikken er etablert i Kipervikgata i Ålesund og har blitt en møteplass i
                  byen.
                </p>
              </div>
            </div>

            <div className="flex gap-[18px] border-t border-[rgba(32,59,43,0.08)] py-[18px]">
              <span className="grid h-[46px] w-[46px] shrink-0 place-items-center rounded-[14px] bg-[rgba(87,124,88,0.12)] font-extrabold text-[#35523e]">
                02
              </span>
              <div>
                <h3 className="mb-[10px] text-[1.18rem] font-semibold tracking-[-0.03em] text-[#244e30]">
                  Bærekraft i praksis
                </h3>
                <p className="m-0 leading-7 font-medium text-[#3f6b49]">
                  Klær og ting får en ny sjanse i stedet for å bli kastet.
                </p>
              </div>
            </div>

            <div className="flex gap-[18px] border-t border-[rgba(32,59,43,0.08)] py-[18px]">
              <span className="grid h-[46px] w-[46px] shrink-0 place-items-center rounded-[14px] bg-[rgba(87,124,88,0.12)] font-extrabold text-[#35523e]">
                03
              </span>
              <div>
                <h3 className="mb-[10px] text-[1.18rem] font-semibold tracking-[-0.03em] text-[#244e30]">
                  Positiv respons
                </h3>
                <p className="m-0 leading-7 font-medium text-[#3f6b49]">
                  Green Ålesund har fått mye god respons fra lokalsamfunnet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[rgba(32,59,43,0.08)] bg-[#244e30] px-0 py-[18px]"></section>
    </>
  )
}

export default About