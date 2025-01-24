import clsx from 'clsx';
import React, { FC } from 'react';
import { AlignType, DenImageCard, LabelValue } from '../../../composite';
import style from './imageauthleftsection.module.scss';
import { ImageAuthLeftSectionProps } from '../imageauth.types';
import { DenBox } from '../../../common';
import { ErrorIcon } from '../../../../assets';
import KeyValueCopy from '../../../composite/keyvaluecopy/keyvaluecopy.component';

export const ImageAuthLeftSection: FC<ImageAuthLeftSectionProps> = ({
  src,
  metaInformation = [],
  classes = {},
  imageCTAs = [],
  handleItemClick = () => { },
  metaClassName = '',
  metaColumnCount = 4,
  imageError,
  msid,
  parentMsid,
}) => {
  return (
    <div className={clsx(style['image-auth-left-panel'], classes.root)}>
      {imageError?.message && (
        <div className={style['error-with-icon']}>
          <ErrorIcon />
          <span className={style['errormessage']}>{imageError.message}</span>
        </div>
      )}
      <div className={style.idWrapper}>
        <KeyValueCopy keyText="ID : " valueText={msid || 'New'} showCopy={!!msid} />
        {parentMsid ? (
          <div className={style.parentMsidWrapper}>
            <div className={style.separator}></div>
            <KeyValueCopy keyText="Parent ID : " valueText={parentMsid} />
          </div>
        ) : null}
      </div>
      <DenImageCard
        src={src}
        wrapperClassName={style['image-container']}
        imageClassName={style['image']}
        autoImageDimensions={false}
        showIconMenu
        alt={src}
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
