import {
  FormHelperTextProps,
  InputBaseProps,
  InputLabelProps,
  SelectProps,
  SxProps,
  TextFieldClasses,
  TextFieldPropsSizeOverrides,
  Theme,
} from '@mui/material';
import { OverridableStringUnion } from '@material-ui/types';
import { ChangeEvent, FocusEvent, KeyboardEvent } from 'react';
export interface InputProps {
  name: string;
  onKeyUp: (e: KeyboardEvent<HTMLDivElement>) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  variant?: 'filled' | 'outlined' | 'standard';
  autoComplete?: string;
  /**
   * If `true`, the `input` element is focused during the first mount.
   * @default false
   */
  autoFocus?: boolean;
  /**
   * @ignore
   */
  children?: React.ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<TextFieldClasses>;
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  defaultValue?: unknown;
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error?: boolean;
  /**
   * Props applied to the [`FormHelperText`](/material-ui/api/form-helper-text/) element.
   */
  FormHelperTextProps?: Partial<FormHelperTextProps>;
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth?: boolean;
  /**
   * The helper text content.
   */
  helperText?: React.ReactNode | string;
  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id?: string;
  /**
   * Props applied to the [`InputLabel`](/material-ui/api/input-label/) element.
   * Pointer events like `onClick` are enabled if and only if `shrink` is `true`.
   */
  InputLabelProps?: Partial<InputLabelProps>;
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps?: InputBaseProps['inputProps'];
  /**
   * Pass a ref to the `input` element.
   */
  inputRef?: React.Ref<any>;
  /**
   * The label content.
   */
  label?: React.ReactNode;
  /**
   * If `true`, a `textarea` element is rendered instead of an input.
   * @default false
   */
  multiline?: boolean;
  /**
   * Name attribute of the `input` element.
   */
  onBlur?: InputBaseProps['onBlur'];
  onFocus?: InputBaseProps['onFocus'];
  /**
   * @ignore
   */
  onClick?: InputBaseProps['onClick'];
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder?: string;
  /**
   * If `true`, the label is displayed as required and the `input` element is required.
   * @default false
   */
  required?: boolean;
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows?: string | number;
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows?: string | number;
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows?: string | number;
  /**
   * Render a [`Select`](/material-ui/api/select/) element while passing the Input element to `Select` as `input` parameter.
   * If this option is set you must pass the options of the select as children.
   * @default false
   */
  select?: boolean;
  /**
   * Props applied to the [`Select`](/material-ui/api/select/) element.
   */
  SelectProps?: Partial<SelectProps>;
  /**
   * The size of the component.
   */
  size?: OverridableStringUnion<
    'small' | 'medium',
    TextFieldPropsSizeOverrides
  >;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>;
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type?: React.InputHTMLAttributes<unknown>['type'];
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value?: unknown;
}
