import * as React from 'react';
import Switch from '@mui/material/Switch';
import { SwitchTypes } from './switch.types';

/**
 * Switches toggle the state of a single setting on or off.
 * @constructor
 * @param {React.ReactElement} props.children - Child on which Badge is shown
 * @param {React.ReactNode} props.badgeContent - The content rendered within the badge.
 * @param {string} props.anchorOrigin - The anchor of the badge.
 * @param {string} props.color - The color of the component.
 * @param {string} props.variant - The variant to use.
 */
const DenSwitchBase = (
  props: SwitchTypes,
  ref: React.ForwardedRef<HTMLButtonElement>
) => <Switch {...props} ref={ref} />;

export const DenSwitch = React.forwardRef(DenSwitchBase);

export default DenSwitch;
