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

// ===== MODULAR COMPONENTS =====

// Header Component
interface PollCardHeaderProps {
    ischeckboxRequired: boolean;
    cssClassName: any;
    checkboxProps?: any;
    headerDate: string;
    headerTooltipContent?: React.ReactNode;
    showAllCheckboxes: boolean;
    anchorEl: AnchorGeneric;
    cardMenuOptions?: any[];
    classes?: any;
    className?: string;
    onContextClick: (event: React.SyntheticEvent<HTMLElement>, index: number) => void;
    onDenMenuClose: (e: React.MouseEvent<HTMLButtonElement>) => void;
    onClose: (event: React.SyntheticEvent<HTMLElement> | undefined, index: number, cb?: Function | undefined) => void;
}

const PollCardHeader: React.FC<PollCardHeaderProps> = ({
    ischeckboxRequired,
    cssClassName,
    checkboxProps,
    headerDate,
    headerTooltipContent,
    showAllCheckboxes,
    anchorEl,
    cardMenuOptions,
    classes,
    className,
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

// Title/Content Component
interface PollCardContentProps {
    cssClassName: any;
    title: string;
    className?: string;
}

const PollCardContent: React.FC<PollCardContentProps> = ({ cssClassName, title, className }) => (
    <div className={clsx(cssClassName['card-details-section'], className)}>
        <div className={cssClassName['card-image-wrapper']}>
            <DenBox>
                {title && <DenCustomTooltip arrow title={title} textColor='#2B2B2B' maxWidth="230px" placement='bottom-start' >
                    <DenBox title={title} className={cssClassName['card-title']}>
                        {title}
                    </DenBox>
                </DenCustomTooltip>}
            </DenBox>
        </div>
    </div>
);

// Options Component
interface PollCardOptionsProps {
    cssClassName: any;
    sortedOptions: PollOption[];
    getOptionText: (option: PollOption, index: number) => string;
    className?: string;
}

const PollCardOptions: React.FC<PollCardOptionsProps> = ({ cssClassName, sortedOptions, getOptionText, className }) => (
    <div className={clsx(cssClassName['poll-options-section'], className)}>
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
);

// Circle Icon Component
interface PollCardCircleIconProps {
    cssClassName: any;
    hostid: any;
    className?: string;
}

const PollCardCircleIcon: React.FC<PollCardCircleIconProps> = ({ cssClassName, hostid, className }) => (
    <div className={clsx(cssClassName['circle-icon-container'], className)}>
        <div className={cssClassName['circle-icon']}>
            <DenTypography className={cssClassName['circle-icon-text']}>
                {hostid}
            </DenTypography>
        </div>
    </div>
);

// Footer Component
interface PollCardFooterProps {
    cssClassName: any;
    voteCount: number;
    dataSource?: any;
    agency: string;
    className?: string;
}

const PollCardFooter: React.FC<PollCardFooterProps> = ({ cssClassName, voteCount, dataSource, agency, className }) => (
    <div className={clsx(cssClassName['card-footer'], className)}>
        <DenBox className={cssClassName['card-footer-lhs']}>
            <DenTypography className={cssClassName['vote-count']}>
                <label>Votes:</label> {voteCount || 0}
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
);

// ===== END MODULAR COMPONENTS =====

export const PollMCQCard = React.forwardRef((props: PollMCQCardConfig, ref: React.MutableRefObject<any>) => {
    const {
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
        agency = '',
        dataSource,
        ischeckboxRequired = false,
        className,
        headerClassName,
        contentClassName,
        optionsClassName,
        circleIconClassName,
        footerClassName
    } = props;

    const [anchorEl, setAnchorEl] = React.useState<AnchorGeneric>({});

    const headerDate = useMemo(() => {
        return data.publish_s_date && data.publish_s_date > 0 ? formatTimestampWithMoment(data.publish_s_date) : '';
    }, [data.publish_s_date]);

    const getOptionText = useCallback((option: PollOption) => {
        return option.optionText || `Option ${option.optionNo}`;
    }, []);

    const sortedOptions = useMemo(() => {
        return [...data.pollOptions].sort((a: PollOption, b: PollOption) => a.optionNo - b.optionNo);
    }, [data.pollOptions]);

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
                <div className={cssClassName['image-with-details-wrapper']}>
                    {/* Modular Header Component */}
                    <PollCardHeader
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
                        onContextClick={handleContextClick}
                        onDenMenuClose={handleDenMenuOnClose}
                        onClose={handleClose}
                    />

                    {/* Modular Content Component */}
                    <PollCardContent
                        cssClassName={cssClassName}
                        title={data.title}
                        className={contentClassName}
                    />

                    {/* Modular Options Component */}
                    <PollCardOptions
                        cssClassName={cssClassName}
                        sortedOptions={sortedOptions}
                        getOptionText={getOptionText}
                        className={optionsClassName}
                    />

                    {/* Modular Circle Icon Component */}
                    <PollCardCircleIcon
                        cssClassName={cssClassName}
                        hostid={data.hostid}
                        className={circleIconClassName}
                    />

                    {/* Modular Footer Component */}
                    <PollCardFooter
                        cssClassName={cssClassName}
                        voteCount={data.voteCount}
                        dataSource={dataSource}
                        agency={agency}
                        className={footerClassName}
                    />
                </div>
            </DenCard>
        </div>
    );
});

export default PollMCQCard;
