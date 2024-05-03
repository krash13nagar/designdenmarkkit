import { ReactNode } from "react";

export interface ArticlePreviewCardProps {
    title: string,
    imgUrl?: string,
    wordCount?: string | number,
    date?: string
    agency?: string,
    source?: string,
    ctaIcon?: ReactNode,
    handleCTAClick?: React.MouseEventHandler<any>,
    imagePlaceholderIcon?: ReactNode,
    handleCardClick?: React.MouseEventHandler<HTMLDivElement>,
    ctaTooltipText?: string,
    classes?: {
        "root": string
    },
    leftMargin?: string,
    rightMargin?: string
    id?: string,
    idLabel?: string,
    wrapperClass?: string,
    showCta?: boolean,
    showRadio?: boolean,
    selectedRadioValue?: string | number,
    radioValue?: string | number,
    handleRadioChange?: React.ChangeEventHandler<HTMLInputElement>,
    synopsis?: string,
    richContent?: string,
    showExpandMore?: boolean
}