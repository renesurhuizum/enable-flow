import React from 'react';
import { Hero } from '../components/sections/Hero';
import { ProcessSection } from '../components/sections/ProcessSection';
import { PartnersSection } from '../components/sections/PartnersSection';
import { AIBenefits } from '../components/sections/AIBenefits';
import { USPs } from '../components/sections/USPs';
import { Services } from '../components/sections/Services';
import { FAQ } from '../components/sections/FAQ';
import { ROICalculator } from '../components/sections/ROICalculator';
import { SubsidieSection } from '../components/sections/SubsidieSection';

export const HomePage = () => {
  return (
    <>
      <Hero />
      <ProcessSection />
      <AIBenefits />
      <USPs />
      <ROICalculator />
      <Services />
      <SubsidieSection />
      <PartnersSection />
      <FAQ />
    </>
  );
};
