import * as React from 'react';
import { FabProps, Fab } from '@mui/material';

/**
 *Fab Component.
 * @constructor
 * @param {React.ReactElement} props.children - Child on whichFab is wrapped
 * @param {Function} props.addEndListener - add end listner
 * @param {boolean} props.appear - Perform the enter transition when it first mounts if in is also true. Set this to false to disable this behavior.
 * @param {	HTMLElement|Function} props.container -An HTML element, or a function that returns one. It's used to set the container theFab is transitioning from.
 */
export const DenFab: React.FC<FabProps> = React.forwardRef((props, ref) => (
  <Fab {...props} ref={ref} />
));

export default DenFab;
