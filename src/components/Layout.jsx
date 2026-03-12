{/* Layout.jsx */}
import { NavLink, Outlet } from 'react-router-dom'
import { siteContent } from '../data/siteContent'

function Layout() {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <NavLink to="/" className="brand">
            <span className="brand-mark">G</span>
            <span className="brand-text">Green Ålesund</span>
          </NavLink>

          <nav className="site-nav" aria-label="Hovednavigasjon">
            <NavLink to="/">Hjem</NavLink>
            <NavLink to="/om-oss">Om oss</NavLink>
            <NavLink to="/donasjoner">Donasjoner</NavLink>
            <NavLink to="/tomming-dodsbo">Tømming & dødsbo</NavLink>
            <NavLink to="/kontakt">Kontakt</NavLink>
          </nav>

          <a
            className="button button-primary nav-button"
            href={siteContent.shopCollection}
            target="_blank"
            rel="noreferrer"
          >
            Nettbutikk
          </a>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <p className="section-label">Green Ålesund</p>
            <h2>Et varmere og mer profesjonelt digitalt hjem.</h2>
            <p>
              Bygget for å gjøre det lettere å handle brukt, donere ting og finne
              riktig hjelp når noe skal ryddes eller tømmes.
            </p>
          </div>

          <div className="footer-links">
            <div>
              <h3>Sosiale medier</h3>
              <a href={siteContent.instagram} target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a href={siteContent.tiktok} target="_blank" rel="noreferrer">
                TikTok
              </a>
            </div>

            <div>
              <h3>Snarveier</h3>
              <NavLink to="/om-oss">Om oss</NavLink>
              <NavLink to="/donasjoner">Donasjoner</NavLink>
              <NavLink to="/tomming-dodsbo">Tømming & dødsbo</NavLink>
            </div>

            <div>
              <h3>Kontakt</h3>
              <a href={`mailto:${siteContent.email}`}>{siteContent.email}</a>
              <a href={siteContent.shop} target="_blank" rel="noreferrer">
                Shopify-butikk
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Layout