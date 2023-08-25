import * as React from 'react';
import { ChipProps, Chip } from '@mui/material';

/**
 * DenChip Component.
 * @constructor
 * @param {element} props.avatar -The Avatar element to display.
 * @param {boolean} props.clickable - If true, the chip will appear clickable, and will raise when pressed, even if the onClick prop is not defined. If false, the chip will not appear clickable, even if onClick prop is defined. This can be used, for example, along with the component prop to indicate an anchor Chip is clickable. Note: this controls the UI and does not affect the onClick event.
 * @param {object} props.classes - Override or extend the styles applied to the component. See CSS API below for more details.
 * @param {	'default'| 'primary'| 'secondary'| 'error'| 'info'| 'success'| 'warning'| string} props.color - If true, the dialog is full-screen.
 * @param {Element} props.component - The component used for the root node. Either a string to use a HTML element or a component.
 * @param {boolean} props.fullWidth - If true, the dialog stretches to maxWidth.Notice that the dialog width grow is limited by the default margin.
 * maxWidth 'xs'| 'sm'| 'md'| 'lg'| 'xl'| false| string - Determine the max-width of the dialog. The dialog width grows with the size of the screen. Set to false to disable maxWidth.
 * The ref is forwarded to the root element.
 * for more details see http:localhost:6006
 */
export const DenChip: React.FC<ChipProps> = React.forwardRef((props, ref) => <Chip ref={ref} {...props} />);

export default DenChip;
