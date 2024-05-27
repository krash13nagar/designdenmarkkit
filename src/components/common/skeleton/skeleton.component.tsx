import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import { SkeletonTypes } from './skeleton.types';

/**
 * Skeleton Component.

 * The ref is forwarded to the root element.
 * for more details see http:localhost:6006
 */
const DenSkeletonBase = (
  props: SkeletonTypes,
  ref: React.ForwardedRef<HTMLSpanElement>
) => <Skeleton ref={ref} {...props} />;

export const DenSkeleton = React.forwardRef(DenSkeletonBase);

export default DenSkeleton;
