import React from "react";
import { Category } from "../../types";

interface SidebarProps {
    categories: Category[];
}

export function Sidebar(props: SidebarProps) {
    const { categories } = props;
    return (
        <div className={'sidebar'}>
            <h3>Kategorien</h3>
            {
                categories.length ? (
                    <ul>
                        {categories[0].childrenCategories.list.map(({ name, urlPath }) => {
                            return (
                                <li>
                                    <a href={`/${urlPath}`}>{name}</a>
                                </li>
                            );
                        })}
                    </ul>
                ) : (
                    'Loading...'
                )
            }
        </div>
    )
}



