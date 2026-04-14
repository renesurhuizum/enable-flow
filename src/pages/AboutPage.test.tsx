import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AboutPage } from './AboutPage';

describe('AboutPage', () => {
  const renderPage = () =>
    render(<MemoryRouter><AboutPage /></MemoryRouter>);

  it('renders without crashing', () => {
    renderPage();
  });

  it('shows new hero headline', () => {
    renderPage();
    expect(
      screen.getByText(/Noord-Nederlandse bedrijven de AI-slag/i)
    ).toBeInTheDocument();
  });

  it('shows René motivatie tekst', () => {
    renderPage();
    expect(
      screen.getByText(/AI-ontwikkelingen gaan sneller dan ooit/i)
    ).toBeInTheDocument();
  });

  it('shows drie werkwijze-kaarten', () => {
    renderPage();
    expect(screen.getByText('Eerlijk & nuchter')).toBeInTheDocument();
    expect(screen.getByText('Lokaal & persoonlijk')).toBeInTheDocument();
    expect(screen.getByText('Hands-on & praktisch')).toBeInTheDocument();
  });

  it('shows drie competentie-kaarten', () => {
    renderPage();
    expect(screen.getByText('Werkprocessen doorgronden')).toBeInTheDocument();
    expect(screen.getByText('AI-tools implementeren')).toBeInTheDocument();
    expect(screen.getByText('Teams begeleiden & trainen')).toBeInTheDocument();
  });

  it('bevat geen teal kleurklassen meer', () => {
    const { container } = renderPage();
    expect(container.innerHTML).not.toMatch(/text-teal-|bg-teal-|border-teal-/);
  });
});
