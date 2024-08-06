import { ReactNode } from "react";

export interface TrendingSearchCardNewUiProps {
    count?: number;
    label: string;
    description: string;
    keywords: Array<string>
    tags: string;
    icon?: ReactNode;
    wrapperClassName?: string;
    active?: boolean,
    trendingFrom?: string,
    competitorNewsDetails?: Array<CompetitorInfoProps>,
    handleClick?: React.MouseEventHandler<HTMLDivElement>
}

export interface CompetitorInfoProps{
    competitorName: string;
    competitorCode: string;
    iconURL: string;
    newsURL: string;
    title: string;
    description: string;
    isPublished: boolean;
    publishedDate?: string;
    metadata?: string;
}
