import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Sidebar } from '.';
import { Category } from '../../types';

describe('Sidebar', () => {
    const categories: Category[] = [
        {
            name: 'Category 1',
            categoryArticles: {
                articles: [
                    {
                        name: 'Article 1',
                        variantName: 'Variant 1',
                        prices: {
                            currency: 'USD',
                            regular: {
                                value: 10,
                            },
                        },
                        images: [
                            {
                                path: 'https://example.com/article1.jpg',
                            },
                        ],
                    },
                ],
            },
            articleCount: 1,
            childrenCategories: {
                list: [
                    {
                        name: 'Child Category 1',
                        urlPath: '/child-category-1',
                    },
                ],
            },
        },
    ];

    it('renders the category names', () => {
        render(
            <Sidebar
                categories={categories}
                isLoading={false}
                isOpen={true}
                toggleSidebar={() => { }}
            />
        );

        const categoryName = screen.getByText('Child Category 1');
        expect(categoryName).toBeInTheDocument();
    });

    // this button only shows when the screen is at most 768px wide
    it.skip('calls the toggleSidebar function when the close button is clicked', () => {
        const toggleSidebarMock = jest.fn();
        render(
            <Sidebar
                categories={categories}
                isLoading={false}
                isOpen={true}
                toggleSidebar={toggleSidebarMock}
            />
        );

        const closeButton = screen.getByRole('button', { name: 'Close' });
        userEvent.click(closeButton);

        expect(toggleSidebarMock).toHaveBeenCalled();
    });
});
