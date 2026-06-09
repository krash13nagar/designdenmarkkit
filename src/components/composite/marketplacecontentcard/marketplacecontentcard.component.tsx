import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import cssClassName from './marketplacecontentcard.module.scss';
import {
    DenBox,
    DenCard,
    DenCheckbox,
    DenIconButton,
    DenMenu,
    DenMenuItem,
    DenSvgIcon,
    DenTooltip,
    DenTypography,
    ImageWithFallback,
} from '../../common';
import { formatDateWithMoment } from '../../../utility/utils';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import clsx from 'clsx';
import {
    AnchorGeneric,
    MarketplaceContentCardConfig,
} from './marketplacecontentcard.types';
import MarketplaceImageIcon from '../../../assets/cdsicons/marketplaceimageicon';
import { Chip, Divider } from '@mui/material';
import DenCustomTooltip from '../../common/tooltip/customtooltip.component';
import CopyIconButton from '../copyiconbutton/copyiconbutton.component';

const RESIZE_OBSERVER_THROTTLE_MS = 1000;

const TOOLTIP_TEXT_STYLES = {
    font: 'normal normal 400 13px/18px "Source Sans 3"',
    textColor: '#4D4D4D',
};

const CHANNEL_TOOLTIP_POPPER_PROPS = {
    sx: {
        '& .cds-MuiTooltip-tooltip': {
            backgroundColor: 'white',
            padding: '0',
            boxShadow: '0px 3px 6px #00000029',
        },
    },
};

const SINGLE_VIEW_CHANNEL_TOOLTIP_POPPER_PROPS = {
    sx: {
        '& .cds-MuiTooltip-tooltip': {
            backgroundColor: 'white',
            padding: '0',
            boxShadow: '0px 3px 6px #00000029',
        },
        '& .cds-MuiTooltip-arrow': {
            color: '#fff',
        },
    },
};

const TYPE_TOOLTIP_POPPER_PROPS = {
    sx: {
        '& .cds-MuiTooltip-tooltip': {
            font: "normal normal normal 12px/20px 'Source Sans 3' !important",
            padding: '1px 4px 1px 4px !important',
            backgroundColor: '#4D4D4D !important',
        },
    },
};

const CARD_MENU_TOOLTIP_POPPER_PROPS = TYPE_TOOLTIP_POPPER_PROPS;

const TAG_CHIP_SX = {
    '& .cds-MuiChip-icon': {
        marginTop: '5px',
    },
};

const decodeHtmlEntities = (text: string): string => {
    if (!text) return text;
    const textarea = document.createElement('textarea');
    textarea.innerHTML = text;
    return textarea.value;
};

