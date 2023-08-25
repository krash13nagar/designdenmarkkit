import * as React from 'react';
import { Select } from '@mui/material';
import { SelectTypes } from './select.types';

/**
 * DenSelect Component.
 * @constructor
 * @param {boolean} props.autoWidth - If true, the width of the popover will automatically be set according to the items inside the menu, otherwise it will be at least the width of the select input.
 * @param {node} props.children - The content of the component.
 * @param {boolean} props.defaultOpen - If true, the component is initially open. Use when the component open state is not controlled.
 * @param {string} props.id - The id of the wrapper element or the select element when native.
 * @param {string} props.labelId - The ID of an element that acts as an additional label.
 * The ref is forwarded to the root element.
 * for more details see http:localhost:6006
 */
export const DenSelect: React.FC<SelectTypes> = (props) => (
  <Select {...props} />
);

export default DenSelect;
