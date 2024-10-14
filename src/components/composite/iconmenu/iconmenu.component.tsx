import React, { FC } from 'react';
import { DenIconButton, DenListItemIcon, DenListItemText } from '../../common';
import './iconmenu.styles.scss';
import { IconMenuProps } from './iconmenu.types';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import clsx from 'clsx';
import { RightArrowIcon } from '../../../assets';

const renderList = (list: IconMenuProps['CTAs'] = [], ctaHandle: any) => {
  return list.map((item, index) => {
    return (
      <List
        component="nav"
        aria-label="media-cta"
        className={'media-nav'}
        key={index}
      >
        <ListItemButton
          key={index}
          onClick={(e) => {
            e.stopPropagation();
            ctaHandle(item.value);
          }}
          className={'media-nav-item  ' + item.label}
        >
          {item.Icon && (
            <DenListItemIcon className={'media-nav-icon '}>
              <DenIconButton aria-label={item.label} className={'icon'}>
                <item.Icon fontSize="small" />
              </DenIconButton>
            </DenListItemIcon>
          )}
          <DenListItemText primary={item.label} className={'media-nav-text '} />
          {typeof item.value === 'object' && Array.isArray(item.value) && (
            <>
              <RightArrowIcon
                aria-label={item.label}
                className={'media-nav-button-expended  ' + 'nested'}
              />

              <div className={'media-nav-button-expended-text   ' + 'nested'}>
                {renderList(item.value, ctaHandle)}
              </div>
            </>
          )}
        </ListItemButton>
      </List>
    );
  });
};

export const Iconmenu: FC<IconMenuProps> = ({
  CTAs = [],
  handleItemClick = () => {},
}) => {
  return (
    <div className={clsx('cds-icon-menu-wrapper', 'media-action-cta')}>
      {renderList(CTAs, handleItemClick)}
    </div>
  );
};

export default Iconmenu;
