import * as React from 'react';
import { Grid } from '@mui/material';
import { GridTypes } from './grid.types';

/**
 * Grid Component.

 * The ref is forwarded to the root element.
 * for more details see http:localhost:6006
 */
export const DenGrid: React.FC<GridTypes> = React.forwardRef((props,ref)=><Grid ref={ref} {...props} />)

export default DenGrid;
