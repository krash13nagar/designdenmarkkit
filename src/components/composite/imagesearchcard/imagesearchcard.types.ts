import { ReactNode } from "react";

export interface imageSearchCardConfig {
    msid?:string,
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
    imageCardMenuOptions:imageCardMenuOptionsConfig[],
    onCallbackSelectImagefnc: (e: React.SyntheticEvent<HTMLElement>)=>void;
}

export interface imageCardMenuOptionsConfig {
    label: string;
    icon: ReactNode;
    onClickFnc: (e: React.SyntheticEvent<HTMLElement>) => void;
}

export interface imageSearchCardHoverConfig {
    name: string;
	agencyName: string;
	dataSource: string;
	ingestionDate : string;
    resolution: string;
    agencyUsageData: any;
    onCallbackMenufnc: (e: React.SyntheticEvent<HTMLElement>) => void;
    onCallbackSelectImagefnc: (e: React.SyntheticEvent<HTMLElement>)=>void;
}