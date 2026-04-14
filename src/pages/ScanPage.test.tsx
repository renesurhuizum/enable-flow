import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ScanPage } from './ScanPage';

describe('ScanPage', () => {
  const renderPage = () =>
    render(<MemoryRouter><ScanPage /></MemoryRouter>);

  it('shows nieuwe hero headline', () => {
    renderPage();
    expect(
      screen.getByText(/Ontdek in 10 minuten wat AI voor jouw bedrijf kan doen/i)
    ).toBeInTheDocument();
  });

  it('shows drie benefit-boxen', () => {
    renderPage();
    expect(screen.getByText('AI Readiness Score')).toBeInTheDocument();
    expect(screen.getByText('Top 3 kansen')).toBeInTheDocument();
    expect(screen.getByText('Indicatieve ROI')).toBeInTheDocument();
  });

  it('bevat geen sky gradient achtergrond', () => {
    const { container } = renderPage();
    expect(container.innerHTML).not.toMatch(/from-sky-/);
  });
});
