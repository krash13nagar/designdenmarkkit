import React, { useMemo } from 'react';
import cssClassName from './quizsurveycard.module.scss';
import { DenCard } from '../../common';
import { formatTimestampWithMoment } from '../../../utility/utils';
import clsx from 'clsx';
import { QuizSurveyAnchorGeneric, QuizSurveyCardConfig } from './quizsurveycard.types';
import { QuizSurveyCardHeader } from './header';
import { QuizSurveyCardContent } from './content';
import { QuizSurveyCardCircleIcon } from './hostinfo';
import { QuizSurveyCardFooter } from './footer';


// ===== MODULAR COMPONENTS MOVED TO SEPARATE FILES =====

export const QuizSurveyCard = React.forwardRef((props: QuizSurveyCardConfig, ref: React.MutableRefObject<any>) => {
    const {
        data,
        type = 'quiz',
        cardMenuOptions,
        onCardClick = () => { },
        onTitleClick = () => { },
        selected,
        classes,
        checkboxProps,
        headerTooltipContent,
        view = 'grid',
        showAllCheckboxes = false,
        agency = '',
        dataSource,
        ischeckboxRequired = false,
        className,
        headerClassName,
        contentClassName,
        infoClassName,
        circleIconClassName,
        footerClassName,
        labels
    } = props;

    const [anchorEl, setAnchorEl] = React.useState<QuizSurveyAnchorGeneric>({});

    const headerDate = useMemo(() => {
        return data.publish_s_date && data.publish_s_date > 0 ? formatTimestampWithMoment(data.publish_s_date) : '';
    }, [data.publish_s_date]);

    const updateDate = useMemo(() => {
        return data.updateDate && Number(data.updateDate) > 0 ? formatTimestampWithMoment(Number(data.updateDate)) : '';
    }, [data.updateDate]);

    const insertDate = useMemo(() => {
        return data.insertDate && Number(data.insertDate) > 0 ? formatTimestampWithMoment(Number(data.insertDate)) : '';
    }, [data.insertDate]);

    const handleClose = (
        event: React.SyntheticEvent<HTMLElement> | undefined,
        index: number,
        cb?: Function | undefined
    ) => {
        setAnchorEl((prev: any) => ({ ...prev, [index]: null }));
        event?.stopPropagation();
        if (cb) cb(event);
    };

    const handleDenMenuOnClose = (e: React.MouseEvent<HTMLButtonElement>) => {
        handleClose(undefined, 1);
        e.stopPropagation();
    };

    const handleContextClick = (
        event: React.SyntheticEvent<HTMLElement>,
        index: number
    ) => {
        setAnchorEl((prev: any) => ({ ...prev, [index]: event.currentTarget }));
        event.stopPropagation();
    };

    const tooltipstyles = useMemo(() => {
        return {
            font: 'normal normal 400 13px/18px "Source Sans 3"',
            textColor: '#4D4D4D',
        }
    }, []);

    const handleOnTitleClick = (event: React.MouseEvent<HTMLElement>) => {
        if (onTitleClick) onTitleClick(event);
        event.stopPropagation();
    }

    return (
        <div className={view === 'single' ? cssClassName['singleViewVariant'] : ''}>
            <DenCard
                classes={{ root: clsx(cssClassName['card-root'], classes?.root) }}
                className={clsx(
                    cssClassName['default-card-wrapper'],
                    classes?.root,
                    selected ? cssClassName['selected-card'] : '',
                    className
                )}
                ref={ref}
                onClick={onCardClick}
            >
                <div className={cssClassName['quiz-survey-card-details-wrapper']}>
                    {/* Modular Header Component */}
                    <QuizSurveyCardHeader
                        ischeckboxRequired={ischeckboxRequired}
                        cssClassName={cssClassName}
                        checkboxProps={checkboxProps}
                        headerDate={headerDate}
                        headerTooltipContent={headerTooltipContent}
                        showAllCheckboxes={showAllCheckboxes}
                        anchorEl={anchorEl}
                        cardMenuOptions={cardMenuOptions}
                        classes={classes}
                        className={headerClassName}
                        updateDate={updateDate}
                        insertDate={insertDate}
                        labels={labels}
                        onContextClick={handleContextClick}
                        onDenMenuClose={handleDenMenuOnClose}
                        onClose={handleClose}
                    />

                    {/* Modular Content Component */}
                    <QuizSurveyCardContent
                        cssClassName={cssClassName}
                        title={data.title}
                        description={data.description}
                        thumbnailUrl={data.thumburl}
                        className={contentClassName}
                        tooltipstyles={tooltipstyles}
                        onTitleClick={handleOnTitleClick}
                    />

                    {/* Modular Circle Icon Component */}
                    <QuizSurveyCardCircleIcon
                        cssClassName={cssClassName}
                        hostid={data.hostid}
                        channelName={data.channelName}
                        channelTolltip={data.channelTolltip}
                        className={circleIconClassName}
                    />

                    {/* Modular Footer Component */}
                    <QuizSurveyCardFooter
                        cssClassName={cssClassName}
                        responses={data.responseCount}
                        questions={data.quesCount}
                        dataSource={dataSource}
                        agency={agency}
                        className={footerClassName}
                        labels={labels}
                    />
                </div>
            </DenCard>
        </div>
    );
});

export default QuizSurveyCard;
