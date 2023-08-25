import * as React from 'react';
import { DialogTitle } from '@mui/material';
import { DialogTitleTypes } from './dialogtitle.types';

/**
 * DenDialogTitle Component.
 * @constructor
 * @param {node} props.children - The content of the component.
 * @param {object} props.classes - Override or extend the styles applied to the component. See CSS API below for more details.
 * The ref is forwarded to the root element.
 * for more details see http:localhost:6006
 */
export const DenDialogTitle: React.FC<DialogTitleTypes> = (props) => (
  <DialogTitle {...props} />
);

export default DenDialogTitle;
