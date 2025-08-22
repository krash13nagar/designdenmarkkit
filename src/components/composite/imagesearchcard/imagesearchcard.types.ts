import { ReactNode } from "react";
import { ActionButton } from "../../complex/imageauth/imageauth.types";
import { DiscardImageCardConfig } from "./discardimagecard.types";

export interface imageSearchCardConfig {
    msid?: string,
    type?: string,
    name?: string,
    fromNow?: string,
    agencyName?: string,
    entityType?: string,
    imageUrl?: string,
    dataSource?: string,
    imageSource?: string,
    resolution?: string,
    ingestionDate?: string,
    ingestionDateTimestamp?: number | undefined,
    classes?: {
        "root"?: string
    }
    variant?: string
    imageCardMenuOptions?: imageCardMenuOptionsConfig[],
    onCallbackSelectImagefnc?: React.MouseEventHandler<HTMLElement>,
    actionButtonsList?: ActionButton[],
    cardStyle?: 'standard' | 'minimal',
    onCardClick?: React.MouseEventHandler<HTMLElement>,
    discardImageProps?: any,
    showImageHoverFooter?: boolean,
    onCheckboxClick?: React.MouseEventHandler<HTMLElement>,
    isCheckboxChecked?: boolean,
    showImageCheckbox?: boolean,
    relatedImages?: RelatedImage[],
    /**
     * Array of host IDs to show under the image card. Only the first host's icon is shown, and if more, a '+N' badge is shown as the second circle.
     * Example: usedInHosts: ['toi', 'bbc', 'cnn']
     */
    usedInHosts?: string[],
    /**
     * Optional className for the used-in-hosts wrapper div for custom styling.
     */
    usedInHostsClassName?: string,
    /**
     * Mapping from hostId to icon (ReactNode). Example: { toi: <ToiIcon />, bbc: <BbcIcon /> }
     */
    usedInHostsIconMap?: Record<string, React.ReactNode>,
}

export interface imageCardMenuOptionsConfig {
    label: string;
    icon: ReactNode;
    onClickFnc: React.MouseEventHandler<HTMLElement>;
    children?: imageCardMenuOptionsConfig[],
}

export interface imageSearchCardHoverConfig {
    name?: string;
    agencyName?: string;
    dataSource?: string;
    ingestionDate?: string;
    resolution?: string;
    agencyUsageData?: any;
    onCallbackMenufnc?: React.MouseEventHandler<HTMLElement>;
    onCallbackSelectImagefnc?: React.MouseEventHandler<HTMLElement>;
    actionButtonsList?: ActionButton[],
    ingestionDateTimestamp?: number | undefined,
    cardStyle?: imageSearchCardConfig['cardStyle'],
    imageCardMenuOptions?: imageCardMenuOptionsConfig[],
    showCardMenu?: boolean,
    sx?: any,
    discardImageCardCallBack?: (from: number) => void,
    showImageHoverFooter?: boolean
}

export interface RelatedImage {
    id: string;
    imageUrl: string;
    title?: string;
    source?: string;
    thumbnailUrl?: string;
    linkUrl?: string;
    badge?: string;
    dimensions?: string;
    date?: string;
    [key: string]: any;
}