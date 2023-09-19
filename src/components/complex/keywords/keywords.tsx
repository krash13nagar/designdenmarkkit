import React, { useEffect, useState } from 'react';
import { DenDefautTextField, DenGrid, DenIconButton, DenTypography } from '../../common';
import styles from './recommended.keywords.module.scss';
import { keywordsConfig } from './keywords.types';
import _ from 'lodash';

export const Keywords = (props : keywordsConfig) => {
  const {addedKeywordsConfig, addedKeywordslist} = props;
  const [addedKeywords, setKeywords] = useState(addedKeywordslist);
  const timer = React.useRef(null);
  useEffect(()=>{
    setKeywords(addedKeywordslist)
  },[addedKeywordslist])

  const nearestRound = (val: number) => {
    if (val > 100) {
      return 100
    }
    if (val < 10) {
      return 10
    }
    return Math.round(val / 10) * 10
  }

  const relevenceChange = (event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index:number)=>{
    const _arr = _.cloneDeep(addedKeywords);
    let value = Number(event.target.value);
    _arr[index]['relevance'] = value;
    setKeywords(_arr);
    clearTimeout(timer.current);
    if (value ) {
      timer.current = setTimeout(() => {
        let val = nearestRound(value);
        if (val) {
          _arr[index]['relevance'] = val;
          const new_array = _.cloneDeep(_arr)
          setKeywords(new_array);
        }
      }, 1000);
    }
}

  return (
    <>
      <div className={styles.addKeywordsTitle}>
        {addedKeywordsConfig.title}{` (${addedKeywords.length}):`}
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
                        onClick={() => { addedKeywordsConfig.removeCallbackFn(index, item.relevance) }}
                      >
                        {addedKeywordsConfig.removeKeywordIcon}
                      </DenIconButton>
                      <div>{item.keywordName}</div>
                    </div>
                    <div className={styles.addkeywordtextfield}>
                      <DenDefautTextField
                        value={item.relevance}
                        onChange={(event) => relevenceChange(event, index)}
                        type="number"
                        variant="standard"
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
      }
      {addedKeywords.length < 1 && 
        <div className={styles["no-keywords"]}>Please add keywords or select from recommendations</div>
      }
    </>
  );
};

export default Keywords;
