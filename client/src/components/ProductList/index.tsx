import styled from "@emotion/styled";
import React from "react";
import { Category } from "../../types";
import { ProductCard } from "../ProductCard";
import { Button, StyledButton } from "../../ui-commons";

interface ProductListProps {
    categories: Category[];
    isLoading: boolean;
    loadMore: () => void;
}

const ContentContainer = styled.div`
    grid-area: content;
    display: flex;
    flex-direction: column;
    margin-right: 5px;
`;

const LoadMoreButton = styled(StyledButton)`
    margin-top: 10px;
    margin-bottom: 10px;
    align-self: center;
    background-color: #6e6e6e;
`;

const ProductListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 10px;
    margin-bottom: 10px;
`;


export function ProductList(props: ProductListProps) {
    const { categories, isLoading, loadMore } = props;

    const articles = categories.map((category) => {
        return category.categoryArticles.articles.map((article, i) => {
            return <ProductCard key={`${article.name.replaceAll(' ', '_').trim()}_${i}`} article={article} />;
        });
    });

    return (
        <ContentContainer>
            {isLoading && 'Loading...'}
            {!isLoading && (
                <h1>
                    {categories[0].name}
                    <small> ({categories[0].articleCount})</small>
                </h1>
            )}
            <ProductListContainer>
                {articles}
            </ProductListContainer>
            <LoadMoreButton 
                backgroundColor={'#6e6e6e'}
                onClick={loadMore}
            >
                Load more
            </LoadMoreButton>
        </ContentContainer>
    )
}

