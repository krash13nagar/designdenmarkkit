/* eslint-disable react/prop-types */
import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import './daymonthpicker.styles.scss';
import { AdapterDateFns } from './AdapterDateFns';
import clsx from 'clsx';
import { DateCalendarProps } from '@mui/x-date-pickers';
import DenDateCalendar from '../../common/datecalendar/datecalendar.component';

export interface DayMonthPickerProps {
  value?: any;
  onChange?: Function;
  calendarProps?: DateCalendarProps<Date>;
}

export const DayMonthPicker = React.forwardRef<
  HTMLDivElement,
  DayMonthPickerProps
>((props, ref) => {
  const {
    value = { day: 1, month: 0 },
    onChange = () => {},
    calendarProps = {},
  } = props;
  return (
    <div ref={ref}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DenDateCalendar
          value={new Date(2024, value.month, value.day)}
          onChange={(newValue: Date, selectionState) => {
            if (selectionState == 'finish')
              onChange({ day: newValue.getDate(), month: newValue.getMonth() });
          }}
          views={['month', 'day']}
          minDate={new Date(2024, 0, 1)}
          maxDate={new Date(2024, 11, 31)}
          {...calendarProps}
          classes={{
            root: clsx(
              'customized_daymonthpicker',
              calendarProps.classes?.root
            ),
          }}
        />
      </LocalizationProvider>
    </div>
  );
});

DayMonthPicker.displayName = 'DayMonthPicker';
export default DayMonthPicker;
