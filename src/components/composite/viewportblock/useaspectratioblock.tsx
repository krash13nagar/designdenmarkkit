import { useEffect, useState } from 'react';
export const useAspectRatioBlock = (props: {
  aspectRatio: number;
  parentNode: HTMLDivElement | undefined;
}) => {
  const { aspectRatio, parentNode } = props;
  const [imageStyle, setImageStyle] = useState({});
  useEffect(() => {
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
          maxWidth: '100%',
          maxHeight: '100%',
        };
      } else {
        updatedStyle = {
          width: `${Math.floor(aspectRatio * parseInt(height as string))}px`,
          height: height,
          margin: 'auto',
          maxHeight: '100%',
          maxWidth: '100%',
        };
      }
    }
    setImageStyle({ ...updatedStyle });
  }, [parentNode]);

  return imageStyle;
};
