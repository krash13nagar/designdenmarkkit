import { ReactNode } from "react";
import { ActionButton } from "../../complex/imageauth/imageauth.types";
import { ReportImageCardConfig } from "./components/reportimage/reportimagecard.types";

export interface ImageContentCardConfig {
    id?: string;
    imageUrl?: string;
    // Support both patterns: MarketplaceContentCard pattern (publishDateTimestamp) and legacy (date/dateTimestamp)
    date?: string;
    dateTimestamp?: string | number;
    publishDateTimestamp?: string | number; // Same as MarketplaceContentCard
    ingestionDate?: string | number;
    ingestionDateTimestamp?: string | number;
    isSelected?: boolean;
    isDisabled?: boolean;
    isLowResolutionImage?: boolean;
    dimensions?: string;
    imageIcon?: ReactNode;
    footerRightText?: string;
    overlayText?: string;
    overlayBottomText?: string;
    overlayTopText?: string;
    imageId?: string;
    onCardClick?: React.MouseEventHandler<HTMLElement>;
    onImageClick?: React.MouseEventHandler<HTMLElement>;
    // Support both patterns: MarketplaceContentCard pattern (cardMenuOptions) and legacy (menuOptions)
    menuOptions?: ImageContentCardMenuOption[];
    cardMenuOptions?: ImageContentCardCardMenuOption[]; // Same as MarketplaceContentCard
    classes?: {
        root?: string;
        menuOption?: string;
        header?: string;
        headerLhs?: string;
        headerRhs?: string;
        middle?: string;
        imageContainer?: string;
        overlayTop?: string;
        overlayBottom?: string;
        footer?: string;           //(already has className prop but not in types)
        footerLhs?: string;
        footerRhs?: string;
        hover?: string;
    };
    ImageFallback?: ReactNode;
    // Checkbox props (from MarketplaceContentCard)
    checkboxProps?: ImageContentCardCheckboxProps;
    showAllCheckboxes?: boolean;
    headerTooltipContent?: ReactNode;
    // Hover overlay props (from ImageSearchCard)
    hoverConfig?: ImageContentCardHoverConfig;
    isHoverable?: boolean;
    actionButtonsList?: ActionButton[];
    reportImageProps?: ReportImageCardConfig;
}

export interface ImageContentCardCheckboxProps {
    isChecked?: boolean;
    onCheckboxClick?: (event: React.ChangeEvent<HTMLInputElement>, checked?: boolean) => void;
    tooltipText?: string;
    PopperProps?: any;
    disabled?: boolean;
}

export interface ImageContentCardHoverConfig {
    title?: string;
    agencyName?: string;
    dataSource?: string;
    ingestionDate?: string;
    resolution?: string;
    onCallbackSelectImagefnc?: React.MouseEventHandler<HTMLElement>;
    ingestionDateTimestamp?: number | undefined;
    showImageHoverFooter?: boolean;
    id?: string;
    actionButtonsList?: ActionButton[];
}

export interface ImageContentCardMenuOption {
    label: string;
    onClick: React.MouseEventHandler<HTMLElement>;
    disabled?: boolean;
    disabledMsg?: string;
}

// Same structure as MarketplaceContentCard
export interface ImageContentCardCardMenuOption {
    label: string;
    onClickFnc: React.MouseEventHandler<HTMLElement>;
    disabled?: boolean;
    disabledMsg?: string;
}

export interface ImageContentCardAnchorGeneric {
    [key: string]: HTMLElement | null;
}
