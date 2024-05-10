export interface cardMenuOptionsConfig {
    label: string;
    onClickFnc: React.MouseEventHandler<HTMLElement>;
}

export interface richStoryCardConfig {
    id:string,
    slidesCount: number,
    imagesCount: number,
    videosCount: number,
    hostName: string,
    contentType: string,
    updatedDateTimeEpoch: number,
    publishDateTimeEpoch: number,
    imageUrl: string,
    imgTitle: string,
    cardMenuOptions:cardMenuOptionsConfig[],
    handleClick?: React.MouseEventHandler<HTMLDivElement>,
    handleCTA: React.MouseEventHandler<HTMLElement>;
    classes?: {
        "root"?: string
    }
}