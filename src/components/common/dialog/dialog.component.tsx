import * as React from 'react';
import { Dialog } from '@mui/material';
import { DialogTypes } from './dialog.types';

/**
 * DenDialogContent Component.
 * @constructor
 * @param {boolean} props.open* -If true, the component is shown.
 * @param {node} props.children - The content of the component.
 * @param {object} props.classes - Override or extend the styles applied to the component. See CSS API below for more details.
 * @param {boolean} props.fullScreen - If true, the dialog is full-screen.
 * @param {boolean} props.fullWidth - If true, the dialog stretches to maxWidth.Notice that the dialog width grow is limited by the default margin.
 * maxWidth 'xs'| 'sm'| 'md'| 'lg'| 'xl'| false| string - Determine the max-width of the dialog. The dialog width grows with the size of the screen. Set to false to disable maxWidth.
 * The ref is forwarded to the root element.
 * for more details see http:localhost:6006
 */

export const DenDialog: React.FC<DialogTypes> = React.forwardRef(
  (props, ref) => <Dialog ref={ref} {...props} />
);

export default DenDialog;
