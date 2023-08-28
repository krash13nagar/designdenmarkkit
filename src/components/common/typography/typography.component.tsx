import * as React from 'react';
import { TypographyProps, Typography } from '@mui/material';

/**
 * Typography Component.
 * @constructor
 * @param {string} props.variant - Variant of typography. H1-6,body etc.
 * @param {string} props.children - text/content of typography component.
 */

export const DenTypography: React.FC<TypographyProps> = React.forwardRef(
  (props, ref) => <Typography ref={ref} {...props} />
);

export default DenTypography;
