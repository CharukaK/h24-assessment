import styled from "@emotion/styled";
import React from "react";
import { Category } from "../../types";

interface SidebarProps {
    categories: Category[];
    isLoading: boolean;
}

const SideBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    max-height: 100vh;
    overflow-y: auto;
    margin-left: 5px;
    padding: 5px;
`;

const CategoryItem = styled.li`
    a {
        text-decoration: none;
        color: #5b5e61
    }

    a:hover {
        color: #d14327;
    }
`;

export function Sidebar(props: SidebarProps) {
    const { categories, isLoading } = props;
    return (
        <SideBarContainer className={'sidebar'}>
            <h3>Kategorien</h3>
            {isLoading && 'Loading...'}
            {!isLoading && (
                <ul>
                    {categories[0].childrenCategories.list.map(({ name, urlPath }, i) => {
                        return (
                            <CategoryItem key={`${name.replaceAll(' ', '_').trim()}_${i}`}>
                                <a href={`/${urlPath}`}>{name}</a>
                            </CategoryItem>
                        );
                    })}
                </ul>
            )}
        </SideBarContainer>
    )
}



