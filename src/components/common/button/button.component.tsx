import * as React from 'react';
import { Button } from '@mui/material';
import { ButtonTypes } from './types';

/**
 * DenButton Component.
 * @constructor
 * @param {node} props.children -The content of the component.
 * @param {object} props.classes - Override or extend the styles applied to the component. See CSS API below for more details.
 * @param {	'default'| 'primary'| 'secondary'| 'error'| 'info'| 'success'| 'warning'| string} props.color - If true, the dialog is full-screen.
 * @param {Element} props.component - The component used for the root node. Either a string to use a HTML element or a component.
 * @param {boolean} props.disabled - If true, the component is disabled.
 * @param {boolean} props.disableElevation - If true, no elevation is used.
 * @param {boolean} props.disableFocusRipple - If true, the keyboard focus ripple is disabled.
 * @param {small|medium|large|string} props.size @default {medium} - The size of the component. small is equivalent to the dense button styling.
 * @param {node} props.startIcon - Element placed before the children.
 * @param {"contained"|"outlined"|"text"|string} props.variant @default {text} - The variant to use.
 * The ref is forwarded to the root element.
 * for more details see http:localhost:6006
 */
export const DenButton: React.FC<ButtonTypes> = (props) => (
  <Button {...props} />
);

export default DenButton;
