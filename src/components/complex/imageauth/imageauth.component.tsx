import React, { ForwardedRef, Ref, forwardRef } from 'react';
import style from './imageauth.module.scss';
import {
  AlingType,
  DenCustomTabs,
  DenImageCard,
  LabelValue,
  Title,
  TitleForUrl,
} from '../../composite';
import { DenGrid } from '../../common';
import { Footer } from '../../composite/footer/footer.component';

/**
 * LabelValue Component.
 * @constructor
 * @param {string} props.label* -.label of the element to display
 * @param {string} props.value - text of value element.
 * @param {number} props.align - alignment of label and value element
 * @param {string} props.className - Classname to be applied to the wrapper element
 * @param {string} props.seperatorClassName - Classname applied to the speretaor element.
 * @param {string} props.labelProps - Classname applied to the label element.
 * @param {string} props.valueProps - Classname applied to the value element.
 * @param {string} props.seperator - Seperator string to seperate between label and value
 * The ref is forwarded to the root element.
 * for more details see http:localhost:6006
 */

export const ImageAuthoring = () => {
  return (
    <>
      <div className={style['image-auth-wrapper']}>
        <div className={style['image-auth-left-panel']}>
          <DenImageCard
            src="https://picsum.photos/1920/1280"
            wrapperClassName={style['image-container']}
            imageClassName={style['image']}
          />
          <div className={style['meta-info-wrapper'] + ' row'}>
            {[
              { label: 'Original Resolutions', value: '120x120 px' },
              { label: 'Original File Size', value: '31KB' },
              { label: 'Type', value: 'jpeg' },
              { label: 'Original Resolutions', value: '120x120 px' },
              { label: 'Original Resolutions', value: '120x120 px' },
            ].map((elm) => (
              <LabelValue
                {...elm}
                align={AlingType.column}
                className="column-4"
              />
            ))}
          </div>
        </div>
        <div className={style['image-auth-right-panel']}>
          <DenCustomTabs
            tabTitleList={['Primary Data', 'Keywords', 'Meta Data']}
            centered={true}
          >
            <div className={style['primary-data-wrapper']}>
              <LabelValue label="MSID" value="8763426" seperator=":" />
              <Title label="Title" value="Title for the image" fullWidth />
              <TitleForUrl
                seoTitleProps={{
                  label: 'Seo Title',
                  value:
                    'test seo title dsajh dsakjhd kjsah dkjsah dkjsah dkjhsadkjh sakjdh kjsahd kjsahdkjsah kdjh askjdh kasjdh kjsah dkjsahdkjjksah dkjh sakjdh kjsah dk dkasjh dasjhdkjash dkjash dkjash djkashjkdh askjhd kjasd hkjash dkjash kjadsh kjdash kjdsah kjdsah kjasdh kjsadh kjdh skjh dsakj',
                  onChange: () => console.log(''),
                  fullWidth: true,
                }}
                overrideLinkProps={{
                  label: 'Ovveride Link',
                  value: 'test Ovveride link',
                  onChange: () => console.log(''),
                  fullWidth: true,
                }}
              />
              <Title label="Title" value="Title for the image" fullWidth />
              <Title label="Title" value="Title for the image" fullWidth />
              <Title label="Title" value="Title for the image" fullWidth />
              <Title label="Title" value="Title for the image" fullWidth />
              <Title label="Title" value="Title for the image" fullWidth />
              <Title label="Title" value="Title for the image" fullWidth />
              <Title label="Title" value="Title for the image" fullWidth />
              <Title label="Title" value="Title for the image" fullWidth />
              <Title label="Title" value="Title for the image" fullWidth />
              <Title label="Title" value="Title for the image" fullWidth />
              <Title label="Title" value="Title for the image" fullWidth />
            </div>
            <div className={style['keywords-wrapper']}>tab 2</div>
            <div className={style['meta-data-wrapper']}>tab 3</div>
          </DenCustomTabs>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default ImageAuthoring;
