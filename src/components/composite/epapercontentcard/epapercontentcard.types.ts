import { ReactNode } from 'react';

export interface EpaperCardMenuOptionsConfig {
    label: string;
    onClickFnc: React.MouseEventHandler<HTMLElement>;
    disabled?: boolean;
    disabledMsg?: string;
}

export interface EpaperCardCheckboxProps {
    isChecked?: boolean;
    onCheckboxClick?: (event: React.ChangeEvent<HTMLInputElement>, checked?: boolean) => void;
    tooltipText?: string;
    PopperProps?: any;
}

export interface EpaperCardClassOverrides {
    root?: string;
    menuOption?: string;
}

export interface EpaperBaseCardData {
    id?: string;
    coverage: string;
    label: string;
    datasource?: string;
    typeLabel?: string;
    headerTooltipContent?: ReactNode,
}

export interface EpaperPdfCardData extends EpaperBaseCardData {
    page: string;
    fileLocation: string;
    thumbnailUrl: string;
    storyCount: string;
    rank: string;
}

export interface MergedStoryInfo {
    wordCount: number;
    page: string;
    title: string;
}

export interface EpaperStoryCardData extends EpaperBaseCardData {
    title: string;
    wordCount: number;
    imageCount: number;
    insertDate: string;
    merged: boolean;
    mergedStoryInfo?: MergedStoryInfo;
    description?: string;
    thumbnailUrl?: string;
    datasource?: string;
    typeLabel?: string;
}

export interface EpaperMissingStoriesCardData extends EpaperPdfCardData {
    indesignThumbUrl?: string[];
    missingStories?: string[];
    bookVersion?: string;
    stories?: any[];
}

export interface EpaperContentCardCommonProps {
    classes?: EpaperCardClassOverrides;
    selected?: boolean;
    imageLoading?: boolean;
    onCardClick?: React.MouseEventHandler<HTMLElement>;
    onTitleClick?: React.MouseEventHandler<HTMLElement>;
    onMergedClick?: (page: string) => void;
    headerTooltipContent?: ReactNode;
    view?: string;
    typeLabel?: string;
    checkboxProps?: EpaperCardCheckboxProps;
    showCheckbox?: boolean;
    cardMenuOptions?: EpaperCardMenuOptionsConfig[];
    showAllCheckboxes?: boolean;
}

export type EpaperContentCardProps = EpaperContentCardCommonProps &
    (
        {
            variant: 'pdf';
            data: EpaperPdfCardData;
        } |
        {
            variant: 'stories';
            data: EpaperStoryCardData;
        } |
        {
            variant: 'missingStories';
            data: EpaperMissingStoriesCardData;
        }
    );

export interface EpaperAnchorGeneric {
    [key: string]: HTMLElement | null;
}
