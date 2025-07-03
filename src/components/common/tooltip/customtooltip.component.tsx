import React from 'react';
import { styled, Tooltip, tooltipClasses, TooltipProps } from '@mui/material';

interface DenCustomTooltipProps extends TooltipProps {
    backgroundColor?: string;
    textColor?: string;
    borderColor?: string;
    maxWidth?: number | string;
    fontSize?: number;
    font?: string;
}

export const DenCustomTooltip = styled(({
    className,
    backgroundColor = "#FFFFFF",
    textColor,
    borderColor,
    maxWidth = 220,
    fontSize = 12,
    font = 'normal normal 400 13px/18px "Source Sans 3"',
    ...props
}: DenCustomTooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} arrow />
))(({ theme, backgroundColor = "#FFFFFF", textColor, borderColor, maxWidth = 220, fontSize = 12, font = 'normal normal 400 13px/18px "Source Sans 3"' }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: backgroundColor,
        color: textColor || theme.palette.text.primary,
        maxWidth: maxWidth,
        fontSize: theme.typography.pxToRem(fontSize),
        border: `1px solid ${borderColor || theme.palette.divider}`,
        font: font,
    },
    [`& .${tooltipClasses.arrow}`]: {
        color: backgroundColor,
        '&::before': {
            border: `1px solid ${borderColor || theme.palette.divider}`,
            backgroundColor: backgroundColor,
            boxSizing: 'border-box'
        }
    },
}));

export default DenCustomTooltip; 