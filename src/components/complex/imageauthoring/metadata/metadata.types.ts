export interface MetadataSummaryProps {
    existingSummary?: any;
    value: any;
    title?: any;
    storeKey?: any;
    updateExitingSummary?: any;
    isButtonVisible?: any;
    iconButtons?: any;
    onClickEdit?: any;
    onClickDelete?: any;
    onClickDeleteItem?: any;
}
export interface MetadataProps {
    title?: string;
    visibleSummary?: boolean;
    summary: any;
    metaGroup: object;
    metaDefinationList: object;
    value?: any;
    onChangeWidget?: any;
    onChangeGroup?: any;
    selectedGroup?: any;
    onClickEdit?: any;
    onClickDelete?: any;
    onClickDeleteItem?: any;
    metadataConfig?: any;
    makeSummary?: any;
}
export interface MetadataSelectorProps {
    onChange: any;
    selectedGroup: string;
    items: any;
    title?: string;
}