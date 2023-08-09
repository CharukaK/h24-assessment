import React from 'react';

import { Category, Article } from './types';
import './ProductList.css';
import './ProductList.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Sidebar } from './components/Sidebar';
import { ProductList } from './components/ProductList';

var intlNumberFormatValues = ['de-DE', 'currency', 'EUR'];

export var formatter = new Intl.NumberFormat(intlNumberFormatValues[0], {
    style: intlNumberFormatValues[1],
    currency: intlNumberFormatValues[2],
});


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

    return (
        <div className={'page'}>
            <Header />
            <Sidebar categories={categories} />
            <ProductList categories={categories} />
            <Footer />
        </div>
    );
}


var PLP = () => {
    return <ArticleListComponent />;
};

export default PLP;
