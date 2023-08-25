import * as React from 'react';
import { SlideProps, Slide } from '@mui/material';

/**
 * Slide Component.
 * @constructor
 * @param {React.ReactElement} props.children - Child on which slide is wrapped
 * @param {Function} props.addEndListener - add end listner
 * @param {boolean} props.appear - Perform the enter transition when it first mounts if in is also true. Set this to false to disable this behavior.
 * @param {	HTMLElement|Function} props.container -An HTML element, or a function that returns one. It's used to set the container the Slide is transitioning from.
 */
export const DenSlide: React.FC<SlideProps> = React.forwardRef((props, ref) => <Slide ref={ref} {...props} />);

export default DenSlide;
