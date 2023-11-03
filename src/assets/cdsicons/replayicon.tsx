import ReplayIcon from '@mui/icons-material/Replay';
import { DenSvgIcon, SVGTypes } from '../../components';
import React from 'react';

export const Replay = (props: SVGTypes) => {
  return (
    <DenSvgIcon name="Replay icon" {...props}>
      <ReplayIcon />
    </DenSvgIcon>
  );
};
