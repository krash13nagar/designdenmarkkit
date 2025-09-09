import React from 'react';
import cssClassName from './quizsurveyfooter.module.scss';
import { DenBox, DenTypography } from '../../../common';
import clsx from 'clsx';
import { QuizSurveyCardFooterProps } from './quizsurveyfooter.types';
import DenCustomTooltip from '../../../common/tooltip/customtooltip.component';

const QuizSurveyCardFooter: React.FC<QuizSurveyCardFooterProps> = ({
    questions,
    responses,
    dataSource,
    agency,
    className,
    labels
}) => (
    <div className={clsx(cssClassName['card-footer'], className)}>
        <DenBox className={cssClassName['card-footer-lhs']}>
            <DenBox className={cssClassName['info-stats']}>
                <DenTypography className={cssClassName['info-item']}>
                    <span className={cssClassName['info-label']}>
                        {labels?.questionsLabel || 'Questions:'}
                    </span>
                    <span className={cssClassName['info-value']}>
                        {questions}
                    </span>
                </DenTypography>
                <DenTypography className={cssClassName['info-item']}>
                    <span className={cssClassName['info-label']}>
                        {labels?.responsesLabel || 'Responses:'}
                    </span>
                    <span className={cssClassName['info-value']}>
                        {responses || 0}
                    </span>
                </DenTypography>
            </DenBox>
        </DenBox>
        <DenBox className={cssClassName['card-footer-rhs']}>
            {dataSource && (
                <DenCustomTooltip title={`See on ${dataSource?.name}`} arrow>
                    <DenBox
                        className={cssClassName['datasource']}
                        onClick={(e) => {
                            e.stopPropagation();
                            dataSource?.onClick?.(e);
                        }}
                    >
                        {dataSource?.icon}
                        <DenTypography className={cssClassName['datasource-text']}>
                            {dataSource?.name}
                        </DenTypography>
                    </DenBox>
                </DenCustomTooltip>
            )}
            {agency && (
                <DenTypography className={cssClassName['agency-text']}>
                    {agency}
                </DenTypography>
            )}
        </DenBox>
    </div>
);

export default QuizSurveyCardFooter;
