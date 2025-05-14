import * as React from 'react';
import styled from '@emotion/styled';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import NestedMenuSubItem from './nestedmenusubitem';
import { NestedMenuTypes } from './nestedmenutypes';
import { DenBox } from '../../common';

export const DenNestedMenu = React.forwardRef(
  (
    {
      trigger,
      menu,
      keepOpen: keepOpenGlobal,
      isOpen: controlledIsOpen,
      onOpen: onControlledOpen,
      minWidth,
      anchorOrigin = { horizontal: 'right', vertical: 'center' },
    }: NestedMenuTypes,
    ref: React.MutableRefObject<any>
  ) => {
    const [isInternalOpen, setInternalOpen] = React.useState(false);

    const isOpen = controlledIsOpen || isInternalOpen;

    let anchorRef = React.useRef(null);
    if (ref) {
      anchorRef = ref;
    }

    const handleOpen = (event: any) => {
      event.stopPropagation();

      if (menu.length) {
        onControlledOpen
          ? onControlledOpen(event.currentTarget)
          : setInternalOpen(event.currentTarget);
      }
    };

    const handleClose = (event: any) => {
      event.stopPropagation();

      if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
      }

      handleForceClose();
    };

    const handleForceClose = () => {
      onControlledOpen ? onControlledOpen(null) : setInternalOpen(null);
    };

    const renderMenu: any = (menuItem: any, index: any) => {
      const { keepOpen: keepOpenLocal, ...props } = menuItem.props;

      let extraProps = {};
      if (props.menu) {
        extraProps = {
          parentMenuOpen: isOpen,
        };
      }

      return React.createElement(menuItem.type, {
        ...props,
        key: index,
        ...extraProps,
        onClick: (event: any) => {
          event.stopPropagation();

          if (!keepOpenGlobal && !keepOpenLocal) {
            handleClose(event);
          }

          if (menuItem.props.onClick) {
            menuItem.props.onClick(event);
          }
        },
        children: props.menu
          ? React.Children.map(props.menu, renderMenu)
          : (
            props.children || <DenBox sx={{ display: 'flex', alignItems: "center" }}>
              {props.leftIcon && <DenBox sx={{ mr: "6px" }}>{props.leftIcon}</DenBox>}
              {props.label}
            </DenBox>
          )
      });
    };

    return (
      <>
        {React.cloneElement(trigger, {
          onClick: isOpen ? handleForceClose : handleOpen,
          ref: anchorRef,
        })}

        <Menu
          PaperProps={{ sx: { minWidth: minWidth ?? 0 } }}
          anchorEl={isOpen}
          open={!!isOpen}
          onClose={handleClose}
          anchorOrigin={anchorOrigin}
        >
          {React.Children.map(menu, renderMenu)}
        </Menu>
      </>
    );
  }
);

const StyledNestedMenuItem = styled(MenuItem)`
  display: flex;
  justify-content: space-between !important;
  &  svg {
    vertical-align:middle;
  }
  &  svg.right-icon {
    margin-left: 32px;
  }
`;

export const DenNestedMenuItem = ({ leftIcon, label, ...props }: any) => {

  return <StyledNestedMenuItem {...props} />

}

export const DenNestedMenuSubItem = styled(NestedMenuSubItem)`
  display: flex;
  justify-content: space-between !important;
  &  svg {
    vertical-align:middle;
  }
  &  svg.right-icon {
    margin-left: 32px;
  }
`;
