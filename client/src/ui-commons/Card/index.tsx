import React from "react";
import styled from "@emotion/styled";
import { PropsWithChildren } from "react";

interface CardProps {
    backgroundColor?: string;
}

interface CardContainerProps {
    backgroundColor?: string;
}

const CardContainer = styled.div`
    display: flex;
    background-color: ${(props: CardContainerProps) => props.backgroundColor || '#fff'};
    flex-direction: column;
    justify-content: space-between;
    border-radius: 5px;
    padding: 16px;center
`;


export function Card(props: PropsWithChildren<CardProps>) {
    return (
        <CardContainer backgroundColor={props.backgroundColor}>
            {props.children}
        </CardContainer>
    );
}
