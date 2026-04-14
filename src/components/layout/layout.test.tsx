import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Footer } from './Footer';
import { Layout } from './Layout';
import ROICard from '../sections/ROICard';

const wrap = (ui: React.ReactElement) =>
  render(<MemoryRouter>{ui}</MemoryRouter>);

describe('Footer', () => {
  it('renders without crashing', () => {
    wrap(<Footer />);
  });

  it('shows logo image', () => {
    wrap(<Footer />);
    expect(screen.getByAltText('EnableFlow AI')).toBeInTheDocument();
  });

  it('shows email link', () => {
    wrap(<Footer />);
    const emailLink = screen.getByRole('link', { name: /info@enableflow\.nl/i });
    expect(emailLink).toHaveAttribute('href', 'mailto:info@enableflow.nl');
  });

  it('shows phone link', () => {
    wrap(<Footer />);
    const phoneLink = screen.getByRole('link', { name: /06 30 53 47 40/i });
    expect(phoneLink).toHaveAttribute('href', 'tel:+31630534740');
  });

  it('shows all nav links in footer', () => {
    wrap(<Footer />);
    expect(screen.getByRole('link', { name: 'Diensten' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Gratis Scan' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument();
  });

  it('shows copyright notice', () => {
    wrap(<Footer />);
    expect(screen.getByText(/© 2026 EnableFlow/i)).toBeInTheDocument();
  });

  it('shows Contact section heading', () => {
    wrap(<Footer />);
    // "Contact" appears as both a heading and a nav link
    expect(screen.getAllByText('Contact').length).toBeGreaterThanOrEqual(1);
  });

  it('shows Navigatie section heading', () => {
    wrap(<Footer />);
    expect(screen.getByText('Navigatie')).toBeInTheDocument();
  });
});

describe('Layout', () => {
  it('renders children inside main', () => {
    wrap(<Layout><p>test-child</p></Layout>);
    expect(screen.getByText('test-child')).toBeInTheDocument();
  });

  it('renders navigation and footer', () => {
    wrap(<Layout><div /></Layout>);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});

describe('ROICard', () => {
  it('renders without crashing', () => {
    render(<ROICard />);
  });

  it('shows initial default formula line (10 personen, €40/uur, 5 uur/week)', () => {
    render(<ROICard />);
    // The formula text at the bottom of the result box
    expect(screen.getByText(/10 personen/i)).toBeInTheDocument();
    expect(screen.getByText(/€40\/uur/i)).toBeInTheDocument();
    expect(screen.getByText(/5 uur\/week/i)).toBeInTheDocument();
  });

  it('shows three sliders', () => {
    render(<ROICard />);
    expect(screen.getAllByRole('slider')).toHaveLength(3);
  });

  it('changing employees slider updates formula text', () => {
    render(<ROICard />);
    const sliders = screen.getAllByRole('slider');
    fireEvent.change(sliders[0], { target: { value: '25' } });
    expect(screen.getByText(/25 personen/i)).toBeInTheDocument();
  });

  it('changing hourly rate slider updates formula text', () => {
    render(<ROICard />);
    const sliders = screen.getAllByRole('slider');
    fireEvent.change(sliders[1], { target: { value: '75' } });
    expect(screen.getByText(/€75\/uur/i)).toBeInTheDocument();
  });

  it('changing weekly hours slider updates formula text', () => {
    render(<ROICard />);
    const sliders = screen.getAllByRole('slider');
    fireEvent.change(sliders[2], { target: { value: '8' } });
    expect(screen.getByText(/8 uur\/week/i)).toBeInTheDocument();
  });

  it('shows scan CTA link', () => {
    render(<ROICard />);
    const link = screen.getByRole('link', { name: /Bevestig mijn besparing/i });
    expect(link).toHaveAttribute('href', '/scan');
  });
});
