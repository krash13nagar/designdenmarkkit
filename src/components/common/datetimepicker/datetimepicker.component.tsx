import * as React from 'react';
import {
  DateTimePicker,
  DateTimePickerProps,
} from '@mui/x-date-pickers/DateTimePicker';

/**
 * DateCalendar Component.

 * The ref is forwarded to the root element.
 * for more details see http:localhost:6006
 */
export const DenDateTimePicker = React.forwardRef<
  HTMLDivElement,
  DateTimePickerProps<Date>
>((props, ref) => <DateTimePicker ref={ref} {...props} />);

export default DenDateTimePicker;
