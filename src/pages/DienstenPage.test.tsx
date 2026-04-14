import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { DienstenPage } from './DienstenPage';

describe('DienstenPage', () => {
  const renderPage = () =>
    render(<MemoryRouter><DienstenPage /></MemoryRouter>);

  it('renders without crashing', () => {
    renderPage();
  });

  it('shows nieuwe hero headline', () => {
    renderPage();
    expect(
      screen.getByText(/Van scan naar automatisering in 3 stappen/i)
    ).toBeInTheDocument();
  });

  it('shows drie pricing kaarten', () => {
    renderPage();
    expect(screen.getByText('AI STRATEGIESESSIE')).toBeInTheDocument();
    expect(screen.getByText('AI STARTER')).toBeInTheDocument();
    expect(screen.getByText('AI PARTNERSHIP')).toBeInTheDocument();
  });

  it('shows result-first taglines', () => {
    renderPage();
    expect(
      screen.getByText(/René analyseert jouw processen persoonlijk/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Jouw eerste automatisering live in 2 weken/i)
    ).toBeInTheDocument();
  });

  it('shows FAQ vragen', () => {
    renderPage();
    expect(
      screen.getByText(/Moet ik al Microsoft 365/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Kan ik stoppen wanneer ik wil/i)
    ).toBeInTheDocument();
  });

  it('FAQ opent bij klikken', () => {
    renderPage();
    const button = screen.getByText(/Moet ik al Microsoft 365/i);
    fireEvent.click(button);
    expect(
      screen.getByText(/René bekijkt samen met je/i)
    ).toBeInTheDocument();
  });

  it('bevat geen teal kleurklassen meer', () => {
    const { container } = renderPage();
    expect(container.innerHTML).not.toMatch(/text-teal-|bg-teal-|border-teal-/);
  });
});
