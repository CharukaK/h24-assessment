import { ReactNode } from 'react';
import React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/react';

interface TitleProps extends React.HTMLProps<HTMLHeadingElement> {
    children: ReactNode;
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    className?: string;
}



export function Title(props: React.PropsWithChildren<TitleProps>) {
    const { children, level = 1, className } = props;

    switch (level) {
        case 1:
            return <h1 className={className} >{children}</h1>;
        case 2:
            return <h2 className={className} >{children}</h2>;
        case 3:
            return <h3 className={className} >{children}</h3>;
        case 4:
            return <h4 className={className} >{children}</h4>;
        case 5:
            return <h5 className={className} >{children}</h5>;
        case 6:
            return <h6 className={className}>{children}</h6>;
        default:
            return <h1 className={className}>{children}</h1>;
    }
}

export default Title;
