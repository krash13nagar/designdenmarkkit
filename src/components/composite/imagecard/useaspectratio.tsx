import { useEffect, useState } from 'react';
import { AspectRatioProps } from './imagecard.types';
export const useAspectRatioImage = (props: AspectRatioProps) => {
  const { aspectRatio, src, parentNode } = props;
  const [isLoading, setIsLoading] = useState(true);
  const [imageStyle, setImageStyle] = useState({ display: 'none' });
  useEffect(() => {
    const image = new Image();

    setImageStyle({ display: 'none' });
    setIsLoading(true);

    image.onload = () => {
      setIsLoading(false);
      const { width, height } = parentNode?.getBoundingClientRect() ?? {
        width: '100%',
        height: '100%',
      };
      let updatedStyle = {};
      if (aspectRatio) {
        if (aspectRatio > 1) {
          updatedStyle = {
            width: width,
            height: `${Math.floor(parseInt(width as string) / aspectRatio)}px`,
            margin: 'auto',
            objectFit: 'cover',
            maxHeight: height,
          };
        } else {
          updatedStyle = {
            width: `${Math.floor(aspectRatio * parseInt(height as string))}px`,
            height: height,
            margin: 'auto',
            objectFit: 'cover',
            maxHeight: height,
          };
        }
      }
      setImageStyle({ ...updatedStyle, display: 'block' });
    };
    image.onerror = () => {
      setIsLoading(false);
      setImageStyle({ display: 'block' });
    };

    image.src = src;

    return () => {
      image.onload = null; // Cleanup the event handler on unmount
      image.onerror = null; // Cleanup the event handler on unmount
    };
  }, [src, aspectRatio, parentNode]);

  return { isLoading, imageStyle };
};
