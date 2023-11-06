import * as React from 'react';
import { ClickAwayListener } from '@mui/material';
import { ClickAwayListenerTypes } from './clickawaylistener.types';

/**
 * DenClickAwayListener Component.
 * @constructor
 * @param {func} props.onClickAway -Fires a callback fired when a "click away" event is detected.
 * @param {boolean} props.disableReactTree - If true, the React tree is ignored and only the DOM tree is considered. This prop changes how portaled elements are handled.
 * @param {'onClick'|'onMouseDown'|'onMouseUp'| false} props.mouseEvent - The mouse event to listen to. You can disable the listener by providing false.
 * @param {'onTouchEnd'| 'onTouchStart'| false} props.touchEvent - The mouse event to listen to. You can disable the listener by providing false.
 * for more details see http:localhost:6006
 */
export const DenClickAwayListener: React.FC<ClickAwayListenerTypes> = (props) => <ClickAwayListener {...props} />;

export default DenClickAwayListener;
