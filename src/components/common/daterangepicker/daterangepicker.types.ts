import { ReactNode } from "react";
import { Props } from "react-bootstrap-daterangepicker";

export interface DateRangePickerProps extends Props{
children:ReactNode;
selected?: any;
}