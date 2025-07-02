import React, { useMemo } from 'react';
import styles from './betakeywords.module.scss';
import { KeywordItem, BetaRecommendChipsProps } from './betakeywords.types';
import { DenBox, DenChip, DenCircularProgress } from '../../common';
import _ from 'lodash';

const BetaRecommendChips = (props: BetaRecommendChipsProps) => {
  const {
    suggestedChips,
    addSuggestedChipFn,
    callFetchKeywordFnc = () => { },
    handleRetry = () => { },
    story,
    isDataLoading,
    apiError,
    retryIcon,
    apiErrorMsg,
    keywordValidationMsg,
    showAPIErrorMsg,
    showSuggestKeywordsBtn,
    suggestKeywordsBtnLabel
  } = props;

  const handleClick = (data: KeywordItem): void => {
    if (addSuggestedChipFn) {
      addSuggestedChipFn(data);
    }
  };

  const renderComp = useMemo(() => {
    if (showAPIErrorMsg) {
      return (
        <div className={styles.suggestError}>
          <div className={styles['suggestError-title']}>
            {apiErrorMsg}
          </div>
          <div className={styles['suggestError-retry-wrapper']}>
            <div className={styles['suggestError-icon']}>{retryIcon}</div>
            <div className={styles['suggestError-retry']} onClick={handleRetry}>
              Retry
            </div>
          </div>
        </div>
      );
    }
    if (showSuggestKeywordsBtn) {
      return (
        <div className={styles['suggest-keywords']}>
          <div onClick={callFetchKeywordFnc}>{suggestKeywordsBtnLabel}</div>
        </div>
      );
    }
    return (
      <div className={styles['no-recommendation']}>
        {keywordValidationMsg}
      </div>
    );
  }, [story, callFetchKeywordFnc, suggestedChips, apiError, handleRetry]);

  return (
    <>
      {isDataLoading ? (
        <DenBox
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '18px',
            marginTop: '16px'
          }}
        >
          <DenCircularProgress size={18} />
        </DenBox>
      ) : suggestedChips?.length === 0 || _.isEmpty(suggestedChips) ? (
        renderComp
      ) : (
        <div className={styles.suggestKeywordsChips}>
          {suggestedChips?.map((item: KeywordItem, index: number) => {
            return (
              <DenChip
                key={index}
                title={item.keywordName}
                label={item.keywordName}
                onClick={() => {
                  handleClick(item);
                }}
                classes={{ root: styles['recommend-chip'] }}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default BetaRecommendChips;