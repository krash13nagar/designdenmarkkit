import * as React from 'react';
import { TableCell } from '@mui/material';
import { TableCellTypes } from './tablecell.types';

/**
 * Table Cell Component.
 */

const DenTableCellBase = (
  props: TableCellTypes,
  ref: React.ForwardedRef<unknown>
) => <TableCell ref={ref} {...props} />;

export const DenTableCell = React.forwardRef(DenTableCellBase);

export default DenTableCell;
