import { ReactNode } from "react";

export interface ArticlePreviewCardProps {
    title: string,
    imgUrl?: string,
    wordCount?: string | number,
    date?: string
    agency?: string,
    source?: string,
    ctaIcon?: ReactNode,
    handleCTAClick?: React.MouseEventHandler<HTMLDivElement>,
    imagePlaceholderIcon?: ReactNode,
    handleCardClick?: React.MouseEventHandler<HTMLDivElement>,
    ctaTooltipText?: string,
    classes?: {
        "root": string
    },
    leftMargin?: string,
    rightMargin?: string
    msid?: string,
    wrapperClass?: string
}