import React from 'react';
import style from './imagesearchcardwrapper.module.scss';
import clsx from 'clsx';
import ImageSearchCard from '../imagesearchcard/imagesearchcard.component';
import { imageSearchCardWrapperConfig } from './imagesearchcardwrapper.types';
import { imageSearchCardConfig } from '../imagesearchcard/imagesearchcard.types';


export const ImageSearchCardWrapper = (props: imageSearchCardWrapperConfig) => {

    const {
        imagesearchcardList
    } = props;

    const renderChildern = (item: imageSearchCardConfig, index: number) => {
        switch (item.type) {
            case "3-0":
                return (
                    <div key={index}>
                        <ImageSearchCard {...item} />
                    </div>
                )
        }
    }

    return (
        <div className={clsx('cds-imagesearchCardWrapper', style['imagesearchcard-wrapper'])}>
            {imagesearchcardList.map((item, index) => renderChildern(item, index))}
        </div>
    )
};
export default ImageSearchCardWrapper;
