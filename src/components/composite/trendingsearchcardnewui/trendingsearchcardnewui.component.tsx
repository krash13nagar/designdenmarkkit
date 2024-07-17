import React, { useState, ReactNode } from 'react';
import styles from './trendingsearchcardnewui.module.scss';
import { TrendingSearchCardNewUiProps } from './trendingsearchcardnewui.types';
import { formatCount } from './trendingsearchcardnewui.utils';

/**
 * Trending search card Component.
 * @constructor
 * @param {string} props.label - label of the component
 * @param {string} props.tags - label of the component
 * @param {string} props.description - label of the component
 * @param {number} props.count - search count
 * @param {string} props.wrapperClassName - classname of wrapper node
 * @param {ReactNode} props.icon - icon component
 */

export const TrendingSearchCardNewUi: React.FC<TrendingSearchCardNewUiProps> = ({
    label,
    description,
    count,
    tags,
    icon,
    active,
    wrapperClassName,
    handleClick,
}) => {

    return (
        <div
            className={`${styles.card} ${wrapperClassName} ${active ? styles.active : ''}`}
            onClick={handleClick}
        >
            <div className={styles.row}>
                <div className={styles.label}>{label}</div>
                <div className={styles.statistics}>
                    <div className={styles.count}>{formatCount(count)}</div>
                    <div className={styles.staticText}>searches</div>
                </div>
            </div>
            <div className={styles.horizontalLine}></div>
            <div className={styles.descriptionrow}>
                <div className={styles.description}>{description}</div>
                <div className={styles.icon}>
                    <div className={styles.image} style={{ backgroundImage: `url(${icon})` }}></div>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.tags}>{tags}</div>
            </div>
        </div>
    );
};

export default TrendingSearchCardNewUi;
