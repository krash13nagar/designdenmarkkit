import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import { DrawerTypes } from './drawer.types';

/**
 * DenDrawer Component.
 * @constructor
 * @param {boolean} props.open* -If true, the component is shown.
 * @param {node} props.children - The content of the component.
 * @param {object} props.classes - Override or extend the styles applied to the component. See CSS API below for more details.
 * The ref is forwarded to the root element.
 * for more details see http:localhost:6006
 */

export const DenDrawerBase = (
  props: DrawerTypes,
  ref: React.ForwardedRef<HTMLDivElement>
) => <Drawer ref={ref} {...props} />;

export const DenDrawer = React.forwardRef(DenDrawerBase);

export default DenDrawer;
