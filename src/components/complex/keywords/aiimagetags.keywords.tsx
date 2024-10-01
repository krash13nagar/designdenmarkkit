import React, { useEffect, useState } from "react";
import styles from "./recommended.keywords.module.scss";
import { aiImageTagsConfig } from "./keywords.types";
import RecommendWidget from "./recommend.widget";
import _ from "lodash";


export const AiImageTags = (props: aiImageTagsConfig) => {
    const { label, nodatafound, showAiImageTag, clickForAItagsLabel, addKeywordIcon, cardHeader, addCallbackFn, aiTagsList, aiTagCallbackFn } = props;

    return (
        <>
            {showAiImageTag &&
                <div className={styles["recommended-wrapper"]}>
                    <div className={styles.aiImageTag}>
                        {label}
                    </div>
                    {aiTagsList.length > 0 &&
                        <RecommendWidget recommendWidgetArr={aiTagsList} addCallbckFnc={addCallbackFn} label={cardHeader} addkeywordIcon={addKeywordIcon} />
                    }
                    {aiTagsList.length < 1 &&
                        <div className={styles["no-keywords"]}>{nodatafound}
                            <span className={styles["aiTagClickLabel"]} onClick={aiTagCallbackFn}>{clickForAItagsLabel}</span></div>
                    }
                </div>
            }
        </>
    );
};

export default AiImageTags;
