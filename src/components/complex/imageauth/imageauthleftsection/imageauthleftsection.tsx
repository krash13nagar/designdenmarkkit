import clsx from 'clsx';
import React, { FC } from 'react';
import { AlignType, DenImageCard, LabelValue } from '../../../composite';
import style from './imageauthleftsection.module.scss';
import { ImageAuthLeftSectionProps } from '../imageauth.types';
import { DenBox } from '../../../common';
import { ErrorIcon } from '../../../../assets';

export const ImageAuthLeftSection: FC<ImageAuthLeftSectionProps> = ({
  src,
  metaInformation = [],
  classes = {},
  imageCTAs = [],
  handleItemClick = () => {},
  metaClassName = '',
  metaColumnCount = 4,
  imageError,
}) => {
  return (
    <div className={clsx(style['image-auth-left-panel'], classes.root)}>
      {imageError?.message && (
        <div className={style['error-with-icon']}>
          <ErrorIcon />
          <span className={style['errormessage']}>{imageError.message}</span>
        </div>
      )}
      <DenImageCard
        src={src}
        wrapperClassName={style['image-container']}
        imageClassName={style['image']}
        autoImageDimensions={false}
        showIconMenu
        CTAs={imageCTAs}
        handleItemClick={handleItemClick}
      />
      <div className={clsx(style['meta-info-wrapper'], 'cds-row')}>
        {metaInformation
          .filter((elm) => (elm.label && elm.value) || elm.component)
          .map((elm, i) => {
            if (elm.component) {
              return (
                <DenBox
                  key={i}
                  className={clsx(
                    `cds-column-${metaColumnCount}`,
                    metaClassName,
                    elm.className
                  )}
                >
                  {elm.component}
                </DenBox>
              );
            }
            return (
              <LabelValue
                key={i}
                {...elm}
                align={AlignType.column}
                className={clsx(`cds-column-${metaColumnCount}`, metaClassName)}
              />
            );
          })}
      </div>
    </div>
  );
};
export default ImageAuthLeftSection;
