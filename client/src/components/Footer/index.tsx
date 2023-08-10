import React from "react";
import styled from "@emotion/styled";

const FooterContainer = styled.div`
    grid-area: footer;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #00bfff;
    padding: 0 20px;
    height: 50px;
    color: #fff;
`;

export function Footer() {
    return (
        <FooterContainer>
            Alle Preise sind in Euro (€) inkl. gesetzlicher Umsatzsteuer und Versandkosten.
        </FooterContainer>
    )
}


