import { ReactElement, ReactNode } from 'react';

export interface NestedMenuTypes {
    trigger: ReactElement,
    menu: ReactElement[],
    keepOpen?: boolean,
    isOpen?: any,
    onOpen?: Function,
    minWidth?: string,
    anchorOrigin?: any
}

