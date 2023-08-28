import * as React from 'react';
import { DenFormControl, DenInputBase, DenInputLabel } from '../../common';
import { TextFieldProps } from './textfield.types';
import style from './textfield.module.scss';

/**
 * TextField Component.
 * @constructor
 * @param {React.ReactElement} props.children - Child on which TextField is wrapped
 * @param {Function} props.addEndListener - add end listner
 * @param {boolean} props.appear - Perform the enter transition when it first mounts if in is also true. Set this to false to disable this behavior.
 * @param {	HTMLElement|Function} props.container -An HTML element, or a function that returns one. It's used to set the container the TextField is transitioning from.
 */

export const DenTextField: React.FC<TextFieldProps> = (props) => {
  const {
    label,
    value,
    id,
    fullWidth = false,
    labelProps = {},
    valueProps = {},
    wrapperClass = '',
    labelClass = style['label-wrapper'],
    valueClass = '',
    onChange = () => {},
  } = props;
  return (
    <DenFormControl
      className={wrapperClass}
      variant="standard"
      fullWidth={fullWidth}
    >
      <DenInputLabel
        shrink
        htmlFor={id ?? 'bootstrap-input'}
        className={labelClass}
        {...labelProps}
      >
        {label}
      </DenInputLabel>
      <DenInputBase
        className={valueClass}
        classes={{ root: style['denLabel'], input: style['denInput'] }}
        value={value ?? ''}
        defaultValue="react-bootstrap"
        id={id ?? 'bootstrap-input'}
        {...valueProps}
        onChange={onChange}
      />
    </DenFormControl>
  );
};
