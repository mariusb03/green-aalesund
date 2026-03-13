import PageHero from '../components/PageHero'

function Contact() {
  return (
    <>
      <PageHero
        compact
        eyebrow="Kontakt"
        title={
          <span className="font-black">
            Kontakt <span className="text-[1.08em] text-[#3f6b49]">oss</span>
          </span>
        }
        text="Send oss gjerne en e-post her:"
      />

      <section className="px-0 py-[72px]">
        <div className="mx-auto grid w-[min(1160px,calc(100%-40px))] gap-[34px] lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[28px] border-2 border-[#244e30] bg-[rgba(255,255,255,0.75)] p-[30px] shadow-[0_24px_60px_rgba(38,52,40,0.08)]">
            <div className="flex gap-[18px] py-[18px]">
              <span className="grid h-[46px] w-[46px] shrink-0 place-items-center rounded-[14px] bg-[rgba(87,124,88,0.12)] font-extrabold text-[#35523e]">
                @
              </span>
              <div>
                <h3 className="mb-[10px] text-[1.18rem] font-semibold tracking-[-0.03em] text-[#244e30]">
                  E-post
                </h3>
                <p className="m-0 leading-7 font-medium text-[#3f6b49]">
                  <a
                    className="font-bold text-[#244e30] no-underline"
                    href="mailto:post@greenaalesund.no"
                  >
                    post@greenaalesund.no
                  </a>
                </p>
              </div>
            </div>

            <div className="flex gap-[18px] border-t border-[rgba(32,59,43,0.08)] py-[18px]">
              <span className="grid h-[46px] w-[46px] shrink-0 place-items-center rounded-[14px] bg-[rgba(87,124,88,0.12)] font-extrabold text-[#35523e]">
                IG
              </span>
              <div>
                <h3 className="mb-[10px] text-[1.18rem] font-semibold tracking-[-0.03em] text-[#244e30]">
                  Instagram
                </h3>
                <p className="m-0 leading-7 font-medium text-[#3f6b49]">
                  <a
                    className="font-bold text-[#244e30] no-underline"
                    href="https://www.instagram.com/green.aalesund/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Følg Green Ålesund på Instagram
                  </a>
                </p>
              </div>
            </div>

            <div className="flex gap-[18px] border-t border-[rgba(32,59,43,0.08)] py-[18px]">
              <span className="grid h-[46px] w-[46px] shrink-0 place-items-center rounded-[14px] bg-[rgba(87,124,88,0.12)] font-extrabold text-[#35523e]">
                TT
              </span>
              <div>
                <h3 className="mb-[10px] text-[1.18rem] font-semibold tracking-[-0.03em] text-[#244e30]">
                  TikTok
                </h3>
                <p className="m-0 leading-7 font-medium text-[#3f6b49]">
                  <a
                    className="font-bold text-[#244e30] no-underline"
                    href="https://www.tiktok.com/@greenaalesund?is_from_webapp=1&sender_device=pc"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Se Green Ålesund på TikTok
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border-2 border-[#244e30] bg-[rgba(255,255,255,0.75)] p-[30px] shadow-[0_24px_60px_rgba(38,52,40,0.08)]">
            <p className="mb-3 text-[0.82rem] font-extrabold uppercase tracking-[0.12em] text-[#5c7e5d]">
              Green Ålesund
            </p>

            <h2 className="m-0 max-w-[900px] text-[clamp(2.2rem,4vw,4rem)] font-black leading-[0.98] tracking-[-0.05em] text-[#244e30]">
              Ålesund&apos;s largest second hand store
            </h2>

            <p className="mt-4 leading-7 font-semibold text-[#244e30]">
              Denne siden kan senere utvides med kontaktskjema, kart eller mer praktisk
              informasjon.
            </p>

            <a
              className="mt-6 inline-flex min-h-[50px] items-center justify-center rounded-full bg-[#244e30] px-[22px] font-bold text-[#f6f1e8] no-underline shadow-[0_14px_30px_rgba(32,59,43,0.2)] transition hover:-translate-y-0.5 hover:bg-[#294b37]"
              href="https://kzn1vk-pt.myshopify.com/"
              target="_blank"
              rel="noreferrer"
            >
              Besøk nettbutikk
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-[rgba(32,59,43,0.08)] bg-[#244e30] px-0 py-[18px]"></section>
    </>
  )
}

export default Contact