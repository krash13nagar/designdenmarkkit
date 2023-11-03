import * as React from 'react';
import { DialogContentText } from '@mui/material';
import { DialogContentTextTypes } from './dialogcontenttext.types';

/**
 * DenDialogContentText Component.
 * @constructor
 * @param {node} props.children - The content of the component.
 * @param {object} props.classes - Override or extend the styles applied to the component. See CSS API below for more details.
 * The ref is forwarded to the root element.
 * for more details see http:localhost:6006
 */
export const DenDialogContentText: React.FC<DialogContentTextTypes> = (
  props
) => <DialogContentText {...props} />;

export default DenDialogContentText;
