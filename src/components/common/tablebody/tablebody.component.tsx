import * as React from 'react';
import { TableBody } from '@mui/material';
import { TableBodyTypes } from './tablebody.types'

/**
 * Table Body Component.
 */

export const DenTableBody: React.FC<TableBodyTypes> = React.forwardRef(
    (props, ref) => <TableBody ref={ref} {...props} />
);


export default DenTableBody;