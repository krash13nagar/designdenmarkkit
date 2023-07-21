import * as React from 'react';
import { TabList, TabListProps } from '@mui/lab';

/**
 * Tab List Component.
 * @constructor
 * @param {node} props.children - A list of <Tab /> elements.
 * The ref is forwarded to the root element.
 * for more details see http:localhost:6006
 */

export const DenTabList: React.FC<TabListProps> = (props) => (
  <TabList {...props} />
);

export default DenTabList;
