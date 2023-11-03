import React, { useEffect, useState } from 'react';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { DenInputLabel } from '../../../../common';
import moment from 'moment';
import DenCalender from './calender.component';

const MetadataDatePicker = (props: any) => {
  const [value, setValue] = useState(props.value);
  useEffect(() => {
    if (props.value) {
      setValue(
        moment.unix(Math.floor(props.value / 1000)).format('DD/MM/YYYY HH:mm')
      );
    }
  }, [props.value]);
  const handleChange = (start: any, end: any, label: any) => {
    if (start) start = new Date(start).getTime();
    if (props.onChange) {
      props.onChange(
        props.widget.metadataDefinition.metatype,
        start,
        props.olderValue
      );
    }
  };

  const handleChangeDate = (event: any) => {
    const val = event.target.value;
    setValue(val);
  };

  return (
    <>
      <DenInputLabel shrink>{props.title}</DenInputLabel>
      <div>
        <div>
          <DateRangeIcon />
        </div>
        <DenCalender
          onApply={handleChange}
          drops={'down'}
          opens={'right'}
          timePicker={true}
          format={'DD/MM/YYYY hh:mm A'}
          minDate="01/01/1"
          maxDate="31/12/9999"
          locale={{ format: 'DD/M/YYYY hh:mm A' }}
          startDate={value}
        >
          <input onChange={handleChangeDate} value={value} type="text" />
        </DenCalender>
      </div>
    </>
  );
};
export default MetadataDatePicker;
