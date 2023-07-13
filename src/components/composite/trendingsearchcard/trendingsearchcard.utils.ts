import { TrendingSearchCardProps } from "./trendingsearchcard.types";

export const formatCount = ({ count }: TrendingSearchCardProps) => {
    if (typeof count == 'string') return count;
    if (count < 1e3) return count;
    if (count >= 1e3 && count < 1e6) return +(count / 1e3).toFixed(1) + "k+";
    if (count >= 1e6 && count < 1e9) return +(count / 1e6).toFixed(1) + "m+";
    if (count >= 1e9 && count < 1e12) return +(count / 1e9).toFixed(1) + "b+";
    if (count >= 1e12) return +(count / 1e12).toFixed(1) + "t+";
};