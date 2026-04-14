import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ContactPage } from './ContactPage';

describe('ContactPage', () => {
  const renderPage = () =>
    render(<MemoryRouter><ContactPage /></MemoryRouter>);

  it('shows nieuwe hero headline', () => {
    renderPage();
    expect(
      screen.getByText(/Plan een gratis gesprek met René/i)
    ).toBeInTheDocument();
  });

  it('shows drie stats', () => {
    renderPage();
    expect(screen.getByText('24u')).toBeInTheDocument();
    expect(screen.getByText('Gratis')).toBeInTheDocument();
    expect(screen.getByText('Op locatie')).toBeInTheDocument();
  });

  it('shows directe contact links', () => {
    renderPage();
    expect(screen.getByText('E-mail')).toBeInTheDocument();
    expect(screen.getByText('Telefoon')).toBeInTheDocument();
    expect(screen.getByText('LinkedIn')).toBeInTheDocument();
  });

  it('bevat geen sky gradient achtergrond', () => {
    const { container } = renderPage();
    expect(container.innerHTML).not.toMatch(/from-sky-/);
  });
});
