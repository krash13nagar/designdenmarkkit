import * as React from 'react';
import Badge from '@mui/material/Badge';
import { BadgeTypes } from './badge.types';

/**
 * Badge generates a small badge to the top-right of its child(ren).
 * @constructor
 * @param {React.ReactElement} props.children - Child on which Badge is shown
 * @param {React.ReactNode} props.badgeContent - The content rendered within the badge.
 * @param {string} props.anchorOrigin - The anchor of the badge.
 * @param {string} props.color - The color of the component.
 * @param {string} props.variant - The variant to use.
 */
export const DenBadge: React.FC = React.forwardRef<HTMLSpanElement, BadgeTypes>(
  (props, ref) => <Badge {...props} ref={ref} />
);

export default DenBadge;
