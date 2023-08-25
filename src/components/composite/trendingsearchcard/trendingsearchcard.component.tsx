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

export const TrendingSearchCard = React.forwardRef<HTMLDivElement, TrendingSearchCardProps>((props: TrendingSearchCardProps, ref) => {
    const {
        label,
        icon = null,
        wrapperClassName,
        count,
        active,
        handleClick
    } = props;
    return (
        <div ref={ref} className={`${wrapperClassName} ${style['rootWrapper']} ${active?style.active:''}`}
        onClick={handleClick}
        >
            <div className={style['left']}>
                <span>{label}</span>
            </div>
            <div className={style['right']}>
                {icon}
                {count &&
                <div className={style['statistics']}>
                    <div className={style['count']}>{formatCount(props)}</div>
                    <div className={style['static-text']}>searches</div>
                </div>
                }
            </div>
        </div>
    );
});
export default TrendingSearchCard;
