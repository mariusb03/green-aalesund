import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SectionIntro from '../components/SectionIntro'

function Home() {
  return (
    <>
      <PageHero
        eyebrow="Secondhand · bærekraft · omtanke"
        title={
          <span className="font-black">
            <span className="block">Velkommen til</span>
            <span className="block text-[1.12em] text-[#3f6b49]">Green Ålesund</span>
            <span className="block"><em>Din</em> second-hand butikk</span>
          </span>
        }
        text="Hos oss finner du over 15 000 håndplukkede plagg, og hver dag fyller vi på med nye skatter. Alle klær blir nøye vasket, gjennomgått og stylet før de får plass i butikken eller i nettbutikken vår."
      />

      <section className="px-0 py-[72px]">
        <div className="mx-auto grid w-[min(1160px,calc(100%-40px))] items-start gap-[34px] lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-7 flex flex-wrap gap-[14px]">
              <a
                className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-[#244e30] px-[22px] font-bold text-[#f6f1e8] no-underline shadow-[0_14px_30px_rgba(32,59,43,0.2)] transition hover:-translate-y-0.5 hover:bg-[#294b37]"
                href="https://kzn1vk-pt.myshopify.com/collections/all"
                target="_blank"
                rel="noreferrer"
              >
                Gå til nettbutikk
              </a>

              <Link
                className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-[rgba(32,59,43,0.12)] bg-[rgba(255,255,255,0.72)] px-[22px] font-bold text-[#244e30] no-underline transition hover:-translate-y-0.5"
                to="/kontakt"
              >
                Kontakt oss
              </Link>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <article className="text-center rounded-[28px] border-2 border-[#244e30] bg-[rgba(255,255,255,0.75)] p-[22px] shadow-[0_24px_60px_rgba(38,52,40,0.08)]">
                <strong className="mb-2 block text-[2rem] tracking-[-0.04em] text-[#244e30]">
                  15 000+
                </strong>
                <span className="leading-7 text-[#3f6b49]">Håndplukkede plagg</span>
              </article>

              <article className="text-center rounded-[28px] border-2 border-[#244e30] bg-[rgba(255,255,255,0.75)] p-[22px] shadow-[0_24px_60px_rgba(38,52,40,0.08)]">
                <strong className="mb-2 block text-[2rem] tracking-[-0.04em] text-[#244e30]">
                  50 %
                </strong>
                <span className="leading-7 text-[#3f6b49]">
                  Av mottatte donasjoner går videre til hjelpegrupper og steder med behov
                </span>
              </article>

              <article className="text-center rounded-[28px] border-2 border-[#244e30] bg-[rgba(255,255,255,0.75)] p-[22px] shadow-[0_24px_60px_rgba(38,52,40,0.08)]">
                <strong className="mb-2 block text-[2rem] tracking-[-0.04em] text-[#244e30]">
                  Donere?
                </strong>
                <span className="leading-7 text-[#3f6b49]">
                  hverdager <br /> 10 - 18 <br /> lørdager <br /> 11 - 17
                </span>
              </article>
            </div>
          </div>

          <div className="rounded-[28px] border-2 border-[#244e30] bg-[rgba(255,255,255,0.75)] p-[30px] shadow-[0_24px_60px_rgba(38,52,40,0.08)]">
            <div className="flex gap-[18px] py-[18px]">
              <span className="grid h-[46px] w-[46px] shrink-0 place-items-center rounded-[14px] bg-[rgba(87,124,88,0.12)] font-extrabold text-[#35523e]">
                01
              </span>
              <div>
                <h3 className="mb-[10px] text-[1.18rem] font-semibold tracking-[-0.03em] text-[#244e30]">
                  Kvalitetsplagg med nytt liv
                </h3>
                <p className="m-0 leading-7 font-medium text-[#3f6b49]">
                  Alle klær blir nøye vasket, gjennomgått og stylet før de legges ut i butikk
                  eller nettbutikk.
                </p>
              </div>
            </div>

            <div className="flex gap-[18px] border-t border-[rgba(32,59,43,0.08)] py-[18px]">
              <span className="grid h-[46px] w-[46px] shrink-0 place-items-center rounded-[14px] bg-[rgba(87,124,88,0.12)] font-extrabold text-[#35523e]">
                02
              </span>
              <div>
                <h3 className="mb-[10px] text-[1.18rem] font-semibold tracking-[-0.03em] text-[#244e30]">
                  Donasjoner som gjør en forskjell
                </h3>
                <p className="m-0 leading-7 font-medium text-[#3f6b49]">
                  Omtrent halvparten av det som mottas går videre til hjelpegruppa i Ålesund,
                  til Ukraina eller andre steder med stort behov.
                </p>
              </div>
            </div>

            <div className="flex gap-[18px] border-t border-[rgba(32,59,43,0.08)] py-[18px]">
              <span className="grid h-[46px] w-[46px] shrink-0 place-items-center rounded-[14px] bg-[rgba(87,124,88,0.12)] font-extrabold text-[#35523e]">
                03
              </span>
              <div>
                <h3 className="mb-[10px] text-[1.18rem] font-semibold tracking-[-0.03em] text-[#244e30]">
                  Mer enn bare secondhand
                </h3>
                <p className="m-0 leading-7 font-medium text-[#3f6b49]">
                  Green Ålesund tilbyr også profesjonell tømming og rydding av boliger og
                  dødsbo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[rgba(32,59,43,0.08)] bg-[#244e30] px-0 py-[18px]">
      
      </section>

      <section className="bg-[rgba(255,255,255,0.45)] px-0 py-[72px]">
        <div className="mx-auto w-[min(1160px,calc(100%-40px))]">
          <SectionIntro
            label="Green Ålesund"
            title={
              <span className="font-black">
                Et <span className="text-[#3f6b49]">gjenbruksunivers</span> med kvalitet,
                personlighet og omtanke.
              </span>
            }
            text="Green Ålesund ønsker å skape verdi både for miljøet og for mennesker. Her kan kundene bygge sin egen personlige stil med et stort utvalg kvalitetsmerker til en mer bærekraftig pris."
          />

          <div className="flex flex-col gap-7">
            <div className="max-w-[760px]">
              <p className="leading-7 font-semibold text-[#244e30]">
                I tillegg til secondhand tilbyr Green Ålesund profesjonell tømming og
                rydding av boliger og dødsbo – alltid utført med respekt, omtanke og
                bærekraft i fokus.
              </p>
            </div>

            <div className="grid gap-[22px] md:grid-cols-3">
              <article className="rounded-[28px] border-2 border-[#244e30] bg-[rgba(255,255,255,0.75)] p-[26px] shadow-[0_24px_60px_rgba(38,52,40,0.08)]">
                <span className="mb-[14px] inline-flex rounded-full bg-[rgba(87,124,88,0.12)] px-3 py-2 text-[0.82rem] font-bold text-[#35523e]">
                  Butikk
                </span>
                <h3 className="mb-[10px] font-bold text-[1.18rem] tracking-[-0.03em] text-[#244e30]">
                  Gjenbruk av klær
                </h3>
                <p className="mb-[18px] font-semibold leading-7 text-[#3f6b49]">
                  Over 15 000 håndplukkede plagg og stadig nye skatter i butikk og
                  nettbutikk.
                </p>
                <a
                  className="font-bold text-[#244e30] no-underline"
                  href="https://kzn1vk-pt.myshopify.com/collections/all"
                  target="_blank"
                  rel="noreferrer"
                >
                  Se nettbutikk
                </a>
              </article>

              <article className="rounded-[28px] border-2 border-[#244e30] bg-[rgba(255,255,255,0.75)] p-[26px] shadow-[0_24px_60px_rgba(38,52,40,0.08)]">
                <span className="mb-[14px] inline-flex rounded-full bg-[rgba(87,124,88,0.12)] px-3 py-2 text-[0.82rem] font-bold text-[#35523e]">
                  Donasjoner
                </span>
                <h3 className="mb-[10px] font-bold text-[1.18rem] tracking-[-0.03em] text-[#244e30]">
                  Gi ting videre
                </h3>
                <p className="mb-[18px] font-semibold leading-7 text-[#3f6b49]">
                  Klær, møbler, interiør, bøker og andre ting kan få nye eiere i stedet for
                  å bli kastet.
                </p>
                <Link className="font-bold text-[#244e30] no-underline" to="/donasjoner">
                  Les mer
                </Link>
              </article>

              <article className="rounded-[28px] border-2 border-[#244e30] bg-[rgba(255,255,255,0.75)] p-[26px] shadow-[0_24px_60px_rgba(38,52,40,0.08)]">
                <span className="mb-[14px] inline-flex rounded-full bg-[rgba(87,124,88,0.12)] px-3 py-2 text-[0.82rem] font-bold text-[#35523e]">
                  Tjenester
                </span>
                <h3 className="mb-[10px] font-bold text-[1.18rem] tracking-[-0.03em] text-[#244e30]">
                  Tømming og dødsbo
                </h3>
                <p className="mb-[18px] font-semibold leading-7 text-[#3f6b49]">
                  Profesjonell hjelp utført med respekt, omtanke og bærekraft i fokus.
                </p>
                <Link
                  className="font-bold text-[#244e30] no-underline"
                  to="/tomming-dodsbo"
                >
                  Les mer
                </Link>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[rgba(32,59,43,0.08)] bg-[#244e30] px-0 py-[18px]">
      
      </section>
    </>
  )
}

export default Home