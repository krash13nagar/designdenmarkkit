import React from 'react';
import { DenBox, DenTypography } from '../../../../common';
import clsx from 'clsx';
import { ImageContentCardFooterProps } from './footer.types';
import style from './footer.module.scss';

const ImageContentCardFooter: React.FC<ImageContentCardFooterProps> = ({
    dimensions = '1600 X 900',
    footerRightText,
    cssClassName: parentCssClassName,
    className
}) => {
    return (
        <div className={clsx(style['card-footer'], className)}>
            <DenBox className={style['card-footer-lhs']}>
                {dimensions && (
                    <DenTypography className={style['card-footer-dimensions']}>
                        {dimensions}
                    </DenTypography>
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
