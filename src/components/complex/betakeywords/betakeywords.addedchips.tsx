import React from 'react';
import styles from './betakeywords.module.scss';
import { BetaKeywordsAddedChipsProps, KeywordItem } from './betakeywords.types';
import { DenBox, DenChip } from '../../common';

export const BetaKeywordsAddedChips = (props: BetaKeywordsAddedChipsProps) => {
  const {
    keywords,
    removeCallbackFn = () => {},
    markOrUnmarkStarCallbckfnc = () => {},
    noKeywordsLabel,
    starIcon,
    starHoverIcon,
    crossIcon,
    addedKeywordsChipsClassName,
    addedChipClassName
  } = props;

  const handleClick = (item: KeywordItem, index: number): void => {
    markOrUnmarkStarCallbckfnc(index, item);
  };

  const handleDelete = (index: number, val: number, event: React.MouseEvent): void => {
    event.stopPropagation();
    if (removeCallbackFn) {
      removeCallbackFn(index, val);
    }
  };

  return (
    <>
      {keywords.length === 0 ? (
        <div className={styles['no-keywords']}>
          {noKeywordsLabel}
        </div>
      ) : (
        <div className={`${styles.addedKeywordsChips} ${addedKeywordsChipsClassName ? ' ' + addedKeywordsChipsClassName : ''}`}>
          {keywords.map((item: KeywordItem, index: number) => {
            return (
              <DenChip
                key={index}
                title={item.keywordName}
                label={item.keywordName}
                icon={
                  <DenBox className={styles.chipIconBox}>
                    <div className={styles.chipDefaultIcon}>{starHoverIcon}</div>
                    {item.relevance === 100 && (
                      <div className={styles.chipStarIcon}>{starIcon}</div>
                    )}
                  </DenBox>
                }
                onClick={() => {
                  handleClick(item, index);
                }}
                onDelete={(event: React.MouseEvent) => {
                  handleDelete(index, Number(item.relevance), event);
                }}
                deleteIcon={<DenBox className={styles.deleteIconBox}>{crossIcon}</DenBox>}
                classes={{ root: `${styles['added-chip']}${addedChipClassName ? ' ' + addedChipClassName : ''}` }}
                sx={{
                  "& .cds-MuiChip-label": {
                    paddingLeft: "20px",
                    paddingRight: "13px",
                  },
                }}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default BetaKeywordsAddedChips;
