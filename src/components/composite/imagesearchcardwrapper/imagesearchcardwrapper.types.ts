import { imageSearchCardConfig } from "../imagesearchcard/imagesearchcard.types";


export interface imageSearchCardWrapperConfig {
    imagesearchcardList: imageSearchCardConfig[],
    classes?: {
        "root"?: string
    }
}