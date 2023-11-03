import * as React from 'react';
import { NativeSelect } from '@mui/material';
import { NativeSelectTypes } from './nativeselect.types';

/**
 * DenNativeSelect Component.
 * @constructor
 * @param {node} props.children - The content of the component.
 * @param {element} props.input - An Input element. This does not have to be a material-ui specific Input.
 * @param {any} props.value - The input value. The DOM API casts this to a string.
 * @param {object} props.inputProps - Attributes applied to the select element.
 * The ref is forwarded to the root element.
 * for more details see http:localhost:6006
 */
export const DenNativeSelect: React.FC<NativeSelectTypes> = (props) => (
  <NativeSelect {...props} />
);

export default DenNativeSelect;
