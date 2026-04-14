import { render, screen, fireEvent } from '@testing-library/react';
import { ContactForm } from './ContactForm';

describe('ContactForm — render', () => {
  it('renders without crashing', () => {
    render(<ContactForm />);
  });

  it('shows the main heading when showContactHeader=true (default)', () => {
    render(<ContactForm />);
    expect(screen.getByText(/Plan een gratis gesprek in/i)).toBeInTheDocument();
  });

  it('hides the main heading when showContactHeader=false', () => {
    render(<ContactForm showContactHeader={false} />);
    expect(screen.queryByText(/Plan een gratis gesprek in/i)).not.toBeInTheDocument();
  });

  it('shows the Gratis AI Consult sub-heading', () => {
    render(<ContactForm />);
    expect(screen.getByText('Gratis AI Consult')).toBeInTheDocument();
  });

  it('shows all required form fields', () => {
    render(<ContactForm />);
    expect(screen.getByLabelText(/Naam/i)).toBeInTheDocument();
    // "Bedrijf *" label — avoid matching "Bedrijfsgrootte" by anchoring to the id
    expect(screen.getByRole('textbox', { name: /^Bedrijf/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/E-mailadres/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Telefoonnummer/i)).toBeInTheDocument();
  });

  it('shows sector and bedrijfsgrootte dropdowns', () => {
    render(<ContactForm />);
    expect(screen.getByLabelText(/Bedrijfsgrootte/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Sector/i)).toBeInTheDocument();
  });

  it('shows the submit button with correct initial text', () => {
    render(<ContactForm />);
    expect(
      screen.getByRole('button', { name: /Plan gratis consult in/i })
    ).toBeInTheDocument();
  });

  it('shows the Waarom EnableFlow sidebar', () => {
    render(<ContactForm />);
    expect(screen.getByText(/Waarom EnableFlow/i)).toBeInTheDocument();
  });
});

describe('ContactForm — email validation', () => {
  it('does not show email error when field is empty', () => {
    render(<ContactForm />);
    expect(
      screen.queryByText(/Voer een geldig e-mailadres in/i)
    ).not.toBeInTheDocument();
  });

  it('shows inline error for invalid email input', () => {
    render(<ContactForm />);
    const emailInput = screen.getByLabelText(/E-mailadres/i);
    fireEvent.change(emailInput, { target: { value: 'not-an-email' } });
    expect(
      screen.getByText(/Voer een geldig e-mailadres in/i)
    ).toBeInTheDocument();
  });

  it('hides inline error when email becomes valid', () => {
    render(<ContactForm />);
    const emailInput = screen.getByLabelText(/E-mailadres/i);
    fireEvent.change(emailInput, { target: { value: 'bad' } });
    expect(screen.getByText(/Voer een geldig e-mailadres in/i)).toBeInTheDocument();
    fireEvent.change(emailInput, { target: { value: 'valid@example.com' } });
    expect(
      screen.queryByText(/Voer een geldig e-mailadres in/i)
    ).not.toBeInTheDocument();
  });
});

describe('ContactForm — field interactions', () => {
  it('naam field updates on change', () => {
    render(<ContactForm />);
    const input = screen.getByLabelText(/Naam/i) as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'Jan Jansen' } });
    expect(input.value).toBe('Jan Jansen');
  });

  it('Microsoft 365 radio buttons are present', () => {
    render(<ContactForm />);
    expect(screen.getByRole('radio', { name: 'Ja' })).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: 'Nee' }).checked).toBe(false);
  });

  it('selecting a radio sets it as checked', () => {
    render(<ContactForm />);
    const jaRadio = screen.getByRole('radio', { name: 'Ja' }) as HTMLInputElement;
    fireEvent.click(jaRadio);
    expect(jaRadio.checked).toBe(true);
  });

  it('shows timeline radio options', () => {
    render(<ContactForm />);
    expect(screen.getByRole('radio', { name: /Zo snel mogelijk/i })).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: /Binnen 1-3 maanden/i })).toBeInTheDocument();
  });

  it('textarea accepts uitdaging text', () => {
    render(<ContactForm />);
    const textarea = screen.getByPlaceholderText(/tijdgebrek/i) as HTMLTextAreaElement;
    fireEvent.change(textarea, { target: { value: 'Te veel handmatig werk' } });
    expect(textarea.value).toBe('Te veel handmatig werk');
  });
});
