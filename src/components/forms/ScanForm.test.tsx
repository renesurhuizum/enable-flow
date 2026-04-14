import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ScanForm } from './ScanForm';

const renderForm = () => render(<MemoryRouter><ScanForm /></MemoryRouter>);

// Helper: fill all step-1 required fields
// Actual placeholders: "Je naam", "Bedrijfsnaam", "je@email.nl", "06-12345678"
// Selects are not labelled with htmlFor, so use getAllByRole('combobox') by index
function fillStep1() {
  fireEvent.change(screen.getByPlaceholderText('Je naam'), { target: { value: 'Test User' } });
  fireEvent.change(screen.getByPlaceholderText('Bedrijfsnaam'), { target: { value: 'Test BV' } });
  fireEvent.change(screen.getByPlaceholderText('je@email.nl'), { target: { value: 'test@example.com' } });
  fireEvent.change(screen.getByPlaceholderText('06-12345678'), { target: { value: '0612345678' } });
  const combos = screen.getAllByRole('combobox');
  fireEvent.change(combos[0], { target: { value: '11-50' } });        // Bedrijfsgrootte
  fireEvent.change(combos[1], { target: { value: 'zakelijke-dienstverlening' } }); // Sector
}

describe('ScanForm — step 1 render', () => {
  it('renders without crashing', () => {
    renderForm();
  });

  it('shows step 1 heading', () => {
    renderForm();
    expect(screen.getByText(/Stap 1/i)).toBeInTheDocument();
  });

  it('shows name, bedrijf, email, telefoon fields', () => {
    renderForm();
    expect(screen.getByPlaceholderText('Je naam')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Bedrijfsnaam')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('je@email.nl')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('06-12345678')).toBeInTheDocument();
  });

  it('shows select dropdowns for bedrijfsgrootte and sector', () => {
    renderForm();
    const combos = screen.getAllByRole('combobox');
    expect(combos.length).toBeGreaterThanOrEqual(2);
  });

  it('"Volgende" button is disabled when step-1 fields are empty', () => {
    renderForm();
    const btn = screen.getByRole('button', { name: /Volgende/i });
    expect(btn).toBeDisabled();
  });

  it('"Volgende" button is enabled once all step-1 fields are filled', () => {
    renderForm();
    fillStep1();
    expect(screen.getByRole('button', { name: /Volgende/i })).not.toBeDisabled();
  });
});

describe('ScanForm — step navigation', () => {
  it('advances to step 2 after filling step 1 and clicking Volgende', () => {
    renderForm();
    fillStep1();
    fireEvent.click(screen.getByRole('button', { name: /Volgende/i }));
    expect(screen.getByText(/Stap 2/i)).toBeInTheDocument();
  });

  it('shows AI readiness questions on step 2', () => {
    renderForm();
    fillStep1();
    fireEvent.click(screen.getByRole('button', { name: /Volgende/i }));
    // Step 2 has scoring radio questions — "AI Readiness" appears in step indicator + heading
    expect(screen.getAllByText(/AI Readiness/i).length).toBeGreaterThan(0);
  });

  it('Terug button on step 2 returns to step 1', () => {
    renderForm();
    fillStep1();
    fireEvent.click(screen.getByRole('button', { name: /Volgende/i }));
    fireEvent.click(screen.getByRole('button', { name: /← Terug/i }));
    expect(screen.getByText(/Stap 1/i)).toBeInTheDocument();
  });
});

describe('ScanForm — step 2 validations', () => {
  function goToStep2() {
    renderForm();
    fillStep1();
    fireEvent.click(screen.getByRole('button', { name: /Volgende/i }));
  }

  it('Volgende step 2 is disabled when no AI readiness questions answered', () => {
    goToStep2();
    const nextBtns = screen.getAllByRole('button', { name: /Volgende/i });
    expect(nextBtns[0]).toBeDisabled();
  });
});
