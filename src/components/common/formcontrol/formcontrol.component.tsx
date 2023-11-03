import * as React from 'react';
import { FormControl } from '@mui/material';
import { FormControlTypes } from './formcontrol.types';

/**
 * FormControl Component.
 * @constructor
 * @param {React.ReactElement} props.children - Child on which FormControl is wrapped
 * @param {Function} props.addEndListener - add end listner
 * @param {boolean} props.appear - Perform the enter transition when it first mounts if in is also true. Set this to false to disable this behavior.
 * @param {	HTMLElement|Function} props.container -An HTML element, or a function that returns one. It's used to set the container the FormControl is transitioning from.
 */
export const DenFormControl: React.FC<FormControlTypes> = React.forwardRef(
  (props, ref) => <FormControl {...props} ref={ref} />
);

export default DenFormControl;
