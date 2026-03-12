{/* Home.jsx */}
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import SectionIntro from "../components/SectionIntro";
import { siteContent } from "../data/siteContent";
import '../styles/pages/home.css'

function Home() {
  return (
    <>
      <PageHero
        eyebrow={siteContent.hero.eyebrow}
        title={
          <>
            Velkommen til
            <br />
            Green Ålesund
            <br />
            Din second-hand butikk
          </>
        }
        text={siteContent.hero.text}
      />

      <section className="section">
        <div className="container hero-grid">
          <div>
            <div className="hero-actions">
              <a
                className="button button-primary"
                href={siteContent.shopCollection}
                target="_blank"
                rel="noreferrer"
              >
                Gå til nettbutikk
              </a>
              <Link className="button button-secondary" to="/kontakt">
                Kontakt oss
              </Link>
            </div>

            <div className="stats-grid">
              {siteContent.stats.map((item) => (
                <article className="stat-card" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </article>
              ))}
            </div>
          </div>

          <div className="feature-panel">
            <div className="feature-item">
              <span>01</span>
              <div>
                <h3>Kvalitetsplagg med nytt liv</h3>
                <p>
                  Alle klær blir nøye vasket, gjennomgått og stylet før de
                  legges ut i butikk eller nettbutikk.
                </p>
              </div>
            </div>

            <div className="feature-item">
              <span>02</span>
              <div>
                <h3>Donasjoner som gjør en forskjell</h3>
                <p>
                  Omtrent halvparten av det som mottas går videre til
                  hjelpegruppa i Ålesund, til Ukraina eller andre steder med
                  stort behov.
                </p>
              </div>
            </div>

            <div className="feature-item">
              <span>03</span>
              <div>
                <h3>Mer enn bare secondhand</h3>
                <p>
                  Green Ålesund tilbyr også profesjonell tømming og rydding av
                  boliger og dødsbo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="info-strip">
        <div className="container info-strip-inner">
          <p>Secondhand-butikk i Ålesund</p>
          <p>Shopify beholdes som nettbutikk</p>
          <p>Instagram og TikTok løftes tydelig frem</p>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionIntro
            label="Green Ålesund"
            title={siteContent.homeIntro.title}
            text={siteContent.homeIntro.text1}
          />

          <div className="two-column">
            <div>
              <p>{siteContent.homeIntro.text2}</p>
            </div>

            <div className="services-grid">
              <article className="service-card">
                <span className="service-pill">Butikk</span>
                <h3>Gjenbruk av klær</h3>
                <p>
                  Over 15 000 håndplukkede plagg og stadig nye skatter i butikk
                  og nettbutikk.
                </p>
                <a
                  href={siteContent.shopCollection}
                  target="_blank"
                  rel="noreferrer"
                >
                  Se nettbutikk
                </a>
              </article>

              <article className="service-card">
                <span className="service-pill">Donasjoner</span>
                <h3>Gi ting videre</h3>
                <p>
                  Klær, møbler, interiør, bøker og andre ting kan få nye eiere i
                  stedet for å bli kastet.
                </p>
                <Link to="/donasjoner">Les mer</Link>
              </article>

              <article className="service-card">
                <span className="service-pill">Tjenester</span>
                <h3>Tømming og dødsbo</h3>
                <p>
                  Profesjonell hjelp utført med respekt, omtanke og bærekraft i
                  fokus.
                </p>
                <Link to="/tomming-dodsbo">Les mer</Link>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
