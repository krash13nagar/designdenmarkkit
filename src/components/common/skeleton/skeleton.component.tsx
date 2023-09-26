import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import { SkeletonTypes } from './skeleton.types';

/**
 * Skeleton Component.

 * The ref is forwarded to the root element.
 * for more details see http:localhost:6006
 */
export const DenSkeleton: React.FC<SkeletonTypes> = React.forwardRef(
  (props, ref) => <Skeleton ref={ref} {...props} />
);

export default DenSkeleton;
