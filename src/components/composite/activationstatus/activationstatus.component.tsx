import React from 'react';
import {
  DenFormControl,
  DenInputLabel,
  DenMenuItem,
  DenSelect,
} from '../../common';
import { ActivattionStatusProps } from './activationstatus.types';
import './activationstatus.styles.scss';
import StatusActiveIcon from '../../../assets/cdsicons/status_active_icon';
import StatusInactiveIcon from '../../../assets/cdsicons/status_inactive_icon';
import StatusPendingIcon from '../../../assets/cdsicons/status_pending_icon';
import StatusCloseIcon from '../../../assets/cdsicons/status_close_icon';
import StatusIgnoreIcon from '../../../assets/cdsicons/status_ignore_icon';
import StatusUnavailableIcon from '../../../assets/cdsicons/status_unavailable_icon';

export const ActivationStatus = (props: ActivattionStatusProps) => {
  const {
    disableActivationStatus,
    activationStatusOptions,
    activationChangeHandle,
    activationStatus,
    activationStatusLabel = 'Status',
    menuItemClass = '',
  } = props;
  /**
   *
   * @param Metadata reason will be handled at client side
   */

  function getStatusIcon(status: string): React.ReactNode | undefined {
    const statusIcons: any = {
      active: (
        <StatusActiveIcon className="statusIcon" width="14px" height="14px" />
      ),
      inactive: (
        <StatusInactiveIcon className="statusIcon" width="14px" height="14px" />
      ),
      pending: (
        <StatusPendingIcon className="statusIcon" width="14px" height="14px" />
      ),
      closed: (
        <StatusCloseIcon className="statusIcon" width="14px" height="14px" />
      ),
      ignore: (
        <StatusIgnoreIcon className="statusIcon" width="14px" height="14px" />
      ),
      unavailable: (
        <StatusUnavailableIcon
          className="statusIcon"
          width="14px"
          height="14px"
        />
      ),
    };

    return statusIcons[status] || null;
  }

  return (
    <DenFormControl className="cds_publish_status_dropdown" sx={{ marginTop: '10px' }}>
      <DenInputLabel
        id="demo-simple-select-label"
        className="activation-status-label"
      >
        {activationStatusLabel}
      </DenInputLabel>
      <DenSelect
        variant="standard"
        value={activationStatus}
        onChange={activationChangeHandle}
        disabled={disableActivationStatus}
        className="cds_publish_select_menu"
        plain
      >
        {activationStatusOptions.map((item, index) => (
          <DenMenuItem
            key={index}
            value={item.value}
            className={
              'activation-status-menu-item status-' + item.title.toLowerCase()
            }
          >
            {getStatusIcon(item.title.toLowerCase())}
            <div
              className={
                'cds_publish_select_menu_text  ' +
                'status-' +
                item.title.toLowerCase() +
                `${menuItemClass ? ' ' + menuItemClass : ''}`
              }
            >
              {item.title}
            </div>
          </DenMenuItem>
        ))}
      </DenSelect>
    </DenFormControl>
  );
};
export default ActivationStatus;
