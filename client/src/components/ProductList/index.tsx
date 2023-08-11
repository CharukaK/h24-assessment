import styled from "@emotion/styled";
import React from "react";
import { Category } from "../../types";
import { ProductCard } from "../ProductCard";
import { StyledButton } from "../../ui-commons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

interface ProductListProps {
    categories: Category[];
    isLoading: boolean;
    loadMore: () => void;
    toggleSidebar: () => void;
}

const ContentContainer = styled.div`
    grid-area: content;
    display: flex;
    flex-direction: column;
    margin-right: 5px;

    @media (max-width: 768px) {
        margin: 20px;
    }
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

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const CategoryTitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const ShowSidebarButton = styled.div`
    position: relative;
    top: 0;
    background-color: transparent;
    border: none;
    padding: 5px 15px;
    cursor: pointer;
    font-size: 20px;
    color: #5b5e61;
    outline: none;
    display: none;

    @media (max-width: 768px) {
        display: block;
    }
`

export function ProductList(props: ProductListProps) {
    const { categories, isLoading, loadMore, toggleSidebar } = props;

    const articles = categories.map((category) => {
        return category.categoryArticles.articles.map((article, i) => {
            return <ProductCard key={`${article.name.replaceAll(' ', '_').trim()}_${i}`} article={article} />;
        });
    });

    return (
        <ContentContainer>
            {isLoading && 'Loading...'}
            {!isLoading && (
                <CategoryTitleContainer >
                    <ShowSidebarButton onClick={toggleSidebar}>
                        <FontAwesomeIcon icon={faBars} />
                    </ShowSidebarButton>
                    <h1>
                        {categories[0].name}
                        <small> ({categories[0].articleCount})</small>
                    </h1>
                </CategoryTitleContainer>
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

