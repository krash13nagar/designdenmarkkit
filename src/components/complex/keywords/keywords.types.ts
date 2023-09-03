import { ReactNode } from "react";

export interface recommendedConfig {
    title: string;
	nodatafound: string;
	errorMsg: string;
	refreshIcon : ReactNode;
    addKeywordIcon: ReactNode;
	refreshCallbackFn: React.MouseEventHandler<HTMLButtonElement>;
	addCallbackFn: React.MouseEventHandler<HTMLDivElement>;
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

export interface addedKeywordsConfig {
    removeCallbackFn: (index:number)=>void;
    title: string;
    removeKeywordIcon: ReactNode;
}

export interface searchKeywordConfig {
    autocomplete: boolean;
    label: string;
    placeholder: string;
    searchCallbckfnc: (val:string)=>void;
    searchKeywordVal?: string;
    handleSearchKeywordVal?:React.Dispatch<React.SetStateAction<string>>;
}

export interface addBtnConfig {
    btnConfig : any;
    addBtnCallbckfnc: React.MouseEventHandler<HTMLButtonElement>;
}

export interface searchKeywordWrapper {
    searchKeywordConfig: searchKeywordConfig;
    addBtnConfig: addBtnConfig;
}

export interface addKeywordsConfig {
    addedKeywordsConfig: addedKeywordsConfig;
    addedKeywords: addedKeywords[];
}

export interface recommendConfig {
    recommendedConfig: recommendedConfig;
    recommendedKeywords: recommendedKeywords[];
}

export interface keywordsWrapperConfig {
    searchKeywordConfig: searchKeywordConfig;
    addBtnConfig: addBtnConfig;
    addKeywordsConfig: addKeywordsConfig;
    recommendConfig: recommendConfig;
}

export interface keywordsConfig {
    addedKeywordsConfig: addedKeywordsConfig;
    addedKeywords: addedKeywords[];
}