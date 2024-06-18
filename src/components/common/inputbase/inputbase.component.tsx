import * as React from 'react';
import { InputBase } from '@mui/material';
import { InputBaseTypes } from './inputbase.types';

/**
 * InputBase Component.
 * @constructor
 * @param {React.ReactElement} props.children - Child on which InputBase is wrapped
 * @param {Function} props.addEndListener - add end listner
 * @param {boolean} props.appear - Perform the enter transition when it first mounts if in is also true. Set this to false to disable this behavior.
 * @param {	HTMLElement|Function} props.container -An HTML element, or a function that returns one. It's used to set the container the InputBase is transitioning from.
 */
const DenInput = (props: InputBaseTypes, ref: React.ForwardedRef<unknown>) => (
  <InputBase {...props} ref={ref} />
);

export const DenInputBase = React.forwardRef(DenInput);

export default DenInputBase;
