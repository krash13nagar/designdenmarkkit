import { SkeletonProps, SxProps } from '@mui/material';

export interface CardSkeletonTypes {
    width?: string | number,
    height?: string | number,
    singleColumn?: boolean,
    sx?: SxProps,
    items?: number,
    rowSpacing?: string,
    columnSpacing?: string,
    variant?: SkeletonProps['variant'],
    animation?: SkeletonProps['animation']
}