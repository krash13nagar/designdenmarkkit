import * as React from 'react';
import { Stack } from '@mui/material';
import { StackTypes } from './stack.types';

/**
 * Tab Panel Component.
 * @constructor
 * @param {string} props.value - The value of the corresponding Tab. Must use the index of the Tab when no value was passed to Tab.
 * @param {node} props.children - The content of the component.
 * The ref is forwarded to the root element.
 * for more details see http:localhost:6006
 */

export const DenStack: React.FC<StackTypes> = (props) => (
  <Stack {...props} />
);

export default DenStack;
