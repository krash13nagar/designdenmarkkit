import React from 'react';
import cssClassName from './quizsurveycontent.module.scss';
import {
    DenBox,
    DenGrid,
    DenTypography,
    ImageWithFallback,
} from '../../../common';
import clsx from 'clsx';
import { QuizSurveyCardContentProps } from './quizsurveycontent.types';
import DenCustomTooltip from '../../../common/tooltip/customtooltip.component';
import BrokenImgIcon from '../../../../assets/cdsicons/brokenimgicon';

const QuizSurveyCardContent: React.FC<QuizSurveyCardContentProps> = ({
    title,
    description,
    thumbnailUrl,
    className,
    tooltipstyles,
    onTitleClick
}) => (
    <div className={clsx(cssClassName['card-details-section'], className)}>
        <div className={cssClassName['card-content-wrapper']}>
            <div className={cssClassName['card-title-thumbnail-wrapper']}>
                <DenBox>
                    {title && <DenCustomTooltip arrow title={title} {...tooltipstyles} textColor='#2B2B2B' placement='bottom-start' >
                        <DenBox title={title} className={cssClassName['card-title']} onClick={onTitleClick}>
                            {title}
                        </DenBox>
                    </DenCustomTooltip>}
                </DenBox>
                {thumbnailUrl &&
                    <div className={cssClassName['card-image']}>
                        <ImageWithFallback
                            src={thumbnailUrl}
                            placeholderIcon={BrokenImgIcon}
                            showFallbackBorder={false}
                        />
                    </div>
                }
            </div>

            <div className={cssClassName['card-description-wrapper']}>
                {description && (
                    <DenTypography className={cssClassName['card-description']}>
                        {description}
                    </DenTypography>
                )}</div>
        </div>
    </div >
);

export default QuizSurveyCardContent;
