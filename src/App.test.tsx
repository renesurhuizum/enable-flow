import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { DienstenPage } from './pages/DienstenPage';
import { UseCasesPage } from './pages/UseCasesPage';
import { ContactPage } from './pages/ContactPage';
import { ScanPage } from './pages/ScanPage';

// Render the full route tree via MemoryRouter (bypasses BrowserRouter in App.tsx)
function renderRoute(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/over-mij" element={<Layout><AboutPage /></Layout>} />
        <Route path="/diensten" element={<Layout><DienstenPage /></Layout>} />
        <Route path="/use-cases" element={<Layout><UseCasesPage /></Layout>} />
        <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
        <Route path="/scan" element={<Layout><ScanPage /></Layout>} />
      </Routes>
    </MemoryRouter>
  );
}

describe('App routing', () => {
  it('renders HomePage on "/"', () => {
    renderRoute('/');
    expect(screen.getByText(/Stop met/i)).toBeInTheDocument();
  });

  it('renders AboutPage on "/over-mij"', () => {
    renderRoute('/over-mij');
    expect(screen.getByText(/Noord-Nederlandse bedrijven de AI-slag/i)).toBeInTheDocument();
  });

  it('renders DienstenPage on "/diensten"', () => {
    renderRoute('/diensten');
    expect(screen.getByText(/Van scan naar automatisering in 3 stappen/i)).toBeInTheDocument();
  });

  it('renders UseCasesPage on "/use-cases"', () => {
    renderRoute('/use-cases');
    expect(screen.getByText(/Wat wij voor jouw team automatiseren/i)).toBeInTheDocument();
  });

  it('renders ContactPage on "/contact"', () => {
    renderRoute('/contact');
    expect(screen.getByText(/Plan een gratis gesprek met René/i)).toBeInTheDocument();
  });

  it('renders ScanPage on "/scan"', () => {
    renderRoute('/scan');
    expect(screen.getByText(/Ontdek in 10 minuten/i)).toBeInTheDocument();
  });

  it('each route includes the Navigation', () => {
    renderRoute('/');
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('each route includes the Footer', () => {
    renderRoute('/over-mij');
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('unknown route renders nothing (no match)', () => {
    renderRoute('/bestaat-niet');
    // No page-specific content — but nav and footer also won't render
    expect(screen.queryByText(/Stop met/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Over mij/i)).not.toBeInTheDocument();
  });
});
