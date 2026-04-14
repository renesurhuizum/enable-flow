import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProcessSection from './ProcessSection';
import PainSection from './PainSection';
import SocialProofBar from './SocialProofBar';
import TestimonialsSection from './TestimonialsSection';
import UseCasesPreview from './UseCasesPreview';

describe('ProcessSection', () => {
  it('renders without crashing', () => {
    render(<ProcessSection />);
  });

  it('shows heading', () => {
    render(<ProcessSection />);
    expect(screen.getByText(/Van scan naar resultaat in 3 stappen/i)).toBeInTheDocument();
  });

  it('renders all three step numbers', () => {
    render(<ProcessSection />);
    expect(screen.getByText('01')).toBeInTheDocument();
    expect(screen.getByText('02')).toBeInTheDocument();
    expect(screen.getByText('03')).toBeInTheDocument();
  });

  it('renders all three step titles', () => {
    render(<ProcessSection />);
    expect(screen.getByText('Gratis scan')).toBeInTheDocument();
    expect(screen.getByText('Plan op maat')).toBeInTheDocument();
    expect(screen.getByText('Live automatisering')).toBeInTheDocument();
  });

  it('shows step durations', () => {
    render(<ProcessSection />);
    expect(screen.getByText('~1 uur')).toBeInTheDocument();
    expect(screen.getByText('1 week')).toBeInTheDocument();
    expect(screen.getByText('1–2 weken')).toBeInTheDocument();
  });
});

describe('PainSection', () => {
  it('renders without crashing', () => {
    render(<PainSection />);
  });

  it('shows heading', () => {
    render(<PainSection />);
    expect(screen.getByText('Herken jij dit?')).toBeInTheDocument();
  });

  it('shows all three pain points', () => {
    render(<PainSection />);
    expect(screen.getByText(/Elke week uren kwijt/i)).toBeInTheDocument();
    expect(screen.getByText(/Copy-paste werk/i)).toBeInTheDocument();
    expect(screen.getByText(/Concurrenten gaan sneller/i)).toBeInTheDocument();
  });

  it('shows the solution callout', () => {
    render(<PainSection />);
    expect(screen.getByText(/Enable Flow pakt dit aan/i)).toBeInTheDocument();
  });
});

describe('SocialProofBar', () => {
  it('renders without crashing', () => {
    render(<SocialProofBar />);
  });

  it('shows the intro text', () => {
    render(<SocialProofBar />);
    expect(screen.getByText(/tools die jouw team al kent/i)).toBeInTheDocument();
  });

  it('shows all 6 tool names', () => {
    render(<SocialProofBar />);
    expect(screen.getByText('Microsoft 365')).toBeInTheDocument();
    expect(screen.getByText('Copilot')).toBeInTheDocument();
    expect(screen.getByText('n8n')).toBeInTheDocument();
    expect(screen.getByText('ChatGPT')).toBeInTheDocument();
    expect(screen.getByText('Claude')).toBeInTheDocument();
    expect(screen.getByText('Make')).toBeInTheDocument();
  });
});

describe('TestimonialsSection', () => {
  it('renders without crashing', () => {
    render(<TestimonialsSection />);
  });

  it('shows heading', () => {
    render(<TestimonialsSection />);
    expect(screen.getByText('Wat klanten zeggen')).toBeInTheDocument();
  });

  it('shows both testimonial names', () => {
    render(<TestimonialsSection />);
    expect(screen.getByText('Jan de Vries')).toBeInTheDocument();
    expect(screen.getByText('Maria Kuiper')).toBeInTheDocument();
  });

  it('shows the 12 hours per week stat in first testimonial', () => {
    render(<TestimonialsSection />);
    expect(screen.getByText(/12 uur per week/i)).toBeInTheDocument();
  });
});

describe('UseCasesPreview', () => {
  const renderSection = () => render(<MemoryRouter><UseCasesPreview /></MemoryRouter>);

  it('renders without crashing', () => {
    renderSection();
  });

  it('shows heading', () => {
    renderSection();
    expect(screen.getByText(/Wat we voor jouw team automatiseren/i)).toBeInTheDocument();
  });

  it('renders all 6 use case cards', () => {
    renderSection();
    expect(screen.getByText('E-mail drafting')).toBeInTheDocument();
    expect(screen.getByText('Vergadernotities')).toBeInTheDocument();
    expect(screen.getByText('Data-analyse')).toBeInTheDocument();
    expect(screen.getByText('Document creatie')).toBeInTheDocument();
    expect(screen.getByText('Klantinzichten')).toBeInTheDocument();
    expect(screen.getByText('Procesautomatisering')).toBeInTheDocument();
  });

  it('shows tool names for each use case', () => {
    renderSection();
    expect(screen.getByText('Microsoft Copilot 365')).toBeInTheDocument();
    expect(screen.getByText('n8n + AI')).toBeInTheDocument();
  });

  it('shows savings badges', () => {
    renderSection();
    const savings = screen.getAllByText(/−\d+.*\/week/);
    expect(savings.length).toBe(6);
  });

  it('shows link to all use cases', () => {
    renderSection();
    expect(screen.getByRole('link', { name: /alle use cases/i })).toBeInTheDocument();
  });
});
