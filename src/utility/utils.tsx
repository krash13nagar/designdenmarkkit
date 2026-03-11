import { RightArrowIcon } from '../assets';
import { DenNestedMenuItem, DenNestedMenuSubItem } from '../components/composite/nestedmenu/nestedmenu';
import moment from 'moment';

export const cleanHTML = function (str = '') {
  const regex = /(<([^>]+)>)/gi;
  return str.replace(regex, '');
};

import React from 'react'

export const cleanXssCode = function (html = "") {
  if (window?.AppSDK?.common?.clean) {
    return window.AppSDK.common.clean.CleanXssCode(html);
  }
  return html;
}

export const copyToClipboard = async (str: string) => {

  try {
    await navigator.clipboard.writeText(str);
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}




export const calculateFromNow = function (date: any) {
  var futureDate = false
  var seconds = Math.round((new Date() as any - date) / 1000)
  if (seconds < 0) {
    futureDate = true
    seconds *= -1
  }
  var years = Math.round(seconds / 31536000);
  var months = Math.round(seconds / 2592000);
  var days = Math.round(seconds / 86400);

  if (days > 548) {
    return futureDate ? 'in ' + years + 'y' : years + 'y ago';
  }
  if (days >= 320 && days <= 547) {
    return futureDate ? 'in a year' : 'a year ago';
  }
  if (days >= 45 && days <= 319) {
    return futureDate ? 'in ' + months + 'm' : months + 'm ago';
  }
  if (days >= 26 && days <= 45) {
    return futureDate ? 'in a month' : 'a month ago';
  }

  var hours = Math.round(seconds / 3600);

  if (hours >= 36 && days <= 25) {
    return futureDate ? 'in ' + days + 'd' : days + 'd ago';
  }
  if (hours >= 22 && hours <= 35) {
    return futureDate ? 'in a day' : 'a day ago';
  }

  var minutes = Math.round(seconds / 60);

  if (minutes >= 90 && hours <= 21) {
    return futureDate ? 'in ' + hours + 'h' : hours + 'h ago';
  }
  if (minutes >= 45 && minutes <= 89) {
    return futureDate ? 'in an hour' : 'an hour ago';
  }
  if (seconds >= 90 && minutes <= 44) {
    return futureDate ? 'in ' + minutes + 'min' : minutes + 'min ago';
  }
  if (seconds >= 45 && seconds <= 89) {
    return futureDate ? 'in a minute' : 'a minute ago';
  }
  if (seconds >= 0 && seconds <= 45) {
    return futureDate ? 'in few seconds' : 'a few seconds ago';
  }
}

export const renderMenu = (menuOptions: any) => {
  return menuOptions.map((option: any) => {
    if (option.children?.length) {
      return <DenNestedMenuSubItem
        label={option.label}
        rightIcon={<RightArrowIcon />}
        leftIcon={option.icon}
        menu={renderMenu(option.children)}
      />
    }
    return <DenNestedMenuItem
      onClick={(e: any) => option?.onClickFnc?.(e)}
      leftIcon={option.icon}
      label={option.label}
    />
  })
}

export const formatDateString = (dateString: string): string => {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    throw new Error('Invalid date string');
  }

  const options: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    day: 'numeric',
    month: 'long',
  };

  // Format the date to '16:41, 7 June'
  return date.toLocaleTimeString('en-GB', options) + ', ' + date.toLocaleDateString('en-GB', options);
};

export const formatDateWithMoment = (dateString: string): string => {
  const date = moment(dateString, 'ddd MMM DD HH:mm:ss Z YYYY');
  if (!date.isValid()) {
    throw new Error('Invalid date string');
  }

  // Format the date to '16:41, 7 June'
  return date.format('HH:mm, D MMMM');
};

export const formatTimestampWithMoment = (timestamp: number): string => {
  if (!timestamp || timestamp <= 0) {
    return '';
  }

  const date = moment(timestamp);
  if (!date.isValid()) {
    console.warn('Invalid timestamp:', timestamp);
    return '';
  }

  // Format the date to '16:41, 7 June'
  return date.format('HH:mm, D MMMM');
};

export const parseInsertDate = (insertDate?: string | number | Date): Date | null => {
  if (insertDate === undefined || insertDate === null || insertDate === '') return null;

  if (insertDate instanceof Date) {
    return Number.isNaN(insertDate.getTime()) ? null : insertDate;
  }

  const normalizeEpochValue = (value: number): number => {
    return value < 1e12 ? value * 1000 : value;
  };

  if (typeof insertDate === 'number') {
    const parsedEpochDate = new Date(normalizeEpochValue(insertDate));
    return Number.isNaN(parsedEpochDate.getTime()) ? null : parsedEpochDate;
  }

  const trimmedDate = String(insertDate).trim();
  if (!trimmedDate) return null;

  if (/^\d+$/.test(trimmedDate)) {
    const parsedEpochDate = new Date(normalizeEpochValue(Number(trimmedDate)));
    return Number.isNaN(parsedEpochDate.getTime()) ? null : parsedEpochDate;
  }

  const namedDateMatch = trimmedDate.match(
    /^(?:\w{3}\s)?(\w{3})\s(\d{1,2})\s(\d{2}):(\d{2}):(\d{2})(?:\s(?:[A-Z]{2,5}|GMT[+-]\d{4}|[+-]\d{4}))?\s(\d{4})$/
  );
  if (namedDateMatch) {
    const [, monthLabel, day, hour, minute, second, year] = namedDateMatch;
    const monthIndex = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].indexOf(monthLabel);

    if (monthIndex !== -1) {
      const parsedNamedDate = new Date(
        Number(year),
        monthIndex,
        Number(day),
        Number(hour),
        Number(minute),
        Number(second)
      );

      if (!Number.isNaN(parsedNamedDate.getTime())) return parsedNamedDate;
    }
  }

  const directParsedDate = new Date(trimmedDate);
  if (!Number.isNaN(directParsedDate.getTime())) return directParsedDate;

  const normalizedSqlLikeDate = trimmedDate.match(
    /^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2}:\d{2})(?:\.(\d+))?$/
  );
  if (normalizedSqlLikeDate) {
    const [, datePart, timePart, fractionalSeconds] = normalizedSqlLikeDate;
    const isoLikeDate = `${datePart}T${timePart}${fractionalSeconds ? `.${fractionalSeconds}` : ''}`;
    const parsedSqlLikeDate = new Date(isoLikeDate);
    if (!Number.isNaN(parsedSqlLikeDate.getTime())) return parsedSqlLikeDate;
  }

  return null;
};
