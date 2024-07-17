export const formatCount = (count: number | undefined) => {
    if (count === undefined) return '';
    if (typeof count === 'string') return count;
    if (count < 1e3) return count.toString();
    if (count >= 1e3 && count < 1e6) return (count / 1e3) + "k+";
    if (count >= 1e6 && count < 1e9) return (count / 1e6) + "m+";
    if (count >= 1e9 && count < 1e12) return (count / 1e9) + "b+";
    if (count >= 1e12) return (count / 1e12) + "t+";
    return count.toString();
};
