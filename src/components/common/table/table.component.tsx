import * as React from 'react';
import { Table } from '@mui/material';
import { TableTypes } from './table.types';

/**
 * Table Component.
 */

const DenTableBase = (
  props: TableTypes,
  ref: React.ForwardedRef<HTMLTableElement>
) => <Table ref={ref} {...props} />;

export const DenTable = React.forwardRef(DenTableBase);

export default DenTable;
