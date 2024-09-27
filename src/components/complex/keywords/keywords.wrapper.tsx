import React, { useEffect, useState } from "react";
import RecommendKeywords from "./recommend.keywords";
import { keywordsWrapperConfig } from "./keywords.types";
import Keywords from "./keywords";
import SearchKeywordWrapper from "./keywords.searchwrapper";
import AiImageTags from "./aiimagetags.keywords";
import styles from './recommended.keywords.module.scss'


export const KeywordsWrapper = (props: keywordsWrapperConfig) => {
    const { searchKeywordConfig, addBtnConfig, addedKeywordsConfig, recommendConfig, aiImageTagsConfig } = props;

    return (
        <div>
            <SearchKeywordWrapper searchKeywordConfig={searchKeywordConfig} addBtnConfig={addBtnConfig} />
            <Keywords addedKeywordsConfig={addedKeywordsConfig} />
            <div className={styles["recommend-aitag-wrapper"]}>
                <RecommendKeywords recommendedConfig={recommendConfig.recommendedConfig}
                    recommendedKeywords={recommendConfig.recommendedKeywords} />
                <AiImageTags {...aiImageTagsConfig} />
            </div>
        </div>
    )
}

export default KeywordsWrapper;