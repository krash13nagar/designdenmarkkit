import * as React from 'react';
import { Box, BoxProps } from '@mui/material';

/**
 * Box Component.
 * The ref is forwarded to the root element.
 * for more details see http:localhost:6006
 */

export const DenBox: React.FC<BoxProps> = React.forwardRef((props, ref) => (
  <Box ref={ref} {...props} />
));

export default DenBox;
