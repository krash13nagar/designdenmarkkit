import React from 'react';
import DenFormLabel from '../../common/formlabel/formlabel.component';
import { LabelValueProps } from './labelvalue.types';
import style from './labelvalue.module.scss';
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
