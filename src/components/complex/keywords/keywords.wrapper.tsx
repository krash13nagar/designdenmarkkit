import React, { useEffect, useState } from "react";
import RecommendKeywords from "./recommend.keywords";
import { addKeywordsConfig, keywordsMappingObj, keywordsWrapperConfig } from "./keywords.types";
import { Grid } from "@mui/material";
import Keywords from "./keywords";
import { DenButton, DenGrid } from "../../common";
import SearchKeyword from "./search.keyword";
import SearchKeywordWrapper from "./keywords.searchwrapper";


export const KeywordsWrapper = (props : keywordsWrapperConfig) => {
    const {searchKeywordConfig, addBtnConfig, addKeywordsConfig, recommendConfig} = props;

    return (
        <div>
            <DenGrid container spacing={3}>
                <DenGrid item xs={4}>
                    <h1>Hello world</h1>
                </DenGrid>
                <DenGrid item xs={8}>
                    <SearchKeywordWrapper searchKeywordConfig={searchKeywordConfig} addBtnConfig={addBtnConfig} />
                    <Keywords addedKeywordsConfig={addKeywordsConfig.addedKeywordsConfig} 
                    addedKeywords={addKeywordsConfig.addedKeywords} />
                    <RecommendKeywords recommendedConfig={recommendConfig.recommendedConfig} 
                    recommendedKeywords={recommendConfig.recommendedKeywords}  />
                </DenGrid>
            </DenGrid>
        </div>
    )
}

export default KeywordsWrapper;