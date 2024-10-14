export interface IconMenuProps {

    CTAs: { Icon: any, label: string, value: any }[],
    handleItemClick: (selectedItemValue: string) => void

}