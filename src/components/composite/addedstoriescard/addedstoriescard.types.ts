import { ReactNode } from "react";

export interface AddedStoriesCardProps {
    removeIcon?: ReactNode,
    popOutIcon?: ReactNode,
    handleRemove?: React.MouseEventHandler<HTMLSpanElement>,
    handlePopOut?: (event: React.MouseEvent<HTMLSpanElement>, sourceUrl: string) => void
    classes?: { [key: string]: string },
    text: string,
    checked?: boolean,
    showCheckbox?: boolean,
    handleCheckboxChange?: React.ChangeEventHandler<HTMLInputElement>,
    popOutTooltip?: string,
    removeTooltip?: string,
    sourceUrl?: string,
    showPopOutIcon?: boolean
}