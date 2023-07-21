import * as React from 'react';
import { CollapseProps, Collapse } from '@mui/material';

/**
 * DenCollapse Component.
 * @constructor
 * @param {Function} props.addEndListener -Add a custom transition end trigger. Called with the transitioning DOM node and a done callback. Allows for more fine grained transition end logic. Note: Timeouts are still used as a fallback if provided.
 * @param {node} props.children - The content node to be collapsed.
 * @param {object} props.classes - Override or extend the styles applied to the component. See CSS API below for more details.
 * @param {number|string} props.collapsedSize @default {"0px"} - The width (horizontal) or height (vertical) of the container when collapsed.
 * @param {Element} props.component - The component used for the root node. Either a string to use a HTML element or a component.
 * @param {{enter?:string,exit?:string} | string} props.easing - The transition timing function. You may specify a single easing or a object containing enter and exit values.
 * @param {"auto"|number|{appear?:number,enter?:number,exit?:number}} props.timeout - The duration for the transition, in milliseconds. You may specify a single timeout for all transitions, or individually with an object.Set to 'auto' to automatically calculate transition time based on height.
 * The ref is forwarded to the root element.
 * for more details see http:localhost:6006
 */
export const DenCollapse: React.FC<CollapseProps> = (props) => (
  <Collapse {...props} />
);

export default DenCollapse;
