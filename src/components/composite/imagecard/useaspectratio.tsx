import { useEffect, useState } from 'react';
import { AspectRatioProps } from './imagecard.types';
export const useAspectRatioImage = (props: AspectRatioProps) => {
  const { aspectRatio, src, parentNode } = props;
  const [isLoading, setIsLoading] = useState(true);
  const [imageStyle, setImageStyle] = useState({ display: 'none' });
  useEffect(() => {
    const image = new Image();

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
            height: 'auto',
            aspectRatio: aspectRatio,
            margin: 'auto',
            // objectFit: 'cover',
            maxHeight: height,
          };
        } else {
          updatedStyle = {
            width: 'auto',
            height: height,
            aspectRatio: aspectRatio,
            margin: 'auto',
            // objectFit: 'cover',
            maxHeight: height,
          };
        }

        setImageStyle({ ...updatedStyle, display: 'block' });
      }
    };

    image.src = src;

    return () => {
      image.onload = null; // Cleanup the event handler on unmount
    };
  }, [src, aspectRatio]);

  return { isLoading, imageStyle };
};
