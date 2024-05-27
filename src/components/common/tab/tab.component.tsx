import * as React from 'react';
import { Tab } from '@mui/material';
import { TabTypes } from './tab.types';

/**
 * Tab Component.
 * @constructor
 * @param {boolean} props.disabled - If true, the component is disabled.
 * @param {boolean} props.disableFocusRipple - If true, the keyboard focus ripple is disabled.
 * @param {boolean} props.wrapped - Tab labels appear in a single row. They can use a second line if needed.
 * @param {any} props.value - We can provide our own value. Otherwise, we fallback to the child position index.
 */
const DenTabBase = (
  props: TabTypes,
  ref: React.ForwardedRef<HTMLDivElement>
) => <Tab {...props} ref={ref} />;

export const DenTab = React.forwardRef(DenTabBase);

export default DenTab;
