import React from 'react';
import { Hero } from '../components/sections/Hero';
import { PartnersSection } from '../components/sections/PartnersSection';
import { AIBenefits } from '../components/sections/AIBenefits';
import { USPs } from '../components/sections/USPs';
import { Services } from '../components/sections/Services';
import { FAQ } from '../components/sections/FAQ';
import { ROICalculator } from '../components/sections/ROICalculator';

export const HomePage = () => {
  return (
    <>
      <Hero />
      <AIBenefits />
      <USPs />
      <ROICalculator />
      <Services />
      <PartnersSection />
      <FAQ />
    </>
  );
};
