import React, { useRef } from 'react';
import style from './imagecard.module.scss';
import { ImageCardProps } from './imagecard.types';
import { useAspectRatioImage } from './useaspectratio';
import { DenCircularProgress } from '../../common/circularprogress/circularprogress.component';

/**
 * ImageCard Component.
 * @constructor
 * @param {string} props.src* -The source of the image card element.
 * @param {string} props.alt - Alt text for the image html tag element
 * @param {number} props.aspectRatio - Aspect ratio of the image
 * @param {string} props.imageClassName - Classname to be applied to the image lement
 * @param {string} props.wrapperClassName - Classname applied to the wrapper element.
 * The ref is forwarded to the root element.
 * for more details see http:localhost:6006
 */
export const DenImageCard = (props: ImageCardProps) => {
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
      {isLoading && <DenCircularProgress />}
      <img
        style={{ ...imageStyle }}
        className={imageClassName}
        src={src}
        alt={alt}
      />
    </div>
  );
};
export default DenImageCard;
