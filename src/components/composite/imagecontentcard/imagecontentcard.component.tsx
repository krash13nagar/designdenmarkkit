import React, { useMemo, useState } from 'react';
import cssClassName from './imagecontentcard.module.scss';
import {
    DenBox,
    DenCard,
    DenTypography,
    ImageWithFallback,
    DenTooltip
} from '../../common';
import { formatDateWithMoment } from '../../../utility/utils';
import moment from 'moment';
import clsx from 'clsx';
import {
    ImageContentCardConfig,
    ImageContentCardAnchorGeneric,
} from './imagecontentcard.types';
import ImageContentCardHeader from './components/header/header.component';
import ImageContentCardFooter from './components/footer/footer.component';
import ImageContentCardHoverDetails from './components/hover.component';
import ReportImageCard from './components/reportimage/reportimagecard.component';

export const ImageContentCard = React.forwardRef((props: ImageContentCardConfig, ref: React.MutableRefObject<any>) => {
    const {
        id,
        imageUrl,
        date,
        dateTimestamp,
        publishDateTimestamp, // MarketplaceContentCard pattern
        ingestionDate,
        ingestionDateTimestamp,
        isSelected = false,
        isDisabled = false,
        dimensions = '1600 X 900',
        imageIcon,
        footerRightText,
        overlayText,
        overlayBottomText,
        //overlayTopText,
        imageId,
        onCardClick = () => { },
        onImageClick = () => { },
        menuOptions = [], // Legacy pattern
        cardMenuOptions = [], // MarketplaceContentCard pattern
        classes,
        ImageFallback,
        checkboxProps,
        showAllCheckboxes = false,
        headerTooltipContent,
        hoverConfig,
        isHoverable = true,
        actionButtonsList,
        reportImageProps,
    } = props;


    //console.log('props in imagecontentcard.component.tsx===============>', props);

    const [anchorEl, setAnchorEl] = useState<ImageContentCardAnchorGeneric>({});
    const [toShowReportImageCard, setToShowReportImageCard] = useState(false);
    const [animatedClass, setAnimatedClass] = useState('');

    const reportImageCardCallBack = (from: number) => {
        if (from === 0) {
            setAnimatedClass('flip-in');
            setToShowReportImageCard(true);
        } else {
            setAnimatedClass('flip-out');
            setTimeout(() => {
                setToShowReportImageCard(false);
                setAnimatedClass('');
            }, 500);
        }
    };

    // Use publishDateTimestamp (MarketplaceContentCard pattern) if available, otherwise fall back to dateTimestamp or date
    const headerDate = useMemo(() => {
        // Priority: publishDateTimestamp > dateTimestamp > date
        const timestampToUse = publishDateTimestamp || dateTimestamp;
        if (timestampToUse) {
            // Use formatDateWithMoment like marketplacecontentcard
            try {
                // Ensure it's a string or number
                const dateValue = typeof timestampToUse === 'string' && timestampToUse.trim() !== ''
                    ? timestampToUse
                    : (typeof timestampToUse === 'number' ? timestampToUse : null);

                if (!dateValue) return '';

                return formatDateWithMoment(dateValue as string);
            } catch (error) {
                console.warn('Error formatting date:', error, timestampToUse);
                // If formatDateWithMoment fails, try moment directly
                try {
                    if (typeof timestampToUse === 'number') {
                        return moment(timestampToUse).format('HH:mm, D MMMM');
                    }
                    const momentDate = moment(timestampToUse);
                    if (momentDate.isValid()) {
                        return momentDate.format('HH:mm, D MMMM');
                    }
                } catch (e) {
                    console.warn('Error with moment formatting:', e);
                }
                return '';
            }
        }
        if (date) return date;
        return '';
    }, [date, dateTimestamp, publishDateTimestamp]);

    // Normalize menu options: use cardMenuOptions (MarketplaceContentCard pattern) if available, otherwise menuOptions
    const normalizedMenuOptions = useMemo(() => {
        const options = cardMenuOptions && cardMenuOptions.length > 0
            ? cardMenuOptions.map(option => ({
                label: option.label,
                onClick: option.onClickFnc,
                disabled: option.disabled,
                disabledMsg: option.disabledMsg,
            }))
            : menuOptions;

        return options.map(option => {
            const isReportOption = option.label?.toLowerCase().includes('report');

            if (isReportOption) {
                return {
                    ...option,
                    onClick: (e: React.MouseEvent<HTMLElement>) => {
                        e.stopPropagation();
                        reportImageCardCallBack(0);
                        option.onClick?.(e);
                    }
                };
            }
            return option;
        });
    }, [menuOptions, cardMenuOptions]);

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



    return (
        <DenCard
            classes={{ root: clsx(cssClassName['card-root'], classes?.root) }}
            className={clsx(
                cssClassName['new-image-card-wrapper'],
                classes?.root
            )}
            ref={ref}
            onClick={onCardClick}
        >
            <div className={clsx(cssClassName['card-content-wrapper'], classes?.middle)}>
                {/* Header Section */}
                <ImageContentCardHeader
                    headerDate={headerDate}
                    imageIcon={imageIcon}
                    id={id}
                    anchorEl={anchorEl}
                    menuOptions={normalizedMenuOptions}
                    classes={classes}
                    onContextClick={handleContextClick}
                    onDenMenuClose={handleDenMenuOnClose}
                    onClose={handleClose}
                    cssClassName={cssClassName}
                    checkboxProps={checkboxProps}
                    showAllCheckboxes={showAllCheckboxes}
                    headerTooltipContent={headerTooltipContent}
                />

                {/* Middle Section - Image */}
                <div className={clsx(cssClassName['card-middle'], classes?.middle)} onClick={onImageClick}>
                    {imageUrl && (
                        <div className={clsx(cssClassName['card-image-container'], classes?.imageContainer)}>
                            {toShowReportImageCard && reportImageProps && (
                                <ReportImageCard
                                    {...reportImageProps}
                                    reportImageCardCallBack={reportImageCardCallBack}
                                    animatedClass={animatedClass}
                                />
                            )}
                            <ImageWithFallback
                                src={imageUrl}
                                placeholderIcon={ImageFallback}
                                showFallbackBorder={false}
                            />
                            {/* Overlay Text - Bottom */}
                            {(overlayText || overlayBottomText) && (
                                <div className={cssClassName['image-overlay-bottom']}>
                                    <DenTooltip
                                        title={overlayBottomText || overlayText || ''}
                                        arrow
                                        placement="top"
                                    >
                                        <DenTypography className={clsx(cssClassName['overlay-text-bottom'], classes?.overlayBottom)} title={overlayBottomText || overlayText || ''}>
                                            {overlayBottomText || overlayText}
                                        </DenTypography>
                                    </DenTooltip>
                                </div>
                            )}
                            {/* Overlay Text - Top
                            {overlayTopText && (
                                <div className={cssClassName['image-overlay-top']}>
                                    <DenTypography className={cssClassName['overlay-text']}>
                                        {overlayTopText}
                                    </DenTypography>
                                </div>
                            )} */}
                            {/* Image ID - Removed from overlay, can be accessed via props if needed */}
                            {/* Hover Overlay */}
                            {isHoverable && (hoverConfig || actionButtonsList) && (
                                <ImageContentCardHoverDetails
                                    {...hoverConfig}
                                    actionButtonsList={actionButtonsList || hoverConfig?.actionButtonsList}
                                />
                            )}
                        </div>
                    )}
                </div>

                {/* Footer Section */}
                <ImageContentCardFooter
                    dimensions={dimensions}
                    footerRightText={footerRightText}
                    cssClassName={cssClassName}
                />
            </div>
        </DenCard>
    );
});

export default ImageContentCard;
