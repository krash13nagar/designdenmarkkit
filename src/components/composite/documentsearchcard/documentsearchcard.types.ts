import { ReactNode } from "react";
import { ActionButton } from "../../complex/imageauth/imageauth.types";

export interface documentSearchCardConfig {
    id?: string,
    type?: string,
    title?: string,
    subtitle?: string,
    fromNow?: string,
    agencyName?: string,
    entityType?: string,
    imageUrl?: string,
    dataSource?: string,
    ingestionDate?: string,
    ingestionDateTimestamp?: number | undefined,
    classes?: {
        "root"?: string
    }
    variant?: string
    cardMenuOptions?: documentCardMenuOptionsConfig[],
    actionButtonsList?: ActionButton[],
    cardStyle?: 'standard' | 'minimal',
    onCardClick?: React.MouseEventHandler<HTMLElement>,
    ImageFallback?: ReactNode,
    status?: string,
    handleOpenInNew?: () => void,
    selected?: boolean
}

export interface documentCardMenuOptionsConfig {
    label: string;
    icon: ReactNode;
    onClickFnc: React.MouseEventHandler<HTMLElement>;
    children?: documentCardMenuOptionsConfig[],
}

export interface documentSearchCardHoverConfig {
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
    cardStyle?: documentSearchCardConfig['cardStyle'],
    cardMenuOptions?: documentCardMenuOptionsConfig[],
    showCardMenu?: boolean,
    handleOpenInNew?: () => void,
    title?: string,
    subtitle?: string
}