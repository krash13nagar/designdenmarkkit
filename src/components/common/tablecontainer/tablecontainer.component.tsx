import * as React from 'react';
import { TableContainer } from '@mui/material';
import { TableContainerTypes } from './tablecontainer.types';

/**
 * Table Container Component.
 */

const DenTableContainerBase = (
  props: TableContainerTypes,
  ref: React.ForwardedRef<HTMLDivElement>
) => <TableContainer ref={ref} {...props} />;

export const DenTableContainer = React.forwardRef(DenTableContainerBase);

export default DenTableContainer;
