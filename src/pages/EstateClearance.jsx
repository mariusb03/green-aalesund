import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

function EstateClearance() {
  return (
    <>
      <PageHero
        compact
        eyebrow="Tømming og dødsbo"
        title={
          <span className="font-black">
            Tømming og rydding av{' '}
            <span className="text-[1.08em] text-[#3f6b49]">boliger og dødsbo</span>
          </span>
        }
        text="Green Ålesund tilbyr profesjonell tømming og rydding av boliger og dødsbo."
      />

      <section className="px-0 py-[72px]">
        <div className="mx-auto grid w-[min(1160px,calc(100%-40px))] gap-[34px] lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-3 text-[0.82rem] font-extrabold uppercase tracking-[0.12em] text-[#5c7e5d]">
              Profesjonell hjelp
            </p>

            <h2 className="m-0 max-w-[900px] text-[clamp(2.2rem,4vw,4rem)] font-black leading-[0.98] tracking-[-0.05em] text-[#244e30]">
              Utført med respekt, omtanke og bærekraft i fokus.
            </h2>

            <p className="mt-4 leading-7 font-semibold text-[#244e30]">
              Tjenesten utføres med respekt, omtanke og bærekraft i fokus.
            </p>

            <p className="leading-7 font-semibold text-[#244e30]">
              Denne delen av nettsiden bør gi et rolig og tillitsvekkende inntrykk, og gjøre
              det enkelt å ta kontakt for en uforpliktende samtale.
            </p>
          </div>

          <div className="rounded-[28px] border-2 border-[#244e30] bg-[rgba(255,255,255,0.75)] p-[30px] shadow-[0_24px_60px_rgba(38,52,40,0.08)]">
            <div className="flex gap-[18px] py-[18px]">
              <span className="grid h-[46px] w-[46px] shrink-0 place-items-center rounded-[14px] bg-[rgba(87,124,88,0.12)] font-extrabold text-[#35523e]">
                01
              </span>
              <div>
                <h3 className="mb-[10px] text-[1.18rem] font-semibold tracking-[-0.03em] text-[#244e30]">
                  Respektfull prosess
                </h3>
                <p className="m-0 leading-7 font-medium text-[#3f6b49]">
                  Tjenesten bør presenteres på en rolig og tillitsvekkende måte.
                </p>
              </div>
            </div>

            <div className="flex gap-[18px] border-t border-[rgba(32,59,43,0.08)] py-[18px]">
              <span className="grid h-[46px] w-[46px] shrink-0 place-items-center rounded-[14px] bg-[rgba(87,124,88,0.12)] font-extrabold text-[#35523e]">
                02
              </span>
              <div>
                <h3 className="mb-[10px] text-[1.18rem] font-semibold tracking-[-0.03em] text-[#244e30]">
                  Omtanke i hele oppdraget
                </h3>
                <p className="m-0 leading-7 font-medium text-[#3f6b49]">
                  Språket på siden bør være varmt, profesjonelt og menneskelig.
                </p>
              </div>
            </div>

            <div className="flex gap-[18px] border-t border-[rgba(32,59,43,0.08)] py-[18px]">
              <span className="grid h-[46px] w-[46px] shrink-0 place-items-center rounded-[14px] bg-[rgba(87,124,88,0.12)] font-extrabold text-[#35523e]">
                03
              </span>
              <div>
                <h3 className="mb-[10px] text-[1.18rem] font-semibold tracking-[-0.03em] text-[#244e30]">
                  Enkel kontakt
                </h3>
                <p className="m-0 leading-7 font-medium text-[#3f6b49]">
                  Gjør det lett å sende e-post og ta en uforpliktende henvendelse.
                </p>
              </div>
            </div>

            <div className="mt-6">
              <Link
                className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-[#244e30] px-[22px] font-bold text-[#f6f1e8] no-underline shadow-[0_14px_30px_rgba(32,59,43,0.2)] transition hover:-translate-y-0.5 hover:bg-[#294b37]"
                to="/kontakt"
              >
                Kontakt oss
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[rgba(32,59,43,0.08)] bg-[#244e30] px-0 py-[18px]"></section>
    </>
  )
}

export default EstateClearance