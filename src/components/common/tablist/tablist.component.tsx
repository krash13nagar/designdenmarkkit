import * as React from 'react';
import { TabList } from '@mui/lab';
import { TabListTypes } from './tablist.types';

/**
 * Tab List Component.
 * @constructor
 * @param {node} props.children - A list of <Tab /> elements.
 * The ref is forwarded to the root element.
 * for more details see http:localhost:6006
 */

export const DenTabList: React.FC<TabListTypes> = (props) => (
  <TabList {...props} />
);

export default DenTabList;
