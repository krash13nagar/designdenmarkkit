import { ReactNode } from "react";

export interface DataGridTableProps {
    headings?: ReactNode[],
    rows?: { rowData: ReactNode[], id: string | number }[],
    coloumn?: { coloumnData: ReactNode[], id: string | number }[],
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
    containerStyle?: React.CSSProperties; // Container style
    headerStyle?: React.CSSProperties; // Header style
    cellStyle?: React.CSSProperties;
    stickyHeader?: boolean
}