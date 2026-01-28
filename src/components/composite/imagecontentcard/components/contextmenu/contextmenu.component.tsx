import React from 'react';
import cssClassName from './contextmenu.module.scss';
import {
    DenBox,
    DenIconButton,
    DenMenu,
    DenMenuItem,
    DenTooltip,
    DenTypography
} from '../../../../common';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import clsx from 'clsx';
import { ImageContentCardContextMenuProps } from './contextmenu.types';

const ImageContentCardContextMenu: React.FC<ImageContentCardContextMenuProps> = ({
    id,
    anchorEl,
    menuOptions = [],
    classes,
    onContextClick,
    onDenMenuClose,
    onClose,
    cssClassName: parentCssClassName,
    className
}) => {
    return (
        <DenBox className={clsx(parentCssClassName['card-header-menu'], className)}>
            <DenIconButton
                aria-label="more"
                id={id || ''}
                aria-haspopup="true"
                onClick={(e) => onContextClick(e, 1)}
                className={clsx(
                    parentCssClassName['more-icon-base'],
                    Boolean(anchorEl?.[1]) && parentCssClassName['menu-open']
                )}
                disableRipple
            >
                <MoreVertIcon sx={{ fontSize: '24px', color: 'inherit' }} />
            </DenIconButton>
            <DenMenu
                id="long-menu"
                anchorEl={anchorEl?.[1] as HTMLElement}
                open={Boolean(anchorEl?.[1])}
                onClose={onDenMenuClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                {menuOptions?.map((option) => (
                    <DenTooltip
                        key={option?.label}
                        title={option?.disabled ? option?.disabledMsg : ''}
                        disableHoverListener={!option?.disabled}
                        PopperProps={{
                            sx: {
                                '& .cds-MuiTooltip-tooltip': {
                                    font: "normal normal normal 12px/20px 'Source Sans Pro' !important",
                                    padding: "1px 4px 1px 4px !important",
                                    backgroundColor: "#4D4D4D !important",
                                }
                            }
                        }}
                        arrow
                    >
                        <span>
                            <DenMenuItem
                                onClick={(e) => onClose(e, 1, option?.onClick)}
                                classes={{
                                    root: clsx(
                                        parentCssClassName['menu-item'],
                                        classes?.menuOption
                                    ),
                                }}
                                disabled={option?.disabled}
                            >
                                <DenTypography variant="inherit">
                                    {option.label}
                                </DenTypography>
                            </DenMenuItem>
                        </span>
                    </DenTooltip>
                ))}
            </DenMenu>
        </DenBox>
    );
};

export default ImageContentCardContextMenu;
