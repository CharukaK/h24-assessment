import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from '.';

describe('Card', () => {
    it('renders the children', () => {
        render(<Card>Test</Card>);

        const text = screen.getByText('Test');
        expect(text).toBeInTheDocument();
    });

    it('renders the default background color if none is provided', () => {
        render(<Card>Test</Card>);

        const card = screen.getByTestId('card-containter');
        expect(card).toHaveStyle('background-color: #fff');
    });
});