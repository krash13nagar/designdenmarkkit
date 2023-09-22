import * as React from 'react';
import { TableContainer } from '@mui/material';
import { TableContainerTypes } from './tablecontainer.types'

/**
 * Table Container Component.
 */

export const DenTableContainer: React.FC<TableContainerTypes> = React.forwardRef(
    (props, ref) => <TableContainer ref={ref} {...props} />
);


export default DenTableContainer;