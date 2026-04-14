import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Hero from './Hero';
import CTASection from './CTASection';
import Services from './Services';

// Hero uses ROICard which needs no router, but keep consistent
describe('Hero', () => {
  it('renders without crashing', () => {
    render(<Hero />);
  });

  it('shows main headline copy', () => {
    render(<Hero />);
    expect(screen.getByText(/Stop met/i)).toBeInTheDocument();
    expect(screen.getByText(/werk doen/i)).toBeInTheDocument();
  });

  it('shows the subtitle text', () => {
    render(<Hero />);
    expect(screen.getByText(/Enable Flow implementeert AI-automatisering/i)).toBeInTheDocument();
  });

  it('shows the gratis scan CTA link', () => {
    render(<Hero />);
    const link = screen.getByRole('link', { name: /gratis scan/i });
    expect(link).toHaveAttribute('href', '/scan');
  });

  it('shows the ROI calculator card', () => {
    render(<Hero />);
    expect(screen.getByText(/Bereken jouw besparing/i)).toBeInTheDocument();
    expect(screen.getByText(/Maandelijkse besparing/i)).toBeInTheDocument();
    expect(screen.getByText('Per jaar')).toBeInTheDocument();
  });

  it('shows three sliders for the ROI calculator', () => {
    render(<Hero />);
    const sliders = screen.getAllByRole('slider');
    expect(sliders).toHaveLength(3);
  });

  it('shows eyebrow badge with Noord-Nederland', () => {
    render(<Hero />);
    expect(screen.getByText(/Noord-Nederland/i)).toBeInTheDocument();
  });
});

describe('CTASection', () => {
  it('renders without crashing', () => {
    render(<CTASection />);
  });

  it('shows the main heading', () => {
    render(<CTASection />);
    expect(screen.getByText('Klaar om te starten?')).toBeInTheDocument();
  });

  it('shows the scan CTA link', () => {
    render(<CTASection />);
    expect(screen.getByRole('link', { name: /gratis scan/i })).toBeInTheDocument();
  });

  it('shows René name and title', () => {
    render(<CTASection />);
    expect(screen.getByText('René de Boer')).toBeInTheDocument();
    expect(screen.getByText(/Oprichter/i)).toBeInTheDocument();
  });

  it('shows the plan gesprek link', () => {
    render(<CTASection />);
    const link = screen.getByRole('link', { name: /Plan een gesprek/i });
    expect(link).toHaveAttribute('target', '_blank');
  });
});

describe('Services', () => {
  const renderServices = () => render(<MemoryRouter><Services /></MemoryRouter>);

  it('renders without crashing', () => {
    renderServices();
  });

  it('shows the section heading', () => {
    renderServices();
    expect(screen.getByText('Kies wat bij je past')).toBeInTheDocument();
  });

  it('shows all three service names', () => {
    renderServices();
    expect(screen.getByText('AI Strategiesessie')).toBeInTheDocument();
    expect(screen.getByText('AI Starter')).toBeInTheDocument();
    expect(screen.getByText('AI Partnership')).toBeInTheDocument();
  });

  it('shows correct prices', () => {
    renderServices();
    expect(screen.getByText('€395')).toBeInTheDocument();
    expect(screen.getByText('€995')).toBeInTheDocument();
    expect(screen.getByText('€495')).toBeInTheDocument();
  });

  it('AI Starter shows meest gekozen badge', () => {
    renderServices();
    expect(screen.getByText(/Meest gekozen/i)).toBeInTheDocument();
  });
});
