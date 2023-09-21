import * as React from 'react';
import { TabPanel } from '@mui/lab';
import { TabPanelTypes } from './tabpanel.types';

/**
 * Tab Panel Component.
 * @constructor
 * @param {string} props.value - The value of the corresponding Tab. Must use the index of the Tab when no value was passed to Tab.
 * @param {node} props.children - The content of the component.
 * The ref is forwarded to the root element.
 * for more details see http:localhost:6006
 */

export const DenTabPanel: React.FC<TabPanelTypes> = (props) => (
  <TabPanel {...props} />
);

export default DenTabPanel;
