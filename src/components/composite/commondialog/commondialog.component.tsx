import * as React from 'react';
import { CommonDialogProps } from './commondialog.types';
import styles from './commondialog.module.scss';
import {
  DenButton,
  DenDialog,
  DenDialogActions,
  DenDialogContent,
  DenDialogTitle,
} from '../../common';

/**
 * CommonDialog Component.
 * @constructor
 * @param  {boolean} props.open - to open dialog
 * @param {string} props.tite -  (optional) title of dialog
 * @param {string | ReactNode} props.content - (optional) content of dialog

 * ref is forwarded to parent element
 */

export const CommonDialog = React.forwardRef<HTMLDivElement, CommonDialogProps>(
  (props) => {
    const {
      classes = {},
      open,
      handleClose = () => {},
      title = '',
      content = '',
      dialogProps = { open },
      renderAtTop = false,
      dialogContentProps = {},
      dialogActionProps = {},
      dialogTitleProps = {},
      actionOptionsList = [],
      container = null,
    } = props;
    return (
      <DenDialog
        open={open}
        onClose={handleClose}
        className={`${classes?.root ? classes.root : ''} ${
          styles.commonDialogRoot
        } ${container ? styles.absolutePos : ''}`}
        slotProps={{
          backdrop: { classes: { root: styles.absolutePos || '' } },
        }}
        PaperProps={{ classes: { root: renderAtTop ? styles.alignTop : '' } }}
        container={container}
        {...dialogProps}
      >
        {title && (
          <DenDialogTitle
            classes={{ root: styles.titleRoot }}
            {...dialogTitleProps}
          >
            {title}
          </DenDialogTitle>
        )}
        <DenDialogContent
          classes={{ root: styles.contentRoot }}
          {...dialogContentProps}
        >
          {content}
        </DenDialogContent>
        {actionOptionsList?.length > 0 && (
          <DenDialogActions {...dialogActionProps}>
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
          </DenDialogActions>
        )}
      </DenDialog>
    );
  }
);
CommonDialog.displayName = 'CommonDialog';
export default CommonDialog;
