import React, { useRef, useEffect, useState } from 'react';
import { ArticleSelectionCardProps } from './articleselectioncard.types';
import styles from './articleselectioncard.module.scss';
import { DenTooltip, DenTypography } from '../../common';

/**
 * ArticleSelectionCard Component.
 * @constructor
 * @param {string} props.title -  title
 * @param {string} props.synopsis - (optional) synopsis
 * @param {string} props.date -  (optional) date
 * @param {string} props.time -  (optional) time
 * @param {string} props.wordCount - (optional) wordcount
 * @param {string} props.agency -  (optional) agency
 * @param {string} props.source - (optional) source
 * @param {React.ReactNode} props.addIcon -  (optional) icon for add button
 * @param {React.ReactNode} props.addedIcon -  (optional) icon for added article
 * @param {React.ReactNode} props.popOutIcon -  (optional) pop out icon
 * @param {React.ReactNode} props.clockIcon -  (optional) clock icon
 * @param {React.MouseEventHandler<HTMLSpanElement>} props.handlePopOut -  (optional) handler for pop out click
 * @param {React.MouseEventHandler<HTMLDivElement>} props.handleAdd - (optional) handler for add icon click
 * @param {React.MouseEventHandler<HTMLDivElement>} props.handleCardClick - (optional) handler for card click
 * @param {{ hostLabel: string, hostName: string }[]} props.publishedBy -  (optional) list of hosts article is published by
 * ref is forwarded to parent element
 */

export const ArticleSelectionCard = React.forwardRef<
  HTMLDivElement,
  ArticleSelectionCardProps
>(
  (
    {
      title,
      synopsis,
      addIcon,
      addedIcon,
      popOutIcon,
      handleAdd = () => {},
      handleCardClick = () => {},
      handlePopOut,
      wordCount,
      date,
      time,
      agency,
      source,
      publishedBy,
      clockIcon,
      wrapperClass,
      leftSectionClass,
      rightSectionClass,
      popOutIconClass,
      popOutTooltip,
      titleClass,
      synopsisClass,
      isAdded,
      wordCountLabel = 'WC',
      publishedByLabel = 'Published by',
    },
    ref
  ) => {
    const titleRef = useRef(null);

    const [titleOverflow, setTitleOverflow] = useState(false);

    useEffect(() => {
      if (!popOutIcon) return;
      if (titleRef?.current) {
        if (
          titleRef.current.scrollHeight - titleRef.current.offsetHeight >=
          19
        ) {
          setTitleOverflow(true);
        } else {
          setTitleOverflow(false);
        }
      }
    }, [
      title,
      titleRef?.current?.scrollHeight,
      titleRef?.current?.offsetHeight,
    ]);

    const handlePopOutClick = (e: React.MouseEvent<HTMLSpanElement>) => {
      if (handlePopOut) {
        handlePopOut(e);
        e.stopPropagation();
      }
    };

    const handleAddClick = (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
      if (isAdded) {
        return;
      }
      if (handleAdd) {
        handleAdd(e);
      }
    };

    return (
      <div
        onClick={handleCardClick}
        ref={ref}
        className={`${wrapperClass ? wrapperClass : ''} ${styles.cardWrapper}`}
      >
        <div
          className={`${leftSectionClass ? leftSectionClass : ''} ${
            styles.leftSection
          }`}
        >
          <div className={styles.addBtn} onClick={handleAddClick}>
            {isAdded ? addedIcon : addIcon}
          </div>
        </div>
        <div
          className={`${rightSectionClass ? rightSectionClass : ''} ${
            styles.rightSection
          }`}
        >
          <div className={styles.topRightSection}>
            <div className={styles.agencyDetails}>
              <div className={agency || source ? styles.agencySource : ''}>
                {agency && <span>Agency : {agency}</span>}
                {agency && source && ' | '}
                {source && <span>Source : {source}</span>}
              </div>
              {publishedBy?.length && (
                <div className={styles.publishedBy}>
                  <span>{publishedByLabel}</span>
                  <div className={styles.publishedByList}>
                    {publishedBy.map((pub) => {
                      return (
                        <DenTooltip key={pub.hostName} title={pub.hostName}>
                          <div className={styles.host}>{pub.hostLabel}</div>
                        </DenTooltip>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
            <div className={styles.timing}>
              {clockIcon && (date || time) && (
                <span className={styles.clockIcon}>{clockIcon}</span>
              )}
              {time && <span>{time}</span>}
              {time && date && <span className={styles.pipe}> | </span>}
              {date && <span>{date}</span>}
              {date && wordCount && <span className={styles.pipe}> | </span>}
              {wordCount && (
                <span>
                  {wordCountLabel} {wordCount}
                </span>
              )}
            </div>
          </div>
          <span title={title} className={styles.titleWrapper}>
            <DenTypography
              className={`${styles.title} ${styles.ellipsis} ${
                titleClass ? titleClass : ''
              }`}
              variant="h4"
              ref={titleRef}
            >
              {title}
              {!titleOverflow && popOutIcon && (
                <span
                  title={popOutTooltip}
                  className={`${styles.popoutIcon} ${
                    titleOverflow ? styles.block : ''
                  } ${popOutIconClass ? popOutIconClass : ''}`}
                  onClick={(e) => handlePopOutClick?.(e)}
                >
                  {popOutIcon}
                </span>
              )}
            </DenTypography>
            {titleOverflow && popOutIcon && (
              <span
                title={popOutTooltip}
                className={`${styles.popoutIcon} ${
                  titleOverflow ? styles.block : ''
                } ${popOutIconClass ? popOutIconClass : ''}`}
                onClick={(e) => handlePopOutClick?.(e)}
              >
                {popOutIcon}
              </span>
            )}
          </span>
          {synopsis && (
            <span title={synopsis} className={styles.synopsisWrapper}>
              <DenTypography
                className={`${styles.synopsis} ${styles.ellipsis} ${
                  synopsisClass ? synopsisClass : ''
                }`}
              >
                {synopsis}
              </DenTypography>
            </span>
          )}
        </div>
      </div>
    );
  }
);

export default ArticleSelectionCard;
