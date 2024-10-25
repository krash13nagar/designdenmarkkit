import { SelectChangeEvent } from '@mui/material';
import { MouseEventHandler } from 'react';
export interface ActivattionStatusProps {
  activationStatusOptions: {
    title: string;
    value: string;
  }[];
  disableActivationStatus?: boolean;
  activationChangeHandle: (
    event: SelectChangeEvent<unknown>,
    child: React.ReactNode
  ) => void;
  activationStatus: string;
  activationStatusLabel?: string;
  menuItemClass?: string,
  showEditIcon?: boolean,
  onEditIconClick?: MouseEventHandler<HTMLButtonElement>,
  editIconTitle?: string
}
