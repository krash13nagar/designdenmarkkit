import { ReactNode } from "react";
import { ImageContentCardAnchorGeneric } from "../../imagecontentcard.types";

export interface ImageContentCardContextMenuProps {
    id?: string;
    anchorEl: ImageContentCardAnchorGeneric;
    menuOptions?: any[];
    classes?: {
        menuOption?: string;
    };
    onContextClick: (event: React.SyntheticEvent<HTMLElement>, index: number) => void;
    onDenMenuClose: (e: React.MouseEvent<HTMLButtonElement>) => void;
    onClose: (event: React.SyntheticEvent<HTMLElement> | undefined, index: number, cb?: Function | undefined) => void;
    cssClassName?: any;
    className?: string;
}
