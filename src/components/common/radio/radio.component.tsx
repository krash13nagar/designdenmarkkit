import * as React from 'react';
import { RadioProps, Radio } from '@mui/material';
/**
 * DenRadio Component.
 * @constructor
 * @param {boolean} props.checked -If true, the component is checked.
 * @param {node} props.checkedIcon - The icon to display when the component is checked.
 * @param {'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | string} props.color - The color of the component. It supports both default and custom theme colors, which can be added as shown in the palette customization guide.
 * @param {boolean} props.disabled - If true, the component is disabled.
 * @param {boolean} props.disableRipple - If true, the ripple effect is disabled.
 * @param {'medium' | 'small' | string} props.size - The size of the component. small is equivalent to the dense radio styling.
 * @param {string} props.id - The id of the input element.
 */
export const DenRadio: React.FC<RadioProps> = React.forwardRef((props, ref) => (
  <Radio {...props} ref={ref} />
));
export default DenRadio;
