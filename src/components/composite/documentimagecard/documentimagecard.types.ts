import { ReactNode } from "react";
import { ActionButton } from "../../complex/imageauth/imageauth.types";

export interface documentImageCardConfig {
    name?: string,
    agencyName?: string,
    imageUrl?: string,
    classes?: {
        "root"?: string
    }
    variant?: string,
    checked?: boolean,
    onCheckboxChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    indexNumber?: number,
    showCheckbox?: boolean,
    showIndexNumber?: boolean
}