import {TextFieldProps as props} from "@mui/material";

export type TextFieldProps  =  props & {
    forwardedRef?: React.RefObject<HTMLDivElement | null>;
}