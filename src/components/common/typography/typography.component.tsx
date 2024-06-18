import * as React from 'react';
import { Typography } from '@mui/material';
import { TypographyTypes } from './typography.types';

/**
 * Typography Component.
 * @constructor
 * @param {string} props.variant - Variant of typography. H1-6,body etc.
 * @param {string} props.children - text/content of typography component.
 */

const DenTypographyBase = (
  props: TypographyTypes,
  ref: React.ForwardedRef<HTMLSpanElement>
) => <Typography ref={ref} {...props} />;

export const DenTypography = React.forwardRef(DenTypographyBase);

export default DenTypography;
