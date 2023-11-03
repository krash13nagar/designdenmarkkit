import { SelectChangeEvent } from '@mui/material';
import { ReactNode, ReactSVGElement } from 'react';
export interface ActivattionStatusProps {
  activationStatusOptions: {
    title: string;
    value: string;
    icon: React.ReactNode;
  }[];
  disableActivationStatus?: boolean;
  activationChangeHandle: (
    event: SelectChangeEvent<unknown>,
    child: React.ReactNode
  ) => void;
  activationStatus: string;
  activationStatusLabel?: string;
  menuItemClass?: string
}
