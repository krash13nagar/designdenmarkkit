import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import { LoadingButtonTypes } from './loadingbutton.types';

/**
 * LoadingButton Component.

 * The ref is forwarded to the root element.
 * for more details see http:localhost:6006
 */
export const DenLoadingButton: React.FC<LoadingButtonTypes> = React.forwardRef(
  (props, ref) => <LoadingButton ref={ref} {...props} />
);

export default DenLoadingButton;
