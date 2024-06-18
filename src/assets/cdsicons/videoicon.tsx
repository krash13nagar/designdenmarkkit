import React from 'react';
import { DenSvgIcon, SVGTypes } from '../../components';

export const VideoIcon = (props: Partial<SVGTypes>) => (
    <DenSvgIcon
        name={props?.name ?? 'video icon'}
        htmlColor={props?.htmlColor ?? '#2b2b2b'}
        width={props?.width}
        height={props?.height}
        {...props}
    >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 6.72">
            <g id="Group_161740" data-name="Group 161740" transform="translate(-2 -7.5)">
                <path id="Path_39301" data-name="Path 39301" d="M9.224,14.22H2.963A.962.962,0,0,1,2,13.26V8.46a.962.962,0,0,1,.963-.96H9.224a.962.962,0,0,1,.963.96v4.8A.962.962,0,0,1,9.224,14.22Z" transform="translate(0 0)" fill="#fff" />
                <path id="Path_39302" data-name="Path 39302" d="M21,9.873v2.883l2.118,1.424a.473.473,0,0,0,.49.024.481.481,0,0,0,.252-.424V8.849a.481.481,0,0,0-.252-.424.473.473,0,0,0-.489.024Z" transform="translate(-9.859 -0.455)" fill="#fff" />
            </g>
        </svg>
    </DenSvgIcon>
);

export default VideoIcon;