const MarketplaceContentCardComponent = React.forwardRef<any, MarketplaceContentCardConfig>((props, ref) => {
    const {
        id,
        title,
        slugTitle,
        subtitle,
        story,
        imageUrl,
        cardMenuOptions,
        ImageFallback,
        onCardClick = () => { },
        onTitleClick,
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
        agency = '',
        isCompetitor = true,
        typeIcon,
        typeLabel = '',
        languageCode = '',
        translateLanguageErrorMsg = '',
        showTitleCopy = false,
    } = props;

    const [anchorEl, setAnchorEl] = useState<AnchorGeneric>({});
    const cardContentContainerRef = useRef<HTMLDivElement | null>(null);
    const titleRowRef = useRef<HTMLDivElement | null>(null);
    const slugTitleRef = useRef<HTMLDivElement | null>(null);
    const subtitleRef = useRef<HTMLDivElement | null>(null);
    const clampFrameRef = useRef<number | undefined>(undefined);
    const clampTimeoutRef = useRef<number | undefined>(undefined);
    const lastClampRunAtRef = useRef(0);

    const headerDate = useMemo(() => {
        return publishDateTimestamp ? formatDateWithMoment(publishDateTimestamp) : '';
    }, [publishDateTimestamp]);

    const normalizedView = useMemo(() => view.trim().toLowerCase(), [view]);
    const isSingleView = normalizedView === 'single';
    const isGridView = normalizedView === 'grid';

    const variantClassName = useMemo(() => {
        return isSingleView ? 'marketplaceSingleViewVariant' : '';
    }, [isSingleView]);

    const isTitleClickable = !isCompetitor && Boolean(onTitleClick);

    const shouldIncreaseTypographyForLanguage = useMemo(() => {
        const normalizedLanguageCode = languageCode.trim().toLowerCase();
        return ['en', 'ml', 'ta'].includes(normalizedLanguageCode);
    }, [languageCode]);

    const decodedTitle = useMemo(() => {
        return decodeHtmlEntities(title || '');
    }, [title]);

    const hasChannels = channels.length > 0;
    const hasTags = Boolean(tags?.length);
    const hasTitleRow = Boolean(title || imageUrl);
    const hasSubtitle = Boolean(subtitle || story);

    const visibleChannels = useMemo(() => {
        return channels.slice(0, 2);
    }, [channels]);

    const remainingChannels = useMemo(() => {
        return channels.slice(2);
    }, [channels]);

    const hasRemainingChannels = remainingChannels.length > 0;

    const primaryTag = tags?.[0];

    const handleClose = useCallback((
        event: React.SyntheticEvent<HTMLElement> | undefined,
        index: number,
        cb?: Function | undefined
    ) => {
        setAnchorEl((prev: any) => ({ ...prev, [index]: null }));
        event?.stopPropagation();
        if (cb) cb(event);
    }, []);

    const handleDenMenuOnClose = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        handleClose(undefined, 1);
        e.stopPropagation();
    }, [handleClose]);

    const handleContextClick = useCallback((
        event: React.SyntheticEvent<HTMLElement>,
        index: number
    ) => {
        setAnchorEl((prev: any) => ({ ...prev, [index]: event.currentTarget }));
        event.stopPropagation();
    }, []);

    const handleOnTitleClick = useCallback((event: React.MouseEvent<HTMLElement>) => {
        onTitleClick?.(event);
        event.stopPropagation();
    }, [onTitleClick]);

    const updateTitleCopyPosition = useCallback((event: React.MouseEvent<HTMLElement> | React.FocusEvent<HTMLElement>) => {
        const titleElement = event.currentTarget;
        const titleTextElement = titleElement.querySelector('[data-marketplace-title-text="true"]');

        if (!(titleTextElement instanceof HTMLElement)) return;

        const titleRect = titleElement.getBoundingClientRect();
        const textRect = titleTextElement.getBoundingClientRect();
        const range = document.createRange();
        range.selectNodeContents(titleTextElement);

        const visibleRects = Array.from(range.getClientRects()).filter((rect) => {
            return (
                rect.width > 0 &&
                rect.height > 0 &&
                rect.bottom > textRect.top &&
                rect.top < textRect.bottom &&
                rect.right > textRect.left &&
                rect.left < textRect.right
            );
        });

        range.detach();

        if (!visibleRects.length) {
            titleElement.style.removeProperty('--title-copy-left');
            return;
        }

        const lastVisibleRect = visibleRects.reduce((latestRect, rect) => (
            rect.bottom > latestRect.bottom ? rect : latestRect
        ));
        const lastLineRects = visibleRects.filter((rect) => Math.abs(rect.top - lastVisibleRect.top) < 2);
        const lastLineRight = Math.max(...lastLineRects.map((rect) => Math.min(rect.right, textRect.right)));
        const iconOffset = 4;
        const iconWidth = 20;
        const copyLeft = Math.min(
            Math.max(lastLineRight - titleRect.left + iconOffset, 0),
            Math.max(titleRect.width - iconWidth, 0)
        );

        titleElement.style.setProperty('--title-copy-left', `${copyLeft}px`);
    }, []);

    const updateSubtitleClamp = useCallback(() => {
        const contentContainerElement = cardContentContainerRef.current;
        const subtitleElement = subtitleRef.current;

        if (!contentContainerElement || !subtitleElement) return;

        const subtitleStyles = window.getComputedStyle(subtitleElement);
        const slugStyles = slugTitleRef.current ? window.getComputedStyle(slugTitleRef.current) : undefined;
        const lineHeight = Number.parseFloat(subtitleStyles.lineHeight) || 0;
        const subtitleMarginTop = Number.parseFloat(subtitleStyles.marginTop) || 0;
        const slugMarginTop = Number.parseFloat(slugStyles?.marginTop || '0') || 0;

        if (!lineHeight) return;

        const containerHeight = contentContainerElement.clientHeight;
        const titleHeight = titleRowRef.current?.getBoundingClientRect().height || 0;
        const slugHeight = slugTitleRef.current?.getBoundingClientRect().height || 0;
        const availableSubtitleHeight = Math.max(
            containerHeight - titleHeight - slugHeight - slugMarginTop - subtitleMarginTop,
            0
        );
        const clampLines = Math.max(Math.floor((availableSubtitleHeight + 0.5) / lineHeight), 1);
        const clampValue = String(clampLines);

        if (subtitleElement.style.getPropertyValue('--marketplace-subtitle-line-clamp') !== clampValue) {
            subtitleElement.style.setProperty('--marketplace-subtitle-line-clamp', clampValue);
        }
    }, []);

    const scheduleSubtitleClampUpdate = useCallback((force = false) => {
        const clearScheduledClamp = () => {
            if (clampTimeoutRef.current) {
                window.clearTimeout(clampTimeoutRef.current);
                clampTimeoutRef.current = undefined;
            }
            if (clampFrameRef.current) {
                window.cancelAnimationFrame(clampFrameRef.current);
                clampFrameRef.current = undefined;
            }
        };

        const runClampUpdate = () => {
            lastClampRunAtRef.current = Date.now();
            clampFrameRef.current = window.requestAnimationFrame(() => {
                clampFrameRef.current = undefined;
                updateSubtitleClamp();
            });
        };

        const now = Date.now();
        const elapsed = now - lastClampRunAtRef.current;

        if (force || elapsed >= RESIZE_OBSERVER_THROTTLE_MS) {
            clearScheduledClamp();
            runClampUpdate();
            return;
        }

        if (clampTimeoutRef.current || clampFrameRef.current) return;

        clampTimeoutRef.current = window.setTimeout(() => {
            clampTimeoutRef.current = undefined;
            if (clampFrameRef.current) {
                window.cancelAnimationFrame(clampFrameRef.current);
                clampFrameRef.current = undefined;
            }
            runClampUpdate();
        }, RESIZE_OBSERVER_THROTTLE_MS - elapsed);
    }, [updateSubtitleClamp]);

    useEffect(() => {
        let resizeObserver: ResizeObserver | undefined;
        const observedElements = [
            cardContentContainerRef.current,
            titleRowRef.current,
            slugTitleRef.current,
        ].filter((element): element is HTMLDivElement => Boolean(element));

        scheduleSubtitleClampUpdate(true);

        if (typeof ResizeObserver !== 'undefined') {
            resizeObserver = new ResizeObserver(() => scheduleSubtitleClampUpdate());
            observedElements.forEach((element) => resizeObserver?.observe(element));
        }

        return () => {
            if (clampTimeoutRef.current) {
                window.clearTimeout(clampTimeoutRef.current);
                clampTimeoutRef.current = undefined;
            }
            if (clampFrameRef.current) {
                window.cancelAnimationFrame(clampFrameRef.current);
                clampFrameRef.current = undefined;
            }
            resizeObserver?.disconnect();
        };
    }, [scheduleSubtitleClampUpdate, hasTitleRow, slugTitle, hasSubtitle, view]);

    const tagsTooltipContent = useMemo(() => {
        if (!tags?.length || tags.length <= 1) return '';

        return (
            <React.Fragment>
                <DenTypography variant="body2" color="textPrimary">
                    <span style={{ font: 'normal normal 400 13px/18px "Source Sans 3"', color: '#818181' }}>
                        Category:
                    </span>{' '}
                    <span style={{ font: 'normal normal 400 13px/18px "Source Sans 3"', color: '#4D4D4D' }}>
                        {tags.map((tag: any) => tag.label).join(', ')}
                    </span>
                </DenTypography>
            </React.Fragment>
        );
    }, [tags]);

    const tagChipContent = useMemo(() => {
        if (!primaryTag) return null;

        const label = tags && tags.length > 1 ? (
            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <span className={cssClassName['card-tag-label']}>{primaryTag.label}</span>
                <span style={{ color: '#0F89FF', fontWeight: 500 }}>{`+${tags.length - 1}`}</span>
            </span>
        ) : (
            <span className={cssClassName['card-tag-label']}>{primaryTag.label}</span>
        );

        return (
            <DenCustomTooltip title={tagsTooltipContent} arrow {...TOOLTIP_TEXT_STYLES} placement='top'>
                <Chip
                    className={cssClassName['card-tag']}
                    size="small"
                    icon={<span dangerouslySetInnerHTML={{ __html: primaryTag.icon }} />}
                    label={label}
                    variant="outlined"
                    sx={TAG_CHIP_SX}
                />
            </DenCustomTooltip>
        );
    }, [primaryTag, tags, tagsTooltipContent]);

    const menuItems = useMemo(() => {
        return cardMenuOptions?.map((option) => (
            <DenTooltip
                key={option?.label}
                title={option?.disabled ? option?.disabledMsg : ''}
                disableHoverListener={!option?.disabled}
                PopperProps={CARD_MENU_TOOLTIP_POPPER_PROPS}
                arrow
            >
                <span>
                    <DenMenuItem
                        onClick={(e) => handleClose(e, 1, option?.onClickFnc)}
                        classes={{
                            root: classes?.menuOption,
                        }}
                        disabled={option?.disabled}
                    >
                        <DenTypography variant="inherit">
                            {option.label}
                        </DenTypography>
                    </DenMenuItem>
                </span>
            </DenTooltip>
        ));
    }, [cardMenuOptions, classes?.menuOption, handleClose]);

    const gridChannelChips = useMemo(() => {
        if (!hasChannels) return null;

        return (
            <DenBox className={cssClassName['channels-wrapper']}>
                {visibleChannels.map((channel, index) => (
                    <DenTooltip
                        key={index}
                        title={''}
                        arrow
                        placement="top"
                        PopperProps={CHANNEL_TOOLTIP_POPPER_PROPS}
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
                        title={''}
                        arrow
                        placement="top"
                        PopperProps={CHANNEL_TOOLTIP_POPPER_PROPS}
                    >
                        <DenBox className={cssClassName['channel-chip']}>
                            <DenTypography className={cssClassName['channel-plus']}>
                                +{remainingChannels.length}
                            </DenTypography>
                        </DenBox>
                    </DenTooltip>
                )}
            </DenBox>
        );
    }, [hasChannels, visibleChannels, hasRemainingChannels, remainingChannels.length]);

    const singleViewChannelChips = useMemo(() => {
        if (!isSingleView || !hasChannels) return null;

        return (
            <DenBox className={cssClassName['channels-wrapper']}>
                {visibleChannels.map((channel, index) => (
                    <DenTooltip
                        key={index}
                        title={''}
                        arrow
                        placement="top"
                        PopperProps={SINGLE_VIEW_CHANNEL_TOOLTIP_POPPER_PROPS}
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
                        title={''}
                        arrow
                        placement="top"
                        PopperProps={SINGLE_VIEW_CHANNEL_TOOLTIP_POPPER_PROPS}
                    >
                        <DenBox className={cssClassName['channel-chip']}>
                            <DenTypography className={cssClassName['channel-plus']}>
                                +{remainingChannels.length}
                            </DenTypography>
                        </DenBox>
                    </DenTooltip>
                )}
            </DenBox>
        );
    }, [isSingleView, hasChannels, visibleChannels, hasRemainingChannels, remainingChannels.length]);

    const sourceOrAgencyContent = useMemo(() => {
        if (!isSingleView) return null;

        if (isCompetitor) {
            return (
                <DenCustomTooltip title={`See on ${dataSource?.name}`} arrow {...TOOLTIP_TEXT_STYLES}>
                    <DenBox
                        className={cssClassName['datasoruce']}
                        onClick={(e) => {
                            e.stopPropagation();
                            dataSource?.onClick?.(e);
                        }}
                    >
                        <DenSvgIcon>{dataSource?.icon}</DenSvgIcon>
                        <DenTypography className={cssClassName['datasource-text']}>{dataSource?.name}</DenTypography>
                    </DenBox>
                </DenCustomTooltip>
            );
        }

        return <DenTypography className={cssClassName['agency-text']}>{agency}</DenTypography>;
    }, [agency, dataSource, isCompetitor, isSingleView]);

    return (
        <div className={cssClassName[variantClassName]}>
            <DenCard
                classes={{ root: clsx(cssClassName['card-root'], classes?.root) }}
                className={clsx(cssClassName['marketplace-default-card-wrapper'], classes?.root, selected ? cssClassName['selected-card'] : '')}
                ref={ref}
                onClick={onCardClick}
            >
                <div className={cssClassName['image-with-details-wrapper']}>
                    <div className={clsx(cssClassName['card-header'], checkboxProps?.isChecked && cssClassName['card-header-with-checkbox'], isBreakingCard && cssClassName['card-header-breaking'], isUpdatedCard && cssClassName['card-header-updated'])}>
                        <div className={cssClassName['card-header-lhs']}>
                            <DenTooltip title={checkboxProps?.tooltipText || ''} arrow PopperProps={checkboxProps?.PopperProps}>
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
                            {typeIcon && (
                                <DenTooltip title={typeLabel} PopperProps={TYPE_TOOLTIP_POPPER_PROPS}>
                                    <DenSvgIcon sx={{ marginLeft: '6px', marginTop: '4px' }} className='marketplace-card-header-type-icon'>{typeIcon}</DenSvgIcon>
                                </DenTooltip>
                            )}
                        </div>
                        <div className={cssClassName['card-header-rhs']}>
                            <DenBox className={cssClassName['card-header-menu']}>
                                <DenIconButton
                                    aria-label="more"
                                    id={id || ''}
                                    aria-haspopup="true"
                                    onClick={(e) => handleContextClick(e, 1)}
                                    className={clsx(cssClassName['more-icon-base'], Boolean(anchorEl?.[1]) && cssClassName['menu-open'])}
                                    disableRipple
                                >
                                    <MoreVertIcon sx={{ fontSize: '24px', color: 'inherit' }} />
                                </DenIconButton>
                                <DenMenu
                                    id="long-menu"
                                    anchorEl={anchorEl?.[1]}
                                    open={Boolean(anchorEl?.[1])}
                                    onClose={handleDenMenuOnClose}
                                >
                                    {menuItems}
                                </DenMenu>
                            </DenBox>
                        </div>
                    </div>
                    <div className={cssClassName['card-details-section']}>
                        <div className={cssClassName['card-image-wrapper']}>
                            <div
                                className={clsx(
                                    cssClassName['card-content-container'],
                                    shouldIncreaseTypographyForLanguage && cssClassName['marketplace-card-language-rhythm-boost']
                                )}
                                ref={cardContentContainerRef}
                            >
                                {hasTitleRow && (
                                    <div className={cssClassName['card-title-row']} ref={titleRowRef}>
                                        {title && (
                                            <div className={cssClassName['card-title-copy-wrapper']}>
                                                <DenCustomTooltip arrow title={decodedTitle} {...TOOLTIP_TEXT_STYLES} textColor='#2B2B2B' maxWidth="230px" placement='bottom-start'>
                                                    <DenBox
                                                        title={title}
                                                        className={clsx(
                                                            cssClassName['marketplace-card-title'],
                                                            showTitleCopy && cssClassName['marketplace-card-title-with-copy'],
                                                            isTitleClickable && cssClassName['card-title-wire']
                                                        )}
                                                        onClick={isTitleClickable ? handleOnTitleClick : undefined}
                                                        onMouseEnter={showTitleCopy ? updateTitleCopyPosition : undefined}
                                                        onFocus={showTitleCopy ? updateTitleCopyPosition : undefined}
                                                    >
                                                        <span data-marketplace-title-text="true" className={cssClassName['marketplace-card-title-text']} dangerouslySetInnerHTML={{ __html: title }} />
                                                        {showTitleCopy && (
                                                            <span className={cssClassName['card-title-copy-icon']}>
                                                                <CopyIconButton copyValue={decodedTitle} />
                                                            </span>
                                                        )}
                                                    </DenBox>
                                                </DenCustomTooltip>
                                            </div>
                                        )}
                                        {imageUrl && (
                                            <div className={cssClassName['card-image']}>
                                                <ImageWithFallback
                                                    src={imageUrl}
                                                    placeholderIcon={ImageFallback}
                                                    showFallbackBorder={false}
                                                />
                                            </div>
                                        )}
                                    </div>
                                )}
                                {slugTitle && <div className={cssClassName['card-slug-title']} ref={slugTitleRef} dangerouslySetInnerHTML={{ __html: slugTitle }} />}
                                {hasSubtitle && (
                                    <div
                                        className={clsx(
                                            cssClassName['marketplace-card-subtitle'],
                                            slugTitle ? cssClassName['marketplace-subtitle-with-slug'] : cssClassName['marketplace-subtitle-without-slug']
                                        )}
                                        ref={subtitleRef}
                                        dangerouslySetInnerHTML={{ __html: subtitle || story }}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                    {translateLanguageErrorMsg && (
                        <div className={cssClassName['translate-error-section']}>
                            <p className={cssClassName['card-translate-error']}>{translateLanguageErrorMsg}</p>
                        </div>
                    )}
                    {isGridView && (
                        <div className={cssClassName['tags-channels-section']}>
                            {gridChannelChips}
                            {hasTags && (
                                <DenBox className={cssClassName['tags-wrapper']} sx={{ marginLeft: 'auto' }}>
                                    {tagChipContent}
                                </DenBox>
                            )}
                        </div>
                    )}

                    <div className={cssClassName['card-footer']}>
                        <DenBox className={cssClassName['card-footer-lhs']}>
                            {!!wordCount && <DenCustomTooltip title={wordCount ? `Word Count : ${wordCount}` : ''} arrow {...TOOLTIP_TEXT_STYLES}>
                                <DenBox className={cssClassName['wordcount']}>
                                    <DenTypography>
                                        <span className={cssClassName['wordcount-label']}>WC :</span> {wordCount}
                                    </DenTypography>
                                </DenBox>
                            </DenCustomTooltip>}
                            {!!imagesCount && <DenCustomTooltip title={imagesCount ? `Images : ${imagesCount}` : ''} arrow {...TOOLTIP_TEXT_STYLES}>
                                <DenBox className={cssClassName['image']}>
                                    {!!wordCount && <Divider orientation="vertical" sx={{ height: '16px', margin: '0px 2px' }} />}
                                    <MarketplaceImageIcon width="16px" height="16px" />
                                    <DenTypography>
                                        {imagesCount}
                                    </DenTypography>
                                </DenBox>
                            </DenCustomTooltip>}
                            {!!videosCount && <DenCustomTooltip title={videosCount ? `Videos : ${videosCount}` : ''} arrow {...TOOLTIP_TEXT_STYLES}>
                                <DenBox className={cssClassName['video']}>
                                    <MarketplaceImageIcon width="14px" height="14px" />
                                    <DenTypography>
                                        {videosCount}
                                    </DenTypography>
                                </DenBox>
                            </DenCustomTooltip>}
                        </DenBox>
                        <DenBox className={cssClassName['card-footer-rhs']}>
                            {singleViewChannelChips}
                            {(isSingleView && hasChannels) && <Divider sx={{ height: '14px' }} orientation="vertical" />}
                            {isSingleView && hasTags && (
                                <DenBox className={cssClassName['card-tags-single-view']}>
                                    {tagChipContent}
                                </DenBox>
                            )}
                            {(isSingleView && (isCompetitor || agency)) && <Divider sx={{ height: '14px' }} orientation="vertical" />}
                            {sourceOrAgencyContent}
                        </DenBox>
                    </div>
                </div>
            </DenCard>
        </div>
    );
});

MarketplaceContentCardComponent.displayName = 'MarketplaceContentCard';

export const MarketplaceContentCard = React.memo(MarketplaceContentCardComponent);
export default MarketplaceContentCard;
