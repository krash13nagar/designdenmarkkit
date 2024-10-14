export interface CustomSpeedDialProps {
    actions?: {
        label: string;
        onClick?: React.MouseEventHandler<HTMLButtonElement>
    }[];
    classes?: {
        root?: string;
        fab?: string
    },
    open?: boolean,
    setOpen?: Function,
    onSpeedDialClick?: Function
}
