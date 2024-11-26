import React, { useEffect, useState, useRef } from 'react';
//import IconButton from '@mui/material/IconButton';
import TodayIcon from '@mui/icons-material/Today';
import moment from 'moment';
import DenDateRangePicker from '../../../../common/daterangepicker/daterangepicker.component';
import { DenIconButton } from '../../../../common';
import DateRangePicker from 'react-bootstrap-daterangepicker';

/* 
for calender documentations
https://github.com/skratchdot/react-bootstrap-daterangepicker/
*/

export const DenCalender = (props: any) => {
  const [startDate, setStartDate] = useState(new Date());

  const styleref: any = useRef();
  useEffect(() => {
    setStartDate(props.startDate);
  }, [props.startDate]);

  useEffect(() => {
    if (styleref.current?.classList) {
      styleref.current.classList.add('vs-daterange');
    }
  }, []);
  const template = () => {
    return (
      <DenIconButton>
        {' '}
        <TodayIcon />{' '}
      </DenIconButton>
    );
  };

  const handleCallback = (start: any, end: any, label: any) => {
    if (props.handleCallback) {
      props.handleCallback(start, end, label);
    }
  };

  const onApply = (event: any, picker: any) => {
    if (props.onApply) {
      props.onApply(picker.startDate, picker.endDate);
    }
  };

  const onCancel = (event: any, picker: any) => {
    if (props.onCancel) {
      props.onCancel(event, picker);
    }
  };

  const initialSettings = props.initialSettings
    ? props.initialSettings
    : {
        format: props.format ? props.format : 'DD/MM/YYYY h:mm A',
        timePicker: props.timePicker,
        timePickerIncrement: 1,
        singleDatePicker: true,
        showDropdowns: true,
        autoApply: true,
        autoUpdateInput: false,
        startDate: startDate ? startDate : moment().startOf('day'),
        endDate: props.endDate ? props.endDate : moment().endOf('day'),
        drops: props.drops || 'up',
        opens: props.opens || 'right',
        minDate: props.minDate ? props.minDate : '01/01/1971',
        maxDate: props.maxDate ? props.maxDate : '12/31/2037',
        parentEl: props.parentElement ? props.parentElement : 'body',
        locale: props.locale ? props.locale : {},
      };

  return (
    <DateRangePicker
      ref={styleref}
      initialSettings={initialSettings}
      onCallback={handleCallback}
      onApply={onApply}
      onCancel={onCancel}
    >
      {props.children ? props.children : template}
    </DateRangePicker>
  );
};

export default DenCalender;
