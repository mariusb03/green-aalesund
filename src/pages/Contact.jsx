{/* Contact.jsx */}
import PageHero from '../components/PageHero'
import { siteContent } from '../data/siteContent'

function Contact() {
  return (
    <>
      <PageHero
        compact
        eyebrow="Kontakt"
        title={siteContent.contact.title}
        text={siteContent.contact.text}
      />

      <section className="section">
        <div className="container two-column">
          <div className="feature-panel">
            <div className="feature-item">
              <span>@</span>
              <div>
                <h3>E-post</h3>
                <p>
                  <a href={`mailto:${siteContent.email}`}>{siteContent.email}</a>
                </p>
              </div>
            </div>

            <div className="feature-item">
              <span>IG</span>
              <div>
                <h3>Instagram</h3>
                <p>
                  <a href={siteContent.instagram} target="_blank" rel="noreferrer">
                    Følg Green Ålesund på Instagram
                  </a>
                </p>
              </div>
            </div>

            <div className="feature-item">
              <span>TT</span>
              <div>
                <h3>TikTok</h3>
                <p>
                  <a href={siteContent.tiktok} target="_blank" rel="noreferrer">
                    Se Green Ålesund på TikTok
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="contact-card">
            <p className="section-label">Green Ålesund</p>
            <h2>{siteContent.footerTagline}</h2>
            <p>
              Denne siden kan senere utvides med kontaktskjema, kart eller mer praktisk informasjon.
            </p>

            <a
              className="button button-primary"
              href={siteContent.shop}
              target="_blank"
              rel="noreferrer"
            >
              Besøk nettbutikk
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact