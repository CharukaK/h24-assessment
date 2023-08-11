import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Header } from '.';

describe('Header', () => {
  it('renders the title and search input', () => {
    render(<Header />);

    const title = screen.getByText('home24');
    expect(title).toBeInTheDocument();

    const searchInput = screen.getByPlaceholderText('Search');
    expect(searchInput).toBeInTheDocument();
  });

  it('updates the search input value when typed in', () => {
    render(<Header />);

    const searchInput = screen.getByPlaceholderText('Search');
    userEvent.type(searchInput, 'test');

    expect(searchInput).toHaveValue('test');
  });
});