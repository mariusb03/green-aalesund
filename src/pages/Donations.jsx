import PageHero from '../components/PageHero'

function Donations() {
  return (
    <>
      <PageHero
        compact
        eyebrow="Donasjoner"
        title={
          <span className="font-black">
            Vi tar imot <span className="text-[1.08em] text-[#3f6b49]">donasjoner</span>
          </span>
        }
        text="Hos Green Ålesund tar vi med stor takk imot donasjoner av klær, møbler, interiør, bøker og andre ting du ikke lenger trenger."
      />

      <section className="px-0 py-[72px]">
        <div className="mx-auto grid w-[min(1160px,calc(100%-40px))] gap-[34px] lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-3 text-[0.82rem] font-extrabold uppercase tracking-[0.12em] text-[#5c7e5d]">
              Gi ting et nytt liv
            </p>

            <h2 className="m-0 max-w-[900px] text-[clamp(2.2rem,4vw,4rem)] font-black leading-[0.98] tracking-[-0.05em] text-[#244e30]">
              Enkelt, konkret og viktig.
            </h2>

            <p className="mt-4 leading-7 font-semibold text-[#244e30]">
              Ved å gi nytt liv til det du gir fra deg, bidrar du til et mer bærekraftig
              forbruk – og til at ting får nye eiere i stedet for å bli kastet.
            </p>

            <p className="leading-7 font-semibold text-[#244e30]">
              Donasjonssiden bør være svært tydelig, slik at besøkende raskt ser hva som kan
              leveres og når.
            </p>
          </div>

          <div className="rounded-[28px] border-2 border-[#244e30] bg-[rgba(255,255,255,0.75)] p-[30px] shadow-[0_24px_60px_rgba(38,52,40,0.08)]">
            <h3 className="mb-[10px] font-semibold text-[1.18rem] tracking-[-0.03em] text-[#244e30]">
              Levering av donasjoner
            </h3>

            <ul className="space-y-3 pl-5 font-medium text-[#3f6b49]">
              <li>Mandag–fredag: 10–18</li>
              <li>Lørdag: 11–17</li>
              <li>Utenom åpningstid – ta kontakt med oss på e-post for avtale.</li>
            </ul>

            <div className="mt-6 rounded-[20px] bg-[rgba(95,133,99,0.08)] p-[18px]">
              <strong className="mb-2 block text-[#244e30]">Takk for at du bidrar!</strong>
              <p className="m-0 leading-7 font-medium text-[#3f6b49]">
                Her kan du senere legge inn mer detaljert informasjon om hva som tas imot og
                eventuelle kvalitetskrav.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[rgba(32,59,43,0.08)] bg-[#244e30] px-0 py-[18px]"></section>
    </>
  )
}

export default Donations