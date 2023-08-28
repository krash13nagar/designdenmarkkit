import { ReactNode } from "react";

export interface ArticleSelectionCardProps {
    title: string,
    synopsis?: string,
    wordCount?: string | number,
    date?: string,
    time?: string,
    agency?: string,
    source?: string,
    addIcon?: ReactNode,
    addedIcon?: ReactNode,
    popOutIcon?: ReactNode,
    clockIcon?: ReactNode,
    handleAdd?: React.MouseEventHandler<HTMLDivElement>,
    handlePopOut?: React.MouseEventHandler<HTMLSpanElement>,
    handleCardClick?: React.MouseEventHandler<HTMLDivElement>,
    publishedBy?: { hostLabel: string, hostName: string }[],
    wrapperClass?: string,
    leftSectionClass?: string,
    rightSectionClass?: string,
    isAdded?: boolean,
    popOutTooltip?: string,
    titleClass?: string,
    synopsisClass?: string,
    wordCountLabel?: string,
    publishedByLabel?: string,
    popOutIconClass?: string
}