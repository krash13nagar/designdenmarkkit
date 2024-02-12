import React from 'react';
import style from './imagesearchcard.module.scss';
import { imageSearchCardConfig, imageSearchCardWrapperConfig } from './imagesearchcard.types';
import ImageSearchCard from './imagesearchcard.component';


export const ImageSearchCardWrapper = (props: imageSearchCardWrapperConfig) => {

    const {
        imagesearchcardwrapper
    } = props;

    const renderChildern = (item: imageSearchCardConfig, index: number) => {
        switch (item.type) {
            case "3-0":
                return <ImageSearchCard {...item} />
        }
    }

    return (
        <div className={style['imagesearchcard-wrapper']}>
            {imagesearchcardwrapper.map((item, index) => renderChildern(item, index))}
        </div>
    )
};
export default ImageSearchCardWrapper;
