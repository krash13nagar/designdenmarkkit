import React from 'react';
import cssClassName from './quizsurveyheader.module.scss';
import {
    DenBox,
    DenCheckbox,
    DenIconButton,
    DenMenu,
    DenMenuItem,
    DenTypography,
    DenTooltip,
} from '../../../common';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import clsx from 'clsx';
import { QuizSurveyCardHeaderProps } from './quizsurveyheader.types';
import DenCustomTooltip from '../../../common/tooltip/customtooltip.component';

const QuizSurveyCardHeader: React.FC<QuizSurveyCardHeaderProps> = ({
    ischeckboxRequired,
    cssClassName: parentCssClassName,
    checkboxProps,
    headerDate,
    headerTooltipContent,
    showAllCheckboxes,
    anchorEl,
    cardMenuOptions,
    classes,
    className,
    updateDate,
    insertDate,
    labels,
    onContextClick,
    onDenMenuClose,
    onClose
}) => (
    <div className={clsx(cssClassName['card-header'], ischeckboxRequired && checkboxProps?.isChecked && cssClassName['card-header-with-checkbox'], className)}>
        <div className={cssClassName['card-header-lhs']}>
            {ischeckboxRequired && checkboxProps && (
                <DenTooltip title={checkboxProps.tooltipText || ''} arrow PopperProps={checkboxProps.PopperProps}>
                    <span>
                        <DenCheckbox
                            className={clsx(
                                cssClassName['card-header-lhs-checkbox'],
                                checkboxProps.isChecked && cssClassName['checkbox-visible'],
                                showAllCheckboxes && cssClassName['show-all-checkboxes']
                            )}
                            checked={checkboxProps.isChecked}
                            onChange={checkboxProps.onCheckboxClick}
                        />
                    </span>
                </DenTooltip>
            )}

            <DenCustomTooltip
                title={
                    headerTooltipContent || (
                        <React.Fragment>
                            <DenBox sx={{ padding: '4px' }}>
                                <DenTypography variant="body2" color="textPrimary">
                                    <span style={{ font: 'normal normal 400 13px/18px "Source Sans 3"', color: '#818181' }}>
                                        {labels?.publishedAtLabel || 'Published at:'}
                                    </span>{' '}
                                    <span style={{ font: 'normal normal 400 13px/18px "Source Sans 3"', color: '#4D4D4D' }}>
                                        {headerDate}
                                    </span>
                                </DenTypography>
                                {updateDate && (
                                    <DenTypography variant="body2" color="textPrimary" sx={{ marginTop: '6px' }}>
                                        <span style={{ font: 'normal normal 400 13px/18px "Source Sans 3"', color: '#818181' }}>
                                            {labels?.ingestedAtLabel || 'Ingested at:'}
                                        </span>{' '}
                                        <span style={{ font: 'normal normal 400 13px/18px "Source Sans 3"', color: '#4D4D4D' }}>
                                            {updateDate}
                                        </span>
                                    </DenTypography>
                                )}
                            </DenBox>
                        </React.Fragment>
                    )
                }
                arrow
                placement='top'
            >
                <DenBox className={cssClassName['card-header-date']}>{headerDate}</DenBox>
            </DenCustomTooltip>
        </div>
        <div className={cssClassName['card-header-rhs']}>
            <DenBox className={cssClassName['card-header-menu']}>
                <DenIconButton
                    aria-label="more"
                    id={''}
                    aria-haspopup="true"
                    onClick={(e) => onContextClick(e, 1)}
                    className={clsx(cssClassName['more-icon-base'], Boolean(anchorEl?.[1]) && cssClassName['menu-open'])}
                    disableRipple
                >
                    <MoreVertIcon sx={{ fontSize: '24px', color: 'inherit' }} />
                </DenIconButton>
                <DenMenu
                    id="long-menu"
                    anchorEl={anchorEl?.[1]}
                    open={Boolean(anchorEl?.[1])}
                    onClose={onDenMenuClose}
                >
                    {cardMenuOptions?.map((option) => (
                        <DenMenuItem
                            key={option?.label}
                            onClick={(e) => onClose(e, 1, option?.onClickFnc)}
                            classes={{
                                root: classes?.menuOption,
                            }}
                        >
                            <DenTypography variant="inherit">
                                {option.label}
                            </DenTypography>
                        </DenMenuItem>
                    ))}
                </DenMenu>
            </DenBox>
        </div>
    </div>
);

export default QuizSurveyCardHeader;
