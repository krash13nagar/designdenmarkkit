import React, { useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import { DenGrid, DenIconButton, DenTypography } from '../../common';
import styles from './recommended.keywords.module.scss';
import { keywordsConfig } from './keywords.types';

export const Keywords = (props : keywordsConfig) => {
  const {addedKeywordsConfig, addedKeywords} = props;
  return (
    <>
      <div className={styles.addKeywordsTitle}>
        {addedKeywordsConfig.title}{` (${addedKeywords.length}):`}
      </div>
      <div className={styles.addKeywordsWrapperClass}>
        <DenGrid container spacing={1}>
          {addedKeywords.map((item, index) => {
            return (
              <DenGrid item xs={6} className={(index % 2 == 0) ? styles.keywordTypeEven: ""}>
                <div className={styles.keywordflexContainer}>
                  <div className={styles.removeIcondiv}>
                    <DenIconButton
                      size="small"
                      onClick={()=>{addedKeywordsConfig.removeCallbackFn(index)}}
                    >
                      {addedKeywordsConfig.removeKeywordIcon}
                    </DenIconButton>
                    <div>{item.keywordName}</div>
                  </div>
                  <div>
                    <TextField
                      value={item.relevance}
                      type="number"
                      size="small"
                      inputProps={{
                        max: 100,
                        min: 10,
                        step: 10,
                      }}
                      className={styles["marks-input"]}
                    />
                    {/* true && <div className="seprator">|</div> */}
                  </div>
                </div>
                <div className={styles.keywordSourceName}>
                  <div className={styles.keywordDetails}>{item.source}</div>
                </div>
              </DenGrid>
            );
          })}
        </DenGrid>
      </div>
    </>
  );
};

export default Keywords;
