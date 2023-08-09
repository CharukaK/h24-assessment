import styled from "@emotion/styled";
import React from "react";
import { Article } from "../../types";
import { Card } from '../../ui-commons';

interface ArticleCardProps {
    article: Article;
}


// export var ArticleCard = ({ article }: { article: Article }) => {
//     return (
//         <div className={'article'}>
//             <img src={article.images[0].path} />
//             <div>{article.name}</div>
//             <div>{formatter.format(article.prices.regular.value / 100)}</div>
//             <section role="button">Add to cart</section>
//         </div>
//     )
// };
//

const ArticleImage = styled.img`
    height: 200px;
    object-fit: contain;
`;


export function ArticleCard(props: ArticleCardProps) {
    const { article } = props;

    // TODO: fix intl for this component
    return (
        <Card>
            <ArticleImage src={article.images[0].path} alt={article.name} />
            <div>{article.name}</div>
            <div>{article.prices.regular.value / 100}</div>
            <section role="button">Add to cart</section>
        </Card>
    )
}


