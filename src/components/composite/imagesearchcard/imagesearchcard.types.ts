import { ReactNode } from "react";
import { ActionButton } from "../../complex/imageauth/imageauth.types";

export interface imageSearchCardConfig {
    msid?: string,
    type: string,
    name: string,
    fromNow: string,
    agencyName: string,
    entityType: string,
    imageUrl: string,
    dataSource: string,
    imageSource: string,
    resolution: string,
    ingestionDate: string,
    classes?: {
        "root"?: string
    }
    variant?: string
    imageCardMenuOptions: imageCardMenuOptionsConfig[],
    onCallbackSelectImagefnc: React.MouseEventHandler<HTMLElement>,
    actionButtonsList?: ActionButton[]
}

export interface imageCardMenuOptionsConfig {
    label: string;
    icon: ReactNode;
    onClickFnc: React.MouseEventHandler<HTMLElement>;
}

export interface imageSearchCardHoverConfig {
    name: string;
    agencyName: string;
    dataSource: string;
    ingestionDate: string;
    resolution: string;
    agencyUsageData: any;
    onCallbackMenufnc: React.MouseEventHandler<HTMLElement>;
    onCallbackSelectImagefnc: React.MouseEventHandler<HTMLElement>;
    actionButtonsList: ActionButton[]
}