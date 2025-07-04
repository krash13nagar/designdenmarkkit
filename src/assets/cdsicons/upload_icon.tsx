import React from 'react';
import { DenSvgIcon, SVGTypes } from '../../components';

export const UploadIcon = (props: Partial<SVGTypes>) => (
  <DenSvgIcon
    name={props?.name ?? 'upload icon'}
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
        id="Group_162431"
        data-name="Group 162431"
        transform="translate(0 0)"
      >
        <rect
          id="Rectangle_1622"
          data-name="Rectangle 1622"
          width="24"
          height="24"
          fill="none"
        />
        <path
          id="Path_38799"
          data-name="Path 38799"
          d="M9.794,8.786L12.113,6.45v9.713a1.013,1.013,0,1,0,2.025,0V6.45l2.319,2.33a1.017,1.017,0,1,0,1.437-1.439l-4.05-4.05a1.05,1.05,0,0,0-1.437,0l-4.05,4.05a1.017,1.017,0,1,0,1.439,1.439Zm12.45,4.35a1.013,1.013,0,0,0-1.013,1.013v6.077a1.013,1.013,0,0,1-1.013,1.013H6.038a1.013,1.013,0,0,1-1.013-1.013V14.149a1.013,1.013,0,1,0-2.025,0v6.077A3.038,3.038,0,0,0,6.038,23.25h14.18A3.038,3.038,0,0,0,23.25,20.226V14.149A1.013,1.013,0,0,0,22.244,13.136Z"
          transform="translate(-1.125 -1.134)"
          fill={props?.htmlColor ?? '#818181'}
        />
      </g>
    </svg>
  </DenSvgIcon>
);

export default UploadIcon; 