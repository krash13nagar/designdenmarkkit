import React from 'react';
import {
  DenFormControl,
  DenInputLabel,
  DenMenuItem,
  DenSelect,
} from '../../common';
import { ActivattionStatusProps } from './activationstatus.types';
import './activationstatus.styles.scss';

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

  return (
    <DenFormControl className="cds_publish_status_dropdown">
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
            {/* <div
              className={'statusIcon   ' + 'status-' + item.title.toLowerCase()}
            >
              <span>{item.icon}</span>
            </div> */}
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
