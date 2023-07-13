import React, { ReactNode } from 'react';
import style from './trendingsearchcard.module.scss';
import { TrendingSearchCardProps } from './trendingsearchcard.types';
import { formatCount } from './trendingsearchcard.utils';

/**
 * Trending search card Component.
 * @constructor
 * @param {string} props.label - label of the component
 * @param {string | number} props.count - search count
 * @param {string} props.wrapperClassName  - classname of wrapper node
 * @param {ReactNode} props.icon  - icon component
 * for more details see http:localhost:6006
 */

export const TrendingSearchCard = (props: TrendingSearchCardProps) => {
    const {
        label,
        icon = null,
        wrapperClassName = style['rootWrapper'],
    } = props;
    return (
        <div className={`${wrapperClassName}`}>
            <div className={style['left']}>
                <span>{label}</span>
            </div>
            <div className={style['right']}>
                {icon}
                <div className={style['statistics']}>
                    <span>{formatCount(props)}</span>
                    <span className={style['static-text']}>searches</span>
                </div>
            </div>
        </div>
    );
};
export default TrendingSearchCard;
