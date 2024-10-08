import React from 'react'
import Skeleton from '@mui/material/Skeleton';
export const SkeletonWrap = () => {
    return (
        <div className="skeletonItem">
            <Skeleton animation="wave" height={10} width="90%" style={{ marginBottom: 6 }} />
            <Skeleton animation="wave" height={10} width="90%" style={{ marginBottom: 6 }} />
            <Skeleton animation="wave" height={10} width="90%" style={{ marginBottom: 6 }} />
            <Skeleton animation="wave" height={10} width="80%" />
        </div>
    )
}