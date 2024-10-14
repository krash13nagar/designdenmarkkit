import React from 'react';
import { DenSvgIcon, SVGTypes } from '../../components';

export const StatusInactiveIcon = (props: Partial<SVGTypes>) => (
  <DenSvgIcon
    name={props?.name ?? 'inactivestatus icon'}
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
        <g id="Group-11-Copy-3" stroke="#F85454">
          <circle id="Oval-4" cx="7" cy="7" r="6.5"></circle>
          <g
            id="Group-10"
            transform="translate(4.000000, 5.318182)"
            stroke-linecap="square"
            stroke-width="1.5"
          >
            <path
              d="M0.590909091,1.77272727 L5.31818182,1.77272727"
              id="Line-5"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  </DenSvgIcon>
);

export default StatusInactiveIcon;
