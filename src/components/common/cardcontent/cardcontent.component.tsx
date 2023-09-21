import * as React from 'react';
import { CardContent } from '@mui/material';
import { CardContentTypes } from './cardcontent.types';

/**
 * DenCardContent Component.
 * @constructor
 * @param {node} props.children -The content of the component.
 * @param {elementType} props.component - The component used for the root node. Either a string to use a HTML element or a component.
 * @param {object} props.classes - Override or extend the styles applied to the component. See CSS API below for more details.
 * maxWidth 'xs'| 'sm'| 'md'| 'lg'| 'xl'| false| string - Determine the max-width of the dialog. The dialog width grows with the size of the screen. Set to false to disable maxWidth.
 * The ref is forwarded to the root element.
 * for more details see http:localhost:6006
 */
export const DenCardContent: React.FC<CardContentTypes> = (props) => (
  <CardContent {...props} />
);

export default DenCardContent;
