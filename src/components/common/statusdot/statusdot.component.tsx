import styles from './statusdot.module.scss';
import { clsx } from 'clsx';
import React from 'react';

export type StatusDotProps = {
  active?: boolean;
  size?: number;
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

export default StatusDot;
