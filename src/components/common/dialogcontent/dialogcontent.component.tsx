import * as React from 'react';
import { DialogContent } from '@mui/material';
import { DialogContentTypes } from './dialogcontent.types';

/**
 * DenDialogContent Component.
 * @constructor
 * @param {node} props.children - The content of the component.
 * @param {object} props.classes - Override or extend the styles applied to the component. See CSS API below for more details.
 * @param {boolean} props.dividers - Display the top and bottom dividers.
 * The ref is forwarded to the root element.
 * for more details see http:localhost:6006
 */

export const DenDialogContentBase = (
  props: DialogContentTypes,
  ref: React.ForwardedRef<unknown>
) => <DialogContent ref={ref} {...props} />;

export const DenDialogContent = React.forwardRef(DenDialogContentBase);

export default DenDialogContent;
