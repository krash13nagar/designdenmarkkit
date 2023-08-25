import * as React from 'react';
import { FormLabel } from '@mui/material';
import { FormLabelTypes } from './formlabel.types';

/**
 * DenFormLabel Component.
 * @constructor
 * @param {HTMLElement} props.component - The component used for the root node. Either a string to use a HTML element or a component.
 * @param {node} props.children - The content of the component.
 * @param {boolean} props.disabled - If true, the label should be displayed in a disabled state.
 * @param {boolean} props.required - If true, the label will indicate that the input is required.
 * @param {boolean} props.error - If true, the label is displayed in an error state.
 * @param {	string} props.color -The color of the component. It supports both default and custom theme colors, which can be added as shown in the palette customization guide.
 * The ref is forwarded to the root element.
 * for more details see http:localhost:6006
 */
export const DenFormLabel: React.FC<FormLabelTypes> = React.forwardRef(
  (props, ref) => <FormLabel {...props} ref={ref} />
);

export default DenFormLabel;
