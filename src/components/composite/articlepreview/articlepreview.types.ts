import { ReactNode } from "react";

export interface ArticlePreviewProps {
    title: string,
    wordCount?: string | number,
    time?: string,
    date?: string,
    synopsis?: string,
    richContent?: string,
    className?: string,
    showPopOutIcon?: boolean,
    handlePopOutClick?: React.MouseEventHandler<HTMLSpanElement>,
    popOutTooltip?: string,
    clockIcon?: ReactNode,
    popOutIcon?: ReactNode
}