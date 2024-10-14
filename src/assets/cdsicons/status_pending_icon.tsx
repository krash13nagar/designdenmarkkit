import React from 'react';
import { DenSvgIcon, SVGTypes } from '../../components';

export const StatusPendingIcon = (props: Partial<SVGTypes>) => (
  <DenSvgIcon
    name={props?.name ?? 'pendingstatus icon'}
    htmlColor={props?.htmlColor ?? '#2b2b2b'}
    width={props?.width}
    height={props?.height}
    {...props}
  >
    <svg
      width="15px"
      height="15px"
      viewBox="0 0 15 15"
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
        <g id="noun_pending_1337181-copy" fill="#F3A94D">
          <g id="Group" fillRule="nonzero">
            <path
              d="M7.0609375,0.0609375 C3.2042496,0.0609375 0.0609375,3.2042496 0.0609375,7.0609375 C0.0609375,10.9176254 3.2042496,14.0609375 7.0609375,14.0609375 C10.9176254,14.0609375 14.0609375,10.9176254 14.0609375,7.0609375 C14.0609375,3.2042496 10.9176254,0.0609375 7.0609375,0.0609375 Z M7.0609375,12.8125299 C3.8953324,12.8125299 1.30934514,10.2265426 1.30934514,7.0609375 C1.30934514,3.8953324 3.8953324,1.30934514 7.0609375,1.30934514 C10.2265426,1.30934514 12.8125299,3.8953324 12.8125299,7.0609375 C12.8125299,10.2265426 10.2265426,12.8125299 7.0609375,12.8125299 Z"
              id="Shape"
            ></path>
          </g>
          <text
            id="?"
            font-family="Lato-Black, Lato"
            font-size="9"
            font-weight="700"
          >
            <tspan x="5" y="10.5">
              ?
            </tspan>
          </text>
        </g>
      </g>
    </svg>
  </DenSvgIcon>
);

export default StatusPendingIcon;
