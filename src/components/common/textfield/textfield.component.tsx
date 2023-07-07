import * as React from 'react';
import { TextFieldProps, TextField } from '@mui/material';

/**
 * TextField Component.
 * @constructor
 * @param {React.ReactElement} props.children - Child on which TextField is wrapped
 * @param {Function} props.addEndListener - add end listner
 * @param {boolean} props.appear - Perform the enter transition when it first mounts if in is also true. Set this to false to disable this behavior.
 * @param {	HTMLElement|Function} props.container -An HTML element, or a function that returns one. It's used to set the container the TextField is transitioning from.
 */
export const DenTextField: React.FC<TextFieldProps> = (props) => (
  <TextField {...props} />
);

export default DenTextField;
