import React, { ForwardedRef, Ref, forwardRef } from 'react';
import style from './imageauth.module.scss';
import {
  DenCustomTabs,
  DenImageCard,
  LabelValue,
  Title,
  TitleForUrl,
} from '../../composite';
import { DenGrid } from '../../common';

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
    <div className={style['image-auth-wrapper']}>
      <div className={style['image-auth-left-panel']}>
        <DenImageCard src="https://picsum.photos/1920/1280" />
        {[{ label: 'Original Resolutions', value: '120x120 px' }].map((elm) => (
          <LabelValue {...elm} />
        ))}
      </div>
      <div className={style['image-auth-right-panel']}>
        <DenCustomTabs
          tabTitleList={['Primary Data', 'Keywords', 'Meta Data']}
          centered={true}
        >
          <div>
            <LabelValue label="MSID" value="8763426" />
            <Title label="Title" value="Title for the image" />
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
          </div>
          <div>tab 2</div>
          <div>tab 3</div>
        </DenCustomTabs>
      </div>
    </div>
  );
};
export default ImageAuthoring;
