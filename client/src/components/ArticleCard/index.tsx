import React from "react";
import { Article } from "../../types";

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

export function ArticleCard(props: ArticleCardProps) {
    const { article } = props;

    // TODO: fix intl for this component
    return (
        <div className={'article'}>
            <img src={article.images[0].path} alt={article.name} />
            <div>{article.name}</div>
            <div>{article.prices.regular.value / 100}</div>
            <section role="button">Add to cart</section>
        </div>
    )
}


