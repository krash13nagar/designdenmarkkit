import * as React from 'react';
import { CardActionArea } from '@mui/material';
import { CardActionAreaTypes } from './cardactionarea.types';

/**
 * DenCardActionArea Component.
 * @constructor
 * @param {node} props.children -The content of the component.
 * @param {object} props.classes - Override or extend the styles applied to the component. See CSS API below for more details.
 * maxWidth 'xs'| 'sm'| 'md'| 'lg'| 'xl'| false| string - Determine the max-width of the dialog. The dialog width grows with the size of the screen. Set to false to disable maxWidth.
 * The ref is forwarded to the root element.
 * for more details see http:localhost:6006
 */
export const DenCardActionArea: React.FC<CardActionAreaTypes> = (props) => (
  <CardActionArea {...props} />
);

export default DenCardActionArea;
