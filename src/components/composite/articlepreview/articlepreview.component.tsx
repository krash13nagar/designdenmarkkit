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
 * @param {React.MouseEventHandler<HTMLSpanElement>} props.handlePopOutClick - (optional) handler for pop out click
 * @param {React.ReactNode} props.clockIcon -  (optional) icon for clock
 * @param {React.ReactNode} props.popOutIcon -  (optional) pop out Iion
 * @param {string} props.popOutTooltip -  (optional) pop out icon tooltip
 * @param {string} props.titleClass - (optional) titleClass
 * @param {string} props.contentClass -  (optional) contentClass
 * @param {string} props.synopsisClass - (optional) synopsisClass
 *
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
      handlePopOutClick = () => {},
      popOutTooltip,
      clockIcon,
      popOutIcon,
      titleClass,
      contentClass,
      synopsisClass,
      topInfoClass,
      agency,
      source,
      classes = {},
    },
    ref
  ) => {
    return (
      <DenBox
        ref={ref}
        className={`${classes.root || ''} ${styles.previewWrapper}`}
      >
        <div
          className={`${styles.topInfo} ${topInfoClass ? topInfoClass : ''}`}
        >
          <span className={agency || source ? styles.agencySource : ''}>
            {agency && <span>Agency : {agency}</span>}
            {agency && source && ' | '}
            {source && <span>Source : {source}</span>}
          </span>
          {clockIcon && (date || time) && (
            <span className={styles.clockIcon}>{clockIcon}</span>
          )}
          {time && <span>{time}</span>}
          {time && date && <span className={styles.pipe}> | </span>}
          {date && <span>{date}</span>}
          {date && wordCount && <span className={styles.pipe}> | </span>}
          {wordCount && (
            <span className={styles.wordCount}>Word Count : {wordCount}</span>
          )}
        </div>
        <DenTypography
          className={`${styles.title} ${titleClass ? titleClass : ''}`}
          variant="h2"
        >
          {title}
          {popOutIcon && (
            <span
              title={popOutTooltip}
              className={styles.popoutIcon}
              onClick={handlePopOutClick}
            >
              {popOutIcon}
            </span>
          )}
        </DenTypography>
        {synopsis && (
          <DenTypography
            className={`${styles.synopsis} ${
              synopsisClass ? synopsisClass : ''
            }`}
          >
            {synopsis}
          </DenTypography>
        )}
        <div
          className={`${styles.content} ${contentClass ? contentClass : ''}`}
          dangerouslySetInnerHTML={{ __html: richContent }}
        ></div>
      </DenBox>
    );
  }
);

export default ArticlePreview;
