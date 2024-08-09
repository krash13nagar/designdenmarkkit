import React, { useState, ReactNode } from 'react';
import styles from './trendingsearchcardnewui.module.scss';
import { TrendingSearchCardNewUiProps, CompetitorInfoProps} from './trendingsearchcardnewui.types';
import { formatCount } from './trendingsearchcardnewui.utils';
import { DenTooltip, DenIconButton, DenBox} from '../../common';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DoneAllIcon from '@mui/icons-material/DoneAll';

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
 * @param {string} props.trendingFrom - topic trending from time
 * @param {Function} props.copyToClipboard - Copy to Clipboard function
 * @param {Array} props.competitorNewsDetails - competitors published news details
 * @param {Array} props.relatedNewsItems - related news items other than competitors view
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
    copyToClipboard,
    relatedNewsItems,
    handleClick,
}) => {

    const [contentCopiedToClipboard, setContentCopiedToClipboard]=useState(false);

    const copyKeywordstoClipboard =(event:any)=>{
        copyToClipboard(keywords.join(', '))
        setContentCopiedToClipboard(true);
        setTimeout(()=>{
            setContentCopiedToClipboard(false);
        }, 5000)
        event.stopPropagation();
    }

    const tooltipPopperProps={
        sx: {
          '& .MuiTooltip-tooltip': {
            backgroundColor: '#E8ECEF', 
            color: '#2B2B2B', 
            borderRadius: '2px',
            padding: '3px 6px',
            fontSize: '10px'
          },
          '& .MuiTooltip-arrow': {
            color: '#E8ECEF !important' 
          },
        },
      };

    const showFrontCompetitors=3;
 
    return (
        <div
            className={`${styles.card} ${wrapperClassName} ${active ? styles.active : ''}`}
            onClick={handleClick}
        >
            <div className={styles.row}>
                <div className={styles.titleContainer}>
                    <div className={styles.label}>{label}</div>
                    {keywords?.length>0 && 
                        <DenTooltip color="primary"
                            title={
                                <DenBox display="flex" flexDirection="row" alignItems="flex-start" maxWidth="350px">
                                <span>{keywords.join(', ')}</span>
                                <DenIconButton
                                    onClick={(e)=>copyKeywordstoClipboard(e)}
                                    size="small"
                                    style={{
                                    marginTop: '8px',
                                    marginLeft: '2px',
                                    alignSelf: 'flex-end'
                                    }}
                                >
                                    {!contentCopiedToClipboard ? <ContentCopyIcon fontSize="small" /> : <DoneAllIcon color='primary' fontSize='small' />}
                                </DenIconButton>
                                </DenBox>
                            }
                            PopperProps={tooltipPopperProps}
                            >
                            <ArrowDropDownIcon />
                        </DenTooltip>
                    }
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
                    {competitorNewsDetails?.slice(0, showFrontCompetitors).map((competitor: CompetitorInfoProps)=> (
                        competitor?.isPublished ? (
                            <a href={competitor.newsURL} target="_blank" className={styles.iconsDiv}>
                                <DenTooltip title={competitor.competitorName} PopperProps={tooltipPopperProps}>
                                    <img src={competitor.iconURL} className={styles.competitorIcon} />
                                </DenTooltip>
                            </a>
                        ) : (
                            <div className={styles.iconsDiv}>
                                <DenTooltip title={competitor?.competitorName+'(not available)'} PopperProps={tooltipPopperProps}>
                                    <img src={competitor?.iconURL} className={`${styles.competitorIcon} ${styles.competitorNotPublished}`} />
                                </DenTooltip>
                            </div>
                        )
                    ))}
                    {relatedNewsItems &&
                        <DenTooltip title={relatedNewsItems?.map(item => item.source)?.join(', ')} PopperProps={tooltipPopperProps} >
                            <div className={`${styles.competitorIcon} ${styles.moreCompetitors}`}>
                                +{relatedNewsItems.length}    
                            </div>
                        </DenTooltip>
                    }
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