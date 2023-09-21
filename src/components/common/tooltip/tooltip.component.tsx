import * as React from 'react';
import { Tooltip } from '@mui/material';
import { TooltipTypes } from './tooltip.types';

/**
 * Tooltip Component.
 * @constructor
 * @param {string} props.title - The text content for tooltip.
 * @param {boolean} props.arrow - display arrow in the tooltip
 */
export const DenTooltip: React.FC<TooltipTypes> = (props) => (
  <Tooltip {...props} />
);

export default DenTooltip;
