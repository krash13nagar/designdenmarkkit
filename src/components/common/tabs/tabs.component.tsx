import * as React from 'react';
import { TabsProps, Tabs } from '@mui/material';

/**
 * Tabs Component.
 * @constructor
 * @param {node} props.children - Child on which FormControl is wrapped
 * @param {Function} props.onChange - Callback fires up when the value changes.
 * @param {boolean} props.centered - The tabs are centered if value is set to true. This prop is intended for large views.
 * @param {boolean} props.selectionFollowsFocus - If true the selected tab changes on focus. Otherwise it only changes on activation.
 */

export const DenTabs: React.FC<TabsProps> = (props, ref) => <Tabs {...props} />;
export default DenTabs;
