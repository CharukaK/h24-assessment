import React from 'react';

import { Category } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Sidebar } from './components/Sidebar';
import { ProductList } from './components/ProductList';
import styled from '@emotion/styled';

import './App.css';
import { GET_PRODUCTS } from './graphql/queries/get-products';
import { useQuery } from '@apollo/client';
import { PRODUCTS_PER_PAGE } from './util/constants';


const PageContainer = styled.div`
    background-color: rgba(238, 238, 239, 1);
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 200px auto auto;
    grid-template-areas:
      'header header header'
      'sidebar content content'
      'footer footer footer';

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-template-areas:
            'header'
            'content'
            'footer'
    }
`;

export interface GetProductListsQuery {
    categories: Category[];
}

export function ArticleListComponent() {
    const { loading, data, fetchMore } = useQuery<GetProductListsQuery>(GET_PRODUCTS, {
        variables: {
            offset: 0,
            limit: PRODUCTS_PER_PAGE
        }
    });

    const [showSidebar, setShowSidebar] = React.useState(false);
    React.useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 768px)'); // Adjust the screen size as needed

        const handleScreenChange = (event: MediaQueryListEvent) => {
            setShowSidebar(!event.matches);
        };

        mediaQuery.addListener(handleScreenChange);

        mediaQuery.dispatchEvent(new MediaQueryListEvent('change'));

        return () => {
            mediaQuery.removeListener(handleScreenChange);
        };
    }, []);

    const handleLoadMore = () => {
        console.log(data?.categories[0].categoryArticles.articles.length || 0)
        fetchMore({
            variables: {
                offset: data?.categories[0].categoryArticles.articles.length || 0,
                limit: PRODUCTS_PER_PAGE
            },
            updateQuery: (prev, { fetchMoreResult }) => {
                if (!fetchMoreResult) return prev;
                const categoryResult = {
                    ...prev.categories[0],
                    categoryArticles: {
                        articles: [
                            ...prev.categories[0].categoryArticles.articles,
                            ...fetchMoreResult.categories[0].categoryArticles.articles
                        ]
                    }
                }
                const result = {
                    categories: [
                        categoryResult
                    ]
                }
                return result;
            }
        });
    };

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    }

    return (
        <PageContainer>
            <Header />
            <Sidebar
                categories={data?.categories || []}
                isLoading={loading}
                isOpen={showSidebar}
                toggleSidebar={toggleSidebar}
            />
            <ProductList
                categories={data?.categories || []}
                isLoading={loading}
                loadMore={handleLoadMore}
                toggleSidebar={toggleSidebar}
            />
            <Footer />
        </PageContainer>
    );
}


var PLP = () => {
    return <ArticleListComponent />;
};

export default PLP;
