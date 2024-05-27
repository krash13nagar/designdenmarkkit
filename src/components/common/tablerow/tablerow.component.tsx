import * as React from 'react';
import { TableRow } from '@mui/material';
import { TableRowTypes } from './tablerow.types';

/**
 * Table Row Component.
 */

const DenTableRowBase = (
  props: TableRowTypes,
  ref: React.ForwardedRef<HTMLTableRowElement>
) => <TableRow ref={ref} {...props} />;

export const DenTableRow = React.forwardRef(DenTableRowBase);

export default DenTableRow;
