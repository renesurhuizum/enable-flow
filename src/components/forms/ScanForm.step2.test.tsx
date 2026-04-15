import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ScanForm } from './ScanForm';

const renderForm = () => render(<MemoryRouter><ScanForm /></MemoryRouter>);

// Fill step 1 and advance
function fillAndAdvanceStep1() {
  fireEvent.change(screen.getByPlaceholderText('Je naam'), { target: { value: 'Test User' } });
  fireEvent.change(screen.getByPlaceholderText('Bedrijfsnaam'), { target: { value: 'Test BV' } });
  fireEvent.change(screen.getByPlaceholderText('je@email.nl'), { target: { value: 'test@example.com' } });
  fireEvent.change(screen.getByPlaceholderText('06-12345678'), { target: { value: '0612345678' } });
  const combos = screen.getAllByRole('combobox');
  fireEvent.change(combos[0], { target: { value: '11-50' } });
  fireEvent.change(combos[1], { target: { value: 'zakelijke-dienstverlening' } });
  fireEvent.click(screen.getByRole('button', { name: /Volgende/i }));
}

// Click the last radio in each named group (val=3 = highest score)
// Radio inputs are sr-only — must click the input element directly, not label text
function fillStep2Radios(container: HTMLElement) {
  const clickLastInGroup = (name: string) => {
    const radios = container.querySelectorAll<HTMLInputElement>(`input[name="${name}"]`);
    if (radios.length > 0) fireEvent.click(radios[radios.length - 1]);
  };

  // Dimensie A — Teamgereedheid
  clickLastInGroup('teamVertrouwdheid');   // val=3: "Dagelijks gebruik"
  clickLastInGroup('managementSteun');     // val=3: "Actief voorstander"

  // Dimensie B — Procesrijpheid
  clickLastInGroup('procesStandaard');     // val=3: "Volledig gedocumenteerd"
  clickLastInGroup('repetieveUren');       // val=3: "Meer dan 30u"

  // Dimensie C — Datagereedheid
  clickLastInGroup('dataOpslag');          // val=3: "Centraal & toegankelijk"
  clickLastInGroup('dataKwaliteit');       // val=3: "Hoge kwaliteit"

  // Dimensie D — Technische basis
  clickLastInGroup('cloudGebruik');        // val=3: "Volledig geïntegreerd"
  clickLastInGroup('systeemKoppeling');    // val=3: "Volledig geïntegreerd"

  // Dimensie E — Urgentie & Ambitie
  clickLastInGroup('urgentie');            // val=3: "Topprioriteit"

  // Primair doel (string-value radio) — click first option
  const primairDoelRadios = container.querySelectorAll<HTMLInputElement>('input[name="primairDoel"]');
  if (primairDoelRadios.length > 0) fireEvent.click(primairDoelRadios[0]);
}

describe('ScanForm — step 2 full interaction', () => {
  it('step 2 Volgende becomes enabled after answering all questions', () => {
    const { container } = renderForm();
    fillAndAdvanceStep1();
    fillStep2Radios(container);
    const nextBtns = screen.getAllByRole('button', { name: /Volgende/i });
    expect(nextBtns[0]).not.toBeDisabled();
  });

  it('advancing from step 2 to step 3 shows ROI & Resultaat', () => {
    const { container } = renderForm();
    fillAndAdvanceStep1();
    fillStep2Radios(container);
    const nextBtns = screen.getAllByRole('button', { name: /Volgende/i });
    fireEvent.click(nextBtns[0]);
    expect(screen.getByText(/Stap 3/i)).toBeInTheDocument();
  });

  it('step 3 shows estimated monthly savings in euros', () => {
    const { container } = renderForm();
    fillAndAdvanceStep1();
    fillStep2Radios(container);
    fireEvent.click(screen.getAllByRole('button', { name: /Volgende/i })[0]);
    // Step 3 renders ROI card with euro amounts
    const euroAmounts = screen.getAllByText(/€\d/);
    expect(euroAmounts.length).toBeGreaterThan(0);
  });

  it('step 3 shows ROI & Resultaat heading in step indicator', () => {
    const { container } = renderForm();
    fillAndAdvanceStep1();
    fillStep2Radios(container);
    fireEvent.click(screen.getAllByRole('button', { name: /Volgende/i })[0]);
    expect(screen.getByText('ROI & Resultaat')).toBeInTheDocument();
  });

  it('Terug from step 3 returns to step 2', () => {
    const { container } = renderForm();
    fillAndAdvanceStep1();
    fillStep2Radios(container);
    fireEvent.click(screen.getAllByRole('button', { name: /Volgende/i })[0]);
    fireEvent.click(screen.getAllByRole('button', { name: /← Terug/i })[0]);
    expect(screen.getAllByText(/AI Readiness/i).length).toBeGreaterThan(0);
  });

  it('step 3 shows the AI Readiness score percent', () => {
    const { container } = renderForm();
    fillAndAdvanceStep1();
    fillStep2Radios(container);
    fireEvent.click(screen.getAllByRole('button', { name: /Volgende/i })[0]);
    // Score = 100% since all fields are set to maximum
    expect(screen.getByText('100')).toBeInTheDocument();
  });
});
