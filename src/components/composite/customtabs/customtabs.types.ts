
export interface CustomTabsProps {
    defaultTab?: string;
    indicatorColor?: "primary" | "secondary";
    centered?: boolean;
    children?: any;
    visibleScrollbar?: boolean;
    orientation?: "horizontal" | "vertical";
    textColor?: "primary" | "secondary" | "inherit";
    variant?: "scrollable" | "standard" | "fullWidth";
    scrollButtons?: boolean | "auto";
    selectionFollowsFocus?: boolean;
    disableTab?: string;
}