import * as React from 'react';
import { TableRow } from '@mui/material';
import { TableRowTypes } from './tablerow.types'

/**
 * Table Row Component.
 */

export const DenTableRow: React.FC<TableRowTypes> = React.forwardRef(
    (props, ref) => <TableRow ref={ref} {...props} />
);


export default DenTableRow;