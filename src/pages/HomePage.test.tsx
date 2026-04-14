import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { HomePage } from './HomePage';

describe('HomePage', () => {
  const renderPage = () =>
    render(<MemoryRouter><HomePage /></MemoryRouter>);

  it('renders without crashing', () => {
    renderPage();
  });

  it('shows hero headline', () => {
    renderPage();
    expect(screen.getByText(/Stop met/i)).toBeInTheDocument();
    expect(screen.getByText(/werk doen/i)).toBeInTheDocument();
  });

  it('shows hero subtitle text', () => {
    renderPage();
    expect(
      screen.getByText(/Enable Flow implementeert AI-automatisering/i)
    ).toBeInTheDocument();
  });

  it('shows gratis scan CTA link', () => {
    renderPage();
    const links = screen.getAllByRole('link', { name: /gratis scan/i });
    expect(links.length).toBeGreaterThanOrEqual(1);
  });

  it('shows ROI calculator card with default values', () => {
    renderPage();
    expect(screen.getByText(/Bereken jouw besparing/i)).toBeInTheDocument();
    expect(screen.getByText(/Maandelijkse besparing/i)).toBeInTheDocument();
  });

  it('ROI card shows yearly amount label', () => {
    renderPage();
    expect(screen.getByText('Per jaar')).toBeInTheDocument();
  });

  it('FAQ section is present with a question', () => {
    renderPage();
    expect(
      screen.getByText(/Wat kost een traject bij Enable Flow/i)
    ).toBeInTheDocument();
  });

  it('FAQ answer is hidden until clicked', () => {
    renderPage();
    expect(
      screen.queryByText(/We starten altijd met een AI Strategiesessie/i)
    ).not.toBeInTheDocument();
    fireEvent.click(screen.getByText(/Wat kost een traject bij Enable Flow/i));
    expect(
      screen.getByText(/We starten altijd met een AI Strategiesessie/i)
    ).toBeInTheDocument();
  });

  it('shows social proof / stats section', () => {
    renderPage();
    // Hero stats block — multiple elements contain "uur", use getAllByText
    const uurElements = screen.getAllByText(/uur/i);
    expect(uurElements.length).toBeGreaterThan(0);
  });

  it('shows Veelgestelde vragen heading', () => {
    renderPage();
    expect(screen.getByText('Veelgestelde vragen')).toBeInTheDocument();
  });

  it('ROI slider changes update the calculation display', () => {
    renderPage();
    const sliders = screen.getAllByRole('slider');
    // employees slider is the first one
    fireEvent.change(sliders[0], { target: { value: '50' } });
    // The formula text below the result updates
    expect(screen.getByText(/50 personen/i)).toBeInTheDocument();
  });
});
