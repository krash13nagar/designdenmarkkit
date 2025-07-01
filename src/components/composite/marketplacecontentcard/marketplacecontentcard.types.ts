import { ReactNode } from "react";
import { ActionButton } from "../../complex/imageauth/imageauth.types";

export interface MarketplaceContentCardConfig {
    id?: string,
    type?: string,
    title?: string,
    subtitle?: string,
    imageUrl?: string,
    ingestionDate?: string,
    ingestionDateTimestamp?: string | undefined,
    publishDateTimestamp?: string | undefined,
    classes?: {
        "root"?: string,
        "menuOption"?: string
    }
    cardMenuOptions?: MarketplaceCardMenuOptionsConfig[],
    actionButtonsList?: ActionButton[],
    cardStyle?: 'standard' | 'minimal',
    onCardClick?: React.MouseEventHandler<HTMLElement>,
    ImageFallback?: ReactNode,
    selected?: boolean,
    imagesCount?: number,
    videosCount?: number,
    wordCount?: number,
    dataSource?: {
        name: string,
        icon: ReactNode
    },
    tags?: {
        id: number,
        label: string,
        icon: React.ReactElement<any, string | React.JSXElementConstructor<any>>
    }[],
    checkboxProps?: MarketPlaceCardCheckboxProps
    headerTooltipContent?: ReactNode,
    view?: string,
    showAllCheckboxes?: boolean,
}

export interface MarketplaceCardMenuOptionsConfig {
    label: string;
    onClickFnc: React.MouseEventHandler<HTMLElement>;
}

export interface MarketPlaceCardCheckboxProps {
    isChecked?: boolean,
    onCheckboxClick?: (event: React.ChangeEvent<HTMLInputElement>, checked?: boolean) => void,
    tooltipText?: string
}


export interface AnchorGeneric {
    [key: string]: HTMLElement;
}