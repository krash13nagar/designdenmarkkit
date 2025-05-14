import React from 'react';
import { DenSvgIcon, SVGTypes } from '../../components';

export const StatusUnavailableIcon = (props: Partial<SVGTypes>) => (
  <DenSvgIcon
    name={props?.name ?? 'unavailablestatus icon'}
    htmlColor={props?.htmlColor ?? '#2b2b2b'}
    width={props?.width}
    height={props?.height}
    {...props}
  >
    <svg
      width="13.3px"
      height="13.3px"
      viewBox="0 0 14 14"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs></defs>
      <g
        id="Top-nav-bar"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="Group-11" stroke="#715CC0">
          <circle id="Oval-4" cx="7" cy="7" r="6.5"></circle>
          <g
            id="Group-10"
            transform="translate(1.500000, 2.500000)"
            strokeLinecap="square"
            strokeWidth="1.5"
          >
            <path
              d="M1.45454545,0.472222222 L10.4545455,8.5"
              id="Line-5-Copy"
              transform="translate(5.727273, 4.250000) scale(-1, 1) translate(-5.727273, -4.250000) "
            ></path>
          </g>
        </g>
      </g>
    </svg>
  </DenSvgIcon>
);

export default StatusUnavailableIcon;
