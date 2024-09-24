import * as React from 'react';
import {
  DenFormControl,
  DenInputLabel,
  DenDefautTextField,
} from '../../common';
import { TextFieldProps } from './textfield.types';
import style from './textfield.module.scss';
import clsx from 'clsx';

/**
 * TextField Component.
 * @constructor
 * @param {React.ReactElement} props.children - Child on which TextField is wrapped
 * @param {Function} props.addEndListener - add end listner
 * @param {boolean} props.appear - Perform the enter transition when it first mounts if in is also true. Set this to false to disable this behavior.
 * @param {	HTMLElement|Function} props.container -An HTML element, or a function that returns one. It's used to set the container the TextField is transitioning from.
 */

export const DenTextField = React.forwardRef<HTMLDivElement, TextFieldProps>(
  (props, ref) => {
    const {
      label = '',
      value,
      id,
      fullWidth = false,
      labelProps = {},
      valueProps = {},
      wrapperClass = '',
      labelClass = '',
      valueClass = '',
      onChange = () => {},
      disabled = false,
      showLabel = true,
      InputProps = {},
      errorText = '',
      onBlur=() =>{},
      onClick=()=>{}
    } = props;

    const { classes: valueClasses = {}, ...restValueProps } = valueProps;

    return (
      <DenFormControl
        className={clsx(wrapperClass, style.wrapper)}
        variant="standard"
        fullWidth={fullWidth}
        ref={ref}
        disabled={disabled}
      >
        {showLabel && label && (
          <DenInputLabel
            shrink
            htmlFor={id}
            className={clsx(labelClass, style.label)}
            {...labelProps}
          >
            {label}
          </DenInputLabel>
        )}
        <DenDefautTextField
          className={valueClass}
          classes={{
            ...valueClasses,
            root: clsx(style['denLabel'], valueClasses.root),
          }}
          disabled={disabled}
          InputProps={{
            ...InputProps,
            classes: {
              ...InputProps.classes,
              input: clsx(
                style['denInput'],
                valueClasses.input,
                InputProps?.classes?.input
              ),
            },
            readOnly: valueProps?.readOnly,
          }}
          value={value ?? ''}
          id={id}
          {...restValueProps}
          onChange={onChange}
          onClick={onClick} onBlur={onBlur}
        />
        {errorText && <div className="has-error"> {errorText} </div>}
      </DenFormControl>
    );
  }
);
