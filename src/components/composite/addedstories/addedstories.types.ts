import { ReactNode } from "react";

export interface AddedStoriesProps {
    /**
     * stories added to generate
     */
    stories: {
        title: string,
        id: string,
        sourceUrl?: string
    }[],
    /**
     *  (optional) delete icon
     */
    removeIcon?: ReactNode,
    popOutIcon?: ReactNode,
    handleCancel?: React.MouseEventHandler<HTMLButtonElement>,
    handleGenerateStory?: React.MouseEventHandler<HTMLButtonElement>,
    handleRemove?: (event: React.MouseEvent, indices: number | number[]) => void,
    handlePopOut?: React.MouseEventHandler<HTMLDivElement>,
    classes: {
        "root": string,
        "footer": string,
        "header": string,
        "stories": string,
        "multiSelectToggle": string
    },
    headerLabel?: string,
    footerNote?: string,
    footerNoteLabel?: string,
    maxStoryCount?: number,
    minStoryCount?: number,
    generateButtonLabel?: string,
    cancelButtonLabel?: string,
    removeButtonLabel?: string,
    multiSelectToggleLabel?: string,
    multiSelectLabel?: string,
    noStoriesMessage?: string

}