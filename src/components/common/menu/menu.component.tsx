import * as React from 'react';
import { MenuProps, Menu } from '@mui/material';

/**
 * Menu Item Component.
 * @constructor
 * @param {boolean} props.open* - If true, the component is shown.
 * @param {node} props.children - Menu contents, normally MenuItems.
 * @param {boolean} props.autoFocus - If true (Default) will focus the [role="menu"] if no focusable child is found. Disabled children are not focusable. If you set this prop to false focus will be placed on the parent modal container. This has severe accessibility implications and should only be considered if you manage focus otherwise.
 * @param {	HTMLElement|Function} props.anchorEl -An HTML element, or a function that returns one. It's used to set the position of the menu.
 * The ref is forwarded to the root element.
 * for more details see http:localhost:6006
 */
export const DenMenu: React.FC<MenuProps> = (props) => <Menu {...props} />;

export default DenMenu;
