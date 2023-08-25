import * as React from 'react';
import { CircularProgressProps, CircularProgress } from '@mui/material';

/**
 * DenCircularProgress Component.
 * @constructor
 * @param {'inherit'| 'primary'| 'secondary'| 'error'| 'info'| 'success'| 'warning'| string} props.color -The color of the component. It supports both default and custom theme colors, which can be added as shown in the palette customization guide.
 * @param {object} props.classes - Override or extend the styles applied to the component. See CSS API below for more details.
 * @param {boolean} props.disableShrink - If true, the shrink animation is disabled. This only works if variant is indeterminate.
 * @param {number| string} props.size @default {40} - The size of the component. If using a number, the pixel unit is assumed. If using a string, you need to provide the CSS unit, e.g '3rem'.
 * @param {number} props.thickness @default {3.6} - The thickness of the circle.
 * @param {number} props.value @default {0} - The value of the progress indicator for the determinate variant. Value between 0 and 100.
 * @param {'determinate'| 'indeterminate'} @default {'indeterminate'} - The variant to use. Use indeterminate when there is no progress value.
 * The ref is forwarded to the root element.
 * for more details see http:localhost:6006
 */
export const DenCircularProgress: React.FC<CircularProgressProps> = (props) => (
  <CircularProgress {...props} />
);

export default DenCircularProgress;
