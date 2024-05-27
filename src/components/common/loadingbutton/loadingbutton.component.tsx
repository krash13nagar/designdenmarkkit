import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import { LoadingButtonTypes } from './loadingbutton.types';

/**
 * LoadingButton Component.

 * The ref is forwarded to the root element.
 * for more details see http:localhost:6006
 */
const DenLoadingButtonBase = (
  props: LoadingButtonTypes,
  ref: React.ForwardedRef<HTMLButtonElement>
) => <LoadingButton ref={ref} {...props} />;

export const DenLoadingButton = React.forwardRef(DenLoadingButtonBase);

export default DenLoadingButton;
