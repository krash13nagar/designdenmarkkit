import { ReactNode } from "react";
import { ActionButton } from "../../complex/imageauth/imageauth.types";

export interface imageSearchCardConfig {
    msid?: string,
    type?: string,
    name?: string,
    fromNow?: string,
    agencyName?: string,
    entityType?: string,
    imageUrl?: string,
    dataSource?: string,
    imageSource?: string,
    resolution?: string,
    ingestionDate?: string,
    ingestionDateTimestamp?: number | undefined,
    classes?: {
        "root"?: string
    }
    variant?: string
    imageCardMenuOptions?: imageCardMenuOptionsConfig[],
    onCallbackSelectImagefnc?: React.MouseEventHandler<HTMLElement>,
    actionButtonsList?: ActionButton[],
    cardStyle?: 'standard' | 'minimal',
    onCardClick?: React.MouseEventHandler<HTMLElement>
}

export interface imageCardMenuOptionsConfig {
    label: string;
    icon: ReactNode;
    onClickFnc: React.MouseEventHandler<HTMLElement>;
    children?: imageCardMenuOptionsConfig[],
}

export interface imageSearchCardHoverConfig {
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
    cardStyle?: imageSearchCardConfig['cardStyle'],
    imageCardMenuOptions?: imageCardMenuOptionsConfig[],
    showCardMenu?: boolean,
    sx?: any
}