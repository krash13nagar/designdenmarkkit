import React from 'react';
import { ArticlePreviewProps } from './articlepreview.types';
import styles from './articlepreview.module.scss';
import { DenTypography } from '../../common';
import DenBox from '../../common/box/box.component';

export const ArticlePreview = React.forwardRef<
  HTMLDivElement,
  ArticlePreviewProps
>(
  (
    {
      date,
      time,
      wordCount,
      title,
      synopsis,
      richContent,
      className,
      showPopOutIcon = false,
      handlePopOutClick,
      popOutTooltip,
      clockIcon,
      popOutIcon,
    },
    ref
  ) => {
    return (
      <DenBox
        ref={ref}
        className={`${className ? className : ''} ${styles.previewWrapper}`}
      >
        <div className={styles.topInfo}>
          {clockIcon && (date || time) && (
            <span className={styles.clockIcon}>{clockIcon}</span>
          )}
          {time && <span>{time}</span>}
          {time && date && <span className={styles.pipe}> | </span>}
          {date && <span>{date}</span>}
          {date && wordCount && <span className={styles.pipe}> | </span>}
          {wordCount && <span>Word Count : {wordCount}</span>}
        </div>
        <DenTypography className={styles.title} variant="h2">
          {title}
          {showPopOutIcon && popOutIcon && (
            <span
              title={popOutTooltip}
              className={styles.popoutIcon}
              onClick={(e) => handlePopOutClick?.(e)}
            >
              {popOutIcon}
            </span>
          )}
        </DenTypography>
        {synopsis && (
          <DenTypography className={styles.synopsis}>{synopsis}</DenTypography>
        )}
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: richContent }}
        ></div>
      </DenBox>
    );
  }
);

export default ArticlePreview;
