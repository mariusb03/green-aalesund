{/* About.jsx */}
import PageHero from '../components/PageHero'
import { siteContent } from '../data/siteContent'

function About() {
  return (
    <>
      <PageHero
        compact
        eyebrow="Om Green Ålesund"
        title={siteContent.about.title}
        text="En lokal secondhand-butikk bygget på bærekraft, gjenbruk og engasjement."
      />

      <section className="section">
        <div className="container two-column">
          <div>
            <p className="section-label">Historien</p>
            <h2>Et lokalt konsept med varme og tydelig identitet.</h2>
            <p>{siteContent.about.text1}</p>
            <p>{siteContent.about.text2}</p>
            <p>{siteContent.about.text3}</p>
            <p>{siteContent.about.text4}</p>
          </div>

          <div className="feature-panel">
            <div className="feature-item">
              <span>01</span>
              <div>
                <h3>Lokalt forankret</h3>
                <p>Butikken er etablert i Kipervikgata i Ålesund og har blitt en møteplass i byen.</p>
              </div>
            </div>

            <div className="feature-item">
              <span>02</span>
              <div>
                <h3>Bærekraft i praksis</h3>
                <p>Klær og ting får en ny sjanse i stedet for å bli kastet.</p>
              </div>
            </div>

            <div className="feature-item">
              <span>03</span>
              <div>
                <h3>Positiv respons</h3>
                <p>Green Ålesund har fått mye god respons fra lokalsamfunnet.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About