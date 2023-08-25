import * as React from 'react';
import { FormHelperTextProps, FormHelperText } from '@mui/material';

/**
 * FormHelperText Component.
 * @constructor
 * @param {React.ReactElement} props.children - Child on which FormHelperText is wrapped
 * @param {Function} props.addEndListener - add end listner
 * @param {boolean} props.appear - Perform the enter transition when it first mounts if in is also true. Set this to false to disable this behavior.
 * @param {	HTMLElement|Function} props.container -An HTML element, or a function that returns one. It's used to set the container the FormHelperText is transitioning from.
 */
export const DenFormHelperText: React.FC<FormHelperTextProps> = React.forwardRef((props, ref) => (
  <FormHelperText ref={ref} {...props} />
));

export default DenFormHelperText;
