import React, { FC, PropsWithChildren } from 'react';
import style from './imageauth.module.scss';
import {
  DenDialog,
  DenDialogTitle,
  DenTypography,
  DenIconButton,
  DenDialogContent,
} from '../../common';
import CloseIcon from '@mui/icons-material/Close';
import { ImageAuthModelProps } from './imageauth.types';
import ImageAuthoring from './imageauth.component';
import clsx from 'clsx';

export const ImageAuthModel: FC<PropsWithChildren<ImageAuthModelProps>> = (
  props
) => {
  const {
    containerHeader = 'Image Authoring',
    onClose,
    children = null,
    classes = {},
    dialogProps = {},
    ...rest
  } = props;

  return (
    <DenDialog
      open={true}
      maxWidth="lg"
      classes={{ paperWidthLg: style['dialogRoot'] }}
      className={clsx(classes.root, 'image-auth-modal-root-cds')}
      {...dialogProps}
    >
      <DenDialogTitle classes={{ root: style['titleRootWrapper'] }}>
        <div className={style['titleWrapper']}>
          <div className={style['titleText']}>
            <DenTypography variant="h6">{containerHeader}</DenTypography>
          </div>
          <div className={style['titleIcon']}>
            <DenIconButton aria-label="close" onClick={onClose}>
              <CloseIcon />
            </DenIconButton>
          </div>
        </div>
      </DenDialogTitle>
      <DenDialogContent classes={{ root: style['dialogContentWrapper'] }}>
        {children ? children : <ImageAuthoring {...rest} />}
      </DenDialogContent>
    </DenDialog>
  );
};
export default ImageAuthModel;
