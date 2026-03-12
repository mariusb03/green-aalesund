{/* EstateClearance.jsx */}
import PageHero from '../components/PageHero'
import { Link } from 'react-router-dom'
import { siteContent } from '../data/siteContent'

function EstateClearance() {
  return (
    <>
      <PageHero
        compact
        eyebrow="Tømming og dødsbo"
        title={siteContent.estateClearance.title}
        text={siteContent.estateClearance.text1}
      />

      <section className="section">
        <div className="container two-column">
          <div>
            <p className="section-label">Profesjonell hjelp</p>
            <h2>Utført med respekt, omtanke og bærekraft i fokus.</h2>
            <p>{siteContent.estateClearance.text2}</p>
            <p>{siteContent.estateClearance.text3}</p>
          </div>

          <div className="feature-panel">
            <div className="feature-item">
              <span>01</span>
              <div>
                <h3>Respektfull prosess</h3>
                <p>Tjenesten bør presenteres på en rolig og tillitsvekkende måte.</p>
              </div>
            </div>

            <div className="feature-item">
              <span>02</span>
              <div>
                <h3>Omtanke i hele oppdraget</h3>
                <p>Språket på siden bør være varmt, profesjonelt og menneskelig.</p>
              </div>
            </div>

            <div className="feature-item">
              <span>03</span>
              <div>
                <h3>Enkel kontakt</h3>
                <p>Gjør det lett å sende e-post og ta en uforpliktende henvendelse.</p>
              </div>
            </div>

            <div className="hero-actions">
              <Link className="button button-primary" to="/kontakt">
                Kontakt oss
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default EstateClearance