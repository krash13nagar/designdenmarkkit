import React, { useState } from 'react';
import {
  DenFormControl,
  DenFormControlLabel,
  DenFormLabel,
  DenRadio,
  DenRadioGroup,
} from '../../common';
import { CustomRadioGroupProps } from './customradiogroup.types';
import styles from './customradiogroup.module.scss';

export const DenCustomRadioGroup = (props: CustomRadioGroupProps) => {
  const {
    radioGroupLabel = '',
    defaultRadio = '',
    radioButtonList,
    onHandleChange,
    selectedValue = '',
  } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onHandleChange(event.target.value);
  };
  const renderRadioButtons = () => {
    return radioButtonList.map((obj: { value: string; label: string }) => (
      <DenFormControlLabel
        className={styles.radioGroupValue}
        key={obj.value}
        value={obj.value}
        control={<DenRadio className={styles.radio} />}
        label={obj.label}
        checked={selectedValue === obj.value}
        onChange={handleChange}
      />
    ));
  };

  return (
    <DenFormControl className={styles.radiogroupWrapper}>
      <DenFormLabel
        id="demo-row-radio-buttons-group-label"
        className={styles.radioGroupLabel}
      >
        {radioGroupLabel}
      </DenFormLabel>
      <DenRadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        defaultValue={defaultRadio}
        className={styles.radioGroup}
      >
        {renderRadioButtons()}
      </DenRadioGroup>
    </DenFormControl>
  );
};

export default DenCustomRadioGroup;
