import { ReactNode } from "react";
import { ActionButton } from "../../complex/imageauth/imageauth.types";

export interface articleSearchCardConfig {
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
    cardMenuOptions?: articleCardMenuOptionsConfig[],
    actionButtonsList?: ActionButton[],
    cardStyle?: 'standard' | 'minimal',
    onCardClick?: React.MouseEventHandler<HTMLElement>,
    ImageFallback?: ReactNode,
    status?: string,
    handleOpenInNew?: () => void,
    selected?: boolean
}

export interface articleCardMenuOptionsConfig {
    label: string;
    icon: ReactNode;
    onClickFnc: React.MouseEventHandler<HTMLElement>;
    children?: articleCardMenuOptionsConfig[],
}

export interface articleSearchCardHoverConfig {
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
    cardStyle?: articleSearchCardConfig['cardStyle'],
    cardMenuOptions?: articleCardMenuOptionsConfig[],
    showCardMenu?: boolean,
    handleOpenInNew?: () => void,
    title?: string,
    subtitle?: string
}