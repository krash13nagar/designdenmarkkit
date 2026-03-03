import React, { useMemo } from 'react';
import clsx from 'clsx';
import { Divider } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LinkIcon from '@mui/icons-material/Link';
import ImageIcon from '../../../assets/cdsicons/imageicon';
import MarketplaceImageIcon from '../../../assets/cdsicons/marketplaceimageicon';
import marketplaceCss from '../marketplacecontentcard/marketplacecontentcard.module.scss';
import cssClassName from './epapercontentcard.module.scss';
import { DenCustomTooltip } from '../../common';

import {
    DenBox,
    DenCard,
    DenIconButton,
    DenTypography,
    ImageWithFallback,
} from '../../common';
import { EpaperContentCardProps } from './epapercontentcard.types';

const getImageSrc = (data: any): string | undefined => {
    return (
        data?.fileLocation ||
        data?.imageUrl ||
        data?.imageURL ||
        data?.thumbnailUrl ||
        data?.thumbnailURL ||
        data?.url
    );
};

const getWordCount = (data: any): string => {
    const wc = data?.wordCount ?? data?.wc ?? data?.word_count;
    if (wc === 0) return '0';
    return wc ? String(wc) : '-';
};

const getCentre = (data: any): string => {
    return String(
        data?.centre ??
        data?.center ??
        data?.publication ??
        data?.edition ??
        data?.centreName ??
        data?.dataSource ??
        data?.source ??
        ''
    ).trim();
};

const getPage = (data: any): string => {
    const page = data?.page ?? data?.pageNo ?? data?.pageNumber ?? data?.pageno;
    return page ? String(page) : '';
};

const getAgency = (data: any): string => {
    return String(data?.agency ?? data?.agencyName ?? data?.source ?? '').trim();
};

const getImageCount = (data: any): string => {
    const ic = data?.imagesCount ?? data?.imageCount ?? data?.images_count;
    if (ic === 0) return '0';
    return ic ? String(ic) : '-';
}

const getSubtitle = (data: any): string => {
    return String(data?.subtitle ?? data?.story ?? data?.summary ?? data?.description ?? '').trim();
};



