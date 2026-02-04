import React from 'react';
import { DenBox, DenTypography, DenCheckbox, DenTooltip } from '../../../../common';
import DenCustomTooltip from '../../../../common/tooltip/customtooltip.component';
import clsx from 'clsx';
import { ImageContentCardHeaderProps } from './header.types';
import ImageContentCardContextMenu from '../contextmenu/contextmenu.component';
import style from './header.module.scss';

const ImageContentCardHeader: React.FC<ImageContentCardHeaderProps> = ({
    headerDate,
    imageIcon,
    id,
    anchorEl,
    menuOptions = [],
    classes,
    onContextClick,
    onDenMenuClose,
    onClose,
    cssClassName: parentCssClassName,
    className,
    checkboxProps,
    showAllCheckboxes = false,
    headerTooltipContent
}) => {
    return (
        <div className={clsx(
            style['card-header'],
            checkboxProps?.isChecked && style['card-header-with-checkbox'],
            className
        )}>
            <div className={style['card-header-lhs']}>
                {<DenTooltip title={checkboxProps?.tooltipText || ''} arrow PopperProps={checkboxProps?.PopperProps}>
                    <span>
                        <DenCheckbox
                            className={clsx(
                                style['card-header-lhs-checkbox'],
                                checkboxProps?.isChecked && style['checkbox-visible'],
                                showAllCheckboxes && style['show-all-checkboxes']
                            )}
                            checked={checkboxProps?.isChecked}
                            onChange={checkboxProps?.onCheckboxClick}
                            disabled={checkboxProps?.disabled}
                        />
                    </span>
                </DenTooltip>}
                {headerDate && (
                    <DenCustomTooltip
                        title={headerTooltipContent}
                        arrow
                        placement='top'
                    >
                        <DenBox className={style['card-header-date']}>{headerDate}</DenBox>
                    </DenCustomTooltip>
                )}
                {imageIcon && (
                    <DenBox className={style['card-header-icon']}>
                        {imageIcon}
                    </DenBox>
                )}
            </div>
            <div className={style['card-header-rhs']}>
                <ImageContentCardContextMenu
                    id={id}
                    anchorEl={anchorEl}
                    menuOptions={menuOptions}
                    classes={classes}
                    onContextClick={onContextClick}
                    onDenMenuClose={onDenMenuClose}
                    onClose={onClose}
                />
            </div>
        </div>
    );
};

export default ImageContentCardHeader;
