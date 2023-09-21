import * as React from 'react';
import { CardHeader } from '@mui/material';
import { CardHeaderTypes } from './cardheader.types';

/**
 * DenCardHeader Component.
 * @constructor
 * @param {node} props.action -The action to display in the card header..
 * @param {node} props.avatar -The Avatar element to display.
 * @param {node} props.title - The content of the component.
 * @param {object} props.classes - Override or extend the styles applied to the component. See CSS API below for more details.
 * @param {Element} props.component - The component used for the root node. Either a string to use a HTML element or a component.
 * @param {object} props.titleTypographyProps - These props will be forwarded to the title (as long as disableTypography is not true).
 * maxWidth 'xs'| 'sm'| 'md'| 'lg'| 'xl'| false| string - Determine the max-width of the dialog. The dialog width grows with the size of the screen. Set to false to disable maxWidth.
 * The ref is forwarded to the root element.
 * for more details see http:localhost:6006
 */
export const DenCardHeader: React.FC<CardHeaderTypes> = (props) => (
  <CardHeader {...props} />
);

export default DenCardHeader;
