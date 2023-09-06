import React, { useEffect, useRef, useState } from 'react';
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
  DenGrid,
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
import MetadataSummary from '../imageauthoring/metadata/metadata.summary';
import { META_CONST } from '../imageauthoring/metadata/metadata.constants';
import metaStyle from '../imageauthoring/metadata/metadata.module.scss';
import PrimeCategory from '../../composite/primecategory/primecategory.component';
import PublishDate from '../../composite/publishdate/publishdate.component';
import ActivationStatus from '../../composite/activationstatus/activationstatus.component';
import { SelectChangeEvent } from '@mui/material';
import { Cancel } from '../../../assets';

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

export const ImageAuthoring = (props: any) => {
  const tabComponentRef = useRef(null);
  useCustomScrollbar(tabComponentRef);
  const { summary, openMetaModel } = props.summaryProps;

  const onClickEdit = () => {};
  const onClickDelete = () => {};
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
                  color="primary"
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
            <div className={metaStyle['metadataLeftPanel']}>
              <MetadataSummary
                title={META_CONST.metaSummaryTitle}
                isButtonVisible={true}
                isIconButtons={false}
                value={summary}
                openMetaModel={openMetaModel}
                dialogProps={props.dialogProps}
                metaProps={props.metaProps}
              />
            </div>
          </DenCustomTabs>
        </div>
      </div>
      <Footer>
        <PrimeCategory
          primeCategoryLabel="Prime Category"
          category={[
            {
              categoryId: 100,
              category: 'Prime Category 1',
            },
            {
              categoryId: 200,
              category: 'Prime Category 2',
            },
            {
              categoryId: 300,
              category: 'Prime Category 3',
            },
            {
              categoryId: 400,
              category: 'Prime Category 4',
            },
            {
              categoryId: 500,
              category: 'Prime Category 5',
            },
          ]}
          isPrimeEnable={true}
          primeType={500}
          isPublished={true}
          handlePrimeChange={() => {}}
        />
        <PublishDate
          PublishModalTitle={'Publish and Expiry Date'}
          onAutoCorrect={function (): void {
            throw new Error('Function not implemented.');
          }}
          onReset={function (): void {
            throw new Error('Function not implemented.');
          }}
          onClose={function (): void {
            throw new Error('Function not implemented.');
          }}
          onDone={function (preventCloseOnDone: boolean): void {
            throw new Error('Function not implemented.');
          }}
          preventCloseOnDone={false}
          overrideClose={''}
          callback={function (
            arr: { [key: string]: string; value: any }[]
          ): void {
            throw new Error('Function not implemented.');
          }}
          publishDateLabel="Publish Date"
          publishDate={1693819795753}
          expiresIn={1693824566621}
        />
        <ActivationStatus
          activationStatusOptions={[
            { title: 'Active', value: '0', icon: <Cancel /> },
            { title: 'InActive', value: '1', icon: <Cancel /> },
            { title: 'Unavaialble', value: '2', icon: <Cancel /> },
            { title: 'block', value: '3', icon: <Cancel /> },
          ]}
          activationChangeHandle={function (
            event: SelectChangeEvent<unknown>,
            child: React.ReactNode
          ): void {
            throw new Error('Function not implemented.');
          }}
          activationStatus={'0'}
        />
      </Footer>
    </DenThemeProvider>
  );
};
export default ImageAuthoring;
