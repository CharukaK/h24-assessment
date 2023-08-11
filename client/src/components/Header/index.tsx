import styled from "@emotion/styled";
import React from "react";

const HeaderContainer = styled.div`
    grid-area: header;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #00bfff;
    padding: 0 20px;
    height: 50px;

    strong {
        font-size: 20px;
        color: #fff;
    }

    input {
        width: 300px;
        height: 30px;
        border-radius: 5px;
        border: none;
        padding: 0 10px;
    }
`;

export function Header() {
    return (
        <HeaderContainer>
            <strong>home24</strong>
            <input placeholder={'Search'} />
        </HeaderContainer>
    )
}

