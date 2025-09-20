import { siteContent } from "@/content/siteContent";
export const metadata = siteContent.energyFund.meta;

export default function EnergyFundPage() {
  return (
    <main className="min-h-screen w-full">
      <section className="relative flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-20 sm:py-24 bg-[url('/bg-img.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-[url('/hero-section-bg.jpg')] bg-cover bg-center" />
        <div className="bg-black/60">
 <div className="relative z-10 max-w-5xl mx-auto">
          <h1 className="clash text-3xl sm:text-4xl lg:text-5xl font-bold text-white">{siteContent.energyFund.hero.title}</h1>
          <p className="mt-4 text-white/90 text-base sm:text-lg">{siteContent.energyFund.hero.sub}</p>
        </div>
        </div>
       
      </section>

  <section id="overview" className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 scroll-mt-28">
        <div className="max-w-5xl mx-auto">
          <h2 className="clash text-2xl sm:text-3xl font-semibold">{siteContent.energyFund.sections.overview.title}</h2>
          <p className="mt-3 text-slate-700 text-sm sm:text-base leading-relaxed">
            {siteContent.energyFund.sections.overview.body}
          </p>
        </div>
      </section>

  <section id="strategy" className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-slate-50 scroll-mt-28">
        <div className="max-w-5xl mx-auto">
          <h2 className="clash text-2xl sm:text-3xl font-semibold">{siteContent.energyFund.sections.strategy.title}</h2>
          <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-700 text-sm sm:text-base">
            {siteContent.energyFund.sections.strategy.bullets.map((b, i) => (
              <li key={i} className="p-4 rounded-md bg-white border">{b}</li>
            ))}
          </ul>
        </div>
      </section>

  <section id="why-invest" className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 scroll-mt-28">
        <div className="max-w-5xl mx-auto">
          <h2 className="clash text-2xl sm:text-3xl font-semibold">{siteContent.energyFund.sections.whyInvest.title}</h2>
          <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-700 text-sm sm:text-base">
            {siteContent.energyFund.sections.whyInvest.bullets.map((b, i) => (
              <li key={i} className="p-4 rounded-md border">{b}</li>
            ))}
          </ul>
        </div>
      </section>

  <section id="fund-structure" className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-slate-50 scroll-mt-28">
        <div className="max-w-5xl mx-auto">
          <h2 className="clash text-2xl sm:text-3xl font-semibold">{siteContent.energyFund.sections.fundStructure.title}</h2>
          <dl className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-700 text-sm sm:text-base">
            {siteContent.energyFund.sections.fundStructure.items.map((it, i) => (
              <div className="p-4 rounded-md bg-white border" key={i}><dt className="font-medium">{it.label}</dt><dd>{it.value}</dd></div>
            ))}
          </dl>
        </div>
      </section>

  <section id="investor-benefits" className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 scroll-mt-28">
        <div className="max-w-5xl mx-auto">
          <h2 className="clash text-2xl sm:text-3xl font-semibold">{siteContent.energyFund.sections.investorBenefits.title}</h2>
          <ul className="mt-4 space-y-3 text-slate-700 text-sm sm:text-base">
            {siteContent.energyFund.sections.investorBenefits.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
      </section>

  <section id="partnerships" className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-slate-50 scroll-mt-28">
        <div className="max-w-5xl mx-auto">
          <h2 className="clash text-2xl sm:text-3xl font-semibold">{siteContent.energyFund.sections.partnerships.title}</h2>
          <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-700 text-sm sm:text-base">
            {siteContent.energyFund.sections.partnerships.bullets.map((b, i) => (
              <li key={i} className="p-4 rounded-md bg-white border">{b}</li>
            ))}
          </ul>
          <p className="mt-6 text-slate-700">{siteContent.energyFund.sections.partnerships.closing}</p>
        </div>
      </section>

  <section id="cta" className="px-4 sm:px-6 lg:px-8 py-16 scroll-mt-28">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="clash text-2xl sm:text-3xl font-semibold">{siteContent.energyFund.sections.cta.title}</h2>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a href="mailto:info@afrovivointernational.com?subject=Partner%20With%20the%20Fund" className="inline-flex items-center justify-center px-5 py-3 rounded-sm bg-orange-600 text-white hover:bg-orange-500 transition-colors">{siteContent.energyFund.sections.cta.partner}</a>
            <a href="mailto:info@afrovivointernational.com?subject=Request%20Investor%20Deck" className="inline-flex items-center justify-center px-5 py-3 rounded-sm border border-slate-300 hover:bg-slate-100 transition-colors">{siteContent.energyFund.sections.cta.deck}</a>
          </div>
        </div>
      </section>
    </main>
  );
}
