import React from 'react';
import { DenSvgIcon, SVGTypes } from '../../components';

export const PhotoFeatureIcon = (props: Partial<SVGTypes>) => (
  <DenSvgIcon
    name={props?.name ?? 'photofeature icon'}
    htmlColor={props?.htmlColor ?? '#2B2B2B'}
    width={props?.width ?? 24}
    height={props?.height ?? 24}
    {...props}
  >
    <svg width={props?.width ?? "24"} height={props?.height ?? "24"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0_10957_66941" style={{ "maskType": "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width={props?.width ?? "24"} height={props?.height ?? "24"}>
        <rect width={props?.width ?? "24"} height={props?.height ?? "24"} fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_10957_66941)">
        <path d="M5.02 9.00128C5.02 8.58042 5.16903 8.22088 5.46709 7.92268C5.76516 7.62462 6.12462 7.47559 6.54548 7.47559H19.7245C20.1454 7.47559 20.5048 7.62462 20.8029 7.92268C21.101 8.22088 21.25 8.58042 21.25 9.00128V16.4995C21.25 16.9205 21.101 17.2801 20.8029 17.5781C20.5048 17.8762 20.1454 18.0252 19.7245 18.0252H6.54548C6.12462 18.0252 5.76516 17.8762 5.46709 17.5781C5.16903 17.2801 5.02 16.9205 5.02 16.4995V9.00128ZM6.28575 9.00128V16.4995C6.28575 16.5645 6.31282 16.624 6.36698 16.678C6.42113 16.7322 6.48063 16.7593 6.54548 16.7593H19.7245C19.7894 16.7593 19.8489 16.7322 19.903 16.678C19.9572 16.624 19.9843 16.5645 19.9843 16.4995V9.00128C19.9843 8.93629 19.9572 8.87679 19.903 8.82278C19.8489 8.76862 19.7894 8.74154 19.7245 8.74154H6.54548C6.48063 8.74154 6.42113 8.76862 6.36698 8.82278C6.31282 8.87679 6.28575 8.93629 6.28575 9.00128Z" fill="#1C1B1F" />
        <path d="M12.25 14.4873L14.5846 11.4756L17.5885 15.4756H8.25L10.5846 12.4717L12.25 14.4873Z" fill="#2B2B2B" />
        <path d="M3.75 14.4756V7.47559C3.75 6.64716 4.42157 5.97559 5.25 5.97559H18.75" stroke="#1C1B1F" stroke-linecap="round" />
      </g>
    </svg>

  </DenSvgIcon>
);

export default PhotoFeatureIcon;
