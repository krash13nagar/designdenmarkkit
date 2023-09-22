export interface CustomRadioGroupProps {
  radioGroupLabel?: string;
  defaultRadio?: string;
  radioButtonList: { value: string; label: string }[];
  onHandleChange: (value: string) => void;
  selectedValue: string;
}
