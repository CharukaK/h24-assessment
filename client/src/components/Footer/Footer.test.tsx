import React from 'react';
import { render, screen } from '@testing-library/react';
import { Footer } from '.';

describe('Footer', () => {
  it('renders the text', () => {
    render(<Footer />);

    const text = screen.getByText(
      'Alle Preise sind in Euro (€) inkl. gesetzlicher Umsatzsteuer und Versandkosten.'
    );
    expect(text).toBeInTheDocument();
  });
});