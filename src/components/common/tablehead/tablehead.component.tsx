import * as React from 'react';
import { TableHead } from '@mui/material';
import { TableHeadTypes } from './tablehead.types';

/**
 * Table Head Component.
 */

const DenTableHeadBase = (
  props: TableHeadTypes,
  ref: React.ForwardedRef<HTMLTableSectionElement>
) => <TableHead ref={ref} {...props} />;

export const DenTableHead = React.forwardRef(DenTableHeadBase);

export default DenTableHead;
