import React, { useRef } from 'react';
import style from './imageauth.module.scss';
import {
  AlingType,
  DenCustomTabs,
  DenImageCard,
  LabelValue,
  Title,
  TitleForUrl,
  ImageCaption,
  Footer,
} from '../../composite';
import {
  DenFormControl,
  DenInputLabel,
  DenMenuItem,
  DenSelect,
  DenTypography,
} from '../../common';
import { DenTextField } from '../../common/textfield/textfield.component';
import DenCheckbox from '../../common/checkbox/checkbox.component';
import DenFormControlLabel from '../../common/formcontrollabel/formcontrolllabel.component';
import useCustomScrollbar from '../../../customhooks/usecustomscrollbar';
import { DenThemeDefault, DenThemeProvider } from '../../../styles';
import DenmarkDefault from '../../../styles/themes/denmarktheme';

/**
 * Error should be field name plus Error if field is caption then error field would be captionError
 * Warning should be field name plus Warning if field is caption then Warning field would be captionWarning
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
  const tabComponentRef = useRef(null);
  useCustomScrollbar(tabComponentRef);
  return (
    <DenThemeProvider theme={DenmarkDefault}>
      <div className={style['image-auth-wrapper']}>
        <div className={style['image-auth-left-panel']}>
          <DenImageCard
            src="https://picsum.photos/900/1600"
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
            variant="standard"
          >
            <div
              ref={tabComponentRef}
              className={style['primary-data-wrapper']}
            >
              <LabelValue label="MSID" value="8763426" seperator=":" />
              <Title
                label="Image Title"
                value="Title for the image"
                fullWidth
                wrapperClass={style['title-wrapper']}
              />
              <TitleForUrl
                seoTitleProps={{
                  label: 'Title for URL',
                  value: 'seo title',
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
              <ImageCaption
                caption="test"
                captionTitle="Caption"
                onChange={(str) => {}}
              />
              <DenTypography variant="h6">Credits</DenTypography>
              <div className="row">
                <DenFormControlLabel
                  control={<DenCheckbox defaultChecked />}
                  label="Not related to any agency"
                  className="column-12"
                />
                <DenTextField
                  label="Justification"
                  wrapperClass="column-6"
                  valueProps={{ sx: { mr: '25px', mb: '25px' } }}
                />
                <DenTextField
                  label="Add Image Agency"
                  wrapperClass="column-6"
                  valueProps={{ sx: { mb: '25px' } }}
                />
                <DenTextField
                  label="Add Caption Agency"
                  wrapperClass="column-6"
                  valueProps={{ sx: { mr: '25px', mb: '25px' } }}
                />
                <DenTextField
                  label="Add Photographer Byline"
                  wrapperClass="column-6"
                  valueProps={{ sx: { mb: '25px' } }}
                />
              </div>
            </div>
            <div className={style['keywords-wrapper']}>tab 2</div>
            <div className={style['meta-data-wrapper']}>tab 3</div>
          </DenCustomTabs>
        </div>
      </div>
      <Footer>
        <DenFormControl>
          <DenInputLabel id="demo-simple-select-label">Age</DenInputLabel>
          <DenSelect
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={10}
            label="Age"
            onChange={() => {}}
            variant="standard"
            classes={{
              standard: style['custom-select-root'],
            }}
          >
            <DenMenuItem value={10}>Ten</DenMenuItem>
            <DenMenuItem value={20}>Twenty</DenMenuItem>
            <DenMenuItem value={30}>Thirty</DenMenuItem>
          </DenSelect>
        </DenFormControl>
      </Footer>
    </DenThemeProvider>
  );
};
export default ImageAuthoring;
