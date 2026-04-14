import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { UseCasesPage } from './UseCasesPage';

describe('UseCasesPage', () => {
  const renderPage = () =>
    render(<MemoryRouter><UseCasesPage /></MemoryRouter>);

  it('renders without crashing', () => {
    renderPage();
  });

  it('shows nieuwe hero headline', () => {
    renderPage();
    expect(
      screen.getByText(/Wat wij voor jouw team automatiseren/i)
    ).toBeInTheDocument();
  });

  it('shows vier taaktype-secties', () => {
    renderPage();
    expect(screen.getByText('Communicatie automatiseren')).toBeInTheDocument();
    expect(screen.getByText('Data & rapportage')).toBeInTheDocument();
    expect(screen.getByText('Documenten & content')).toBeInTheDocument();
    expect(screen.getByText('Processen verbinden')).toBeInTheDocument();
  });

  it('shows use case kaarten met tijdsbesparing', () => {
    renderPage();
    expect(screen.getByText('E-mail drafting')).toBeInTheDocument();
    expect(screen.getByText('Vergadernotities')).toBeInTheDocument();
    expect(screen.getByText('CRM-koppelingen')).toBeInTheDocument();
  });

  it('shows callout met link naar scan', () => {
    renderPage();
    expect(
      screen.getByText(/Niet gevonden wat je zoekt/i)
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /Plan een gratis scan/i })
    ).toBeInTheDocument();
  });

  it('bevat geen industrie-indeling meer', () => {
    renderPage();
    expect(screen.queryByText('Sales & Marketing')).not.toBeInTheDocument();
    expect(screen.queryByText('Customer Service')).not.toBeInTheDocument();
    expect(screen.queryByText('HR & Recruitment')).not.toBeInTheDocument();
  });

  it('bevat geen teal kleurklassen meer', () => {
    const { container } = renderPage();
    expect(container.innerHTML).not.toMatch(/text-teal-|bg-teal-|border-teal-/);
  });
});
