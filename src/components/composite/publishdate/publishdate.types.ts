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
  publishDate?: number;
  expiresIn?: number;
  artInsDate?: number;
  artUpdDate?: number;
  maxWidth?: false | 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  open: boolean;
  setOpen: (open: boolean) => void;
  onAutoCorrect?: () => void;
  onUpdate?: (arr: { [key: string]: string; value: any }[]) => void;
  onClose?: () => void;
  onDone?: () => void;
  preventCloseOnDone: boolean;
  overrideClose: (() => void) | string;
  publishDateFormat?: string;
}
