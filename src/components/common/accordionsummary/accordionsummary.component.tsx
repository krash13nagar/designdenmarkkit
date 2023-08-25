import * as React from 'react';
import { AccordionSummaryProps, AccordionSummary } from '@mui/material';

/**
 * DenAccordionSummary Component.
 * @constructor
 * @param {node} props.children -The content of the component.
 * @param {object} props.classes - Override or extend the styles applied to the component. See CSS API below for more details.
 * @param {node} props.expandIcon - The icon to display as the expand indicator.
 * @param {string} props.focusVisibleClassName - This prop can help identify which element has keyboard focus. The class name will be applied when the element gains the focus through keyboard interaction. It's a polyfill for the CSS :focus-visible selector. The rationale for using this feature is explained here. A polyfill can be used to apply a focus-visible class to other components if needed.
 * The ref is forwarded to the root element.
 * for more details see http:localhost:6006
 */
export const DenAccordionSummary: React.FC<AccordionSummaryProps> = React.forwardRef((props, ref) => (
  <AccordionSummary {...props} ref={ref} />
));

export default DenAccordionSummary;
