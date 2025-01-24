import React from 'react';
import { DenSvgIcon, SVGTypes } from '../../components';

export const StatusCloseIcon = (props: Partial<SVGTypes>) => (
  <DenSvgIcon
    name={props?.name ?? 'closestatus icon'}
    htmlColor={props?.htmlColor ?? '#2b2b2b'}
    width={props?.width}
    height={props?.height}
    {...props}
  >
    <svg
      width="14px"
      height="14px"
      viewBox="0 0 14 14"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs></defs>
      <g
        id="Top-nav-bar"
        stroke="none"
        stroke-width="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="Group-11-Copy" stroke="#333333">
          <circle id="Oval-4" cx="7" cy="7" r="6.5"></circle>
          <g
            id="Group-10"
            transform="translate(4.500000, 5.000000)"
            strokeLinecap="square"
            strokeWidth="1.5"
          >
            <path
              d="M0.590909091,0.590909091 L4.13636364,4.13636364"
              id="Line-5"
            ></path>
            <path
              d="M0.590909091,0.590909091 L4.13636364,4.13636364"
              id="Line-5-Copy"
              transform="translate(2.363636, 2.363636) scale(-1, 1) translate(-2.363636, -2.363636) "
            ></path>
          </g>
        </g>
      </g>
    </svg>
  </DenSvgIcon>
);

export default StatusCloseIcon;
