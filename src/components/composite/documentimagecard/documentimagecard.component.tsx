import React, { useState, useEffect } from 'react';
import cssClassName from './documentimagecard.module.scss';
import { DenCard, DenCardMedia } from '../../common';
import clsx from 'clsx';
import { documentImageCardConfig } from './documentimagecard.types';
import { Checkbox } from '@mui/material';

export const DocumentImageCard = React.forwardRef(
  (props: documentImageCardConfig, ref: React.MutableRefObject<any>) => {
    const isShowResolution = true;
    const {
      name,
      agencyName,
      imageUrl,
      classes = {},
      variant = '',
      checked = false,
      onCheckboxChange,
      indexNumber=1,
      showCheckbox = false,
      showIndexNumber = false,
    } = props;

    const [checkedValue, setCheckedValue] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    let variantClassName = '';
    const changeVariantClassName = (variantType: string) => {
      if (variantType == 'small') variantClassName = 'smallVariant';
    };
    changeVariantClassName(variant);

    const handleCheckboxChange: React.ChangeEventHandler<HTMLInputElement> = (e: React.ChangeEvent<HTMLInputElement>) => {
      const isChecked = e.target.checked;
      if (onCheckboxChange) {
        onCheckboxChange(e);
      }
      else {
        setCheckedValue(isChecked);
      }
    }

    useEffect(() => {
      setCheckedValue(checked);
    }, [checked]);


    return (
      <div className={cssClassName[variantClassName]}>
        <DenCard
          classes={{ root: 'card-root' }}
          key={indexNumber + 1}
          className={clsx(cssClassName['default-card-wrapper'], classes?.root)}
          ref={ref}
        >
          {(showCheckbox || showIndexNumber) && imageLoaded && (
            <div
              className={cssClassName['checkbox-wrapper']}
              onClick={(e) => e.stopPropagation()}
            >
              {showCheckbox && (
                <Checkbox
                  checked={checkedValue}
                  onChange={handleCheckboxChange}
                  className={cssClassName['custom-checkbox']}
                />
              )}
              {showIndexNumber && (
                <div className={cssClassName['index-number']}>
                  {indexNumber}
                </div>
              )}
            </div>
          )}
          <div
            className={
              isShowResolution
                ? cssClassName['image-with-resolution-wrapper']
                : ''
            }
          >
            <DenCardMedia
              src={imageUrl}
              component="img"
              title={name}
              classes={{
                img: `${
                  isShowResolution
                    ? clsx(cssClassName['newCardMedia-image'], classes?.root)
                    : cssClassName['cardMedia-image']
                }`,
              }}
              onLoad={() => setImageLoaded(true)}
              onError={(e) => {
                setImageLoaded(false);
                // ImageUtils.imageFallback(src, type).then(function (url) {
                //     e.target.src = url;
                //     e.target.className += ' default-thumb-atom';
                // })
              }}
            />
            <div className={cssClassName['new-resolution']}>
              <span className={cssClassName['primaryText']}>
                {agencyName ? agencyName : ''}
              </span>
            </div>
          </div>
        </DenCard>
      </div>
    );
  }
);
export default DocumentImageCard;
