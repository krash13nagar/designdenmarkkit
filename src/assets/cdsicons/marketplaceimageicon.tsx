import React from 'react';
import { DenSvgIcon, SVGTypes } from '../../components';

export const MarketplaceImageIcon = (props: Partial<SVGTypes>) => (
    <DenSvgIcon
        width={props?.width}
        height={props?.height}
        {...props}
    >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <g id="Group_165990" data-name="Group 165990" transform="translate(2)">
                <rect id="Rectangle_142395" data-name="Rectangle 142395" width="16" height="16" transform="translate(-2)" fill="none" />
                <path id="image_24dp_5F6368_FILL0_wght300_GRAD0_opsz24_1_" data-name="image_24dp_5F6368_FILL0_wght300_GRAD0_opsz24 (1)" d="M141.225-808.479a1.183,1.183,0,0,1-.869-.356A1.183,1.183,0,0,1,140-809.7v-9.07a1.182,1.182,0,0,1,.356-.869,1.182,1.182,0,0,1,.869-.356h9.07a1.182,1.182,0,0,1,.869.356,1.182,1.182,0,0,1,.356.869v9.07a1.183,1.183,0,0,1-.356.869,1.183,1.183,0,0,1-.869.356Zm0-1.017h9.07a.2.2,0,0,0,.143-.065.2.2,0,0,0,.065-.143v-9.07a.2.2,0,0,0-.065-.143.2.2,0,0,0-.143-.065h-9.07a.2.2,0,0,0-.143.065.2.2,0,0,0-.065.143v9.07a.2.2,0,0,0,.065.143A.2.2,0,0,0,141.225-809.5Zm.977-1.525h7.168l-2.228-2.971-1.9,2.476-1.355-1.733Zm-1.186,1.525v0Z" transform="translate(-140 822)" fill="#818181" />
            </g>
        </svg>

    </DenSvgIcon>
);

export default MarketplaceImageIcon;