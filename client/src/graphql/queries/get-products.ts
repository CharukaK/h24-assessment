import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
    query GetProducts {
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
    }
`;
