import React, { useCallback, useMemo } from 'react';
import cssClassName from './marketplacecontentcard.module.scss';
import { DenBox, DenCard, DenCheckbox, DenChip, DenIconButton, DenMenu, DenMenuItem, DenSvgIcon, DenTooltip, DenTypography, ImageWithFallback, StatusDotNew, } from '../../common';
import { formatDateString, formatDateWithMoment } from '../../../utility/utils';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import clsx from 'clsx';
import {
    AnchorGeneric,
    MarketplaceContentCardConfig,
} from './marketplacecontentcard.types';
import ImageIcon from '../../../assets/cdsicons/imageicon';
import MarketplaceImageIcon from '../../../assets/cdsicons/marketplaceimageicon';
import { Chip, Divider } from '@mui/material';
import DenCustomTooltip from '../../common/tooltip/customtooltip.component';

export const MarketplaceContentCard = React.forwardRef((props: MarketplaceContentCardConfig, ref: React.MutableRefObject<any>) => {

    const {
        id,
        title,
        subtitle,
        imageUrl,
        cardMenuOptions,
        ImageFallback,
        onCardClick = () => { },
        selected,
        publishDateTimestamp,
        classes,
        imagesCount,
        videosCount,
        wordCount,
        dataSource,
        tags,
        checkboxProps,
        headerTooltipContent,
        view = 'grid',
        showAllCheckboxes = false,
        channels = [],
        isBreakingCard = false,
        isUpdatedCard = false,
        agency = ''
    } = props;

    const [anchorEl, setAnchorEl] = React.useState<AnchorGeneric>({});

    const headerDate = useMemo(() => {
        return (
            (publishDateTimestamp ? formatDateWithMoment(publishDateTimestamp) : '')
        );
    }, [publishDateTimestamp]);

    const variantClassName = useMemo(() => {
        if (view === 'single') return 'singleViewVariant';
        return '';
    }, [view]);

    const handleClose = (
        event: React.SyntheticEvent<HTMLElement> | undefined,
        index: number,
        cb?: Function | undefined
    ) => {
        setAnchorEl((prev: any) => ({ ...prev, [index]: null }));
        event?.stopPropagation();
        if (cb) cb(event);
    };

    const handleDenMenuOnClose = (e: React.MouseEvent<HTMLButtonElement>) => {
        handleClose(undefined, 1);
        e.stopPropagation();
    };
    const handleContextClick = (
        event: React.SyntheticEvent<HTMLElement>,
        index: number
    ) => {
        setAnchorEl((prev: any) => ({ ...prev, [index]: event.currentTarget }));
        event.stopPropagation();
    };

    const tooltipstyles = useMemo(() => {
        return {
            font: 'normal normal 400 13px/18px "Source Sans 3"',
            textColor: '#4D4D4D',
        }
    }, [])

    const tagsTooltip = useCallback((tags: any) => {
        return (
            <React.Fragment>
                <DenTypography variant="body2" color="textPrimary">
                    <span style={{ font: 'normal normal 400 13px/18px "Source Sans 3"', color: '#818181' }}>
                        Category:
                    </span>{' '}
                    <span style={{ font: 'normal normal 400 13px/18px "Source Sans 3"', color: '#4D4D4D' }}>
                        {tags?.slice(1).map((tag: any) => tag.label).join(', ')}
                    </span>
                </DenTypography>
            </React.Fragment>
        )
    }, [])

    // Channel display logic
    const visibleChannels = useMemo(() => {
        return channels.slice(0, 2);
    }, [channels]);

    const remainingChannels = useMemo(() => {
        return channels.slice(2);
    }, [channels]);

    const hasRemainingChannels = remainingChannels.length > 0;

    // Channel tooltip content
    const getChannelTooltipContent = useCallback((channel: any) => {
        return (
            <React.Fragment>
                <DenBox className={cssClassName['channel-tooltip-container']}>
                    <DenBox className={cssClassName['channel-tooltip-header-row']}>
                        <StatusDotNew status="ACTIVE" size={6} />
                        <DenTypography className={cssClassName['channel-tooltip-header-msid']}>
                            MSID:
                        </DenTypography>
                        <DenTypography className={cssClassName['channel-tooltip-header-msid-val']}>
                            {channel.sectionInfo.msid}
                        </DenTypography>
                        <Divider sx={{ height: '16px' }} className='channel-tooltip-header-divider' orientation="vertical" />
                        <DenTypography className={cssClassName['channel-tooltip-header-timestamp']}>
                            {channel.sectionInfo.timeStamp}
                        </DenTypography>
                    </DenBox>
                    <DenBox className={cssClassName['channel-tooltip-channel-row']}>
                        <DenChip
                            label={
                                <DenBox sx={{ display: 'flex' }}>
                                    <DenSvgIcon>{channel.channelIcon}</DenSvgIcon>
                                    <DenTypography className={cssClassName['channel-tooltip-section-name']}>
                                        {channel.sectionInfo.sectionName}
                                    </DenTypography>
                                </DenBox>
                            }
                            size="small"
                            className={cssClassName['channel-tooltip-section-chip']}
                        />
                    </DenBox>
                    <DenTypography className={cssClassName['channel-tooltip-username']}>
                        {channel.sectionInfo.userName}
                    </DenTypography>
                    <DenBox className={cssClassName['channel-tooltip-actions-row']}>
                        <DenTypography
                            className={cssClassName['channel-tooltip-action-link']}
                            onClick={(e) => {
                                e.stopPropagation();
                                channel.sectionInfo.onPreviewClick?.(e);
                            }}
                        >
                            Preview
                        </DenTypography>
                        <Divider sx={{ height: '14px' }} className='channel-tooltip-header-divider' orientation="vertical" />
                        <DenTypography
                            className={cssClassName['channel-tooltip-action-link']}
                            onClick={(e) => {
                                e.stopPropagation();
                                channel.sectionInfo.onFullStoryClick?.(e);
                            }}
                        >
                            Full Story
                        </DenTypography>
                    </DenBox>
                </DenBox>
            </React.Fragment>
        );
    }, []);

    // Remaining channels tooltip content
    const getRemainingChannelsTooltipContent = useCallback(() => {
        return (
            <DenBox className={cssClassName['channel-list-tooltip-container']}>
                {remainingChannels.map((channel, index) => (
                    <React.Fragment key={index}>
                        {getChannelTooltipContent(channel)}
                        {index < remainingChannels.length - 1 && (
                            <Divider sx={{ margin: '0px 4px 0px 4px' }} />
                        )}
                    </React.Fragment>
                ))}
            </DenBox>
        );
    }, [remainingChannels, getChannelTooltipContent]);

    return (
        <div className={cssClassName[variantClassName]}>
            <DenCard
                classes={{ root: clsx(cssClassName['card-root'], classes?.root) }}
                className={clsx(cssClassName['default-card-wrapper'], classes?.root, selected ? cssClassName['selected-card'] : '')}
                ref={ref}
                onClick={onCardClick}
            >
                <div
                    className={cssClassName['image-with-details-wrapper']}
                >
                    <div className={clsx(cssClassName['card-header'], checkboxProps?.isChecked && cssClassName['card-header-with-checkbox'], isBreakingCard && cssClassName['card-header-breaking'], isUpdatedCard && cssClassName['card-header-updated'])}>
                        <div className={cssClassName['card-header-lhs']}>
                            <DenTooltip title={checkboxProps?.tooltipText || ''} arrow PopperProps={checkboxProps?.PopperProps}
                            >
                                <span>
                                    <DenCheckbox
                                        className={clsx(
                                            cssClassName['card-header-lhs-checkbox'],
                                            checkboxProps?.isChecked && cssClassName['checkbox-visible'],
                                            showAllCheckboxes && cssClassName['show-all-checkboxes']
                                        )}
                                        checked={checkboxProps?.isChecked}
                                        onChange={checkboxProps?.onCheckboxClick}
                                    />
                                </span>
                            </DenTooltip>
                            {isBreakingCard && <DenTypography className={cssClassName['card-header-breaking-label']}>BREAKING</DenTypography>}
                            {isUpdatedCard && <DenTypography className={cssClassName['card-header-updated-label']}>UPDATED</DenTypography>}
                            {(isBreakingCard || isUpdatedCard) && <Divider sx={{ height: '16px', margin: '0px 2px 0px 2px' }} orientation="vertical" />}
                            <DenCustomTooltip
                                title={headerTooltipContent}
                                arrow
                                placement='top'
                            >
                                <DenBox className={cssClassName['card-header-date']}>{headerDate}</DenBox>
                            </DenCustomTooltip>
                        </div>
                        <div className={cssClassName['card-header-rhs']}>
                            <DenBox className={cssClassName['card-header-menu']}>
                                <DenIconButton
                                    aria-label="more"
                                    id={''}
                                    aria-haspopup="true"
                                    onClick={(e) => handleContextClick(e, 1)}
                                    className={clsx(cssClassName['more-icon-base'], Boolean(anchorEl?.[1]) && cssClassName['menu-open'])}
                                    disableRipple

                                //disabled={action?.disabled}
                                >
                                    <MoreVertIcon sx={{ fontSize: '24px', color: 'inherit' }} />
                                </DenIconButton>
                                <DenMenu
                                    id="long-menu"
                                    anchorEl={anchorEl?.[1]}
                                    open={Boolean(anchorEl?.[1])}
                                    onClose={handleDenMenuOnClose}
                                >
                                    {cardMenuOptions?.map((option) => (
                                        <DenMenuItem
                                            key={option?.label}
                                            onClick={(e) => handleClose(e, 1, option?.onClickFnc)}
                                            classes={{
                                                root: classes?.menuOption,
                                            }}
                                        >
                                            <DenTypography variant="inherit">
                                                {option.label}
                                            </DenTypography>
                                        </DenMenuItem>
                                    ))}
                                </DenMenu>
                            </DenBox>
                        </div>
                    </div>
                    <div className={cssClassName['card-details-section']}>
                        <div className={cssClassName['card-image-wrapper']}>
                            <DenBox>
                                {title && <DenCustomTooltip arrow title={title} {...tooltipstyles} textColor='#2B2B2B' maxWidth="230px" placement='bottom-start' >
                                    <DenBox title={title} className={cssClassName['card-title']}>
                                        {title}
                                    </DenBox>
                                </DenCustomTooltip>}
                                {subtitle && <p className={cssClassName['card-subtitle']}>{subtitle}</p>}
                            </DenBox>
                            {imageUrl && <div className={cssClassName['card-image']}>
                                <ImageWithFallback
                                    src={imageUrl}
                                    placeholderIcon={ImageFallback}
                                    showFallbackBorder={false}
                                />
                            </div>}
                        </div>

                    </div>
                    {/* Tags and Channels Section for Grid View */}
                    {view !== 'single' && (
                        <div className={cssClassName['tags-channels-section']}>
                            {/* Channels */}
                            {channels && channels.length > 0 && (
                                <DenBox className={cssClassName['channels-wrapper']}>
                                    {visibleChannels.map((channel, index) => (
                                        <DenTooltip
                                            key={index}
                                            title={getChannelTooltipContent(channel)}
                                            arrow
                                            placement="top"
                                            PopperProps={{
                                                sx: {
                                                    '& .cds-MuiTooltip-tooltip': {
                                                        backgroundColor: 'white',
                                                        padding: '0',
                                                        boxShadow: '0px 3px 6px #00000029'
                                                    }
                                                }
                                            }}
                                        >
                                            <DenBox className={cssClassName['channel-chip']}>
                                                <DenTypography className={cssClassName['channel-name']}>
                                                    {channel.channelName}
                                                </DenTypography>
                                            </DenBox>
                                        </DenTooltip>
                                    ))}
                                    {hasRemainingChannels && (
                                        <DenTooltip
                                            title={getRemainingChannelsTooltipContent()}
                                            arrow
                                            placement="top"
                                            PopperProps={{
                                                sx: {
                                                    '& .cds-MuiTooltip-tooltip': {
                                                        backgroundColor: 'white',
                                                        padding: '0',
                                                        boxShadow: '0px 3px 6px #00000029'
                                                    }
                                                }
                                            }}
                                        >
                                            <DenBox className={cssClassName['channel-chip']}>
                                                <DenTypography className={cssClassName['channel-plus']}>
                                                    +{remainingChannels.length}
                                                </DenTypography>
                                            </DenBox>
                                        </DenTooltip>
                                    )}
                                </DenBox>
                            )}
                            {/* Tags */}
                            {tags?.length > 0 && (
                                <DenBox className={cssClassName['tags-wrapper']}>
                                    <DenCustomTooltip title={tags?.length > 1 ? tagsTooltip(tags) : ''} arrow {...tooltipstyles} placement='top'>
                                        <Chip
                                            className={cssClassName['card-tag']}
                                            size="small"
                                            icon={<span dangerouslySetInnerHTML={{ __html: tags[0].icon }} />}
                                            label={
                                                tags?.length > 1 ? <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                                                    <span>{tags[0].label}</span>
                                                    <span style={{ color: '#0F89FF', fontWeight: 500 }}>{`+${tags?.length - 1}`}</span>
                                                </span> : tags[0].label
                                            }
                                            variant="outlined"
                                        />
                                    </DenCustomTooltip>
                                </DenBox>
                            )}
                        </div>
                    )}

                    <div className={cssClassName['card-footer']}>
                        <DenBox className={cssClassName['card-footer-lhs']}>
                            <DenCustomTooltip title={`Images : ${imagesCount || '-'}`} arrow {...tooltipstyles}>
                                <DenBox className={cssClassName['image']}>
                                    <MarketplaceImageIcon width="16px" height="16px" />
                                    <DenTypography>
                                        {imagesCount || '-'}
                                    </DenTypography>
                                </DenBox>
                            </DenCustomTooltip>
                            <DenCustomTooltip title={`Videos : ${videosCount || '-'}`} arrow {...tooltipstyles}>
                                {videosCount && <DenBox className={cssClassName['video']}>
                                    <MarketplaceImageIcon width="14px" height="14px" />
                                    <DenTypography>
                                        {videosCount || '-'}
                                    </DenTypography>
                                </DenBox>}
                            </DenCustomTooltip>
                            <DenCustomTooltip title={`Word Count : ${wordCount || '-'}`} arrow {...tooltipstyles}>
                                {wordCount && <DenBox className={cssClassName['wordcount']}>
                                    <DenTypography>
                                        WC : {wordCount || '-'}
                                    </DenTypography>
                                </DenBox>
                                }
                            </DenCustomTooltip>
                        </DenBox>
                        <DenBox className={cssClassName['card-footer-rhs']}>
                            {view === 'single' && channels && channels.length > 0 && (
                                <DenBox className={cssClassName['channels-wrapper']}>
                                    {visibleChannels.map((channel, index) => (
                                        <DenTooltip
                                            key={index}
                                            title={getChannelTooltipContent(channel)}
                                            arrow
                                            placement="top"
                                            PopperProps={{
                                                sx: {
                                                    '& .cds-MuiTooltip-tooltip': {
                                                        backgroundColor: 'white',
                                                        padding: '0',
                                                        boxShadow: '0px 3px 6px #00000029',
                                                    },
                                                    '& .cds-MuiTooltip-arrow': {
                                                        color: '#fff'
                                                    }
                                                }
                                            }}
                                        >
                                            <DenBox className={cssClassName['channel-chip']}>
                                                <DenTypography className={cssClassName['channel-name']}>
                                                    {channel.channelName}
                                                </DenTypography>
                                            </DenBox>
                                        </DenTooltip>
                                    ))}
                                    {hasRemainingChannels && (
                                        <DenTooltip
                                            title={getRemainingChannelsTooltipContent()}
                                            arrow
                                            placement="top"
                                            PopperProps={{
                                                sx: {
                                                    '& .cds-MuiTooltip-tooltip': {
                                                        backgroundColor: 'white',
                                                        padding: '0',
                                                        boxShadow: '0px 3px 6px #00000029',
                                                    },
                                                    '& .cds-MuiTooltip-arrow': {
                                                        color: '#fff'
                                                    }

                                                }
                                            }}
                                        >
                                            <DenBox className={cssClassName['channel-chip']}>
                                                <DenTypography className={cssClassName['channel-plus']}>
                                                    +{remainingChannels.length}
                                                </DenTypography>
                                            </DenBox>
                                        </DenTooltip>
                                    )}
                                </DenBox>
                            )}
                            {view === 'single' && channels && channels.length > 0 && <Divider sx={{ height: '14px' }} orientation="vertical" />}
                            {view === 'single' && tags && tags.length > 0 && (
                                <DenBox className={cssClassName['card-tags-single-view']}>
                                    {
                                        (tags?.length > 0 && <DenCustomTooltip title={tagsTooltip(tags)} arrow {...tooltipstyles} placement='top'>
                                            <Chip
                                                className={cssClassName['card-tag']}
                                                size="small"
                                                icon={<span dangerouslySetInnerHTML={{ __html: tags[0].icon }} />}
                                                label={
                                                    tags?.length > 1 ? <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                                                        <span>{tags[0].label}</span>
                                                        <span style={{ color: '#0F89FF', fontWeight: 500 }}>{`+${tags?.length - 1}`}</span>
                                                    </span> : tags[0].label
                                                }
                                                variant="outlined"
                                            />
                                        </DenCustomTooltip>
                                        )
                                    }
                                </DenBox>
                            )}
                            {dataSource && <DenCustomTooltip title={`See on ${dataSource?.name}`} arrow {...tooltipstyles}>
                                <DenBox className={cssClassName['datasoruce']} onClick={(e) => {
                                    e.stopPropagation();
                                    dataSource?.onClick?.(e);
                                }}>
                                    <DenSvgIcon>{dataSource?.icon}</DenSvgIcon>
                                    <DenTypography className={cssClassName['datasource-text']}>{dataSource?.name}</DenTypography>
                                </DenBox>
                            </DenCustomTooltip>}
                            {agency && <DenTypography className={cssClassName['agency-text']}>{agency}</DenTypography>}
                        </DenBox>
                    </div>
                </div>
            </DenCard >
        </div >
    );
})
export default MarketplaceContentCard; 