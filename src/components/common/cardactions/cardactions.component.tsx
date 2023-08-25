import * as React from 'react';
import { CardActionsProps, CardActions } from '@mui/material';

/**
 * DenCardActions Component.
 * @constructor
 * @param {node} props.children -The content of the component.
 * @param {boolean} props.raised - If true, theCardActions will use raised styling.
 * @param {object} props.classes - Override or extend the styles applied to the component. See CSS API below for more details.
 * maxWidth 'xs'| 'sm'| 'md'| 'lg'| 'xl'| false| string - Determine the max-width of the dialog. The dialog width grows with the size of the screen. Set to false to disable maxWidth.
 * The ref is forwarded to the root element.
 * for more details see http:localhost:6006
 */
export const DenCardActions: React.FC<CardActionsProps> = (props) => (
  <CardActions {...props} />
);

export default DenCardActions;
