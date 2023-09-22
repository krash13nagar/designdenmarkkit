import * as React from 'react';
import { Table } from '@mui/material';
import { TableTypes } from './table.types'

/**
 * Table Component.
 */

export const DenTable: React.FC<TableTypes> = React.forwardRef(
    (props, ref) => <Table ref={ref} {...props} />
);


export default DenTable;