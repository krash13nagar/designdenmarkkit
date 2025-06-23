import React, { useMemo } from 'react';
import cssClassName from './marketplacecontentcard.module.scss';
import { DenBox, DenCard, DenCheckbox, DenChip, DenIconButton, DenMenu, DenMenuItem, DenSvgIcon, DenTypography, ImageWithFallback, StatusDotNew, } from '../../common';
import { formatDateString, formatDateWithMoment } from '../../../utility/utils';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import clsx from 'clsx';
import {
    AnchorGeneric,
    MarketplaceContentCardConfig,
} from './marketplacecontentcard.types';
import ImageIcon from '../../../assets/cdsicons/imageicon';
import MarketplaceImageIcon from '../../../assets/cdsicons/marketplaceimageicon';
import { Chip } from '@mui/material';

export const MarketplaceContentCard = React.forwardRef((props: MarketplaceContentCardConfig, ref: React.MutableRefObject<any>) => {

    const {
        id,
        title,
        subtitle,
        agencyName,
        imageUrl,
        variant = '',
        cardMenuOptions,
        ingestionDateTimestamp,
        ImageFallback,
        onCardClick = () => { },
        status,
        handleOpenInNew,
        selected,
        publishDateTimestamp,
        classes,
        imagesCount,
        videosCount,
        wordCount,
        dataSource,
        tags,
        isChecked,
        onCheckboxClick
    } = props;

    const [anchorEl, setAnchorEl] = React.useState<AnchorGeneric>({});

    const headerDate = useMemo(() => {
        return (
            (publishDateTimestamp ? formatDateWithMoment(publishDateTimestamp) : '')
        );
    }, [publishDateTimestamp]);

    let variantClassName = '';
    const changeVariantClassName = (variantType: string) => {
        if (variantType == 'small') variantClassName = 'smallVariant';
    };
    changeVariantClassName(variant);

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
                    <div className={cssClassName['card-header']}>
                        <div className={cssClassName['card-header-lhs']}>
                            <DenCheckbox className={clsx(cssClassName['card-header-lhs-checkbox'], isChecked && cssClassName['checkbox-visible'])} checked={isChecked} onChange={onCheckboxClick} />
                            <DenBox className={cssClassName['card-header-date']}>{headerDate}</DenBox>
                        </div>
                        <div className={cssClassName['card-header-rhs']}>
                            <DenBox className={cssClassName['card-header-menu']}>
                                <DenIconButton
                                    aria-label="more"
                                    id={''}
                                    aria-haspopup="true"
                                    onClick={(e) => handleContextClick(e, 1)}
                                    className={cssClassName['more-icon-base']}
                                    disableRipple
                                //disabled={action?.disabled}
                                >
                                    <MoreVertIcon sx={{ fontSize: '24px' }} />
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
                                {title && <DenBox title={title} className={cssClassName['card-title']}>
                                    {title}
                                </DenBox>}
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
                    <div className={cssClassName['card-tags-wrapper']}>
                        {
                            tags?.map((tag, index) => (
                                <Chip
                                    className={cssClassName['card-tag']}
                                    size="small"
                                    key={index}
                                    icon={tag.icon}
                                    label={tag.label}
                                    variant="outlined"
                                />
                            ))
                        }
                    </div>

                    <div className={cssClassName['card-footer']}>
                        <DenBox className={cssClassName['card-footer-lhs']}>
                            <DenBox className={cssClassName['image']}>
                                <MarketplaceImageIcon width="14px" height="14px" />
                                <DenTypography>
                                    {imagesCount || '-'}
                                </DenTypography>
                            </DenBox>
                            <DenBox className={cssClassName['video']}>
                                <MarketplaceImageIcon width="14px" height="14px" />
                                <DenTypography>
                                    {videosCount || '-'}
                                </DenTypography>
                            </DenBox>
                            <DenBox className={cssClassName['wordcount']}>
                                <DenTypography>
                                    WC : {wordCount || '-'}
                                </DenTypography>
                            </DenBox>
                        </DenBox>
                        <DenBox className={cssClassName['card-footer-rhs']}>
                            <DenBox className={cssClassName['datasoruce']}>
                                <DenSvgIcon>{dataSource?.icon}</DenSvgIcon>
                                <DenTypography className={cssClassName['datasource-text']}>{dataSource?.name}</DenTypography>
                            </DenBox>
                        </DenBox>
                    </div>
                </div>
            </DenCard>
        </div>
    );
})
export default MarketplaceContentCard; 