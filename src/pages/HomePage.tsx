import React, { useEffect } from 'react';
import { Hero } from '../components/sections/Hero';
import { PartnersSection } from '../components/sections/PartnersSection';
import { AIBenefits } from '../components/sections/AIBenefits';
import { USPs } from '../components/sections/USPs';
import { Services } from '../components/sections/Services';
import { FAQ } from '../components/sections/FAQ';
import { ROICalculator } from '../components/sections/ROICalculator';

export const HomePage = () => {
  useEffect(() => {
    document.title = 'EnableFlow AI — Slimmer werken met AI voor MKB';
  }, []);
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
