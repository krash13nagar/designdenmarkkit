import * as React from 'react';
import { TabContext } from '@mui/lab';
import { TabContextTypes } from './tabcontext.types';

/**
 * Tab Context Component.
 * @constructor
 * @param {string} props.value - The value of the currently selected Tab.
 * @param {node} props.children - The content of the component.
 * The ref is forwarded to the root element.
 * for more details see http:localhost:6006
 */
// type TabContextProps = {
//     props?: React.ReactNode
//   };

export const DenTabContext: React.FC<TabContextTypes> = (props) => (
  <TabContext {...props} />
);

export default DenTabContext;
