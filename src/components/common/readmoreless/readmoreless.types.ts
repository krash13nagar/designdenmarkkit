import {ReactNode} from 'react';

export interface ReadMoreLessProps{
    content: string,
    lineLimit?: number,
    charLimit?: number,    
    variant?: string,
    className?: string,
    displayText?: {
        more?: string,
        less?:string
    },
    cssConfig?: React.CSSProperties;
} 