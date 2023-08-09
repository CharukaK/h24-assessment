import React, { MouseEventHandler } from 'react';
import { css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    backgroundColor?: string;
    textColor?: string;
}

const buttonStyles: SerializedStyles = css`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const StyledButton = styled.button<ButtonProps>`
  ${buttonStyles}
  background-color: ${props => props.backgroundColor || '#3498db'};
  color: ${props => props.textColor || '#ffffff'};
`;


export function Button(props: React.PropsWithChildren<ButtonProps>) {
    const { children, onClick, backgroundColor, textColor } = props;
    return (
        <StyledButton
            onClick={onClick}
            backgroundColor={backgroundColor}
            textColor={textColor}
        >
            {children}
        </StyledButton>
    );
}

export default Button;
