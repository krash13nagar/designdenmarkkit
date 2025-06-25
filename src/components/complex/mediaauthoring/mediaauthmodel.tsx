import React, { FC, PropsWithChildren } from 'react';
import style from './mediaauth.module.scss';
import { CommonDialog } from '../../composite/commondialog';
import { MediaAuthModelProps } from './mediaauth.types';
import MediaAuthoring from './mediaauth.component';
import clsx from 'clsx';

export const MediaAuthModel: FC<PropsWithChildren<MediaAuthModelProps>> = (
  props
) => {
  const {
    containerHeader = 'Media Authoring',
    onClose,
    children = null,
    classes = {},
    dialogProps = {},
    dialogContentProps = {},
    container,
    ...rest
  } = props;

  return (
    <CommonDialog
      open={true}
      handleClose={onClose}
      title={containerHeader}
      container={container}
      titleVariant="contained"
      dialogProps={{
        maxWidth: "lg",
        classes: { paperWidthLg: style['dialogRoot'] },
        ...dialogProps
      }}
      dialogContentProps={{ ...dialogContentProps }}
      classes={{
        root: clsx(classes.root, 'media-auth-modal-root-cds'),
        contentRoot: style['dialogContentWrapper']
      }}
    >
      {children ? children : <MediaAuthoring {...rest} />}
    </CommonDialog>
  );
};
export default MediaAuthModel;
