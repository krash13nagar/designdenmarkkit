import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

interface Row {
    id: number;
    name: string;
    age: number;
    city: string;
}

interface DataGridProps {
    columns: GridColDef[];
    rows: Row[];
    sortingOrder: ('asc' | 'desc')[];
}

const ReusableDataGrid: React.FC<DataGridProps> = ({ columns, rows, sortingOrder }) => {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} sortingOrder={sortingOrder} />
        </div>
    );
};

export default ReusableDataGrid;
