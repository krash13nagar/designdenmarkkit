import React from 'react';
import { ArticlePreviewCardProps } from './articlepreviewcard.types';
import styles from './articlepreviewcard.module.scss';
import { DenTypography } from '../../common';
import ImageWithFallback from '../../common/imagewithfallback/imagewithfallback';

/**
 * ArticlePreviewCard Component.
 * @constructor
 * @param {string} props.title -  title
 * @param {string} props.imgUrl - (optional) url for image
 * @param {string} props.date -  (optional) date
 * @param {string} props.wordCount - (optional) wordcount
 * @param {string} props.agency -  (optional) agency
 * @param {string} props.source - (optional) source
 * @param {React.ReactNode} props.ctaIcon -  (optional) icon for CTA
 * @param {React.MouseEventHandler<HTMLDivElement>} props.handleCTAClick - (optional) handler for CTA click
 * @param {React.ReactNode} props.imagePlaceholderIcon -  (optional) icon for image placeholder
 * @param {string} props.ctaTooltipText -  (optional) cta tooltip
 * ref is forwarded to parent element
 */

export const ArticlePreviewCard = React.forwardRef<
  HTMLDivElement,
  ArticlePreviewCardProps
>(
  (
    {
      title,
      imgUrl,
      imagePlaceholderIcon,
      ctaIcon,
      handleCTAClick = () => {},
      wordCount,
      date,
      agency,
      source,
      handleCardClick = () => {},
      ctaTooltipText = '',
    },
    ref
  ) => {
    const handleCTA = (e: React.MouseEvent<HTMLDivElement>) => {
      handleCTAClick(e);
      e.stopPropagation();
    };

    return (
      <div
        onClick={handleCardClick}
        ref={ref}
        className={styles.referenceCardWrapper}
      >
        {imgUrl && (
          <div className={styles.leftWrapper}>
            <ImageWithFallback
              src={imgUrl}
              width={'100%'}
              height={'100%'}
              placeholderIcon={imagePlaceholderIcon}
            />
          </div>
        )}

        <div className={styles.rightWrapper}>
          <span title={title}>
            <DenTypography className={styles.title}>{title}</DenTypography>
          </span>
          <div className={styles.rightBottomWrapper}>
            <div className={styles.secondaryText}>
              {date && <span>{date}</span>}
              {date && wordCount && ' | '}
              {wordCount && <span>WC {wordCount}</span>}
            </div>
            <div className={styles.redirectWrapper}>
              <div className={styles.secondaryText}>
                {agency && <span>Agency : {agency}</span>}
                {agency && source && ' | '}
                {source && <span>Source : {source}</span>}
              </div>
            </div>
          </div>
        </div>
        {ctaIcon && (
          <div
            title={ctaTooltipText}
            onClick={handleCTA}
            className={styles.ctaIcon}
          >
            {ctaIcon}
          </div>
        )}
      </div>
    );
  }
);

export default ArticlePreviewCard;
