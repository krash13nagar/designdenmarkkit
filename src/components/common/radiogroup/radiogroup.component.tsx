import * as React from 'react';
import { RadioGroupProps, RadioGroup } from '@mui/material';
/**
 * DenRadioGroup Component.
 * @constructor
 * @param {node} props.children - The content of the component.
 * @param {any} props.defaultValue - The default value. Use when the component is not controlled.
 * @param {string} props.name - The name used to reference the value of the control. If you don't provide this prop, it falls back to a randomly generated name.
 * @param {func} props.onChange - Callback fired when a radio button is selected.
 * @param {any} props.value - Value of the selected radio button. The DOM API casts this to a string.
 */
export const DenRadioGroup: React.FC<RadioGroupProps> = React.forwardRef(
  (props, ref) => <RadioGroup {...props} ref={ref} />
);
export default DenRadioGroup;
