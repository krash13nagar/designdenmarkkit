import * as React from 'react';
import {
  DateCalendar,
  DateCalendarProps,
} from '@mui/x-date-pickers/DateCalendar';

/**
 * DateCalendar Component.

 * The ref is forwarded to the root element.
 * for more details see http:localhost:6006
 */
export const DenDateCalendar = React.forwardRef<
  HTMLDivElement,
  DateCalendarProps<Date>
>((props, ref) => <DateCalendar ref={ref} {...props} />);

export default DenDateCalendar;
