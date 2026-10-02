import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import ResearchAreas from '@/components/ResearchAreas';
import FeatureModels from '@/components/FeatureModels';
import FeatureData from '@/components/FeatureData';
import FeaturePrototypes from '@/components/FeaturePrototypes';
import Services from '@/components/Services';
import Products from '@/components/Products';
import Events from '@/components/Events';
import Faq from '@/components/Faq';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import AmbientBackground from '@/components/AmbientBackground';
import { getMessages } from '@/lib/i18n';
import { contactFormMessages, navMessages } from '@/lib/i18n/slices';
import { RESEARCH_AREAS } from '@/lib/site';

export default async function HomePage({ params }) {
  const { locale } = await params;
  const m = getMessages(locale);
  const marqueeItems = RESEARCH_AREAS.map((area) => ({ label: m.research.areas[area.key].title, Icon: area.Icon }));

  return (
    <>
      <Navbar locale={locale} t={navMessages(m)} />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero locale={locale} t={m.hero} areas={marqueeItems} />
        {/* One ambient layer spans About us through Contact us. */}
        <div className="relative isolate">
          <AmbientBackground />
          <About t={m.about} />
          <ResearchAreas locale={locale} t={m.research} />
          <FeatureModels locale={locale} t={m.features.models} />
          <FeatureData locale={locale} t={m.features.data} />
          <FeaturePrototypes locale={locale} t={m.features.prototypes} />
          <Services locale={locale} t={m.services} />
          <Products locale={locale} t={m.products} />
          <Events locale={locale} t={m.events} />
          <Faq t={m.faq} />
          <Contact locale={locale} t={{ ...m.contact, opensNewTab: m.common.opensNewTab }} form={contactFormMessages(m)} />
        </div>
      </main>
      <Footer locale={locale} t={m.footer} />
    </>
  );
}
