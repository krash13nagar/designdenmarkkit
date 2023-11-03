import * as React from 'react';
import style from './footer.module.scss';
import { FooterProps, PropsWithChildren } from './footer.types';
/**
 * Footer Component.
 * @constructor
 * @param {string} props.label* -.label of the element to display
 * @param {string} props.value - text of value element.
 * @param {string} props.labelClass - Classname to be applied to the Label element
 * @param {string} props.valueClass - Classname to be applied to the value element
 * @param {string} props.wrapperClass - Classname to be applied to the wrapper element
 * The ref is forwarded to the root element.
 * for more details see http:localhost:6006
 */
export const Footer: React.FC<PropsWithChildren<FooterProps>> = (props) => {
  return <div className={style['footer']}>{props.children}</div>;
};
