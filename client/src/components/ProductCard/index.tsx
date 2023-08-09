import styled from "@emotion/styled";
import React from "react";
import { Article } from "../../types";
import { Button, Card } from '../../ui-commons';
import { currencyFormatter } from "../../util";

interface ArticleCardProps {
    article: Article;
}

const ArticleImage = styled.img`
    height: 200px;
    object-fit: contain;
`;

const ProductCardTitle = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin: 0 0 5px 0;
`;

const ProductCardCurrencyText = styled.p`
    font-size: 14px;
    font-weight: 300;
    margin: 0 0 5px 0;
`;

const ProductDescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
`;


export function ProductCard(props: ArticleCardProps) {
    const { article } = props;

    // TODO: fix intl for this component
    // <section role="button">Add to cart</section>
    return (
        <Card>
            <ArticleImage src={article.images[0].path} alt={article.name} />
            <ProductDescriptionContainer>
                <ProductCardCurrencyText >{currencyFormatter.format(article.prices.regular.value / 100)}</ProductCardCurrencyText>
                <ProductCardTitle>{article.name}</ProductCardTitle>
            </ProductDescriptionContainer>
            <Button>Add to cart</Button>
        </Card>
    )
}


