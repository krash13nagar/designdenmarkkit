import { ReactNode } from "react";

export interface TrendingSearchCardNewUiProps {
    count?: number;
    label: string;
    description: string;
    tags: string;
    icon?: ReactNode;
    wrapperClassName?: string;
    active?: boolean,
    handleClick?: React.MouseEventHandler<HTMLDivElement>
}
