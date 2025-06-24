export interface EditableDivProps {
  label?: string;
  value?: string;
  onChange: (value: string) => void;
  wrapperClass?: string;
  editableDivClass?: string;
  disabled?: boolean;
}
