import React from 'react';
import { DenSvgIcon, SVGTypes } from '../../components';

export const VideoMediaIcon = (props: Partial<SVGTypes>) => (
  <DenSvgIcon
    name={props?.name ?? 'video media icon'}
    htmlColor={props?.htmlColor ?? '#818181'}
    width={props?.width ?? 24}
    height={props?.height ?? 24}
    {...props}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props?.width ?? 24}
      height={props?.height ?? 24}
      viewBox="0 0 24 24"
    >
      <g
        id="Group_164837"
        data-name="Group 164837"
        transform="translate(-20 -263)"
      >
        <rect
          id="Rectangle_141619"
          data-name="Rectangle 141619"
          width="16"
          height="16"
          transform="translate(20 263)"
          fill="none"
        />
        <path
          id="video_library_24dp_5F6368_FILL0_wght300_GRAD0_opsz24"
          d="M117.515-850.09l5.4-3.469-5.4-3.469Zm-2.956,2.973a1.5,1.5,0,0,1-1.1-.451,1.5,1.5,0,0,1-.451-1.1v-9.778a1.5,1.5,0,0,1,.451-1.1,1.5,1.5,0,0,1,1.1-.451h9.778a1.5,1.5,0,0,1,1.1.451,1.5,1.5,0,0,1,.451,1.1v9.778a1.5,1.5,0,0,1-.451,1.1,1.5,1.5,0,0,1-1.1.451Zm0-1.288h9.778a.252.252,0,0,0,.182-.083.252.252,0,0,0,.083-.182v-9.778a.252.252,0,0,0-.083-.182.252.252,0,0,0-.182-.083h-9.778a.252.252,0,0,0-.182.083.252.252,0,0,0-.083.182v9.778a.252.252,0,0,0,.083.182A.252.252,0,0,0,114.559-848.406Zm-3.006,4.294a1.5,1.5,0,0,1-1.1-.451,1.5,1.5,0,0,1-.451-1.1V-856.73h1.288v11.066a.252.252,0,0,0,.083.182.252.252,0,0,0,.182.083h11.066v1.288Zm2.742-14.6v0Z"
          transform="translate(-85.889 1127)"
          fill={props?.htmlColor ?? '#818181'}
        />
      </g>
    </svg>
  </DenSvgIcon>
);

export default VideoMediaIcon; 