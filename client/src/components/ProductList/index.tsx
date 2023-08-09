import React from "react";
import { Category } from "../../types";
import { ArticleCard } from "../ArticleCard";

interface ProductListProps {
    categories: Category[];
}

export function ProductList(props: ProductListProps) {
    const { categories } = props;

    const articles = categories.map((category) => {
        return category.categoryArticles.articles.map((article, i) => {
            return <ArticleCard key={`${article.name.replaceAll(' ', '_').trim()}_${i}`} article={article} />;
        });
    });

    return (
        <div className={'content'}>
            {
                categories.length ? (
                    <h1>
                        {categories[0].name}
                        <small> ({categories[0].articleCount})</small>
                    </h1>
                ) : (
                    'Loading...'
                )
            }
            <div className={'articles'}>{articles}</div>
        </div>
    )
}



