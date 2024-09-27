import React, { useEffect, useState } from 'react';
import { DenGrid, DenIconButton } from '../../common';
import styles from './recommended.keywords.module.scss';
import { addedKeywords, keywordsConfig } from './keywords.types';
import _ from 'lodash';

export const Keywords = (props : keywordsConfig) => {
  const {label, addAutoLink, clearAllLink, showCount, noKeywordsLabel, handlerConfig, addedKeywordsList} = props.addedKeywordsConfig;
  const [addedKeywords, setKeywords] = useState(addedKeywordsList);

  useEffect(()=>{
    setKeywords(addedKeywordsList)
  },[addedKeywordsList])

  const showStarIcon = (index: number) => {
    const list = addedKeywords.slice(0, index);
    const key = handlerConfig?.starLinkConfig?.keyForStar as keyof addedKeywords;
    const val = handlerConfig?.starLinkConfig?.valueForStar;
    if (!key || !val) {
      return false;
    }
    let hasRelevant = false;
    for (let item of list) {
      if (item[key] == val) {
        hasRelevant = true;
        break;
      }
    }
    if (hasRelevant) {
      return false;
    }
    const currentKeyword = addedKeywords[index];
    return currentKeyword && currentKeyword[key] == val;
  }

  return (
    <>
      <div className={styles.addKeywordsTitle}>
        {label}{` (${addedKeywords.length}):`}
      </div>
      {addedKeywords.length > 0 &&
        <div className={styles.addKeywordsWrapperClass}>
          <DenGrid container spacing={1}>
            {addedKeywords.map((item, index) => {
              return (
                <DenGrid item xs={6} className={(index % 2 == 0) ? styles.keywordTypeEven : ""}>
                  <div className={styles.keywordflexContainer}>
                    <div className={styles.removeIcondiv}>
                      <DenIconButton
                        size="small"
                        onClick={() => { handlerConfig.removeLinkConfig.callbackFn(index, item.relevance) }}
                      >
                        {handlerConfig.removeLinkConfig.removeIcon}
                      </DenIconButton>
                      <div>
                        <div className={styles.keywordName}>{item.keywordName}</div>
                        <div className={styles.keywordDetails}>
                          {item.source}
                        </div>
                      </div>
                    </div>
                    <div className={styles.starNonStarIcon} onClick={handlerConfig.starLinkConfig.callbackFn}>
                      {showStarIcon(index) ? handlerConfig.starLinkConfig.starKeywordIcon :
                        handlerConfig.starLinkConfig.nonStarKeywordIcon}
                    </div>
                  </div>
                  {/* <div className={styles.keywordSourceName}>
                    <div className={styles.keywordDetails}>{item.source}</div>
                  </div> */}
                </DenGrid>
              );
            })}
          </DenGrid>
        </div>
      }
      {addedKeywords.length < 1 && 
        <div className={styles["no-keywords"]}>{noKeywordsLabel}</div>
      }
    </>
  );
};

export default Keywords;
