import * as React from 'react';
import { IconButton } from '@mui/material';
import { IconButtonTypes } from './iconbutton.types';

/**
 * DenIconButton Component.
 * @constructor
 * @param {node} props.children - The content of the component.
 * @param {object} props.classes - Override or extend the styles applied to the component. See CSS API below for more details.
 * @param {boolean} props.disabled - If true, the component is disabled.
 * The ref is forwarded to the root element.
 * for more details see http:localhost:6006
 */
export const DenIconButton: React.FC<IconButtonTypes> = (props) => (
  <IconButton {...props} />
);

export default DenIconButton;
