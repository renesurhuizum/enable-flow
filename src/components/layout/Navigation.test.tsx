import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Navigation } from './Navigation';

const renderNav = (path = '/') =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <Navigation />
    </MemoryRouter>
  );

describe('Navigation — render', () => {
  it('renders logo image', () => {
    renderNav();
    expect(screen.getByAltText('EnableFlow AI')).toBeInTheDocument();
  });

  it('renders all desktop nav links', () => {
    renderNav();
    // Nav has two copies of links (desktop + mobile); getAllByRole handles both
    expect(screen.getAllByRole('link', { name: 'Home' }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole('link', { name: 'Over mij' }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole('link', { name: 'Diensten' }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole('link', { name: 'Use Cases' }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole('link', { name: 'Gratis Scan' }).length).toBeGreaterThan(0);
  });

  it('renders the Plan gesprek external link', () => {
    renderNav();
    const links = screen.getAllByRole('link', { name: 'Plan gesprek' });
    expect(links.length).toBeGreaterThan(0);
    expect(links[0]).toHaveAttribute('href', expect.stringContaining('calendly.com'));
    expect(links[0]).toHaveAttribute('target', '_blank');
  });
});

describe('Navigation — mobile menu toggle', () => {
  it('menu button is initially aria-expanded=false', () => {
    renderNav();
    const btn = screen.getByRole('button', { name: /Menu openen/i });
    expect(btn).toHaveAttribute('aria-expanded', 'false');
  });

  it('clicking menu button sets aria-expanded=true', () => {
    renderNav();
    const btn = screen.getByRole('button', { name: /Menu openen/i });
    fireEvent.click(btn);
    // aria-label changes to "Menu sluiten" when open
    expect(screen.getByRole('button', { name: /Menu sluiten/i })).toHaveAttribute('aria-expanded', 'true');
  });

  it('clicking open menu button again closes it', () => {
    renderNav();
    const btn = screen.getByRole('button', { name: /Menu openen/i });
    fireEvent.click(btn);
    fireEvent.click(screen.getByRole('button', { name: /Menu sluiten/i }));
    expect(screen.getByRole('button', { name: /Menu openen/i })).toHaveAttribute('aria-expanded', 'false');
  });
});

describe('Navigation — active path highlighting', () => {
  it('does not crash on root path', () => {
    renderNav('/');
  });

  it('does not crash on /diensten path', () => {
    renderNav('/diensten');
  });

  it('does not crash on /scan path', () => {
    renderNav('/scan');
  });

  it('home link href is "/"', () => {
    renderNav('/');
    const homeLinks = screen.getAllByRole('link', { name: 'Home' });
    homeLinks.forEach(l => expect(l).toHaveAttribute('href', '/'));
  });
});
