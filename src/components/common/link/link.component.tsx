import * as React from 'react';
import { LinkProps, Link } from '@mui/material';

/**
 * DenLink Component.
 * @constructor
 * @param {node} props.children -The content of the component.
 * @param {object} props.classes - Override or extend the styles applied to the component. See CSS API below for more details.
 * @param {any} props.color - The color of the link.
 * @param {Element} props.component - The component used for the root node. Either a string to use a HTML element or a component.
 * @param {Array<func | object | boolean> | func | object} props.sx - The system prop that allows defining system overrides as well as additional CSS styles.
 * @param {object} props.TypographyClasses - classes prop applied to the Typography element.
 * @param {'always' | 'hover' | 'none'} props.underline - Controls when the link should have an underline.
 * @param {'body1'| 'body2'| 'button'| 'caption'| 'h1'| 'h2'| 'h3'| 'h4'| 'h5'| 'h6'| 'inherit'| 'overline'| 'subtitle1'| 'subtitle2'| string} props.variant - Applies the theme typography styles.
 * The ref is forwarded to the root element.
 * for more details see http:localhost:6006
 */
export const DenLink: React.FC<LinkProps> = React.forwardRef((props, ref) => (
    <Link ref={ref} {...props} />
));

export default DenLink;
