import * as React from 'react';
import { Stack } from '@mui/material';
import { StackTypes } from './stack.types';

/**
 * DenStack Component.
 * @constructor
 * @param {'column-reverse'| 'column'| 'row-reverse'| 'row'| Array<'column-reverse'| 'column'| 'row-reverse'| 'row'>| object} props.direction - Defines the flex-direction style property. It is applied for all screen sizes.
 * @param {node} props.divider - Add an element between each child.
 * @param {Array<number| string>| number| object| string} props.spacing - Defines the space between immediate children.
 * @param {node} props.children - The content of the component.
 * The ref is forwarded to the root element.
 * for more details see http:localhost:6006
 */

export const DenStack: React.FC<StackTypes> = (props) => (
  <Stack {...props} />
);

export default DenStack;
