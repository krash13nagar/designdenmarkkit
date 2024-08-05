import React, { useState, ReactNode } from 'react';
import styles from './trendingsearchcardnewui.module.scss';
import { TrendingSearchCardNewUiProps, CompetitorInfo } from './trendingsearchcardnewui.types';
import { formatCount } from './trendingsearchcardnewui.utils';
import { DenTooltip, DenIconButton} from '../../common';
import {tooltipClasses } from "@mui/material/Tooltip";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

/**
 * Trending search card Component.
 * @constructor
 * @param {string} props.label - label of the component
 * @param {string} props.tags - label of the component
 * @param {string} props.description - label of the component
 * @param {string} props.keywords - keywords of the topic
 * @param {number} props.count - search count
 * @param {string} props.wrapperClassName - classname of wrapper node
 * @param {ReactNode} props.icon - icon component
 * @param {ReactNode} props.trendingFrom - topic trending from time
 * @param {Array} props.competitorNewsDetails - competitors published news details
 */

export const TrendingSearchCardNewUi: React.FC<TrendingSearchCardNewUiProps> = ({
    label,
    description,
    keywords,
    count,
    tags,
    icon,
    active,
    wrapperClassName,
    competitorNewsDetails,
    trendingFrom,
    handleClick,
}) => {



    return (
        <div
            className={`${styles.card} ${wrapperClassName} ${active ? styles.active : ''}`}
            onClick={handleClick}
        >
            <div className={styles.row}>
                <div className={styles.titleContainer}>
                    <div className={styles.label}>{label}</div>
                    <DenTooltip color="primary" title={keywords.join(", ")} >
                        <ArrowDropDownIcon />
                    </DenTooltip>
                </div>
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
            <div className={styles.trendsContainer}>
                <div className={styles.iconsContainer}>
                    {competitorNewsDetails.slice(0, 3).map((competitor: CompetitorInfo)=> (
                        <a href={competitor.isPublished ? competitor.newsURL : ''} target={competitor.isPublished ? "_blank" : "" } className={styles.iconsDiv}>
                            <img src={competitor.iconURL} className={`${styles.competitorIcon} ${competitor.isPublished ? '' : styles.competitorNotPublished}`} title={competitor.competitorName} />
                        </a>
                    ))}
                    <div className={`${styles.competitorIcon} ${styles.moreCompetitors}`} >+{competitorNewsDetails.length-3}</div>
                </div>
                <div className={styles.trendingTime}>
                    <TrendingUpIcon />
                    <div className={styles.trendingSinceText}>{trendingFrom}</div>
                </div>
            </div>
        </div>
    );
};

export default TrendingSearchCardNewUi;