import React, { Ref, forwardRef } from 'react';
import { KeyValueCopyProps } from './keyvaluecopy.types';
import style from './keyvaluecopy.module.scss';
import CopyIconButton from '../copyiconbutton/copyiconbutton.component';
import clsx from 'clsx';

export const KeyValueCopy = forwardRef(
  (
    { keyText, valueText, showCopy = true, className }: KeyValueCopyProps,
    ref: Ref<HTMLDivElement>
  ) => {
    return (
      <div
        ref={ref}
        className={clsx('cds-key-value-copy-root', style.keyValueCopyRoot, className)}
      >
        <div className={style.keyValueWrapper}>
          <div className={style.keyText}>{keyText}</div>
          <div className={style.valueText}>{valueText}</div>
        </div>
        {showCopy && (
          <div
            className={clsx(
              'cds-copy-icon-button-wrapper',
              style['cds-copy-icon-button-wrapper']
            )}
          >
            <CopyIconButton copyValue={valueText} />
          </div>
        )}
      </div>
    );
  }
);
export default KeyValueCopy;
