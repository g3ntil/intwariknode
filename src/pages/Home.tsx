import { Hero } from '../components/Hero';
import { ServicesSnapshot } from '../components/ServicesSnapshot';
import { Stats } from '../components/Stats';
import { Portfolio } from '../components/Portfolio';
import { ProcessStrip } from '../components/ProcessStrip';
import { Testimonials } from '../components/Testimonials';
import { CTAStrip } from '../components/CTAStrip';
import { FooterSimple } from '../components/FooterSimple';
import { SEO } from '../components/SEO';
import { KeywordLinks } from '../components/KeywordLinks';
import { pageMetadata } from '../config/seo';

export function Home() {
  return (
    <>
      <SEO {...pageMetadata.home} />
      <Hero />
      <ServicesSnapshot />
      <Stats />
      <Portfolio />
      <KeywordLinks />
      <ProcessStrip />
      <Testimonials />
      <CTAStrip />
      <FooterSimple />
    </>
  );
}