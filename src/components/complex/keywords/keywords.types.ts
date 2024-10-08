import { number } from "prop-types";
import { ReactNode } from "react";

export interface recommendedConfig {
    title: string;
	nodatafound: string;
    noKeywordsLabel: string;
	errorMsg: string;
    cardHeader: string;
	refreshIcon : ReactNode;
    addKeywordIcon: ReactNode;
	refreshCallbackFn: React.MouseEventHandler<HTMLButtonElement>;
	addCallbackFn: (elm:recommendedKeywords)=>void;
}

export interface recommendedKeywords {
    keywordName: string;
    keyEnum: string;
    keywordType?: string;
    source: string;
    relevance: number;
    seoScore?: number;
    metaInfo?: metaInfo;
    addKeywordIcon?: ReactNode;
}

export interface suggestedData {
    id: number;
    keywordName: string;
    keyEnum?: string;
    source?: string;
    relevance?: string | number;
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
    recommendWidgetArr : recommendedKeywords[];
    addCallbckFnc: (elm:recommendedKeywords)=>void;
    label: string;
    addkeywordIcon: ReactNode;
}

// export interface addedKeywordsConfig {
//     removeCallbackFn: (index:number, val:number)=>void;
//     title: string;
//     removeKeywordIcon: ReactNode;
//     starKeywordIcon: ReactNode;
//     nonStarKeywordIcon: ReactNode;
// }

export interface searchKeywordConfig {
    bautocomplete: string;
    label: string;
    placeholder: string;
    isSuggestedKeywordSkeleton?: boolean;
    suggestedKeywordsData?: suggestedData[];
    searchCallbckfnc: (val:string)=>void;
    searchKeywordVal?: string;
    handleSearchKeywordVal?:React.Dispatch<React.SetStateAction<string>>;
    handleSuggestionKeywordFnc?:(val:boolean)=>void;
    onSelectKeywordClick?: (val:suggestedData)=>void; 
}

export interface suggestedConfig {
    text:string, 
    suggestedData: suggestedData[],
    focus:boolean,
    isSuggestedKeywordSkeleton?: boolean,
    onSelectKeywordClick?: (val:suggestedData)=>void;
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

export interface addedKeywordsConfig {
    label: string,
    noKeywordsLabel: string,
    addAutoLink: boolean,
    clearAllLink: boolean,
    showCount: boolean,
    handlerConfig: handlerConfigs;
    addedKeywordsList: addedKeywords[];
}

export interface handlerConfigs {
    removeLinkConfig: removeLinkConfig
    starLinkConfig: starLinkConfig
    addAutoConfig: addAutoConfig
    clearAllConfig: clearAllConfig
}

export interface addAutoConfig {
    callbackFn: ()=>void;
}

export interface clearAllConfig {
    callbackFn: ()=>void;
}

export interface starLinkConfig {
    starKeywordIcon: ReactNode,
    nonStarKeywordIcon: ReactNode,
    keyForStar: string,
    valueForStar: number,
    maxStarLimit: number,
    callbackFn: (index:number, item:addedKeywords)=>void;
}

export interface removeLinkConfig {
    callbackFn :(index:number, val:number)=>void;
    removeIcon: ReactNode;
}

export interface recommendConfig {
    recommendedConfig: recommendedConfig;
    recommendedKeywords: recommendedKeywords[];
}

export interface keywordsWrapperConfig {
    searchKeywordConfig: searchKeywordConfig;
    addBtnConfig: addBtnConfig;
    addedKeywordsConfig: addedKeywordsConfig;
    recommendConfig: recommendConfig;
    aiImageTagsConfig: aiImageTagsConfig
}

export interface aiImageTagsConfig {
    label: string;
    nodatafound: string;
    clickForAItagsLabel: string;
    showAiImageTag: boolean;
    cardHeader: string;
    addKeywordIcon: ReactNode;
    aiTagCallbackFn: ()=>void;
    addCallbackFn: (elm:recommendedKeywords)=>void;
    aiTagsList: recommendedKeywords[]
}

export interface keywordsConfig {
    addedKeywordsConfig: addedKeywordsConfig;
}

export interface KeywordCompConfig {
    keywordconfig:keywordsWrapperConfig
}