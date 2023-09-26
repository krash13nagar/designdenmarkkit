import { ReactNode } from "react";

export interface BasicTableProps {
    headings?: ReactNode[],
    rows?: ReactNode[][],
    showEditColumn?: boolean,
    classes?: {
        containerRoot?: string,
        tableRoot?: string,
        tableHeadRoot?: string,
        headRowRoot?: string,
        headCellRoot?: string,
        tableBodyRoot?: string,
        rowRoot?: string,
        bodyCellRoot?: string,
    },
    stickyHeader?: boolean
}