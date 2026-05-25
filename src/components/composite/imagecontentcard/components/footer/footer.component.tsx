import React from 'react';
import { DenBox, DenTooltip, DenTypography } from '../../../../common';
import clsx from 'clsx';
import { ImageContentCardFooterProps } from './footer.types';
import style from './footer.module.scss';

const ImageContentCardFooter: React.FC<ImageContentCardFooterProps> = ({
    dimensions = '1600 X 900',
    footerRightText,
    isLowResolutionImage = false,
    cssClassName: parentCssClassName,
    className
}) => {
    return (
        <div className={clsx(style['card-footer'], className)}>
            <DenBox className={style['card-footer-lhs']}>
                {dimensions && (
                    <DenTooltip
                        title={isLowResolutionImage ? 'Low resolution image' : ''}
                        disableHoverListener={!isLowResolutionImage}
                        arrow
                        placement="top"
                        PopperProps={{
                            sx: {
                                '& .cds-MuiTooltip-tooltip': {
                                    font: "normal normal normal 12px/20px 'Source Sans 3' !important",
                                    padding: '1px 4px 1px 4px !important',
                                    backgroundColor: '#D5D5D5 !important',
                                    color: '#2B2B2B !important',
                                },
                                '& .cds-MuiTooltip-arrow': {
                                    color: '#D5D5D5 !important',
                                },
                            }
                        }}
                    >
                        <DenTypography
                            className={clsx(style['card-footer-dimensions'], {
                                [style['card-footer-dimensions-low-resolution']]: isLowResolutionImage
                            })}
                        >
                            {dimensions}
                        </DenTypography>
                    </DenTooltip>
                )}
            </DenBox>
            {footerRightText && (
                <DenBox className={style['card-footer-rhs']}>
                    <DenTypography className={style['card-footer-right-text']}>
                        {footerRightText}
                    </DenTypography>
                </DenBox>
            )}
        </div>
    );
};

export default ImageContentCardFooter;
