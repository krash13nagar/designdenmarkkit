import * as React from 'react';
import { TableBody } from '@mui/material';
import { TableBodyTypes } from './tablebody.types';

/**
 * Table Body Component.
 */

const DenTableBodyBase = (
  props: TableBodyTypes,
  ref: React.ForwardedRef<HTMLTableSectionElement>
) => <TableBody ref={ref} {...props} />;

export const DenTableBody = React.forwardRef(DenTableBodyBase);

export default DenTableBody;
