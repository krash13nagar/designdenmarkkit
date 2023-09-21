import { DialogContentProps, DialogProps, DialogActionsProps, ButtonProps, DialogTitleProps } from '@mui/material';
import { ReactNode } from 'react';

export interface ActionOptions {
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    label: string,
    variant?: ButtonProps['variant'],
    color?: ButtonProps['color'],
    props?: ButtonProps
}
export interface CommonDialogProps {

    classes?: {
        root?: string,
    },
    open: boolean,
    handleClose: React.MouseEventHandler<HTMLDivElement | HTMLButtonElement>,
    title?: string,
    titleVariant?: 'contained' | 'plain',
    content?: string | ReactNode,
    dialogProps?: Omit<DialogProps, 'open'>,
    dialogContentProps?: DialogContentProps,
    dialogActionProps?: DialogActionsProps,
    dialogTitleProps?: DialogTitleProps,
    actionOptionsList?: ActionOptions[],
    renderAtTop?: boolean,
    container?: DialogProps['container']
}