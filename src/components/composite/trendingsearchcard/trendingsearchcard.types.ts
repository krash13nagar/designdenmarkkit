import { ReactNode } from "react";

export interface TrendingSearchCardProps {
    count?: string | number;
    label: string;
    icon?: ReactNode;
    wrapperClassName?: string;
}
