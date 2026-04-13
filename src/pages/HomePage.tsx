import Hero from '../components/sections/Hero';
import SocialProofBar from '../components/sections/SocialProofBar';
import PainSection from '../components/sections/PainSection';
import ProcessSection from '../components/sections/ProcessSection';
import UseCasesPreview from '../components/sections/UseCasesPreview';
import Services from '../components/sections/Services';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import CTASection from '../components/sections/CTASection';
import FAQ from '../components/sections/FAQ';

export const HomePage = () => {
  return (
    <>
      <Hero />
      <SocialProofBar />
      <PainSection />
      <ProcessSection />
      <UseCasesPreview />
      <Services />
      <TestimonialsSection />
      <CTASection />
      <FAQ />
    </>
  );
};
