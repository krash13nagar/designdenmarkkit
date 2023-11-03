import React, { useEffect, useState } from 'react';
import {
  DateMonthSelectionProps,
  DayNum,
  Month,
} from './datemonthselection.types';
import styles from './datemonthselection.module.scss';
import DenBox from '../../common/box/box.component';
import clsx from 'clsx';
import sub from 'date-fns/sub';
import add from 'date-fns/add';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { DayMonthPicker } from '../daymonthpicker';
import TodayIcon from '@mui/icons-material/Today';

/**
 * DateMonthSelection Component.
 * ref is forwarded to parent element
 */

export const DateMonthSelection = React.forwardRef<
  HTMLDivElement,
  DateMonthSelectionProps
>(
  (
    { classes = {}, value: selectedDayMonth = { month: 0, day: 1 }, onChange },
    ref
  ) => {
    const monthArr = [
      'january',
      'february',
      'march',
      'april',
      'may',
      'june',
      'july',
      'august',
      'september',
      'october',
      'november',
      'december',
    ];

    const [currentDate, setCurrentDate]: [Date, Function] = useState(null);
    const [showCalendar, setShowCalendar] = useState(false);

    const subtractDays = (
      numdays: number
    ): { date: Date; day: DayNum; month: Month } => {
      const currentDay = currentDate.getDate();
      const currentMonth = currentDate.getMonth();
      let newDate;
      if (currentMonth == 0) {
        if (currentDay == 1 || (currentDay == 2 && numdays > 1)) {
          newDate = new Date(2024, 11, 31 - numdays + currentDay);
        } else newDate = sub(currentDate, { days: numdays });
      } else newDate = sub(currentDate, { days: numdays });
      return {
        date: newDate,
        day: newDate.getDate() as DayNum,
        month: newDate.getMonth() as Month,
      };
    };

    const addDays = (
      numdays: number
    ): { date: Date; day: DayNum; month: Month } => {
      const currentDay = currentDate.getDate();
      const currentMonth = currentDate.getMonth();
      let newDate;
      if (currentMonth == 11 && currentDay == 31) {
        newDate = new Date(2024, 0, numdays);
      } else newDate = add(currentDate, { days: numdays });
      return {
        date: newDate,
        day: newDate.getDate() as DayNum,
        month: newDate.getMonth() as Month,
      };
    };

    useEffect(() => {
      setCurrentDate(
        selectedDayMonth.month >= 0 && selectedDayMonth.day
          ? new Date(2024, selectedDayMonth.month, selectedDayMonth.day)
          : new Date()
      );
    }, [selectedDayMonth]);

    const daysMap = currentDate
      ? {
          secondLastDay: subtractDays(2),
          lastDay: subtractDays(1),
          nextDay: addDays(1),
        }
      : {};

    const handleClick = (
      e: React.MouseEvent<HTMLDivElement>,
      dateAndMonth: { date: Date; day: DayNum; month: Month }
    ) => {
      onChange({ day: dateAndMonth.day, month: dateAndMonth.month });
      setCurrentDate(dateAndMonth.date);
    };

    const handleOpenCalendar = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!showCalendar) setShowCalendar(true);
    };

    const handleClickAway = () => {
      setShowCalendar(false);
    };

    return (
      currentDate && (
        <DenBox
          ref={ref}
          className={clsx(styles.dateMonthselectionWrapper, classes.root)}
        >
          <div
            className={clsx(styles.dateCirclesWrapper, classes.dateWrapperRoot)}
          >
            <div
              className={clsx(
                styles.dateCircle,
                styles.small,
                classes.dateRoot
              )}
              onClick={(e) => handleClick(e, daysMap.secondLastDay)}
            >
              {daysMap.secondLastDay.day}
            </div>
            <div
              className={clsx(
                styles.dateCircle,
                styles.medium,
                classes.dateRoot
              )}
              onClick={(e) => handleClick(e, daysMap.lastDay)}
            >
              {daysMap.lastDay.day}
            </div>
            <div
              className={clsx(styles.dateCircle, styles.main, classes.dateRoot)}
            >
              {currentDate.getDate()}
            </div>
            <div
              className={clsx(
                styles.dateCircle,
                styles.medium,
                classes.dateRoot
              )}
              onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                handleClick(e, daysMap.nextDay);
              }}
            >
              {daysMap.nextDay.day}
            </div>
            <div
              className={clsx(
                styles.dateCircle,
                styles.small,
                classes.dateRoot,
                styles.noMargin,
                styles.calendarCircle
              )}
              onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                if (e.currentTarget.className?.includes?.(styles.dateCircle)) {
                  handleOpenCalendar(e);
                  e.stopPropagation();
                }
              }}
            >
              <>
                <TodayIcon sx={{ width: '100%' }} />
                {showCalendar && (
                  <ClickAwayListener onClickAway={handleClickAway}>
                    <DayMonthPicker
                      calendarProps={{
                        classes: { root: styles.dayMonthPickerRoot },
                      }}
                      value={{
                        day: currentDate.getDate(),
                        month: currentDate.getMonth(),
                      }}
                      onChange={(newDayMonth: any) => {
                        setShowCalendar(false);
                        setCurrentDate(
                          new Date(2024, newDayMonth.month, newDayMonth.day)
                        );
                        onChange({
                          day: newDayMonth.day,
                          month: newDayMonth.month,
                        });
                      }}
                    />
                  </ClickAwayListener>
                )}
              </>
            </div>
          </div>
          <div className={clsx(styles.monthWrapper, classes.monthWrapper)}>
            <span className={clsx(styles.monthText, classes.monthText)}>
              {(currentDate && monthArr[currentDate.getMonth()])?.slice(0, 3) ||
                ''}
            </span>
          </div>
        </DenBox>
      )
    );
  }
);

export default DateMonthSelection;
