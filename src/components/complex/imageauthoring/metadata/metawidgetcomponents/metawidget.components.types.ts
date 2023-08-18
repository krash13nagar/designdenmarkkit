export interface MetaLabelProps {
    title: string;
    value: string;
}

export interface textAreaOnChange {
    widget: any;
    event: React.MouseEventHandler<HTMLElement>;
    olderValue: string;
    msid: string;
}

export interface MetaTextAreaProps {
    title: string;
    value: string;
    olderValue: string;
    msid: string;
    widget: any; 
    onChange: textAreaOnChange;
}