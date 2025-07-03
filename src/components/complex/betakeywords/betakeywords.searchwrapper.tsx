import React, { useState } from 'react';
import BetaSearchKeyword from './beta.search.keyword';
import BetaKeywordsSuggestions from './betakeywords.suggest';
import { DenButton } from '../../common';
import { BetaSearchKeywordWrapperProps } from './betakeywords.types';
import styles from './betakeywords.module.scss';

export const BetaSearchKeywordWrapper = (props: BetaSearchKeywordWrapperProps) => {
  const { searchKeywordConfig, addBtnConfig } = props;
  const [val, setval] = useState<string>('');
  const [focus, setFocus] = useState<boolean>(false);

  const handleSuggestionKeywordFnc = (val: boolean) => {
    setFocus(val);
  };

  const handleEnterKeyPressFnc = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (searchKeywordConfig.onEnterKeyPress) {
      searchKeywordConfig.onEnterKeyPress(event);
      setval("");
      // setFocus(false)
    }
  };

  const handleAddButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (addBtnConfig.addBtnCallbckfnc) {
      addBtnConfig.addBtnCallbckfnc(event);
      setval('');
    }
  };

  const handleSearchCallBckFnc = (val: string) => {
    if (!focus) {
      setFocus(true);
    }
    searchKeywordConfig?.searchCallbckfnc?.(val);
  };

  return (
    <div className={`${styles.searchKeywordWrapper} ${searchKeywordConfig?.isAutoAddKeywordLoading ? styles.disabled : ''}`}>
      <div className={styles['search-keyword']}>
        <BetaSearchKeyword
          bautocomplete={searchKeywordConfig.bautocomplete}
          label={searchKeywordConfig.label}
          placeholder={searchKeywordConfig.placeholder}
          searchCallbckfnc={handleSearchCallBckFnc}
          searchKeywordVal={val}
          handleSearchKeywordVal={setval}
          handleSuggestionKeywordFnc={handleSuggestionKeywordFnc}
          onEnterKeyPress={handleEnterKeyPressFnc}
          shouldAutoFocus={searchKeywordConfig.shouldAutoFocus}
          onAutoFocusComplete={searchKeywordConfig.onAutoFocusComplete}
        />
        <BetaKeywordsSuggestions
          suggestedData={searchKeywordConfig.suggestedKeywordsData}
          text={val}
          focus={focus}
          isSuggestedKeywordSkeleton={
            searchKeywordConfig.isSuggestedKeywordSkeleton
          }
          onSelectKeywordClick={searchKeywordConfig.onSelectKeywordClick}
          handleSearchKeywordVal={setval}
        />
      </div>
      <DenButton
        variant="outlined"
        size="small"
        onClick={handleAddButtonClick}
        className={styles['add-btn']}
      >
        {addBtnConfig.addBtnLabel}
      </DenButton>
    </div>
  );
};

export default BetaSearchKeywordWrapper; 