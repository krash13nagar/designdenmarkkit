import React from 'react';
import { DenBox, DenTypography, DenCheckbox, DenTooltip } from '../../../../common';
import DenCustomTooltip from '../../../../common/tooltip/customtooltip.component';
import clsx from 'clsx';
import { ImageContentCardHeaderProps } from './header.types';
import ImageContentCardContextMenu from '../contextmenu/contextmenu.component';

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
            parentCssClassName['card-header'],
            checkboxProps?.isChecked && parentCssClassName['card-header-with-checkbox'],
            className
        )}>
            <div className={parentCssClassName['card-header-lhs']}>
                {<DenTooltip title={checkboxProps?.tooltipText || ''} arrow PopperProps={checkboxProps?.PopperProps}>
                    <span>
                        <DenCheckbox
                            className={clsx(
                                parentCssClassName['card-header-lhs-checkbox'],
                                checkboxProps?.isChecked && parentCssClassName['checkbox-visible'],
                                showAllCheckboxes && parentCssClassName['show-all-checkboxes']
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
                        <DenBox className={parentCssClassName['card-header-date']}>{headerDate}</DenBox>
                    </DenCustomTooltip>
                )}
                {imageIcon && (
                    <DenBox className={parentCssClassName['card-header-icon']}>
                        {imageIcon}
                    </DenBox>
                )}
            </div>
            <div className={parentCssClassName['card-header-rhs']}>
                <ImageContentCardContextMenu
                    id={id}
                    anchorEl={anchorEl}
                    menuOptions={menuOptions}
                    classes={classes}
                    onContextClick={onContextClick}
                    onDenMenuClose={onDenMenuClose}
                    onClose={onClose}
                    cssClassName={parentCssClassName}
                />
            </div>
        </div>
    );
};

export default ImageContentCardHeader;
