import * as React from 'react';
import { AccordionActionsProps, AccordionActions } from '@mui/material';

/**
 * DenAccordionActions Component.
 * @constructor
 * @param {node} props.children -The content of the component.
 * @param {object} props.classes - Override or extend the styles applied to the component. See CSS API below for more details.
 * @param {boolean} props.disableSpacing -If true, the actions do not have additional margin.
 * The ref is forwarded to the root element.
 * for more details see http:localhost:6006
 */
export const DenAccordionActions: React.FC<AccordionActionsProps> = React.forwardRef((props, ref) => (
  <AccordionActions {...props} ref={ref} />
));

export default DenAccordionActions;
