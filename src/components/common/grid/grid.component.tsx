import * as React from 'react';
import { Grid } from '@mui/material';
import { GridTypes } from './grid.types';

/**
 * Grid Component.

 * The ref is forwarded to the root element.
 * for more details see http:localhost:6006
 */

const DenGridBase = (
  props: GridTypes,
  ref: React.ForwardedRef<HTMLDivElement>
) => <Grid ref={ref} {...props} />;

export const DenGrid = React.forwardRef(DenGridBase);

export default DenGrid;
