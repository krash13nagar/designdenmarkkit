import * as React from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { styled } from '@mui/material/styles';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CloseIcon from '@mui/icons-material/Close';
import { CustomSpeedDialProps } from './customspeeddial.types';
import clsx from 'clsx';

export default function CustomSpeedDial({
  actions = [],
  classes = {},
  open = false,
  setOpen = () => {},
  onSpeedDialClick = () => {},
}: CustomSpeedDialProps) {
  const MySpeedDialAction = styled(SpeedDialAction)(({ theme }) => {
    return {
      '&.cds-MuiSpeedDialAction-fab': {
        borderRadius: 0,
        boxShadow: 'none',
        backgroundColor: '#FFF',
        height: 'unset',
        textTransform: 'none',
        '&:hover': {
          color: theme.palette.primary.main,
        },
        '&:not(:first-of-type)': {
          margin: 0,
        },
        '&:first-of-type': {
          marginTop: 0,
          marginBottom: 0,
          marginRight: 0,
        },

        '&:not(:last-of-type)': {
          borderRight: `1px solid ${theme.palette.primary.main}`,
        },
      },
    };
  });

  const MySpeedDial = styled(SpeedDial)(() => ({
    width: 'max-content',
    '&.open': {
      border: '1px solid #d2d8df !important',
      height: '30px',
      padding: '5px',
      boxShadow: '0px 3px 6px #00000029',
      borderRadius: '50px',
      backgroundColor: '#FFF !important',
      '& .cds-MuiSpeedDial-fab': {
        background: '#FFF',
        boxShadow: 'none',
      },

      '.cds-MuiSpeedDial-actions': {
        display: 'block',
      },
    },
    '& .cds-MuiSpeedDial-actions': {
      paddingRight: '38px',
      flexDirection: 'row',
      display: 'none',
    },
    '&:not(.open) .cds-MuiSpeedDial-fab': {
      '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.04) !important;',
      },
    },
    '& .cds-MuiSpeedDial-fab': {
      width: '30px',
      height: '30px',
      minWidth: 'unset',
      minHeight: 'unset',
      backgroundColor: '#FFF',
      boxShadow: 'none',
      color: 'rgba(0, 0, 0, 0.54)',
    },
  }));

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <MySpeedDial
        className={clsx(open ? 'open' : '')}
        ariaLabel="customspeeddial"
        icon={open ? <CloseIcon /> : <AddCircleIcon />}
        open={open}
        onClick={() => {
          setOpen((open: boolean) => !open);
          if (onSpeedDialClick) onSpeedDialClick(open);
        }}
        classes={{ root: classes.root, fab: classes.fab }}
        direction={'left'}
        // @ts-ignore:next-line
        TransitionComponent={'div'}
      >
        {actions.map((action) => (
          <MySpeedDialAction
            key={action.label}
            icon={action.label}
            FabProps={{
              disableRipple: true,
              variant: 'extended',
              onClick: action.onClick,
            }}
          />
        ))}
      </MySpeedDial>
    </ClickAwayListener>
  );
}
