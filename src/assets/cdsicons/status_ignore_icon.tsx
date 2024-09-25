import React from 'react';
import { DenSvgIcon, SVGTypes } from '../../components';

export const StatusIgnoreIcon = (props: Partial<SVGTypes>) => (
  <DenSvgIcon
    name={props?.name ?? 'ignorestatus icon'}
    htmlColor={props?.htmlColor ?? '#2b2b2b'}
    width={props?.width}
    height={props?.height}
    {...props}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 84 84"
    >
      <g
        id="Mask_Group_513"
        data-name="Mask Group 513"
        transform="translate(-13805 -6991)"
        clip-path="url(#clip-path)"
      >
        <g id="Group_1878" data-name="Group 1878" transform="translate(-6 38)">
          <g
            id="Group_1877"
            data-name="Group 1877"
            transform="translate(6916 -2475)"
          >
            <rect
              id="Rectangle_1908"
              data-name="Rectangle 1908"
              width="96"
              height="96"
              transform="translate(6889 9422)"
              fill="none"
            />
            <path
              id="Path_822"
              data-name="Path 822"
              d="M41.91.969a41,41,0,1,1-41,41A41.044,41.044,0,0,1,41.91.969Zm0,73.851A32.851,32.851,0,1,0,9.057,41.967,32.884,32.884,0,0,0,41.91,74.82Z"
              transform="translate(6902.173 9421.992) rotate(9)"
              fill="#4277bc"
            />
            <g id="ignore">
              <path
                id="Path_826"
                data-name="Path 826"
                d="M0,56.264,45.478,0"
                transform="matrix(0.839, 0.545, -0.545, 0.839, 6934.479, 9435.154)"
                fill="none"
                stroke="#4277bc"
                stroke-linecap="round"
                stroke-width="8"
              />
              <rect
                id="Rectangle_1909"
                data-name="Rectangle 1909"
                width="72"
                height="13"
                transform="matrix(0.946, -0.326, 0.326, 0.946, 6900.845, 9477.074)"
                fill="#4277bc"
              />
              <text
                id="IGNORE-2"
                data-name="IGNORE"
                transform="translate(6919.873 9481.459) rotate(-20)"
                fill="#f7f7f7"
                font-size="12"
                font-family="SourceSansPro-Regular, Source Sans Pro"
              >
                <tspan x="0" y="0">
                  IGNORE
                </tspan>
              </text>
            </g>
          </g>
        </g>
      </g>
    </svg>
  </DenSvgIcon>
);

export default StatusIgnoreIcon;
