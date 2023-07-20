import * as React from 'react';
import { GridProps, Grid } from '@mui/material';

/**
 * Grid Component.

 * The ref is forwarded to the root element.
 * for more details see http:localhost:6006
 */
export const DenGrid: React.FC<GridProps> = React.forwardRef((props,ref)=><Grid ref={ref} {...props} />)

export default DenGrid;
