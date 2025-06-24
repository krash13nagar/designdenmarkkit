import clsx from 'clsx';
import React, { FC } from 'react';
import { AlignType, DenImageCard, LabelValue } from '../../../composite';
import style from './mediaauthleftsection.module.scss';
import { MediaAuthLeftSectionProps } from '../mediaauth.types';
import { DenBox } from '../../../common';
import { ErrorIcon } from '../../../../assets';
import KeyValueCopy from '../../../composite/keyvaluecopy/keyvaluecopy.component';

export const MediaAuthLeftSection: FC<MediaAuthLeftSectionProps> = ({
  src,
  metaInformation = [],
  classes = {},
  imageCTAs = [],
  handleItemClick = () => { },
  metaClassName = '',
  metaColumnCount = 4,
  mediaError,
  msid,
  parentMsid,
  slikeId,
}) => {
  return (
    <div className={clsx(style['media-auth-left-panel'], classes.root)}>
      {mediaError?.message && (
        <div className={style['error-with-icon']}>
          <ErrorIcon />
          <span className={style['errormessage']}>{mediaError.message}</span>
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
        {slikeId ? (
          <div className={style.parentMsidWrapper}>
            {parentMsid && slikeId ? <div className={style.separator}></div> : null}
            <KeyValueCopy keyText="Slike ID : " valueText={slikeId} />
          </div>
        ) : null}
      </div>
      <DenImageCard
        src={src}
        wrapperClassName={style['media-container']}
        imageClassName={style['media']}
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
export default MediaAuthLeftSection;
