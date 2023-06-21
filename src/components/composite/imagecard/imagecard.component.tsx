import React, { useRef } from 'react';
import style from './imagecard.module.scss';
import { ImageCardProps } from './imagecard.types';
import { useAspectRatioImage } from './useaspectratio';
import CircularProgress from '@mui/material/CircularProgress';

export const ImageCard = (props: ImageCardProps) => {
  const parentRef = useRef<HTMLDivElement>(null);
  const {
    src = '',
    alt = '',
    aspectRatio,
    imageClassName = style['image'],
    wrapperClassName = style['image-container'],
  } = props;
  const { isLoading, imageStyle } = useAspectRatioImage({
    src,
    aspectRatio,
    parentNode: parentRef?.current,
  });
  return (
    <div className={wrapperClassName} ref={parentRef}>
      {isLoading && <CircularProgress />}
      <img
        style={{ ...imageStyle }}
        className={imageClassName}
        src={src}
        alt={alt}
      />
    </div>
  );
};
export default ImageCard;
