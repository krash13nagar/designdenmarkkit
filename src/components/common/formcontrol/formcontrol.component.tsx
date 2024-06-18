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
const DenFormControlBase = (
  props: FormControlTypes,
  ref: React.ForwardedRef<HTMLDivElement>
) => <FormControl {...props} ref={ref} />;

export const DenFormControl = React.forwardRef(DenFormControlBase);

export default DenFormControlBase;
