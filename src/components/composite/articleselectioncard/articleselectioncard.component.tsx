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
      handleAdd = () => { },
      handleCardClick = () => { },
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
      id = '',
      idLabel = 'MSID',
      showReadMoreInSynopsis = false,
      parentWidth = '',
      tooltipDelay = 400,
      showPopOutIcon = true,
    },
    ref
  ) => {
    const titleRef = useRef(null);
    const synopsisRef = useRef(null);

    const [titleOverflow, setTitleOverflow] = useState(false);
    const [sysnopsisOverflow, setSynopsisOverflow] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const [titleTooltipOpen, setTitleTooltipOpen] = useState(false);

    useEffect(() => {
      if (!popOutIcon) return;
      if (titleRef?.current) {
        if (
          titleRef.current.scrollHeight - titleRef.current.offsetHeight >= 19 &&
          !titleOverflow
        ) {
          setTitleOverflow(true);
        } else if (sysnopsisOverflow) {
          setSynopsisOverflow(false);
        }
      }
    }, [title, parentWidth]);

    useEffect(() => {
      if (!showReadMoreInSynopsis) return;
      if (synopsisRef?.current) {
        if (
          synopsisRef.current.scrollHeight - synopsisRef.current.offsetHeight >=
          19 &&
          !sysnopsisOverflow
        ) {
          setSynopsisOverflow(true);
        } else if (sysnopsisOverflow) {
          setSynopsisOverflow(false);
        }
      }
    }, [synopsis, parentWidth]);

    const handlePopOutClick = (e: React.MouseEvent<HTMLSpanElement>) => {
      if (handlePopOut) {
        handlePopOut(e);
        e.stopPropagation();
      }
    };

    const handleAddClick = (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
      if (handleAdd) {
        handleAdd(e);
      }
    };

    const handleReadMore = (e: React.MouseEvent<HTMLSpanElement>) => {
      e.stopPropagation();
      setExpanded((expanded) => !expanded);
    };

    return (
      <div
        onClick={handleCardClick}
        ref={ref}
        className={`${wrapperClass ? wrapperClass : ''} ${styles.cardWrapper}`}
      >
        {addedIcon && addIcon && (
          <div
            className={`${leftSectionClass ? leftSectionClass : ''} ${styles.leftSection
              } ${styles.alignCenter}`}
          >
            <div className={styles.addBtn} onClick={handleAddClick}>
              {isAdded ? addedIcon : addIcon}
            </div>
          </div>
        )}
        <div
          className={`${rightSectionClass ? rightSectionClass : ''} ${styles.rightSection
            }`}
        >
          {(agency ||
            source ||
            publishedBy?.length > 0 ||
            date ||
            time ||
            id ||
            wordCount) && (
              <div className={styles.topRightSection}>
                <div className={styles.agencyDetails}>
                  <div className={agency || source ? styles.agencySource : ''}>
                    {agency && <span>Agency : {agency}</span>}
                    {agency && source && ' | '}
                    {source && <span>Source : {source}</span>}
                  </div>
                  {id && (
                    <span className={styles.msid}>
                      {idLabel} : {id}
                    </span>
                  )}
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
                  {date && +wordCount >= 0 && (
                    <span className={styles.pipe}> | </span>
                  )}
                  {+wordCount >= 0 && (
                    <span>
                      {wordCountLabel} {wordCount}
                    </span>
                  )}
                </div>
              </div>
            )}

          <span className={styles.titleWrapper}>
            <DenTooltip
              title={title}
              arrow
              classes={{ tooltip: styles.tooltip }}
              enterDelay={tooltipDelay}
              enterNextDelay={tooltipDelay}
              open={titleTooltipOpen}
              onClose={() => setTitleTooltipOpen(false)}
              onOpen={(
                e: React.SyntheticEvent<HTMLSpanElement, MouseEvent>
              ) => {
                if (
                  (e.target as Element)?.className?.includes?.(styles.title)
                ) {
                  setTitleTooltipOpen(true);
                  return;
                }
                setTitleTooltipOpen(false);
              }}
            >
              <DenTypography
                className={`${styles.title} ${styles.ellipsis} ${titleClass ? titleClass : ''
                  }`}
                variant="h4"
                ref={titleRef}
              >
                {title}
                {showPopOutIcon && !titleOverflow && popOutIcon && (
                  <span
                    title={popOutTooltip}
                    className={`${styles.popoutIcon} ${titleOverflow ? styles.block : ''
                      } ${popOutIconClass ? popOutIconClass : ''}`}
                    onClick={(e) => handlePopOutClick?.(e)}
                  >
                    {popOutIcon}
                  </span>
                )}
              </DenTypography>
            </DenTooltip>
            {showPopOutIcon && titleOverflow && popOutIcon && (
              <span
                title={popOutTooltip}
                className={`${styles.popoutIcon} ${titleOverflow ? styles.block : ''
                  } ${popOutIconClass ? popOutIconClass : ''}`}
                onClick={(e) => handlePopOutClick?.(e)}
              >
                {popOutIcon}
              </span>
            )}
          </span>

          {synopsis && (
            <span className={styles.synopsisWrapper}>
              <DenTooltip
                title={showReadMoreInSynopsis ? '' : synopsis}
                arrow
                classes={{ tooltip: styles.tooltip }}
                enterDelay={tooltipDelay}
                enterNextDelay={tooltipDelay}
              >
                <DenTypography
                  ref={synopsisRef}
                  className={`${styles.synopsis} ${!showReadMoreInSynopsis ? styles.ellipsis : ''
                    } ${synopsisClass ? synopsisClass : ''}
                ${expanded ? styles.expanded : styles.ellipsis}
                `}
                >
                  {synopsis}
                  {showReadMoreInSynopsis && expanded && (
                    <span
                      className={styles.readMoreLessBtn}
                      onClick={handleReadMore}
                    >
                      Read Less
                    </span>
                  )}
                </DenTypography>
              </DenTooltip>
              {sysnopsisOverflow && showReadMoreInSynopsis && !expanded && (
                <span
                  className={`${styles.readMoreLessBtn} ${styles.absoultePos}`}
                  onClick={handleReadMore}
                >
                  Read More
                </span>
              )}
            </span>
          )}
        </div>
      </div>
    );
  }
);

export default ArticleSelectionCard;
