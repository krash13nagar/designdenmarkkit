import * as React from 'react';
import { FilledInputProps, FilledInput } from '@mui/material';

/**
 * FilledInput Component.
 * @constructor
 * @param {React.ReactElement} props.children - Child on which FilledInput is wrapped
 * @param {Function} props.addEndListener - add end listner
 * @param {boolean} props.appear - Perform the enter transition when it first mounts if in is also true. Set this to false to disable this behavior.
 * @param {	HTMLElement|Function} props.container -An HTML element, or a function that returns one. It's used to set the container the FilledInput is transitioning from.
 */
export const DenFilledInput: React.FC<FilledInputProps> = React.forwardRef((props, ref) => (
  <FilledInput ref={ref} {...props} />
));

export default DenFilledInput;
