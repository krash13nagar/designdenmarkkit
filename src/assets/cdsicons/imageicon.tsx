import React from 'react';
import { DenSvgIcon, SVGTypes } from '../../components';

export const ImageIcon = (props: Partial<SVGTypes>) => (
    <DenSvgIcon
        name={props?.name ?? 'image icon'}
        htmlColor={props?.htmlColor ?? '#2b2b2b'}
        width={props?.width}
        height={props?.height}
        {...props}
    >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12">
            <path id="Path_39300" data-name="Path 39300" d="M8.9,4.4a.9.9,0,1,0,.9.9A.923.923,0,0,0,8.9,4.4ZM12.2,2H3.8A1.768,1.768,0,0,0,2,3.8v8.4A1.768,1.768,0,0,0,3.8,14h8.4A1.768,1.768,0,0,0,14,12.2V3.8A1.768,1.768,0,0,0,12.2,2Zm.6,7.14L11.66,8A1.851,1.851,0,0,0,9.14,8l-.54.54L6.86,6.8a1.851,1.851,0,0,0-2.52,0L3.2,7.94V3.8a.567.567,0,0,1,.6-.6h8.4a.567.567,0,0,1,.6.6Z" transform="translate(-2 -2)" fill="#fff" />
        </svg>
    </DenSvgIcon>
);

export default ImageIcon;