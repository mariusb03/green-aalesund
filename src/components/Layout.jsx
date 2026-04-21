import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[#203b2b14] bg-[#244e30] backdrop-blur-md">
        <div className="mx-auto flex min-h-[78px] w-[min(1160px,calc(100%-40px))] items-center justify-between gap-4">
          <NavLink
            to="/"
            className="inline-flex items-center no-underline"
            aria-label="Green Ålesund hjem"
            onClick={closeMenu}
          >
            <img
              src="/GALogo.svg"
              alt="Green Ålesund"
              className="h-16 w-auto sm:h-20"
            />
          </NavLink>

          <nav
            className="hidden items-center gap-6 font-bold text-[#f6f1e8] md:flex"
            aria-label="Hovednavigasjon"
          >
            <NavLink to="/">Hjem</NavLink>
            <NavLink to="/om-oss">Om oss</NavLink>
            <NavLink to="/donasjoner">Donasjoner</NavLink>
            <NavLink to="/tomming-dodsbo">Tømming & dødsbo</NavLink>
            <NavLink to="/kontakt">Kontakt</NavLink>
          </nav>

          <a
            className="hidden min-h-[50px] items-center justify-center rounded-full bg-[#203b2b] px-6 font-bold text-[#f6f1e8] no-underline shadow-[0_14px_30px_rgba(32,59,43,0.2)] transition hover:-translate-y-0.5 hover:bg-[#294b37] md:inline-flex"
            href="https://kzn1vk-pt.myshopify.com/collections/all"
            target="_blank"
            rel="noreferrer"
          >
            Nettbutikk
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-[#203b2b] px-5 font-bold text-[#f6f1e8] shadow-[0_14px_30px_rgba(32,59,43,0.2)] transition hover:bg-[#294b37] md:hidden"
            aria-label="Åpne meny"
            aria-expanded={menuOpen}
          >
            Meny
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-[rgba(246,241,232,0.12)] bg-[#244e30] md:hidden">
            <div className="mx-auto flex w-[min(1160px,calc(100%-40px))] flex-col py-4">
              <NavLink
                to="/"
                onClick={closeMenu}
                className="border-b border-[rgba(246,241,232,0.08)] py-3 font-bold text-[#f6f1e8] no-underline"
              >
                Hjem
              </NavLink>

              <NavLink
                to="/om-oss"
                onClick={closeMenu}
                className="border-b border-[rgba(246,241,232,0.08)] py-3 font-bold text-[#f6f1e8] no-underline"
              >
                Om oss
              </NavLink>

              <NavLink
                to="/donasjoner"
                onClick={closeMenu}
                className="border-b border-[rgba(246,241,232,0.08)] py-3 font-bold text-[#f6f1e8] no-underline"
              >
                Donasjoner
              </NavLink>

              <NavLink
                to="/tomming-dodsbo"
                onClick={closeMenu}
                className="border-b border-[rgba(246,241,232,0.08)] py-3 font-bold text-[#f6f1e8] no-underline"
              >
                Tømming & dødsbo
              </NavLink>

              <NavLink
                to="/kontakt"
                onClick={closeMenu}
                className="border-b border-[rgba(246,241,232,0.08)] py-3 font-bold text-[#f6f1e8] no-underline"
              >
                Kontakt
              </NavLink>

              <a
                href="https://kzn1vk-pt.myshopify.com/collections/all"
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                className="pt-4 font-bold text-[#f6f1e8] no-underline"
              >
                Nettbutikk
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="border-t border-[#203b2b14] px-0 py-[72px]">
        <div className="mx-auto grid w-[min(1160px,calc(100%-40px))] gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <h2 className="m-0 max-w-[900px] text-[clamp(2.5rem,5vw,5rem)] font-black leading-[0.98] tracking-[-0.05em] text-[#244e30]">
              Green Ålesund
            </h2>

            <p className="mt-4 leading-7 font-bold text-[#4d5f52]">
              Bygget for å gjøre det lettere å handle brukt, donere ting og
              finne riktig hjelp når noe skal ryddes eller tømmes.
            </p>

            <p className="mt-4 leading-7 font-bold text-[#4e5d526b]">
              Nettside laget av Marius Bringsvor Rusten
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="mb-2 text-[1.18rem] font-semibold tracking-[-0.03em] text-[#244e30]">
                Sosiale medier
              </h3>
              <a
                className="mb-3 block font-bold text-[#244e30] no-underline"
                href="https://www.instagram.com/green.aalesund/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
              <a
                className="block font-bold text-[#244e30] no-underline"
                href="https://www.tiktok.com/@greenaalesund?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noreferrer"
              >
                TikTok
              </a>
            </div>

            <div>
              <h3 className="mb-2 text-[1.18rem] font-semibold tracking-[-0.03em] text-[#244e30]">
                Snarveier
              </h3>
              <NavLink
                className="mb-3 block font-bold text-[#244e30] no-underline"
                to="/om-oss"
              >
                Om oss
              </NavLink>
              <NavLink
                className="mb-3 block font-bold text-[#244e30] no-underline"
                to="/donasjoner"
              >
                Donasjoner
              </NavLink>
              <NavLink
                className="block font-bold text-[#244e30] no-underline"
                to="/tomming-dodsbo"
              >
                Tømming & dødsbo
              </NavLink>
            </div>

            <div>
              <h3 className="mb-2 text-[1.18rem] font-semibold tracking-[-0.03em] text-[#244e30]">
                Kontakt
              </h3>
              <a
                className="mb-3 block font-bold text-[#244e30] no-underline"
                href="mailto:post@greenaalesund.no"
              >
                E-post
              </a>
              <a
                className="block font-bold text-[#244e30] no-underline"
                href="https://kzn1vk-pt.myshopify.com/"
                target="_blank"
                rel="noreferrer"
              >
                Nettbutikk
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Layout;