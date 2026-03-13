import React, { useCallback, useMemo } from 'react';
import clsx from 'clsx';
import { Divider } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EpaperPdfIcon from '../../../assets/cdsicons/epaperpdficon';
import EpaperStoriesIcon from '../../../assets/cdsicons/epaperstoriesicon';
import EpaperMissingStoriesIcon from '../../../assets/cdsicons/epapermissingstoriesicon';
import ImageIcon from '../../../assets/cdsicons/imageicon';
import MarketplaceImageIcon from '../../../assets/cdsicons/marketplaceimageicon';
import marketplaceCss from '../marketplacecontentcard/marketplacecontentcard.module.scss';
import cssClassName from './epapercontentcard.module.scss';
import DenCustomTooltip from '../../common/tooltip/customtooltip.component';
import DenSkeleton from '../../common/skeleton/skeleton.component';

import {
    DenBox,
    DenCard,
    DenCheckbox,
    DenIconButton,
    DenMenu,
    DenMenuItem,
    DenTooltip,
    DenTypography,
    DenSvgIcon,
    ImageWithFallback,
} from '../../common';
import {
    EpaperContentCardProps,
    EpaperAnchorGeneric,
    EpaperMissingStoriesCardData,
    EpaperPdfCardData,
    EpaperStoryCardData,
} from './epapercontentcard.types';
import { parseInsertDate } from '../../../utility/utils';

const formatInsertTime = (insertDate?: string | number | Date): string => {
    if (insertDate === undefined || insertDate === null || insertDate === '') return '-';

    const parsedDate = parseInsertDate(insertDate);
    if (!parsedDate) return String(insertDate);

    return new Intl.DateTimeFormat('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        day: 'numeric',
        month: 'short',
        hour12: false,
    }).format(parsedDate).replace(',', '');
};

