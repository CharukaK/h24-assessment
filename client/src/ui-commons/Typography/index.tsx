import React from 'react';
import { css, cx } from '@emotion/css';

interface TypographyProps {
    variant?: 'heading' | 'subheading' | 'paragraph';
    className?: string;
}

export function Typography(props: React.PropsWithChildren<TypographyProps>) {
    const { children, variant = 'paragraph', className } = props;
    const getStyles = () => {

        switch (variant) {
            case 'heading':
                return css`
                    font-size: 16px;
                    font-weight: bold;
                    margin: 0;
                    /* Add more heading styles */
                `;
            case 'subheading':
                return css`
                    font-size: 16px;
                    font-weight: normal;
                    margin: 0 0 0 5px;
                    /* Add more subheading styles */
                `;
            case 'paragraph':
            default:
                return css`
                    font-size: 11px;
                    font-weight: normal;
                    /* Add more paragraph styles */
                `;
        }
    };

    return (
        <p className={`${cx(getStyles())} ${className}`}>
            {children}
        </p>
    );
}

export default Typography;

