import * as React from 'react';
import { AccordionDetails } from '@mui/material';
import { AccordionDetailsTypes } from './accordiondetails.types';

/**
 * DenAccordionDetails Component.
 * @constructor
 * @param {node} props.children -The content of the component.
 * @param {object} props.classes - Override or extend the styles applied to the component. See CSS API below for more details.
 * The ref is forwarded to the root element.
 * for more details see http:localhost:6006
 */
export const DenAccordionDetails: React.FC<AccordionDetailsTypes> = (props) => (
  <AccordionDetails {...props} />
);

export default DenAccordionDetails;
