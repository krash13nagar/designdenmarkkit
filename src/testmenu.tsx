import * as React from 'react';
import { DenButton, DenMenu, DenMenuItem, DenTooltip } from './components';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <DenTooltip title="Delete">
        <DenButton
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          Dashboard
        </DenButton>
      </DenTooltip>
      <DenMenu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <DenMenuItem onClick={handleClose}>Profile</DenMenuItem>
        <DenMenuItem onClick={handleClose}>My account</DenMenuItem>
        <DenMenuItem onClick={handleClose}>Logout</DenMenuItem>
      </DenMenu>
    </div>
  );
}
