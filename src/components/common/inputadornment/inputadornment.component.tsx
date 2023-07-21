import * as React from 'react';
import { InputAdornmentProps, InputAdornment } from '@mui/material';

/**
 * InputAdornment Component.
 * @constructor
 * @param {React.ReactElement} props.children - Child on which InputAdornment is wrapped
 * @param {Function} props.addEndListener - add end listner
 * @param {boolean} props.appear - Perform the enter transition when it first mounts if in is also true. Set this to false to disable this behavior.
 * @param {	HTMLElement|Function} props.container -An HTML element, or a function that returns one. It's used to set the container the InputAdornment is transitioning from.
 */
export const DenInputAdornment: React.FC<InputAdornmentProps> = (props) => (
  <InputAdornment {...props} />
);

export default DenInputAdornment;
