import { ReactNode } from "react";

export interface ArticlePreviewCardProps {
    title: string,
    imgUrl?: string,
    wordCount?: string | number,
    date?: string
    agency?: string,
    source?: string,
    label: string,
    ctaIcon: ReactNode,
    handleCTAClick?: React.MouseEventHandler<HTMLDivElement>,
    imagePlaceholderIcon?: ReactNode,
    handleCardClick?: React.MouseEventHandler<HTMLDivElement>,
    ctaTooltipText?: string
}