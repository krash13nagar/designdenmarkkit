import React from 'react';
import { DenSvgIcon, SVGTypes } from '../../components';

export const WebStoryIcon = (props: Partial<SVGTypes>) => (
    <DenSvgIcon
        name={props?.name ?? 'webstory icon'}
        htmlColor={props?.htmlColor ?? '#2b2b2b'}
        width={props?.width}
        height={props?.height}
        {...props}
    >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 14.4">
            <path id="layout_46" data-name="layout 46" d="M2.8,4.6a.8.8,0,0,0-.8.8V15a.8.8,0,0,0,1.6,0V5.4A.8.8,0,0,0,2.8,4.6Zm14.4,0a.8.8,0,0,0-.8.8V15A.8.8,0,0,0,18,15V5.4A.8.8,0,0,0,17.2,4.6ZM13.2,3H6.8A2.4,2.4,0,0,0,4.4,5.4V15a2.4,2.4,0,0,0,2.4,2.4h6.4A2.4,2.4,0,0,0,15.6,15V5.4A2.4,2.4,0,0,0,13.2,3ZM14,15a.8.8,0,0,1-.8.8H6.8A.8.8,0,0,1,6,15V5.4a.8.8,0,0,1,.8-.8h6.4a.8.8,0,0,1,.8.8Z" transform="translate(-2 -3)" fill="#fff" />
        </svg>
    </DenSvgIcon>
);

export default WebStoryIcon;