import { render, screen, fireEvent } from '@testing-library/react';
import FAQ from './FAQ';

describe('FAQ — render', () => {
  it('renders without crashing', () => {
    render(<FAQ />);
  });

  it('shows the section heading', () => {
    render(<FAQ />);
    expect(screen.getByText('Veelgestelde vragen')).toBeInTheDocument();
  });

  it('renders all four question texts', () => {
    render(<FAQ />);
    expect(screen.getByText(/Wat kost een traject bij Enable Flow/i)).toBeInTheDocument();
    expect(screen.getByText(/Hoe snel zie ik resultaat/i)).toBeInTheDocument();
    expect(screen.getByText(/Moet ik al Microsoft 365/i)).toBeInTheDocument();
    expect(screen.getByText(/Kom je ook op locatie/i)).toBeInTheDocument();
  });

  it('shows + indicator when all items are closed', () => {
    render(<FAQ />);
    const plusses = screen.getAllByText('+');
    expect(plusses).toHaveLength(4);
  });
});

describe('FAQ — toggle behaviour', () => {
  it('clicking a question shows its answer', () => {
    render(<FAQ />);
    expect(screen.queryByText(/We starten altijd met een AI Strategiesessie/i)).not.toBeInTheDocument();
    fireEvent.click(screen.getByText(/Wat kost een traject bij Enable Flow/i));
    expect(screen.getByText(/We starten altijd met een AI Strategiesessie/i)).toBeInTheDocument();
  });

  it('clicking the open question again hides the answer', () => {
    render(<FAQ />);
    const q = screen.getByText(/Wat kost een traject bij Enable Flow/i);
    fireEvent.click(q);
    expect(screen.getByText(/We starten altijd met een AI Strategiesessie/i)).toBeInTheDocument();
    fireEvent.click(q);
    expect(screen.queryByText(/We starten altijd met een AI Strategiesessie/i)).not.toBeInTheDocument();
  });

  it('opening one item closes the previously open item', () => {
    render(<FAQ />);
    fireEvent.click(screen.getByText(/Wat kost een traject bij Enable Flow/i));
    expect(screen.getByText(/We starten altijd met een AI Strategiesessie/i)).toBeInTheDocument();
    // Open a different question
    fireEvent.click(screen.getByText(/Hoe snel zie ik resultaat/i));
    // First answer should be gone
    expect(screen.queryByText(/We starten altijd met een AI Strategiesessie/i)).not.toBeInTheDocument();
    // Second answer is now visible
    expect(screen.getByText(/eerste werkende automatisering/i)).toBeInTheDocument();
  });

  it('shows − indicator for the open item', () => {
    render(<FAQ />);
    fireEvent.click(screen.getByText(/Wat kost een traject bij Enable Flow/i));
    expect(screen.getByText('−')).toBeInTheDocument();
  });

  it('last FAQ question reveals locatie answer', () => {
    render(<FAQ />);
    fireEvent.click(screen.getByText(/Kom je ook op locatie/i));
    expect(screen.getByText(/altijd op locatie/i)).toBeInTheDocument();
  });
});
