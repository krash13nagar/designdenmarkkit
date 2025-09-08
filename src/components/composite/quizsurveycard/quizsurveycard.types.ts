import { ReactNode } from "react";

export interface QuizSurveyOption {
    msidPollOptions: number;
    optionNo: number;
    isCorrect: boolean;
    anscount: number;
    percentage: number;
    optionText?: string;
}

export interface QuizSurveyCardData {
    msid: number;
    updateDate: string | number;
    insertDate: string | number;
    hostid: number[];
    contenttypeid: number;
    contentsubtypeid: number;
    title: string;
    description?: string;
    thumburl?: string;
    publish_s_date: number;
    publish_e_date: number;
    path: string;
    primeCategoryId: number;
    status: string;
    quesCount: number;
    responseCount: number;
    channelName?: string;
    channelTolltip?: string;
}

export interface QuizSurveyCardLabels {
    questionsLabel?: string;
    responsesLabel?: string;
    publishedAtLabel?: string;
    ingestedAtLabel?: string;
}

export interface QuizSurveyCardConfig {
    id?: string;
    data: QuizSurveyCardData;
    type?: 'quiz' | 'survey';
    classes?: {
        root?: string;
        menuOption?: string;
    };
    cardMenuOptions?: QuizSurveyCardMenuOptionsConfig[];
    onCardClick?: React.MouseEventHandler<HTMLElement>;
    onTitleClick?: React.MouseEventHandler<HTMLElement>;
    selected?: boolean;
    checkboxProps?: QuizSurveyCardCheckboxProps;
    headerTooltipContent?: ReactNode;
    view?: 'grid' | 'single';
    showAllCheckboxes?: boolean;
    ischeckboxRequired?: boolean;
    className?: string;
    headerClassName?: string;
    contentClassName?: string;
    infoClassName?: string;
    circleIconClassName?: string;
    footerClassName?: string;
    agency?: string;
    dataSource?: {
        name: string;
        icon: ReactNode;
        onClick?: React.MouseEventHandler<HTMLElement>;
    };
    labels?: QuizSurveyCardLabels;
}

export interface QuizSurveyCardMenuOptionsConfig {
    label: string;
    onClickFnc: React.MouseEventHandler<HTMLElement>;
}

export interface QuizSurveyCardCheckboxProps {
    isChecked?: boolean;
    onCheckboxClick?: (event: React.ChangeEvent<HTMLInputElement>, checked?: boolean) => void;
    tooltipText?: string;
    PopperProps?: any;
}

export interface QuizSurveyAnchorGeneric {
    [key: string]: HTMLElement;
}
