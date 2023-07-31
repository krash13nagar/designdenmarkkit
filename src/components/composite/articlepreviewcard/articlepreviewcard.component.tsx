import React from 'react';
import { ArticlePreviewCardProps } from './articlepreviewcard.types';
import styles from './articlepreviewcard.module.scss';
import { DenTypography } from '../../common';
import ImageWithFallback from '../../common/imagewithfallback/imagewithfallback';

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
        <div
          title={ctaTooltipText}
          onClick={handleCTA}
          className={styles.ctaIcon}
        >
          {ctaIcon}
        </div>
      </div>
    );
  }
);

export default ArticlePreviewCard;
