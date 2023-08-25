import * as React from 'react';
import { OutlinedInputProps, OutlinedInput } from '@mui/material';

/**
 * OutlinedInput Component.
 * @constructor
 * @param {React.ReactElement} props.children - Child on which OutlinedInput is wrapped
 * @param {Function} props.addEndListener - add end listner
 * @param {boolean} props.appear - Perform the enter transition when it first mounts if in is also true. Set this to false to disable this behavior.
 * @param {	HTMLElement|Function} props.container -An HTML element, or a function that returns one. It's used to set the container the OutlinedInput is transitioning from.
 */
export const DenOutlinedInput: React.FC<OutlinedInputProps> = React.forwardRef((props, ref) => (
  <OutlinedInput ref={ref} {...props} />
));

export default DenOutlinedInput;
