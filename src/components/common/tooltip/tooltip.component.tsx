import * as React from 'react';
import { TooltipProps, Tooltip } from '@mui/material';

/**
 * Tooltip Component.
 * @constructor
 * @param {string} props.title - The text content for tooltip.
 * @param {boolean} props.arrow - display arrow in the tooltip
 */
export const DenTooltip: React.FC<TooltipProps> = (props) => (
  <Tooltip {...props} />
);

export default DenTooltip;
