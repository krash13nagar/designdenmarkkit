import * as React from 'react';
import { AccordionActions } from '@mui/material';
import { AccordionActionsTypes } from './accordionaction.types';

/**
 * DenAccordionActions Component.
 * @constructor
 * @param {node} props.children -The content of the component.
 * @param {object} props.classes - Override or extend the styles applied to the component. See CSS API below for more details.
 * @param {boolean} props.disableSpacing -If true, the actions do not have additional margin.
 * The ref is forwarded to the root element.
 * for more details see http:localhost:6006
 */
export const DenAccordionActions: React.FC<AccordionActionsTypes> = (props) => (
  <AccordionActions {...props} />
);

export default DenAccordionActions;
