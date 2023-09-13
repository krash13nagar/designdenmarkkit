export interface PublishDateProps
  extends Omit<PublishModalProps, 'open' | 'setOpen'> {
  publishDateLabel?: string;
  expiresInDaysLabel?: number;
  publishDatehandle?: React.MouseEventHandler<SVGSVGElement | HTMLSpanElement>;
  publishDateWrapper?: string;
  publishDateClass?: string;
  publishDateLabelClass?: string;
}
export interface PublishModalProps {
  PublishModalTitle: string;
  autoCorrect?: boolean;
  triggerMBDone?: boolean;
  publishDate?: number;
  expiresIn?: number;
  artInsDate?: number;
  artUpdDate?: number;
  isDragable?: boolean;
  maxWidth?: false | 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  open: boolean;
  setOpen: (open: boolean) => void;
  onAutoCorrect: () => void;
  onReset: () => void;
  onClose: () => void;
  onDone: (preventCloseOnDone: boolean) => void;
  preventCloseOnDone: boolean;
  overrideClose: (() => void) | string;
  confirmBeforeClose?: boolean;
  callback: (arr: { [key: string]: string; value: any }[]) => void;
  visibleUpdateButton?: boolean;
  visibleCorrectButton?: boolean;
  visibleResetButton?: boolean;
  visibleDoneButton?: boolean;
  visibleCancelButton?: boolean;
  visibleOkayButton?: boolean;
  publishDateFormat?: string;
}
