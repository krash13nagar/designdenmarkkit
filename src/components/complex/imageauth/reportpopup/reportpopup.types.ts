import { DiscardImageCardConfig } from "../../../composite/imagesearchcard/discardimagecard.types";

export interface ReportPopupConfig {
    isOpen: boolean;
    reportButtonProps: DiscardImageCardConfig;
    onCancel?: () => void;
    onConfirm?: (selectedOption: string) => void;
    position?: {
        top?: string;
        right?: string;
        left?: string;
        bottom?: string;
    };
} 