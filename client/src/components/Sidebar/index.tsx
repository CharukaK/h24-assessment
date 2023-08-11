import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { Category } from "../../types";

interface SidebarProps {
    categories: Category[];
    isLoading: boolean;
    isOpen: boolean;
    toggleSidebar: () => void;
}

const SideBarContainer = styled.div(({ showSidebar }: { showSidebar: boolean }) => css`
    grid-area: sidebar;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    max-height: 100vh;
    overflow-y: auto;
    margin-left: 5px;
    padding: 5px;
    display: ${showSidebar ? 'block' : 'none'};

    ul {
        list-style: none;
        margin: 0;
        padding: 0;

        li {
          margin: 0 0 0 8px;
          padding: 8px 0;
        }
    }

    @media (max-width: 768px) {
        position: absolute;
        top:70px;
        z-index: 1;
    }
`
);


const CategoryItem = styled.li`
    a {
        text-decoration: none;
        color: #5b5e61
    }

    a:hover {
        color: #d14327;
    }
`;

// close button for sidebar
const CloseButton = styled.div`
    position: relative;
    top: 0;
    background-color: transparent;
    border: none;
    padding: 5px;
    cursor: pointer;
    font-size: 12px;
    color: #5b5e61;
    outline: none;
    display: none;

    @media (max-width: 768px) {
        display: block;
    }
`;


export function Sidebar(props: SidebarProps) {
    const { categories, isLoading, isOpen, toggleSidebar } = props;
    return (
        <SideBarContainer showSidebar={isOpen}>
            <CloseButton onClick={toggleSidebar}>&larr; Hide</CloseButton>
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



