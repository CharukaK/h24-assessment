import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '.';

describe('Button', () => {
    it('renders the children', () => {
        render(<Button>Test</Button>);

        const text = screen.getByText('Test');
        expect(text).toBeInTheDocument();
    });

    it('calls the onClick function when clicked', () => {
        const onClickMock = jest.fn();
        render(<Button onClick={onClickMock}>Test</Button>);

        const button = screen.getByRole('button');
        userEvent.click(button);

        expect(onClickMock).toHaveBeenCalled();
    });

    it('renders the default background color if none is provided', () => {
        render(<Button>Test</Button>);

        const button = screen.getByRole('button');
        expect(button).toHaveStyle('background-color: #3498db');
    });

    it('renders the provided background color', () => {
        render(<Button backgroundColor="#00bfff">Test</Button>);

        const button = screen.getByRole('button');
        expect(button).toHaveStyle('background-color: #00bfff');

    });

    it('renders the default text color if none is provided', () => {
        render(<Button>Test</Button>);

        const button = screen.getByRole('button');
        expect(button).toHaveStyle('color: #ffffff');
    });

    it('renders the provided text color', () => {
        render(<Button textColor="#000000">Test</Button>);

        const button = screen.getByRole('button');
        expect(button).toHaveStyle('color: #000000');
    });
});

