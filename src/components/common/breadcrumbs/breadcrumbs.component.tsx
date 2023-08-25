import * as React from 'react';
import { BreadcrumbsProps, Breadcrumbs } from '@mui/material';

/**
 * DenBreadcrumbs Component.
 * @constructor
 * @param {node} props.children -The content of the component.
 * @param {object} props.classes - Override or extend the styles applied to the component. See CSS API below for more details.
 * @param {string} props.expandText - Override the default label for the expand button.
 * @param {Element} props.component - The component used for the root node. Either a string to use a HTML element or a component.
 * @param {Array<func | object | boolean> | func | object} props.sx - The system prop that allows defining system overrides as well as additional CSS styles.
 * @param {{ CollapsedIcon?: elementType }} props.slots - The components used for each slot inside the Breadcumb. Either a string to use a HTML element or a component.
 * @param {{ collapsedIcon?: func | object }} props.slotProps -The props used for each slot inside the Breadcumb.
 * @param {node} props.separator - Custom separator node.
 * @param {integer} props.maxItems - Specifies the maximum number of breadcrumbs to display. When there are more than the maximum number, only the first itemsBeforeCollapse and last itemsAfterCollapse will be shown, with an ellipsis in between.
 * @param {integer} props.itemsBeforeCollapse - If max items is exceeded, the number of items to show before the ellipsis
 * @param {integer} props.itemsAfterCollapse - If max items is exceeded, the number of items to show after the ellipsis.
 * The ref is forwarded to the root element.
 * for more details see http:localhost:6006
 */
export const DenBreadcrumbs: React.FC<BreadcrumbsProps> = (props) => (
    <Breadcrumbs  {...props} />
);

export default DenBreadcrumbs;
