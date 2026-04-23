import React from 'react';
import { DenSvgIcon, SVGTypes } from '../../components';

export const VisualRichStoryIcon = (props: Partial<SVGTypes>) => (
  <DenSvgIcon
    name={props?.name ?? 'visual rich story icon'}
    htmlColor={props?.htmlColor ?? '#3C3C3C'}
    width={props?.width ?? 24}
    height={props?.height ?? 24}
    {...props}
  >
    <svg width={props?.width ?? 24} height={props?.height ?? 24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0_9787_6078" style={{ "maskType": "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width={props?.width ?? 24} height={props?.height ?? 24}>
        <rect width={props?.width ?? 24} height={props?.height ?? 24} fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_9787_6078)">
        <path d="M12.0176 4.68164C12.2057 4.60954 12.4174 4.62151 12.5977 4.71777L19.6729 8.49805C20.1661 8.76207 20.1656 9.46915 19.6719 9.73242V9.7334L12.5967 13.5C12.3909 13.6095 12.1432 13.6087 11.9375 13.499L4.86328 9.72852C4.36911 9.4651 4.36922 8.7568 4.86328 8.49316L11.9385 4.71777L12.0176 4.68164Z" stroke="#3C3C3C" />
        <path d="M19.7676 12.113L12.3613 16.0583C12.3025 16.0896 12.2319 16.0896 12.1731 16.0582L4.76758 12.1084" stroke="#3C3C3C" stroke-linecap="round" />
        <path d="M19.7676 14.113L12.3613 18.0583C12.3025 18.0896 12.2319 18.0896 12.1731 18.0582L4.76758 14.1084" stroke="#3C3C3C" stroke-linecap="round" />
        <path d="M15.0666 9.93449L12.5121 8.78204L11.9385 12.4159L18.006 9.19855L15.4542 8.05115L15.0666 9.93449Z" fill="#3C3C3C" />
      </g>
    </svg>

  </DenSvgIcon>
);

export default VisualRichStoryIcon;
