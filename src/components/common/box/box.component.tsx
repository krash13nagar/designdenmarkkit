import * as React from 'react';
import { Box } from '@mui/material';
import { BoxTypes } from './box.types';

/**
 * Box Component.
 * The ref is forwarded to the root element.
 * for more details see http:localhost:6006
 */

const DenBoxBase = (props: BoxTypes, ref: React.ForwardedRef<unknown>) => (
  <Box ref={ref} {...props} />
);

export const DenBox = React.forwardRef(DenBoxBase);
export default DenBox;
