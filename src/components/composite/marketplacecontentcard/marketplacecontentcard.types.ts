import { ReactNode } from "react";
import { ActionButton } from "../../complex/imageauth/imageauth.types";

export interface MarketplaceContentCardConfig {
    id?: string,
    type?: string,
    title?: string,
    subtitle?: string,
    fromNow?: string,
    agencyName?: string,
    entityType?: string,
    imageUrl?: string,
    ingestionDate?: string,
    ingestionDateTimestamp?: string | undefined,
    publishDateTimestamp?: string | undefined,
    classes?: {
        "root"?: string,
        "menuOption"?: string
    }
    variant?: string
    cardMenuOptions?: MarketplaceCardMenuOptionsConfig[],
    actionButtonsList?: ActionButton[],
    cardStyle?: 'standard' | 'minimal',
    onCardClick?: React.MouseEventHandler<HTMLElement>,
    ImageFallback?: ReactNode,
    status?: string,
    handleOpenInNew?: () => void,
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
    isChecked?: boolean,
    onCheckboxClick?: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void
}

export interface MarketplaceCardMenuOptionsConfig {
    label: string;
    onClickFnc: React.MouseEventHandler<HTMLElement>;
}



export interface MarketplaceContentCardHoverConfig {
    name?: string;
    agencyName?: string;
    dataSource?: string;
    ingestionDate?: string;
    resolution?: string;
    agencyUsageData?: any;
    onCallbackMenufnc?: React.MouseEventHandler<HTMLElement>;
    onCallbackSelectImagefnc?: React.MouseEventHandler<HTMLElement>;
    actionButtonsList?: ActionButton[],
    ingestionDateTimestamp?: number | undefined,
    cardStyle?: MarketplaceContentCardConfig['cardStyle'],
    cardMenuOptions?: MarketplaceCardMenuOptionsConfig[],
    showCardMenu?: boolean,
    handleOpenInNew?: () => void,
    title?: string,
    subtitle?: string,
}

export interface AnchorGeneric {
    [key: string]: HTMLElement;
}