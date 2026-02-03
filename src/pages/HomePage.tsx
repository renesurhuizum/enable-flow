import React from 'react';
import { Hero } from '../components/sections/Hero';
import { PartnersSection } from '../components/sections/PartnersSection';
import { AIBenefits } from '../components/sections/AIBenefits';
import { USPs } from '../components/sections/USPs';
import { Services } from '../components/sections/Services';
import { FAQ } from '../components/sections/FAQ';

export const HomePage = () => {
  return (
    <>
      <Hero />
      <PartnersSection />
      <AIBenefits />
      <USPs />
      <Services />
      <FAQ />
    </>
  );
};
