import React, { useEffect, useState } from 'react';
import Skeleton from '@mui/material/Skeleton';
import './imagewithfallback.style.scss';
import { ImageWithFallbackProps } from './imagewithfallback.types';

export const ImageWithFallback = React.forwardRef<HTMLImageElement, ImageWithFallbackProps>((props, ref) => {
  const {
    placeholderIcon = null,
    showLoaderWhenLoading = true,
    showFallbackBorder = true,
    src,
    width = '100%',
    height = '100%',
    ...otherProps
  } = props;
  const [showFallback, setShowFallback] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const handleSuccess = () => {
    setShowFallback(false);
  };
  const handleError = () => {
    setLoadError(true);
    setIsLoading(false);
  };

  useEffect(() => {
    if (!src) return;
    if (!showFallback) setShowFallback(true);
    if (loadError) setLoadError(false);
    if (!isLoading) setIsLoading(true);
  }, [src]);

  return (
    <>
      <div className="image-with-fallback-wrapper" style={{ width, height }}>
        {!loadError && (
          <img
            onLoad={handleSuccess}
            onError={handleError}
            src={src}
            width={width}
            height={height}
            ref={ref}
            {...otherProps}
          ></img>
        )}
        <span
          className={`fallback-image-wrapper ${
            showFallback || loadError
              ? `show ${showFallbackBorder ? 'border' : ''}`
              : 'hide'
          }`}
          style={{
            width,
            height,
            position: loadError ? 'relative' : 'absolute',
          }}
        >
          {showLoaderWhenLoading && isLoading && (
            <Skeleton width={'100%'} height={'100%'} variant="rounded" />
          )}
          {((placeholderIcon && !showLoaderWhenLoading) ||
            (showLoaderWhenLoading && !isLoading)) &&
            placeholderIcon}
        </span>
      </div>
    </>
  );
});

export default ImageWithFallback;
