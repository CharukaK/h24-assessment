import React from 'react';

import { Category } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Sidebar } from './components/Sidebar';
import { ProductList } from './components/ProductList';
import styled from '@emotion/styled';

import './App.css';


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


export function ArticleListComponent() {
    const [categories, setCategories] = React.useState<Category[]>([]);
    React.useEffect(() => {
        // TODO: Replace with Apolloclient
        const xhr = new XMLHttpRequest();

        xhr.open('POST', '/graphql');
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.send(JSON.stringify({
            query: `{
              categories: productLists(ids: "156126", locale: de_DE) {
                name
                articleCount
                childrenCategories: childrenProductLists {
                  list {
                    name
                    urlPath
                  }
                }
                categoryArticles: articlesList(first: 50) {
                  articles {
                    name
                    variantName
                    prices {
                      currency
                      regular {
                        value
                      }
                    }
                    images(format: WEBP, maxWidth: 200, maxHeight: 200, limit: 1) {
                      path
                    }
                  }
                }
              }
            }`,
        }));

        xhr.onload = () => {
            if (xhr.status === 200) {
                var response = JSON.parse(xhr.response);

                setCategories(response.data.categories);
            }
        }

    }, []);

    // <div className={'page'}>
    // </div>
    return (
        <PageContainer>
            <Header />
            <Sidebar categories={categories} />
            <ProductList categories={categories} />
            <Footer />
        </PageContainer>
    );
}


var PLP = () => {
    return <ArticleListComponent />;
};

export default PLP;
