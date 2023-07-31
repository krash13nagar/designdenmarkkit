import { ViewPortStyleProps } from './viewportblock.types';

export const viewPortDimenssions = (aspectRatio: string = '') => {
  let dimensions = { width: 1, height: 1 };
  try {
    if (typeof aspectRatio === 'string') {
      if (aspectRatio.includes('/')) {
        const [width, height] = aspectRatio.trim().split('/');
        dimensions.width = Number(width);
        dimensions.height = Number(height);
      }
      if (aspectRatio.includes(':')) {
        const [width, height] = aspectRatio.trim().split(':');
        dimensions.width = Number(width);
        dimensions.height = Number(height);
      }
    }
    return dimensions;
  } catch (error) {
    return dimensions;
  }
};
export const blockStyle = ({ width, height }: ViewPortStyleProps) => {
  let updatedStyle = {};
  if (width > height) {
    updatedStyle = {
      width: '100%',
      height: 'auto',
      aspectRatio: width / height,
      margin: 'auto',
    };
  } else {
    updatedStyle = {
      width: 'auto',
      height: '100%',
      aspectRatio: width / height,
      margin: 'auto',
    };
  }
  return updatedStyle;
};
