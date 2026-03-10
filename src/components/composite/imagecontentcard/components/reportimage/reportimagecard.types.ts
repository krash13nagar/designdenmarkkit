export interface ReportImageCardConfig {
    title?: string;
    dropdownLabel?: string;
    dropdownOptions?: { label?: string }[];
    onCancel?: () => void;
    onConfirm?: (message: string) => void;
    dropdownDefaultOption?: string;
    reportImageCardCallBack?: (from: number) => void;
    animatedClass?: string;
}