export const EpaperContentCard = React.forwardRef(
    (props: EpaperContentCardProps, ref: React.MutableRefObject<any>) => {
        const {
            type,
            pdfVariant = 'normal',
            data,
            showMergedLink = true,
            onMergedClick,
            renderIcon,
        } = props;

        const imageSrc = getImageSrc(data);
        const page = getPage(data);
        const agency = getAgency(data);
        const wordCount = getWordCount(data);
        const imageCount = getImageCount(data)
        const centre = getCentre(data);
        const subtitle = getSubtitle(data);

        const headerLabel =
            type === 'pdf'
                ? `Page${page ? ` ${page}` : ''}`
                : String(data?.time ?? data?.timestamp ?? data?.headerText ?? '');

        const headerIcon = renderIcon?.({ type, pdfVariant });

        const mergedPage = data?.mergedStoryInfo?.page;
        const shouldShowMergedLink =
            type === 'story' && showMergedLink && Boolean(mergedPage);

        const tooltipstyles = useMemo(() => {
            return {
                font: 'normal normal 400 13px/18px "Source Sans 3"',
                textColor: '#4D4D4D',
            }
        }, [])

        return (
            <DenCard
                classes={{ root: marketplaceCss['card-root'] }}
                className={clsx(
                    marketplaceCss['marketplace-default-card-wrapper'],
                    cssClassName['epaper-card-wrapper']
                )}
                ref={ref}
            >
                <div className={marketplaceCss['image-with-details-wrapper']}>
                    <div className={marketplaceCss['card-header']}>
                        <div className={marketplaceCss['card-header-lhs']}>
                            <DenBox sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                {!!headerLabel && (
                                    <DenTypography className={marketplaceCss['card-header-date']}>
                                        {headerLabel}
                                    </DenTypography>
                                )}
                                {headerIcon}
                            </DenBox>
                        </div>
                        <div className={marketplaceCss['card-header-rhs']}>
                            <DenBox className={marketplaceCss['card-header-menu']}>
                                <DenIconButton
                                    aria-label="more"
                                    disabled
                                    className={marketplaceCss['more-icon-base']}
                                >
                                    <MoreVertIcon />
                                </DenIconButton>
                            </DenBox>
                        </div>
                    </div>

                    {type === 'pdf' ? (
                        <div
                            className={clsx(
                                marketplaceCss['card-details-section'],
                                cssClassName['pdfBody']
                            )}
                        >
                            <ImageWithFallback
                                src={imageSrc ?? ''}
                                className={cssClassName['pdfImage']}
                                alt={headerLabel || 'PDF'}
                                showFallbackBorder={false}
                                placeholderIcon={<ImageIcon />}
                            />
                        </div>
                    ) : (
                        <div className={marketplaceCss['card-details-section']}>
                            <div className={marketplaceCss['card-image-wrapper']}>
                                <DenTypography className={marketplaceCss['card-title']}>
                                    {String(data?.title ?? '')}
                                </DenTypography>
                                {!!imageSrc && (
                                    <DenBox className={marketplaceCss['card-image']}>
                                        <ImageWithFallback
                                            src={imageSrc ?? ''}
                                            width={'38px'}
                                            height={'38px'}
                                            alt={String(data?.title ?? 'Story image')}
                                            showFallbackBorder={false}
                                            placeholderIcon={<ImageIcon />}
                                        />
                                    </DenBox>
                                )}
                            </div>

                            {!!subtitle && (
                                <DenTypography
                                    className={marketplaceCss['card-subtitle']}
                                    sx={{ fontStyle: 'italic' }}
                                >
                                    {subtitle}
                                </DenTypography>
                            )}

                            {shouldShowMergedLink && (
                                <DenBox
                                    className={cssClassName['continueRow']}
                                    sx={{ display: 'flex', justifyContent: 'flex-end' }}
                                >
                                    <DenTypography
                                        variant="body2"
                                        color="primary"
                                        sx={{
                                            cursor: 'pointer',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '4px',
                                            '&:hover': { textDecoration: 'underline' },
                                        }}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            onMergedClick?.(String(mergedPage));
                                        }}
                                    >
                                        <LinkIcon fontSize="inherit" />
                                        {`Continued on P${mergedPage}`}
                                    </DenTypography>
                                </DenBox>
                            )}
                        </div>
                    )}

                    <div className={marketplaceCss['card-footer']}>
                        <DenBox className={clsx(marketplaceCss['card-footer-lhs'], cssClassName['footer-lhs-no-gap'])}>
                            <DenBox className={clsx(marketplaceCss['wordcount'], cssClassName['wordcount-no-pad'])}>
                                <DenTypography>
                                    <span className={marketplaceCss['wordcount-label']}>
                                        WC :
                                    </span>{' '}
                                    {wordCount}
                                </DenTypography>
                            </DenBox>

                            <DenCustomTooltip
                                title={imageCount && imageCount !== '-' ? `Images : ${imageCount}` : ''}
                                arrow
                                {...tooltipstyles}
                            >
                                <DenBox className={marketplaceCss['image']}>
                                    <Divider
                                        orientation="vertical"
                                        sx={{ height: '16px', margin: '0px 6px' }}
                                    />
                                    <MarketplaceImageIcon width="16px" height="16px" />
                                    <DenTypography>{imageCount}</DenTypography>
                                </DenBox>
                            </DenCustomTooltip>
                        </DenBox>
                        <DenBox className={clsx(marketplaceCss['card-footer-rhs'], cssClassName['footer-rhs-no-gap'])}>
                            <DenTypography>{centre || '-'}</DenTypography>
                            <Divider sx={{ height: '14px', margin: '0px 6px' }} orientation="vertical" />
                            <DenTypography>{page ? `P${page}` : '-'}</DenTypography>
                            <Divider sx={{ height: '14px', margin: '0px 6px' }} orientation="vertical" />
                            <DenTypography>{agency || '-'}</DenTypography>
                        </DenBox>
                    </div>
                </div>
            </DenCard>
        );
    }
);

EpaperContentCard.displayName = 'EpaperContentCard';

export default EpaperContentCard;
