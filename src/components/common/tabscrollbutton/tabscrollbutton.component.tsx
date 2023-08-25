import * as React from 'react';
import { TabScrollButton } from '@mui/material';
import { TabScrollButtonTypes } from './tabscrollbutton.types';

/**
 * Tab Scroll Button Component.
 * @constructor
 * @param {boolean} props.disabled - If true, the component is disabled.
 * @param {node} props.children - The content of the component.
 * @param {'left' | 'right'} props.direction - The direction the button should indicate.
 * @param {'horizontal' | 'vertical'} props.orientation - The component orientation (layout flow direction).
 * The ref is forwarded to the root element.
 * for more details see http:localhost:6006
 */

export const DenTabScrollButton: React.FC<TabScrollButtonTypes> = (props) => (
  <TabScrollButton {...props} />
);

export default DenTabScrollButton;
