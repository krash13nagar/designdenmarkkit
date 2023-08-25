import * as React from 'react';
import { TabPanel, TabPanelProps } from '@mui/lab';

/**
 * Tab Panel Component.
 * @constructor
 * @param {string} props.value - The value of the corresponding Tab. Must use the index of the Tab when no value was passed to Tab.
 * @param {node} props.children - The content of the component.
 * The ref is forwarded to the root element.
 * for more details see http:localhost:6006
 */

export const DenTabPanel: React.FC<TabPanelProps> = React.forwardRef((props, ref) => (
  <TabPanel ref={ref} {...props} />
));

export default DenTabPanel;
