import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { DataGridTypes } from './datagrid.types'

/**
 * Data Grid Component.
 */

export const DenDataGrid: React.FC<DataGridTypes> = React.forwardRef(
    (props, ref) => <DataGrid  {...props} />
);


export default DenDataGrid;