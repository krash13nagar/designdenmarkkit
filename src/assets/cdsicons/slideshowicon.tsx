import React from 'react';
import { DenSvgIcon, SVGTypes } from '../../components';

export const SlideShowIcon = (props: Partial<SVGTypes>) => (
    <DenSvgIcon
        name={props?.name ?? 'slideshow icon'}
        htmlColor={props?.htmlColor ?? '#2b2b2b'}
        width={props?.width}
        height={props?.height}
        {...props}
    >

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12.375 15.438">
            <g id="Group_162007" data-name="Group 162007" transform="translate(-4.063 -4.063)">
                <g id="Group_162005" data-name="Group 162005">
                    <g id="Group_162006" data-name="Group 162006">
                        <line id="Line_117" data-name="Line 117" x2="9" transform="translate(5.5 17.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="1" />
                        <line id="Line_118" data-name="Line 118" x2="7" transform="translate(6.5 19)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="1" />
                        <path id="Path_39336" data-name="Path 39336" d="M13.313,3H5.063A2.062,2.062,0,0,0,3,5.063v8.25a2.062,2.062,0,0,0,2.062,2.063h8.25a2.062,2.062,0,0,0,2.063-2.062V5.063A2.062,2.062,0,0,0,13.313,3ZM5.063,4.375h8.25A.687.687,0,0,1,14,5.063V10.81L11.8,8.933a1.9,1.9,0,0,0-2.42,0L4.375,13.106V5.063A.687.687,0,0,1,5.063,4.375ZM13.313,14H5.447L10.26,9.985a.536.536,0,0,1,.639,0l3.1,2.64v.688A.687.687,0,0,1,13.313,14Z" transform="translate(1.063 1.063)" fill="#fff" />
                    </g>
                </g>
            </g>
        </svg>

    </DenSvgIcon>
);

export default SlideShowIcon;