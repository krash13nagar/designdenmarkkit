import React from 'react';
import { ArticlePreviewProps } from './articlepreview.types';
import styles from './articlepreview.module.scss';
import { DenTypography } from '../../common';
import DenBox from '../../common/box/box.component';

/**
 * ArticlePreview Component.
 * @constructor
 * @param {string} props.title -  title
 * @param {string} props.synopsis - (optional) synopsis
 * @param {string} props.date -  (optional) date
 * @param {string} props.time -  (optional) time
 * @param {string} props.wordCount - (optional) wordcount
 * @param {string} props.className -  (optional) className
 * @param {string} props.richContent - (optional) richContent to render
 * @param {boolean} props.showPopOutIcon -  (optional) whether to show popout icon,default is false
 * @param {React.MouseEventHandler<HTMLSpanElement>} props.handlePopOutClick - (optional) handler for pop out click
 * @param {React.ReactNode} props.clockIcon -  (optional) icon for clock
 * @param {React.ReactNode} props.popOutIcon -  (optional) pop out Iion
 * @param {string} props.popOutTooltip -  (optional) pop out icon tooltip
 * ref is forwarded to parent element
 */

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
