import React from 'react';
import DenFormLabel from '../../common/formlabel/formlabel.component';
import { LabelValueProps } from './labelvalue.types';
import style from './labelvalue.module.scss';

/**
 * LabelValue Component.
 * @constructor
 * @param {string} props.label* -.label of the element to display
 * @param {string} props.value - text of value element.
 * @param {number} props.align - alignment of label and value element
 * @param {string} props.className - Classname to be applied to the wrapper element
 * @param {string} props.seperatorClassName - Classname applied to the speretaor element.
 * @param {string} props.labelProps - Classname applied to the label element.
 * @param {string} props.valueProps - Classname applied to the value element.
 * @param {string} props.seperator - Seperator string to seperate between label and value
 * The ref is forwarded to the root element.
 * for more details see http:localhost:6006
 */

export const LabelValue = (props: LabelValueProps) => {
  const {
    label,
    value,
    align = 'row',
    className = '',
    seperatorClassName = style['seperatorClassName'],
    labelProps = {},
    valueProps = {
      className: style['valueClass'],
    },
    seperator,
  } = props;
  return (
    <div
      className={`${className} ${style['labelvalueWrapper']} ${style[align]}`}
    >
      <DenFormLabel {...labelProps} aria-label={label}>
        {label}
      </DenFormLabel>
      {seperator && align === 'row' && (
        <span className={seperatorClassName}>{seperator}</span>
      )}
      <DenFormLabel {...valueProps}>{value}</DenFormLabel>
    </div>
  );
};
export default LabelValue;
