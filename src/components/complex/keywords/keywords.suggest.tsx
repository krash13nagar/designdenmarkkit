import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { SkeletonWrap } from './keywords.suggestion.skeleton';
import styles from './recommended.keywords.module.scss';
import { suggestedConfig, suggestedData } from './keywords.types';

export const Suggestions = ({
  text,
  suggestedData,
  focus,
  isSuggestedKeywordSkeleton,
  onSelectKeywordClick = () => {},
  handleSearchKeywordVal = () => {},
}: suggestedConfig) => {

  const handleClick = (option: suggestedData) => {
    onSelectKeywordClick(option);
    handleSearchKeywordVal('');
  };


  return (
    <div>
      {text && text.length > 0 && focus && (
        <Paper
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
                  value={'No suggestions'}
                >
                  <ListItemText primary={'No suggestions'} />
                </MenuItem>
              )}
              {suggestedData?.map((option, index) => (
                <MenuItem
                  className={styles['keyword-suggestion-menuitem']}
                  key={option.id}
                  value={option.id}
                  onClick={() => {
                    handleClick(option);
                  }}
                >
                  <Typography noWrap>{option.keywordName}</Typography>
                  {option.keyEnum && (
                    <Button
                      size="small"
                      variant="outlined"
                      className={styles['keyword-suggestion-button']}
                    >
                      {option.keyEnum}
                    </Button>
                  )}
                  <Button
                    size="small"
                    variant="outlined"
                    className={styles['keyword-suggestion-button']}
                  >
                    {option.source}
                  </Button>
                </MenuItem>
              ))}
            </>
          )}
        </Paper>
      )}
    </div>
  );
};

export default Suggestions;
