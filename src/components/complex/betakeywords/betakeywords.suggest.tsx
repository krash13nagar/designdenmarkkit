import React from 'react';
import styles from './betakeywords.module.scss';
import { ListItemText, MenuItem, Skeleton } from '@mui/material';
import { KeywordItem, BetaKeywordsSuggestionsProps } from './betakeywords.types';
import { DenBox, DenPaper, DenTypography } from '../../common';

const SkeletonWrap = () => {
  return (
    <div className={styles.skeletonItem}>
      <Skeleton animation="wave" height={10} width="90%" style={{ marginBottom: 6 }} />
      <Skeleton animation="wave" height={10} width="90%" style={{ marginBottom: 6 }} />
      <Skeleton animation="wave" height={10} width="90%" style={{ marginBottom: 6 }} />
      <Skeleton animation="wave" height={10} width="80%" />
    </div>
  );
};

const BetaKeywordsSuggestions = (props: BetaKeywordsSuggestionsProps) => {
  const {
    text,
    suggestedData,
    focus,
    isSuggestedKeywordSkeleton,
    onSelectKeywordClick = () => {},
    handleSearchKeywordVal = () => {},
  } = props;

  const handleClick = (option: KeywordItem): void => {
    onSelectKeywordClick(option);
    handleSearchKeywordVal('');
  };

  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div>
      {text && text.length > 0 && focus && (
        <DenPaper
          variant="outlined"
          className={styles['keyword-suggestion-wrapper']}
        >
          {isSuggestedKeywordSkeleton ? (
            [1, 2, 3].map((item, index) => <SkeletonWrap key={index} />)
          ) : (
            <>
              {suggestedData.length === 0 && text.length > 0 && (
                <MenuItem
                  className={styles['keyword-suggestion-menuitem']}
                  key={'No suggestions'}
                >
                  <ListItemText
                    primary={'No suggestions found'}
                  />
                </MenuItem>
              )}
              {suggestedData.map((option: KeywordItem) => (
                <MenuItem
                className={styles['keyword-suggestion-menuitem']}
                key={option.id}
                value={option.id}
                onClick={() => {
                  handleClick(option);
                }}
              >
                <DenTypography noWrap>{option.keywordName}</DenTypography>
                <DenBox className={styles['keyword-source']}>{capitalizeFirstLetter(option.source)}</DenBox>
              </MenuItem>
              ))}
            </>
          )}
        </DenPaper>
      )}
    </div>
  );
};

export default BetaKeywordsSuggestions;