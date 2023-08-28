import * as React from 'react';
import { TabProps, Tab } from '@mui/material';

/**
 * Tab Component.
 * @constructor
 * @param {boolean} props.disabled - If true, the component is disabled.
 * @param {boolean} props.disableFocusRipple - If true, the keyboard focus ripple is disabled.
 * @param {boolean} props.wrapped - Tab labels appear in a single row. They can use a second line if needed.
 * @param {any} props.value - We can provide our own value. Otherwise, we fallback to the child position index.
 */
export const DenTab: React.FC<TabProps> = React.forwardRef((props, ref) => (
  <Tab ref={ref} {...props} />
));

export default DenTab;
