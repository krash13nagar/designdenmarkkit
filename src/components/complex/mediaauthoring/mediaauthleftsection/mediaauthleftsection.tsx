import clsx from 'clsx';
import React, { FC, useState, useRef, useEffect } from 'react';
import { AlignType, DenImageCard, LabelValue } from '../../../composite';
import style from './mediaauthleftsection.module.scss';
import { MediaAuthLeftSectionProps } from '../mediaauth.types';
import { DenBox, DenIconButton, DenButton, DenTypography } from '../../../common';
import { ErrorIcon, Close, CheckIcon } from '../../../../assets';
import KeyValueCopy from '../../../composite/keyvaluecopy/keyvaluecopy.component';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import { Popover } from '@mui/material';
import { VideoPropertiesIcon } from '../../../../assets/cdsicons/video_properties_icon';
import VideoMediaIcon from '../../../../assets/cdsicons/video_media_icon';
import UploadIcon from '../../../../assets/cdsicons/upload_icon';

export const MediaAuthLeftSection: FC<MediaAuthLeftSectionProps> = ({
  metaInformation = [],
  classes = {},
  metaClassName = '',
  metaColumnCount = 4,
  mediaError,
  msid,
  parentMsid,
  slikeId,
  thumbComp,
  mediaUploaderLoaderProps,
  previewProps
}) => {

  const [anchorEl, setAnchorEl] = useState(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, []);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleVideoPropertiesClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const renderVideoProperties = () => {
    return (
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
                  elm.className,
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
              labelProps={{ className: style['media_video_properties_label'] }}
              valueProps={{ className: style['media_video_properties_value'] }}
            />
          );
        })}
    </div>
    )
  }
  
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

      <DenBox className={style['media-preview-container']} ref={containerRef}>
        {previewProps?.showPreview ? (
          <div className={style['slike-iframe-container']}>
            <iframe
              key={previewProps?.id}
              src={previewProps?.src}
              allow={previewProps?.allow}
              allowFullScreen={previewProps?.allowFullScreen}
              referrerPolicy={previewProps?.referrerPolicy}
              title={previewProps?.title}
            />
          </div>
        ) : (
          <>
            {(mediaUploaderLoaderProps?.showProgress || mediaUploaderLoaderProps?.uploadComplete) && (
              <DenBox className={clsx(style['media-uploader-container'], style['media-loader-container'])}>
                <DenBox className={style['media-uploader-icon']}>
                  <VideoMediaIcon height={45} width={45} htmlColor='#4D4D4D'/>
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
                <VideoMediaIcon height={45} width={45} htmlColor='#4D4D4D'/>
                </DenBox>
                <DenBox sx={{display: 'flex',alignItems: 'center',justifyContent: 'space-between',marginTop:'8px'}}>
                  <UploadIcon height={16} width={16} htmlColor='#0F89FF'/>
                  <DenButton onClick={mediaUploaderLoaderProps.onUpload} className={style['media-uploader-upload-button']}>Upload Media</DenButton>
                </DenBox>
                <DenBox className={style['media-uploader-progress-container']}>
                  {mediaUploaderLoaderProps?.supportedTypes ? (
                    typeof mediaUploaderLoaderProps.supportedTypes === 'string' ? (
                      <DenTypography variant="body2" color="textSecondary" className={style['media-uploader-supported-types']}>
                        {mediaUploaderLoaderProps.supportedTypes}
                      </DenTypography>
                    ) : (
                      <div className={style['media-uploader-supported-types']}>
                        {mediaUploaderLoaderProps.supportedTypes}
                      </div>
                    )
                  ) : (
                    <DenTypography variant="body2" color="textSecondary" className={style['media-uploader-supported-types']}>
                      Supported types
                    </DenTypography>
                  )}
                </DenBox>
              </DenBox>
            )}
          </>
        )}
      </DenBox>
      <DenBox className={style['media-auth-left-section-video-properties']} onClick={handleVideoPropertiesClick} sx={{alignSelf: 'flex-end',display: 'flex',alignItems: 'center',color: open ? '#0F89FF' : '#4D4D4D',marginRight:'10px'}}>
        <DenIconButton>
          <VideoPropertiesIcon htmlColor={open ? '#0F89FF' : '#818181'}/>
        </DenIconButton>
        <DenTypography className={style['media-auth-left-section-video-properties-title']} >
          Video Properties
        </DenTypography>
      </DenBox>
      <Popover
            id={id}
            className={'video-prop-popover'}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            
            slotProps={{
              paper: {
                sx: {
                  overflow: 'visible',
                  padding:'12px',
                  width: containerWidth
                },
              },
            }}
          >
            {renderVideoProperties()}
          </Popover>
      <div className={clsx(style['media-auth-left-section-thumbnail'])}>
        {thumbComp}
      </div>
    </div>
  );
};
export default MediaAuthLeftSection;
