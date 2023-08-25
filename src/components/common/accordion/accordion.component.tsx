import * as React from 'react';
import { AccordionProps, Accordion } from '@mui/material';

/**
 * DenAccordion Component.
 * @constructor
 * @param {node} props.children* -The content of the component.
 * @param {object} props.classes - Override or extend the styles applied to the component. See CSS API below for more details.
 * @param {boolean} props.defaultExpanded - If true, expands the accordion by default.
 * @param {boolean} props.disabled - If true, the component is disabled.
 * @param {boolean} props.disableGutters - If true, it removes the margin between two expanded accordion items and the increase of height.
 * @param {boolean} props.expanded - If true, expands the accordion, otherwise collapse it. Setting this prop enables control over the accordion.
 * @param {boolean} props.square - If true, rounded corners are disabled.
 * @param {Function} props.onChange - Callback fired when the expand/collapse state is changed.
 * The ref is forwarded to the root element.
 * for more details see http:localhost:6006
 */
export const DenAccordion: React.FC<AccordionProps> = React.forwardRef((props, ref) => (
  <Accordion {...props} ref={ref} />
));

export default DenAccordion;
