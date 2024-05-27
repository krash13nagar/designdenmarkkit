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
const DenRadioGroupBase = (
  props: RadioGroupProps,
  ref: React.ForwardedRef<HTMLDivElement>
) => <RadioGroup {...props} ref={ref} />;

export const DenRadioGroup = React.forwardRef(DenRadioGroupBase);

export default DenRadioGroup;
