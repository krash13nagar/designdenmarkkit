import { ReactNode } from 'react';

export interface ImageWithFallbackProps {
    svgWidth?: string,
    svgHeight?: string,
    placeholderIcon: ReactNode,
    showLoaderWhenLoading?: boolean,
    showFallbackBorder?: boolean,
    src: string
    width?: string,
    height?: string,
    [key: string]: any
}