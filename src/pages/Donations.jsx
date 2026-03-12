{/* Donations.jsx */}
import PageHero from '../components/PageHero'
import { siteContent } from '../data/siteContent'

function Donations() {
  return (
    <>
      <PageHero
        compact
        eyebrow="Donasjoner"
        title={siteContent.donations.title}
        text={siteContent.donations.intro}
      />

      <section className="section">
        <div className="container two-column">
          <div>
            <p className="section-label">Gi ting et nytt liv</p>
            <h2>Enkelt, konkret og viktig.</h2>
            <p>{siteContent.donations.text}</p>
            <p>
              Donasjonssiden bør være svært tydelig, slik at besøkende raskt ser hva som kan leveres og når.
            </p>
          </div>

          <div className="donation-box">
            <h3>Levering av donasjoner</h3>
            <ul>
              <li>{siteContent.donations.weekdays}</li>
              <li>{siteContent.donations.saturday}</li>
              <li>{siteContent.donations.note}</li>
            </ul>

            <div className="boxed-note">
              <strong>{siteContent.donations.thanks}</strong>
              <p>
                Her kan du senere legge inn mer detaljert informasjon om hva som tas imot og eventuelle kvalitetskrav.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Donations