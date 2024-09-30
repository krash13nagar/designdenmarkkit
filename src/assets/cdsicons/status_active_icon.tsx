import React from 'react';
import { DenSvgIcon, SVGTypes } from '../../components';

export const StatusActiveIcon = (props: Partial<SVGTypes>) => (
  <DenSvgIcon
    name={props?.name ?? 'activestatus icon'}
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
        <g id="Group-11-Copy-2" stroke="#3AB43A">
          <circle id="Oval-4" cx="7" cy="7" r="6.5"></circle>
          <g
            id="Group-10"
            transform="translate(3.399994, 4.500000)"
            stroke-linecap="square"
            stroke-width="1.5"
          >
            <path
              d="M0.590909091,2.95454545 L2.36363636,4.72727273"
              id="Line-5"
            ></path>
            <path
              d="M2.95454545,0.590909091 L6.5,4.13636364"
              id="Line-5-Copy"
              transform="translate(4.727273, 2.363636) scale(-1, 1) translate(-4.727273, -2.363636) "
            ></path>
          </g>
        </g>
      </g>
    </svg>
  </DenSvgIcon>
);

export default StatusActiveIcon;
