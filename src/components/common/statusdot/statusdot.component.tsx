import styles from './statusdot.module.scss';
import { clsx } from 'clsx';
import React from 'react';
import { DenBox } from '../../common';

export type StatusDotProps = {
  active?: boolean;
  size?: number;
  status?: string;
};

export function StatusDot(props: StatusDotProps) {
  const { active, size = 8 } = props;
  return (
    <div
      className={clsx(
        styles['cds-status-dot'],
        active ? styles['active-status-dot'] : styles['inactive-status-dot']
      )}
      style={{ width: `${size}px`, height: `${size}px` }}
    />
  );
}

export function StatusDotNew(props: StatusDotProps) {
  const { status = "ACTIVE", size = 8 } = props;

  const getClassFromActivationStatus = (status: string): string => {
    return status.toLowerCase()
  }
  return (
    <DenBox
      className={clsx(styles['status-dot'], styles[`status-${getClassFromActivationStatus(status)}`])}
      sx={{
        width: `${size}px`, height: `${size}px`,
        minWidth: `${size}px`, minHeight: `${size}px`,
      }}
    />
  );
}

export default StatusDot;
