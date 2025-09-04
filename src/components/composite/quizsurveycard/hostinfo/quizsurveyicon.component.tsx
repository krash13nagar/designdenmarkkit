import React from 'react';
import cssClassName from './quizsurveyicon.module.scss';
import { DenTypography } from '../../../common';
import clsx from 'clsx';
import { QuizSurveyCardCircleIconProps } from './quizsurveyicon.types';
import DenCustomTooltip from '../../../common/tooltip/customtooltip.component';

const QuizSurveyCardCircleIcon: React.FC<QuizSurveyCardCircleIconProps> = ({
    hostid,
    channelName,
    channelTolltip,
    className
}) => (
    <div className={clsx(cssClassName['circle-icon-container'], className)}>
        <div className={cssClassName['circle-icon']}>
            <DenCustomTooltip title={channelTolltip} arrow>
                <DenTypography className={cssClassName['circle-icon-text']}>
                    {channelName ? channelName : hostid}
                </DenTypography>
            </DenCustomTooltip>
        </div>
    </div>
);

export default QuizSurveyCardCircleIcon;
