import * as React from 'react';
import { TableCell } from '@mui/material';
import { TableCellTypes } from './tablecell.types'

/**
 * Table Cell Component.
 */

export const DenTableCell: React.FC<TableCellTypes> = React.forwardRef(
    (props, ref) => <TableCell ref={ref} {...props} />
);


export default DenTableCell;