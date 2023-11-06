import * as React from 'react';
import { Modal } from '@mui/material';
import { ModalTypes } from './modal.types';

/**
 * DenModal Component.
 * @constructor
 * @param {boolean} props.open* - If true, the component is shown.
 * @param {Element} props.children - A single child content element.
 * @param {boolean} props.closeAfterTransition - When set to true the Modal waits until a nested Transition is completed before closing.
 * @param {boolean} props.disableEscapeKeyDown - If true, hitting escape will not fire the onClose callback.
 * @param {func} props.onBackdropClick - Callback fired when the backdrop is clicked.
 * @param {func} props.onClose - Callback fired when the component requests to be closed. The reason parameter can optionally be used to control the response to onClose.
 * The ref is forwarded to the root element.
 * for more details see http:localhost:6006
 */
export const DenModal: React.FC<ModalTypes> = (props) => <Modal {...props} />;

export default DenModal;
