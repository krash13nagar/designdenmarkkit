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
            <SearchKeywordWrapper searchKeywordConfig={searchKeywordConfig} addBtnConfig={addBtnConfig} />
            <Keywords addedKeywordsConfig={addKeywordsConfig.addedKeywordsConfig}
                addedKeywordslist={addKeywordsConfig.addedKeywords} />
            <RecommendKeywords recommendedConfig={recommendConfig.recommendedConfig}
                recommendedKeywords={recommendConfig.recommendedKeywords} />
        </div>
    )
}

export default KeywordsWrapper;