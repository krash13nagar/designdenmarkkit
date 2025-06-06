export interface ReportPopupConfig {
    isOpen: boolean;
    onCancel?: () => void;
    onConfirm?: (selectedOption: string) => void;
    title?: string;
    message?: string;
    dropdownLabel?: string;
    dropdownOptions?: { id: string | number, label: string, value: string }[];
    dropdownDefaultOption?: string;
    confirmButtonText?: string;
    cancelButtonText?: string;
    position?: {
        top?: string;
        right?: string;
        left?: string;
        bottom?: string;
    };
    wrapperClass?: string;
    animatedClass?: string;
} 