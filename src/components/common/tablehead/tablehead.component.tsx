import * as React from 'react';
import { TableHead } from '@mui/material';
import { TableHeadTypes } from './tablehead.types'

/**
 * Table Head Component.
 */

export const DenTableHead: React.FC<TableHeadTypes> = React.forwardRef(
    (props, ref) => <TableHead ref={ref} {...props} />
);


export default DenTableHead;