import clsx from 'clsx';
import React, { FC } from 'react';
import { AlignType, DenImageCard, LabelValue } from '../../../composite';
import style from './mediaauthleftsection.module.scss';
import { MediaAuthLeftSectionProps } from '../mediaauth.types';
import { DenBox, DenIconButton, DenButton, DenTypography } from '../../../common';
import { ErrorIcon, Close, CheckIcon } from '../../../../assets';
import KeyValueCopy from '../../../composite/keyvaluecopy/keyvaluecopy.component';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';

export const MediaAuthLeftSection: FC<MediaAuthLeftSectionProps> = ({
  metaInformation = [],
  classes = {},
  metaClassName = '',
  metaColumnCount = 4,
  mediaError,
  msid,
  parentMsid,
  slikeId,
  mediaUploaderLoaderProps
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

      <DenBox className={style['media-preview-container']}>
        {(mediaUploaderLoaderProps?.showProgress || mediaUploaderLoaderProps?.uploadComplete) && (
          <DenBox className={clsx(style['media-uploader-container'], style['media-loader-container'])}>
            <DenBox className={style['media-uploader-icon']}>
            </DenBox>
            <DenBox className={style['media-uploader-progress-container']}>
              <DenBox className={style['media-uploader-progress-header']}>
                <Typography variant="body2" color="textSecondary" className={style['media-uploader-progress-text']}>
                  {mediaUploaderLoaderProps.uploadComplete ? <CheckIcon htmlColor='#28A745' width={12} height={10} /> : null}
                  {mediaUploaderLoaderProps.progressText || ''}
                </Typography>
                <Typography variant="caption" color="textSecondary" className={style['media-uploader-progress-percentage']}>
                  {`${mediaUploaderLoaderProps.uploadComplete ? 100 : (mediaUploaderLoaderProps.progressValue || 0)}%`}
                </Typography>
              </DenBox>
              <DenBox className={style['media-uploader-progress-bar-container']}>
                <LinearProgress variant="determinate" value={mediaUploaderLoaderProps.progressValue || 0} className={style['media-uploader-progress-bar']} />
                {!mediaUploaderLoaderProps.uploadComplete && <DenIconButton className={style['media-uploader-close-button']} size="small" sx={{
                  padding: '0px'
                }}
                  onClick={() => {
                    mediaUploaderLoaderProps.onClose?.();
                  }}
                >
                  <Close />
                </DenIconButton>}
              </DenBox>
            </DenBox>
          </DenBox>
        )}
        {!mediaUploaderLoaderProps?.uploadComplete && !mediaUploaderLoaderProps?.showProgress && (
          <DenBox className={style['media-uploader-container']}>
            <DenBox className={style['media-uploader-icon']}>
            </DenBox>
            <DenButton onClick={mediaUploaderLoaderProps.onUpload} className={style['media-uploader-upload-button']}>Upload Media</DenButton>
            <DenBox className={style['media-uploader-progress-container']}>
              <DenTypography variant="body2" color="textSecondary" className={style['media-uploader-supported-types']}>
                Supported types
              </DenTypography>
            </DenBox>
          </DenBox>
        )}
      </DenBox>
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
    </div >
  );
};
export default MediaAuthLeftSection;
