import React, { useCallback, useMemo } from 'react';
import cssClassName from './pollmcqcard.module.scss';
import {
    DenBox,
    DenCard,
    DenCheckbox,
    DenIconButton,
    DenMenu,
    DenMenuItem,
    DenTypography,
    DenTooltip,
} from '../../common';
import { formatTimestampWithMoment } from '../../../utility/utils';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import clsx from 'clsx';
import { AnchorGeneric, PollMCQCardConfig, PollOption } from './pollmcqcard.types';
import DenCustomTooltip from '../../common/tooltip/customtooltip.component';

export const PollMCQCard = React.forwardRef((props: PollMCQCardConfig, ref: React.MutableRefObject<any>) => {
    const {
        id,
        data,
        type = 'poll',
        cardMenuOptions,
        onCardClick = () => { },
        selected,
        classes,
        checkboxProps,
        headerTooltipContent,
        view = 'grid',
        showAllCheckboxes = false,
        onOptionClick,
        onVoteClick,
        showResults = false,
        userVote,
        agency = '',
        dataSource
    } = props;

    const [anchorEl, setAnchorEl] = React.useState<AnchorGeneric>({});


    const headerDate = useMemo(() => {
        return data.publish_s_date && data.publish_s_date > 0 ? formatTimestampWithMoment(data.publish_s_date) : '';
    }, [data.publish_s_date]);

    const variantClassName = useMemo(() => {
        if (view === 'single') return 'singleViewVariant';
        return '';
    }, [view]);

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



    const getOptionText = useCallback((option: PollOption, index: number) => {
        return option.optionText || `Option ${option.optionNo}`;
    }, []);

    const sortedOptions = useMemo(() => {
        return [...data.pollOptions].sort((a: PollOption, b: PollOption) => a.optionNo - b.optionNo);
    }, [data.pollOptions]);



    return (
        <div className={cssClassName[variantClassName]}>
            <DenCard
                classes={{ root: clsx(cssClassName['card-root'], classes?.root) }}
                className={clsx(
                    cssClassName['default-card-wrapper'],
                    classes?.root,
                    selected ? cssClassName['selected-card'] : ''
                )}
                ref={ref}
                onClick={onCardClick}
            >
                <div className={cssClassName['image-with-details-wrapper']}>
                    <div className={clsx(cssClassName['card-header'], checkboxProps?.isChecked && cssClassName['card-header-with-checkbox'])}>
                        <div className={cssClassName['card-header-lhs']}>
                            <DenTooltip title={checkboxProps?.tooltipText || ''} arrow PopperProps={checkboxProps?.PopperProps}>
                                <span>
                                    <DenCheckbox
                                        className={clsx(
                                            cssClassName['card-header-lhs-checkbox'],
                                            checkboxProps?.isChecked && cssClassName['checkbox-visible'],
                                            showAllCheckboxes && cssClassName['show-all-checkboxes']
                                        )}
                                        checked={checkboxProps?.isChecked}
                                        onChange={checkboxProps?.onCheckboxClick}
                                    />
                                </span>
                            </DenTooltip>
                            <DenCustomTooltip
                                title={headerTooltipContent}
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
                                    onClick={(e) => handleContextClick(e, 1)}
                                    className={clsx(cssClassName['more-icon-base'], Boolean(anchorEl?.[1]) && cssClassName['menu-open'])}
                                    disableRipple
                                >
                                    <MoreVertIcon sx={{ fontSize: '24px', color: 'inherit' }} />
                                </DenIconButton>
                                <DenMenu
                                    id="long-menu"
                                    anchorEl={anchorEl?.[1]}
                                    open={Boolean(anchorEl?.[1])}
                                    onClose={handleDenMenuOnClose}
                                >
                                    {cardMenuOptions?.map((option) => (
                                        <DenMenuItem
                                            key={option?.label}
                                            onClick={(e) => handleClose(e, 1, option?.onClickFnc)}
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
                    <div className={cssClassName['card-details-section']}>
                        <div className={cssClassName['card-image-wrapper']}>
                            <DenBox>
                                {data.title && <DenCustomTooltip arrow title={data.title} textColor='#2B2B2B' maxWidth="230px" placement='bottom-start' >
                                    <DenBox title={data.title} className={cssClassName['card-title']}>
                                        {data.title}
                                    </DenBox>
                                </DenCustomTooltip>}
                            </DenBox>
                        </div>
                    </div>

                    {/* Poll Options Section */}
                    <div className={cssClassName['poll-options-section']}>
                        {sortedOptions.slice(0, 4).map((option, index) => (
                            <div
                                key={option.optionNo}
                                className={cssClassName['poll-option-item']}
                            >
                                <div className={cssClassName['poll-option-content']}>
                                    <div className={cssClassName['poll-option-text']}>
                                        <span className={cssClassName['poll-option-number']}>{option.optionNo}.</span>
                                        <DenTypography className={cssClassName['poll-option-text-content']}>
                                            {getOptionText(option, index)}
                                        </DenTypography>
                                    </div>
                                    <div
                                        className={cssClassName['poll-option-percentage']}
                                        data-percentage={
                                            index === 0 ? 'first' :
                                                index === 1 ? 'second' : 'other'
                                        }
                                    >
                                        {option.percentage.toFixed(0)}%
                                    </div>
                                </div>
                            </div>
                        ))}
                        {sortedOptions.length > 4 && (
                            <div className={cssClassName['poll-option-more']}>
                                <DenTypography className={cssClassName['poll-option-more-text']}>
                                    more...
                                </DenTypography>
                            </div>
                        )}
                    </div>

                    {/* Circle Icon */}
                    <div className={cssClassName['circle-icon-container']}>
                        <div className={cssClassName['circle-icon']}>
                            <DenTypography className={cssClassName['circle-icon-text']}>
                                ET
                            </DenTypography>
                        </div>
                    </div>

                    <div className={cssClassName['card-footer']}>
                        <DenBox className={cssClassName['card-footer-lhs']}>
                            <DenTypography className={cssClassName['vote-count']}>
                                Votes: {data.voteCount || 0}
                            </DenTypography>
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
                </div>
            </DenCard>
        </div>
    );
});

export default PollMCQCard;
