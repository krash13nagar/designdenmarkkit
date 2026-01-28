import React from 'react';
import { DenBox, DenTypography } from '../../../../common';
import clsx from 'clsx';
import { ImageContentCardFooterProps } from './footer.types';

const ImageContentCardFooter: React.FC<ImageContentCardFooterProps> = ({
    dimensions = '1600 X 900',
    footerRightText,
    cssClassName: parentCssClassName,
    className
}) => {
    return (
        <div className={clsx(parentCssClassName['card-footer'], className)}>
            <DenBox className={parentCssClassName['card-footer-lhs']}>
                {dimensions && (
                    <DenTypography className={parentCssClassName['card-footer-dimensions']}>
                        {dimensions}
                    </DenTypography>
                )}
            </DenBox>
            {footerRightText && (
                <DenBox className={parentCssClassName['card-footer-rhs']}>
                    <DenTypography className={parentCssClassName['card-footer-right-text']}>
                        {footerRightText}
                    </DenTypography>
                </DenBox>
            )}
        </div>
    );
};

export default ImageContentCardFooter;
