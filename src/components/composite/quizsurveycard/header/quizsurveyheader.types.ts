import React from 'react';
import { QuizSurveyAnchorGeneric, QuizSurveyCardLabels } from '../quizsurveycard.types';

export interface QuizSurveyCardHeaderProps {
    ischeckboxRequired: boolean;
    cssClassName: any;
    checkboxProps?: any;
    headerDate: string;
    headerTooltipContent?: React.ReactNode;
    showAllCheckboxes: boolean;
    anchorEl: QuizSurveyAnchorGeneric;
    cardMenuOptions?: any[];
    classes?: any;
    className?: string;
    updateDate?: string;
    insertDate?: string;
    labels?: QuizSurveyCardLabels;
    onContextClick: (event: React.SyntheticEvent<HTMLElement>, index: number) => void;
    onDenMenuClose: (e: React.MouseEvent<HTMLButtonElement>) => void;
    onClose: (event: React.SyntheticEvent<HTMLElement> | undefined, index: number, cb?: Function | undefined) => void;
}