export const EpaperContentCard = React.forwardRef((props: EpaperContentCardProps, ref: React.MutableRefObject<any>) => {
    const {
        variant,
        data,
        classes,
        selected,
        imageLoading = false,
        headerTooltipContent,
        view = 'grid',
        typeLabel = '',
        cardMenuOptions,
        checkboxProps,
        showCheckbox = true,
        showAllCheckboxes = false,
        onCardClick = () => { },
        onTitleClick,
        onMergedClick,
    } = props;

    const [anchorEl, setAnchorEl] = React.useState<EpaperAnchorGeneric>({});

    const tooltipstyles = useMemo(() => {
        return {
            font: 'normal normal 400 13px/18px "Source Sans 3"',
            textColor: '#4D4D4D',
        };
    }, []);

    const variantClassName = useMemo(() => {
        if (view === 'single') return 'epaperSingleViewVariant';
        return '';
    }, [view]);

    const isPdfVariant = variant === 'pdf';
    const isMissingStoriesVariant = variant === 'missingStories';
    const isStoriesVariant = variant === 'stories';
    const pdfData = isPdfVariant ? (data as EpaperPdfCardData) : undefined;
    const missingStoriesData = isMissingStoriesVariant ? (data as EpaperMissingStoriesCardData) : undefined;
    const storyData = isStoriesVariant ? (data as EpaperStoryCardData) : undefined;
    const mergedStoryInfo = storyData?.mergedStoryInfo;

    const resolvedTitle = useMemo(() => {
        if (!isStoriesVariant) return '';
        return mergedStoryInfo?.title || storyData?.title || '-';
    }, [isStoriesVariant, mergedStoryInfo?.title, storyData?.title]);

    const resolvedWordCount = useMemo(() => {
        if (!isStoriesVariant) return '-';
        return String(mergedStoryInfo?.wordCount ?? storyData?.wordCount ?? '-');
    }, [isStoriesVariant, mergedStoryInfo?.wordCount, storyData?.wordCount]);

    const resolvedImageCount = useMemo(() => {
        if (!isStoriesVariant) return '-';
        return String(storyData?.imageCount ?? '-');
    }, [isStoriesVariant, storyData?.imageCount]);

    const cardPage = useMemo(() => {
        return pdfData?.page || missingStoriesData?.page || '-';
    }, [pdfData?.page, missingStoriesData?.page]);

    const headerTime = useMemo(() => {
        if (isPdfVariant || isMissingStoriesVariant) return `Page ${cardPage}`;
        return formatInsertTime(storyData?.insertDate);
    }, [isPdfVariant, isMissingStoriesVariant, cardPage, storyData?.insertDate]);

    const resolvedHeaderTooltipContent = useMemo(() => {
        if (headerTooltipContent) return headerTooltipContent;
        if (data?.headerTooltipContent) return data.headerTooltipContent;

        return undefined;
    }, [headerTooltipContent, data?.headerTooltipContent, isPdfVariant, isMissingStoriesVariant, cardPage, data?.agency]);

    const shouldShowStoryThumbnail = useMemo(() => {
        if (!isStoriesVariant) return false;
        return Number(storyData?.imageCount || 0) > 0;
    }, [isStoriesVariant, storyData?.imageCount]);

    const storyDescription = useMemo(() => {
        if (!isStoriesVariant) return '';
        return storyData?.description || '';
    }, [isStoriesVariant, storyData?.description]);

    const shouldShowContinueOn = useMemo(() => {
        if (!isStoriesVariant) return false;
        return Boolean(mergedStoryInfo?.page);
    }, [isStoriesVariant, mergedStoryInfo?.page]);

    const missingStoriesThumb = useMemo(() => {
        return (
            missingStoriesData?.indesignThumbUrl?.[0] ||
            missingStoriesData?.thumbnailUrl ||
            ''
        );
    }, [missingStoriesData?.indesignThumbUrl, missingStoriesData?.thumbnailUrl]);

    const mergedPage = mergedStoryInfo?.page;
    const continueText = useMemo(() => {
        if (!shouldShowContinueOn) return '';
        return ` Continued on P${mergedPage}`;
    }, [shouldShowContinueOn, mergedPage]);

    const handleClose = useCallback(
        (
            event: React.SyntheticEvent<HTMLElement> | undefined,
            index: number,
            cb?: React.MouseEventHandler<HTMLElement>
        ) => {
            setAnchorEl((prev: EpaperAnchorGeneric) => ({ ...prev, [index]: null }));
            event?.stopPropagation();
            if (cb && event) cb(event as unknown as React.MouseEvent<HTMLElement>);
        },
        []
    );

    const handleDenMenuOnClose = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
        handleClose(undefined, 1);
        event.stopPropagation();
    }, [handleClose]);

    const handleContextClick = useCallback(
        (event: React.SyntheticEvent<HTMLElement>, index: number) => {
            setAnchorEl((prev: EpaperAnchorGeneric) => ({ ...prev, [index]: event.currentTarget as HTMLElement }));
            event.stopPropagation();
        },
        []
    );

    const handleCardTitleClick = useCallback((event: React.MouseEvent<HTMLElement>) => {
        onTitleClick?.(event);
        event.stopPropagation();
    }, [onTitleClick]);

    const handleCheckboxChange = useCallback((event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
        event.stopPropagation();
        checkboxProps?.onCheckboxClick?.(event, checked);
    }, [checkboxProps]);

    const hasCardMenuOptions = Boolean(cardMenuOptions?.length);

    const renderBody = useMemo(() => {
        if (isPdfVariant || isMissingStoriesVariant) {
            return (
                <div className={clsx(marketplaceCss['card-details-section'], cssClassName['pdfBody'])}>
                    <DenBox className={clsx(cssClassName['pdfImageWrap'], cssClassName['pdfImageFrame'], imageLoading && cssClassName['pdfImageFrameLoading'])}>
                        {imageLoading ? (
                            <DenSkeleton
                                className={clsx(cssClassName['pdfImage'], cssClassName['imageSkeleton'], cssClassName['pdfImageSkeleton'])}
                                variant="rounded"
                                animation="wave"
                                width="100%"
                                height="100%"
                            />
                        ) : (
                            <ImageWithFallback
                                src={isMissingStoriesVariant ? missingStoriesThumb : (pdfData?.thumbnailUrl || '')}
                                className={cssClassName['pdfImage']}
                                alt={`Page ${cardPage}`}
                                width="100%"
                                height="100%"
                                style={{ display: 'block' }}
                                showFallbackBorder={false}
                                placeholderIcon={<ImageIcon />}
                            />
                        )}
                    </DenBox>
                </div>
            );
        }

        return (
            <div className={clsx(marketplaceCss['card-details-section'], cssClassName['storyBody'])}>
                <div className={marketplaceCss['card-image-wrapper']}>
                    <DenBox sx={{ minWidth: 0, flex: 1 }}>
                        <DenCustomTooltip arrow title={resolvedTitle} {...tooltipstyles} textColor="#2B2B2B" maxWidth="230px" placement='bottom-start'>
                            <DenBox className={clsx(marketplaceCss['card-title'], marketplaceCss['card-title-wire'], cssClassName['story-title'])} onClick={handleCardTitleClick}>
                                {resolvedTitle}
                            </DenBox>
                        </DenCustomTooltip>
                        <p className={clsx(marketplaceCss['card-subtitle'], cssClassName['story-description'])}>
                            <span className={cssClassName['story-description-prefix']}>{storyDescription}</span>
                        </p>
                        {shouldShowContinueOn && (
                            <div
                                className={cssClassName['storyContinueRow']}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onMergedClick?.(String(mergedPage));
                                }}
                            >
                                <LinkIcon className={cssClassName['inlineContinueIcon']} />
                                <span className={cssClassName['inlineContinueLink']}>{continueText}</span>
                            </div>
                        )}
                    </DenBox>
                    {shouldShowStoryThumbnail && (
                        <DenBox className={clsx(marketplaceCss['card-image'], cssClassName['storyThumbWrap'])}>
                            {imageLoading ? (
                                <DenSkeleton
                                    className={clsx(cssClassName['imageSkeleton'], cssClassName['storyThumbSkeleton'])}
                                    variant="rounded"
                                    animation="wave"
                                    width="100%"
                                    height="100%"
                                />
                            ) : (
                                <ImageWithFallback
                                    src={storyData?.thumbnailUrl || ''}
                                    alt={storyData?.title || 'Story image'}
                                    width="100%"
                                    height="100%"
                                    style={{ display: 'block', objectFit: 'cover' }}
                                    showFallbackBorder={false}
                                    placeholderIcon={<ImageIcon />}
                                />
                            )}
                        </DenBox>
                    )}
                </div>

            </div>
        );
    }, [
        isPdfVariant,
        isMissingStoriesVariant,
        imageLoading,
        pdfData?.thumbnailUrl,
        missingStoriesThumb,
        cardPage,
        resolvedTitle,
        tooltipstyles,
        handleCardTitleClick,
        shouldShowStoryThumbnail,
        storyData?.thumbnailUrl,
        storyData?.title,
        mergedPage,
        continueText,
        onMergedClick,
    ]);

    const renderFooter = useMemo(() => {
        return (
            <div className={marketplaceCss['card-footer']}>
                <DenBox className={marketplaceCss['card-footer-lhs']}>
                    <DenCustomTooltip title={`Word Count : ${resolvedWordCount}`} arrow {...tooltipstyles}>
                        <DenBox className={marketplaceCss['wordcount']}>
                            <DenTypography>
                                <span className={marketplaceCss['wordcount-label']}>WC :</span> {resolvedWordCount}
                            </DenTypography>
                        </DenBox>
                    </DenCustomTooltip>

                    <DenCustomTooltip title={`Images : ${resolvedImageCount}`} arrow {...tooltipstyles}>
                        <DenBox className={marketplaceCss['image']}>
                            <Divider orientation="vertical" sx={{ height: '16px', margin: '0px 2px' }} />
                            <MarketplaceImageIcon width="16px" height="16px" />
                            <DenTypography>{resolvedImageCount}</DenTypography>
                        </DenBox>
                    </DenCustomTooltip>

                    <Divider sx={{ height: '14px', margin: '0px 2px' }} orientation="vertical" />
                    <DenBox className={marketplaceCss['card-footer-rhs']}>
                        <DenCustomTooltip title={`Datasource : ${data?.datasource || '-'}`} arrow {...tooltipstyles}>
                            <DenTypography className={cssClassName['footerMetaText']}>{data?.datasource || '-'}</DenTypography>
                        </DenCustomTooltip>
                        {(isPdfVariant || isMissingStoriesVariant) && (
                            <>
                                <Divider sx={{ height: '14px' }} orientation="vertical" />
                                <DenCustomTooltip title={`Page : ${cardPage}`} arrow {...tooltipstyles}>
                                    <DenTypography className={cssClassName['footerMetaText']}>{`P${cardPage}`}</DenTypography>
                                </DenCustomTooltip>
                            </>
                        )}
                        <Divider sx={{ height: '14px' }} orientation="vertical" />
                        <DenCustomTooltip title={`Center : ${data.agency || '-'}`} arrow {...tooltipstyles}>
                            <DenTypography className={cssClassName['footerMetaText']}>{data.agency || '-'}</DenTypography>
                        </DenCustomTooltip>
                    </DenBox>
                </DenBox>
            </div>
        );
    }, [
        isPdfVariant,
        isMissingStoriesVariant,
        resolvedWordCount,
        tooltipstyles,
        resolvedImageCount,
        data?.datasource,
        cardPage,
        data?.agency,
    ]);

    const HeaderTypeIcon = useMemo(() => {
        if (isMissingStoriesVariant) return EpaperMissingStoriesIcon;
        if (isPdfVariant) return EpaperPdfIcon;
        return EpaperStoriesIcon;
    }, [isMissingStoriesVariant, isPdfVariant]);

    return (
        <div className={cssClassName[variantClassName]}>
            <DenCard
                classes={{ root: clsx(marketplaceCss['card-root'], classes?.root) }}
                className={clsx(
                    marketplaceCss['marketplace-default-card-wrapper'],
                    cssClassName['epaper-card-wrapper'],
                    classes?.root,
                    selected ? marketplaceCss['selected-card'] : ''
                )}
                ref={ref}
                onClick={onCardClick}
            >
                <div className={marketplaceCss['image-with-details-wrapper']}>
                    <div className={clsx(marketplaceCss['card-header'], checkboxProps?.isChecked && marketplaceCss['card-header-with-checkbox'])}>
                        <div className={marketplaceCss['card-header-lhs']}>
                            {showCheckbox && (
                                checkboxProps?.tooltipText ? (
                                    <DenTooltip title={checkboxProps?.tooltipText} arrow PopperProps={checkboxProps?.PopperProps}>
                                        <span onClick={(e) => e.stopPropagation()}>
                                            <DenCheckbox
                                                className={clsx(
                                                    marketplaceCss['card-header-lhs-checkbox'],
                                                    checkboxProps?.isChecked && marketplaceCss['checkbox-visible'],
                                                    showAllCheckboxes && marketplaceCss['show-all-checkboxes']
                                                )}
                                                checked={checkboxProps?.isChecked}
                                                onChange={handleCheckboxChange}
                                            />
                                        </span>
                                    </DenTooltip>
                                ) : (
                                    <span onClick={(e) => e.stopPropagation()}>
                                        <DenCheckbox
                                            className={clsx(
                                                marketplaceCss['card-header-lhs-checkbox'],
                                                checkboxProps?.isChecked && marketplaceCss['checkbox-visible'],
                                                showAllCheckboxes && marketplaceCss['show-all-checkboxes']
                                            )}
                                            checked={checkboxProps?.isChecked}
                                            onChange={handleCheckboxChange}
                                        />
                                    </span>
                                )
                            )}
                            <DenBox className={cssClassName['header-info']}>
                                <DenCustomTooltip
                                    title={resolvedHeaderTooltipContent}
                                    arrow
                                    placement='top'
                                >
                                    <DenBox className={marketplaceCss['card-header-date']}>{headerTime}</DenBox>
                                </DenCustomTooltip>
                                <DenTooltip title={typeLabel} PopperProps={{
                                    sx: {
                                        '& .cds-MuiTooltip-tooltip': {
                                            font: "normal normal normal 12px/20px 'Source Sans Pro' !important",
                                            padding: "1px 4px 1px 4px !important",
                                            backgroundColor: "#4D4D4D !important",
                                        }
                                    }
                                }}>
                                    <DenSvgIcon sx={{ marginLeft: '6px', marginTop: '4px' }} className='marketplace-card-header-type-icon'>
                                        <HeaderTypeIcon width="20px" height="20px" />
                                    </DenSvgIcon>
                                </DenTooltip>
                            </DenBox>
                        </div>

                        {hasCardMenuOptions && (
                            <div className={marketplaceCss['card-header-rhs']}>
                                <DenBox className={marketplaceCss['card-header-menu']}>
                                    <DenIconButton
                                        aria-label="more"
                                        onClick={(e) => handleContextClick(e, 1)}
                                        className={clsx(marketplaceCss['more-icon-base'], Boolean(anchorEl?.[1]) && marketplaceCss['menu-open'])}
                                        disableRipple
                                    >
                                        <MoreVertIcon sx={{ fontSize: '24px', color: 'inherit' }} />
                                    </DenIconButton>

                                    <DenMenu
                                        id="epaper-card-menu"
                                        anchorEl={anchorEl?.[1]}
                                        open={Boolean(anchorEl?.[1])}
                                        onClose={handleDenMenuOnClose}
                                    >
                                        {cardMenuOptions?.map((option) => (
                                            <DenTooltip
                                                key={option?.label}
                                                title={option?.disabled ? option?.disabledMsg : ''}
                                                disableHoverListener={!option?.disabled}
                                                PopperProps={{
                                                    sx: {
                                                        '& .cds-MuiTooltip-tooltip': {
                                                            font: "normal normal normal 12px/20px 'Source Sans Pro' !important",
                                                            padding: '1px 4px 1px 4px !important',
                                                            backgroundColor: '#4D4D4D !important',
                                                        },
                                                    },
                                                }}
                                                arrow
                                            >
                                                <span>
                                                    <DenMenuItem
                                                        onClick={(e) => handleClose(e, 1, option?.onClickFnc)}
                                                        classes={{ root: classes?.menuOption }}
                                                        disabled={option?.disabled}
                                                    >
                                                        <DenTypography variant="inherit">{option.label}</DenTypography>
                                                    </DenMenuItem>
                                                </span>
                                            </DenTooltip>
                                        ))}
                                    </DenMenu>
                                </DenBox>
                            </div>
                        )}
                    </div>

                    {renderBody}
                    {renderFooter}
                </div>
            </DenCard>
        </div>
    );
});

EpaperContentCard.displayName = 'EpaperContentCard';

export default EpaperContentCard;
