export interface CustomRadioGroupProps {
  radioGroupLabel?: string;
  defaultRadio?: string;
  radioButtonList: { value: string; label: string; disabled?: boolean; title?: string }[];
  onHandleChange: (value: string) => void;
  selectedValue: string;
}
