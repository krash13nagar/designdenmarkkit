import * as React from 'react';
import { CommonDialogProps } from './commondialog.types';
import styles from './commondialog.module.scss';
import { Close } from '../../../assets/cdsicons/closeicon';
import {
  DenButton,
  DenDialog,
  DenDialogActions,
  DenDialogContent,
  DenDialogTitle,
  DenGrid,
  DenIconButton,
  DenTypography,
} from '../../common';
import clsx from 'clsx';

/**
 * CommonDialog Component.
 * @constructor
 * @param  {boolean} props.open - to open dialog
 * @param {string} props.tite -  (optional) title of dialog
 * @param {string | ReactNode} props.content - (optional) content of dialog

 * ref is forwarded to parent element
 */

export const CommonDialog = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<CommonDialogProps>
>((props, ref) => {
  const {
    classes = {},
    open,
    handleClose = () => { },
    title = '',
    content = '',
    titleVariant = 'plain',
    dialogProps = {},
    renderAtTop = false,
    dialogContentProps = {},
    dialogActionProps = {},
    dialogTitleProps = {},
    actionOptionsList = [],
    container = null,
    children,
    actionChildren = null,
  } = props;
  return (
    <DenDialog
      ref={ref}
      open={open}
      onClose={handleClose}
      className={`${classes?.root ? classes.root : ''} ${styles.commonDialogRoot
        } ${container ? styles.absolutePos : ''}`}
      slotProps={{
        backdrop: { classes: { root: styles.absolutePos || '' } },
      }}
      PaperProps={{ classes: { root: renderAtTop ? styles.alignTop : '' } }}
      container={container}
      {...dialogProps}
    >
      {title && titleVariant == 'plain' && (
        <DenDialogTitle
          classes={{ root: styles.titleRootPlain }}
          {...dialogTitleProps}
        >
          {title}
        </DenDialogTitle>
      )}
      {title && titleVariant == 'contained' && (
        <DenDialogTitle
          classes={{ root: styles.titleRootContained }}
          {...dialogTitleProps}
        >
          <div className={styles.titletext}>
            {props.title}
          </div>
          <DenIconButton
            className={styles.titleicon}
            style={{ color: '#fff' }}
            aria-label="close"
            onClick={(e: React.MouseEvent) => {
              handleClose(e);
            }}
          >
            <Close />
          </DenIconButton>
        </DenDialogTitle>
      )}
      <DenDialogContent
        classes={{ root: classes?.contentRoot || '' }}
        {...dialogContentProps}
      >
        {content || children}
      </DenDialogContent>
      {(actionOptionsList?.length > 0 || actionChildren) && (
        <DenDialogActions
          classes={{ root: clsx(styles.footerRoot, classes.footerRoot) }}
          {...dialogActionProps}
        >
          {actionOptionsList.map((action) => (
            <DenButton
              key={action.label}
              onClick={action.onClick}
              variant={action.variant}
              color={action.color}
              {...(action.props || {})}
            >
              {action.label}
            </DenButton>
          ))}
          {!actionOptionsList?.length && actionChildren}
        </DenDialogActions>
      )}
    </DenDialog>
  );
});
CommonDialog.displayName = 'CommonDialog';
export default CommonDialog;
