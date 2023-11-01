import * as React from 'react';
import { ListItemText } from '@mui/material';
import { ListItemTextTypes } from './listitemtexttypes';

/**
 * DenListItemIcon Component.
 * @constructor
 * @param {node} props.children - The content of the component.
 * @param {object} props.classes - Override or extend the styles applied to the component. See CSS API below for more details.
 * @param {boolean} props.disabled - If true, the component is disabled.
 * The ref is forwarded to the root element.
 * for more details see http:localhost:6006
 */
export const DenListItemText: React.FC<ListItemTextTypes> = (props) => (
  <ListItemText {...props} />
);

export default DenListItemText;
