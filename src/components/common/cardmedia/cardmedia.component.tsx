import * as React from 'react';
import { CardMediaProps, CardMedia } from '@mui/material';

/**
 * DenCardMedia Component.
 * @constructor
 * @param {node} props.children -The content of the component.
 * @param {boolean} props.clickable - If true, the CardMedia will appear clickable, and will raise when pressed, even if the onClick prop is not defined. If false, the CardMedia will not appear clickable, even if onClick prop is defined. This can be used, for example, along with the component prop to indicate an anchor CardMedia is clickable. Note: this controls the UI and does not affect the onClick event.
 * @param {object} props.classes - Override or extend the styles applied to the component. See CSS API below for more details.
 * @param {Element} props.component - The component used for the root node. Either a string to use a HTML element or a component.
 * @param {string} props.image - Image to be displayed as a background image. Either image or src prop must be specified. Note that caller must specify height otherwise the image will not be visible.
 * @param {string} props.src - An alias for image property. Available only with media components. Media components: video, audio, picture, iframe, img.
 * maxWidth 'xs'| 'sm'| 'md'| 'lg'| 'xl'| false| string - Determine the max-width of the dialog. The dialog width grows with the size of the screen. Set to false to disable maxWidth.
 * The ref is forwarded to the root element.
 * for more details see http:localhost:6006
 */
export const DenCardMedia: React.FC<CardMediaProps> = (props) => (
  <CardMedia {...props} />
);

export default DenCardMedia;
