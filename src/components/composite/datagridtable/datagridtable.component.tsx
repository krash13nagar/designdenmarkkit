import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

export default function SxProp() {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 10,
    maxColumns: 5,
  });

  return (
    <Box sx={{ width: '80%' }}>
      <DataGrid
        {...data}
        sx={{
          boxShadow: 2,
          background: '#FFFFFF 0% 0 % no - repeat padding- box',
          border: '1px solid #D2D8DF',
          borderRadius: '2px',
          opacity: '1',
          // borderColor: 'primary.light',
          '& .MuiDataGrid-cell:hover': {
            color: 'primary.main',
          },
        }}
      />
    </Box>
  );
}
