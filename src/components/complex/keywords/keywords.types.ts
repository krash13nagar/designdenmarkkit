import { ReactNode } from "react";

export interface recommendedConfig {
    title: string;
	nodatafound: string;
	errorMsg: string;
	refreshIcon : ReactNode;
    addKeywordIcon: ReactNode;
	refreshCallbackFn: undefined | React.MouseEventHandler<HTMLButtonElement>;
	addCallbackFn: undefined | React.MouseEventHandler<HTMLDivElement>;
}

export interface recommendedKeywords {
    keywordName: string;
    keyEnum: string;
    keywordType?: string;
    source: string;
    relevance: string;
    seoScore?: number;
    metaInfo?: undefined | metaInfo;
    addKeywordIcon?: ReactNode;
    addCallbackFn?: undefined | React.MouseEventHandler<HTMLDivElement>;
}

export interface RecommendedKeywordsConfig {
    recommendedConfig: recommendedConfig;
    recommendedKeywords: recommendedKeywords[];
}

export interface keywordsMappingObj {
    [index : string]: recommendedKeywords[];
}

export interface addedKeywords {
    keyEnum: string;
    keywordName: string;
    relevance: number;
    source: string;
}

export interface metaInfo {
    [index:string]: string | number;
}

export interface recommendWidget {
    recommendWidgetObj : keywordsMappingObj;
}