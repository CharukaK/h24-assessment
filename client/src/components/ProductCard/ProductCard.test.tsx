import React from 'react';
import { render, screen } from '@testing-library/react';
import { ProductCard } from '.';
import { Article } from '../../types';

const article: Article = {
    name: 'Test Product',
    variantName: 'Test Variant',
    images: [{ path: 'test-image.jpg' }],
    prices: {
        currency: '',
        regular: {
            value: 1234,
        }
    },
};

describe('ProductCard', () => {
    it('renders the product name', () => {
        render(<ProductCard article={article} />);
        const productName = screen.getByText('Test Product');
        expect(productName).toBeInTheDocument();
    });

    it('renders the product image', () => {
        render(<ProductCard article={article} />);
        const productImage = screen.getByAltText('Test Product');
        expect(productImage).toBeInTheDocument();
    });

    it('renders the product price', () => {
        render(<ProductCard article={article} />);
        const productPrice = screen.getByText('12,34 €');
        expect(productPrice).toBeInTheDocument();
    });
});
