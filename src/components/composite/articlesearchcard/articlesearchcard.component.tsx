import React, { useMemo } from 'react';
import cssClassName from './articlesearchcard.module.scss';
import { DenBox, DenCard, ImageWithFallback, StatusDotNew, } from '../../common';
import { calculateFromNow } from '../../../utility/utils';
import ArticleSearchCardHoverDetails from './articlesearchcardhover.component';

import clsx from 'clsx';
import {
  articleSearchCardConfig,
} from './articlesearchcard.types';

export const ArticleSearchCard = React.forwardRef((props: articleSearchCardConfig, ref: React.MutableRefObject<any>) => {

  const {
    id,
    title,
    subtitle,
    agencyName,
    fromNow,
    imageUrl,
    classes = {},
    variant = '',
    cardMenuOptions,
    actionButtonsList,
    ingestionDateTimestamp,
    ImageFallback,
    onCardClick = () => { },
    status,
    handleOpenInNew,
    selected
  } = props;

  const fromNowText = useMemo(() => {
    return (
      fromNow ||
      (ingestionDateTimestamp ? calculateFromNow(ingestionDateTimestamp) : '')
    );
  }, [ingestionDateTimestamp, fromNow]);

  let variantClassName = '';
  const changeVariantClassName = (variantType: string) => {
    if (variantType == 'small') variantClassName = 'smallVariant';
  };
  changeVariantClassName(variant);

  return (
    <div className={cssClassName[variantClassName]}>
      <DenCard
        classes={{ root: 'card-root' }}
        className={clsx(cssClassName['default-card-wrapper'], classes?.root, selected ? cssClassName['selected-card'] : '')}
        ref={ref}
        onClick={onCardClick}
      >
        <div
          className={cssClassName['image-with-details-wrapper']}
        >
          <div className={cssClassName['card-details-section']}>
            <div className={cssClassName['card-image-wrapper']}>
              {imageUrl && <div className={cssClassName['card-image']}>
                <ImageWithFallback
                  src={imageUrl}
                  placeholderIcon={ImageFallback}
                  showFallbackBorder={false}
                />
              </div>}
              {title && <DenBox sx={imageUrl ? { ml: "8px" } : {}} title={title} className={cssClassName['card-title']}>
                {title}
              </DenBox>}
            </div>
            {subtitle && <p className={cssClassName['card-subtitle']}>{subtitle}</p>}
          </div>

          <div className={cssClassName['card-footer']}>
            {status && <StatusDotNew status={status} />}
            <DenBox sx={{ ml: "3px" }} className={cssClassName['primaryText']}>
              {agencyName ? agencyName : ''}
              {agencyName && fromNowText ? ' | ' : ''}
              {fromNowText}
            </DenBox>
          </div>
          <ArticleSearchCardHoverDetails
            actionButtonsList={actionButtonsList}
            cardMenuOptions={cardMenuOptions}
            handleOpenInNew={handleOpenInNew}
          />
        </div>
      </DenCard>
    </div>
  );
})
export default ArticleSearchCard;
