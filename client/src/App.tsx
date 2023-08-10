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


const PageContainer = styled.div`
    background-color: rgba(238, 238, 239, 1);
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 200px auto auto;
    grid-template-areas:
      'header header header'
      'sidebar content content'
      'footer footer footer';
`;

export interface GetProductListsQuery {
    categories: Category[];
}

export function ArticleListComponent() {
    const { loading,data } = useQuery<GetProductListsQuery>(GET_PRODUCTS);

    // <div className={'page'}>
    // </div>
    return (
        <PageContainer>
            <Header />
            <Sidebar categories={data?.categories || []} isLoading={loading} />
            <ProductList 
                categories={data?.categories || []} 
                isLoading={loading}
            />
            <Footer />
        </PageContainer>
    );
}


var PLP = () => {
    return <ArticleListComponent />;
};

export default PLP;
