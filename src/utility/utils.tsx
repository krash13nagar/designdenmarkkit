import { RightArrowIcon } from '../assets';
import { DenNestedMenuItem, DenNestedMenuSubItem } from '../components/composite/nestedmenu/nestedmenu';
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
