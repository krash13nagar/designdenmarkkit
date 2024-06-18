import React from 'react';
import { DenSvgIcon, SVGTypes } from '../../components';

export const BrokenImgIcon = (props: Partial<SVGTypes>) => (
    <DenSvgIcon
        name={props?.name ?? 'BrokenImg icon'}
        htmlColor={props?.htmlColor ?? '#2b2b2b'}
        width={props?.width}
        height={props?.height}
        {...props}
    >

        <svg xmlns="http://www.w3.org/2000/svg" width="87.057" height="100" viewBox="0 0 87.057 100">
            <g id="noun-broken-image-583402" transform="translate(-3 -1.716)">
                <g id="Group_160154" data-name="Group 160154" transform="translate(3 1.716)">
                    <g id="Group_160153" data-name="Group 160153">
                        <ellipse id="Ellipse_1" data-name="Ellipse 1" cx="8.408" cy="6.306" rx="8.408" ry="6.306" transform="translate(12.613 30.264)" fill="#1e1e1e" />
                        <path id="Path_39027" data-name="Path 39027" d="M605.912,86l-2.173,7.221h17.171v54.157H587.451l-2.173,7.221h42.961V86Z" transform="translate(-541.182 -70.299)" fill="#1e1e1e" />
                        <path id="Path_39028" data-name="Path 39028" d="M586.167,128.53h28.708V118.059c-7.319-10.174-10.826-24.4-17.9-26.014Z" transform="translate(-538.812 -54.797)" fill="#1e1e1e" />
                        <path id="Path_39029" data-name="Path 39029" d="M627.325,81.716l-4.587,15.54H573v68.92h29.411l-3.98,13.479,6.928,2.06,28.894-97.94Zm-17.088,57.915c-2.413-3.123-4.84-5.064-7.44-5.064-7.061,0-9.658,15.079-18.962,18.133v2.594h21.783l-1.069,3.627H580.224V104.511H620.6Z" transform="translate(-573 -81.716)" fill="#1e1e1e" />
                    </g>
                </g>
            </g>
        </svg>

    </DenSvgIcon>
);

export default BrokenImgIcon;