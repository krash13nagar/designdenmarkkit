import * as React from 'react';
import { MenuItem, MenuItemProps } from '@mui/material';

/**
 * Menu Item Component.
 * @constructor
 * @param {boolean} props.autoFocus - If true, the list item is focused during the first mount. Focus will also be triggered if the value changes from false to true.
 * @param {node} props.children - The content of the component.
 * @param {boolean} props.selected - true, the component is selected.
 * @param {	HTMLElement} props.component -The component used for the root node. Either a string to use a HTML element or a component.
 * The ref is forwarded to the root element.
 * for more details see http:localhost:6006
 */

export const DenMenuItem: React.FC<MenuItemProps> = React.forwardRef((props, ref) => (
  <MenuItem ref={ref} {...props} />
));

export default DenMenuItem;
