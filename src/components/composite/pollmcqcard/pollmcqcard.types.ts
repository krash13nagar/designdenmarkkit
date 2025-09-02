import { ReactNode } from "react";

export interface PollOption {
    msidPollOptions: number;
    optionNo: number;
    isCorrect: boolean;
    anscount: number;
    percentage: number;
    optionText?: string;
}

export interface PollMCQCardData {
    msid: number;
    updateDate: string | number;
    insertDate: string | number;
    hostid: number[];
    channelName?: string;
    channelTolltip?: string;
    contenttypeid: number;
    contentsubtypeid: number;
    title: string;
    publish_s_date: number;
    publish_e_date: number;
    path: string;
    primeCategoryId: number;
    status: string;
    voteCount: number;
    pollOptions: PollOption[];
}

export interface PollMCQCardConfig {
    id?: string;
    data: PollMCQCardData;
    type?: 'poll' | 'mcq';
    classes?: {
        root?: string;
        menuOption?: string;
    };
    cardMenuOptions?: PollMCQCardMenuOptionsConfig[];
    onCardClick?: React.MouseEventHandler<HTMLElement>;
    onTitleClick?: React.MouseEventHandler<HTMLElement>;
    selected?: boolean;
    checkboxProps?: PollMCQCardCheckboxProps;
    headerTooltipContent?: ReactNode;
    view?: 'grid' | 'single';
    showAllCheckboxes?: boolean;
    ischeckboxRequired?: boolean;
    className?: string;
    headerClassName?: string;
    contentClassName?: string;
    optionsClassName?: string;
    circleIconClassName?: string;
    footerClassName?: string;
    onOptionClick?: (option: PollOption, event: React.MouseEvent) => void;
    onVoteClick?: (event: React.MouseEvent) => void;
    showResults?: boolean;
    userVote?: number; // optionNo of user's selected option
    agency?: string;
    dataSource?: {
        name: string;
        icon: ReactNode;
        onClick?: React.MouseEventHandler<HTMLElement>;
    };
}

export interface PollMCQCardMenuOptionsConfig {
    label: string;
    onClickFnc: React.MouseEventHandler<HTMLElement>;
}

export interface PollMCQCardCheckboxProps {
    isChecked?: boolean;
    onCheckboxClick?: (event: React.ChangeEvent<HTMLInputElement>, checked?: boolean) => void;
    tooltipText?: string;
    PopperProps?: any;
}

export interface PollMCQAnchorGeneric {
    [key: string]: HTMLElement;
}
