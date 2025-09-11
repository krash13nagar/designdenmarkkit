import React from 'react';

export interface QuizSurveyCardContentProps {
    cssClassName: any;
    title: string;
    description?: string;
    thumbnailUrl?: string;
    className?: string;
    tooltipstyles?: any;
    onTitleClick?: React.MouseEventHandler<HTMLElement>;
}
