import * as React from 'react';
import { DialogTitleProps, DialogTitle } from '@mui/material';

/**
 * DenDialogTitle Component.
 * @constructor
 * @param {node} props.children - The content of the component.
 * @param {object} props.classes - Override or extend the styles applied to the component. See CSS API below for more details.
 * The ref is forwarded to the root element.
 * for more details see http:localhost:6006
 */
export const DenDialogTitle: React.FC<DialogTitleProps> = React.forwardRef((props, ref) => (
  <DialogTitle ref={ref} {...props} />
));

export default DenDialogTitle;
