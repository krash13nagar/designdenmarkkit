import * as React from 'react';
import { DialogActions } from '@mui/material';
import { DialogActionsTypes } from './dialogactions.types';

/**
 * DenDialogContent Component.
 * @constructor
 * @param {node} props.children - The content of the component.
 * @param {object} props.classes - Override or extend the styles applied to the component. See CSS API below for more details.
 * @param {boolean} props.disableSpacing - If true, the actions do not have additional margin.
 * The ref is forwarded to the root element.
 * for more details see http:localhost:6006
 */

export const DenDialogActionsBase = (
  props: DialogActionsTypes,
  ref: React.ForwardedRef<unknown>
) => <DialogActions ref={ref} {...props} />;

export const DenDialogActions = React.forwardRef(DenDialogActionsBase);

export default DenDialogActions;
