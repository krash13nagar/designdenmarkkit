export interface DiscardImageCardConfig {
    title?: string;
    dropdownLabel?: string;
    dropdownOptions?: {label?:string}[];
    message?: string;
    onCancel?: () => void;
    onConfirm?:  (message: string) => void;
    dropdownDefaultOption?: string;
    discardImageCardCallBack?:  (from: number) => void,
    wrapperClass?: string,
    animatedClass?: string
}