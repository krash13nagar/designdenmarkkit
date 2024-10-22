import React, { useEffect, useState } from "react";
import styles from "./recommended.keywords.module.scss";
import { RecommendedKeywordsConfig } from "./keywords.types";
import { DenIconButton } from "../../common";
import RecommendWidget from "./recommend.widget";
import _ from "lodash";


export const RecommendKeywords = (props: RecommendedKeywordsConfig) => {
  const {recommendedConfig, recommendedKeywords} = props;

  return (
    <div className={styles["recommended-wrapper"]}>
      <div className={styles.recommend}>
        {recommendedConfig.title}
        <DenIconButton
          onClick={recommendedConfig.refreshCallbackFn}
          aria-label="refresh"
          className={`${styles["recommended-refresh"]} ${recommendedConfig.isDataLoading ? styles['rotateRefreshIcon'] : ''}`}
          size="small"
          color="primary"
        >
          {recommendedConfig.refreshIcon}
        </DenIconButton>
      </div>
      {recommendedKeywords.length > 0 &&
        <RecommendWidget recommendWidgetArr={recommendedKeywords} addCallbckFnc={recommendedConfig.addCallbackFn} label={recommendedConfig.cardHeader} addkeywordIcon={recommendedConfig.addKeywordIcon} />
      }
      {recommendedKeywords.length < 1 &&
          <div className={styles["no-keywords"]}>{recommendedConfig.noKeywordsLabel}</div>
      }
      </div>
  );
};

export default RecommendKeywords;
