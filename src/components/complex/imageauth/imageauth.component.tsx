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
import Summary from '../imageauthoring/metadata/metadata.sample.summary';
import metaStyle from '../imageauthoring/metadata/metadata.module.scss';
import CommonDialog from '../../composite/commondialog/commondialog.component';
import Metadata from '../imageauthoring/metadata/metadata';
import { config } from '../imageauthoring/metadata/metadata.config';
import MetadataUtils from '../imageauthoring/metadata/metadata.utils';
import { any } from 'prop-types';

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
  //const originalModel = JSON.parse(JSON.stringify(config.metadataConfig.value)) ;
  //const originalSummary = JSON.parse(JSON.stringify(config.metadataConfig.summary)) ;
  // const [group, selectedGroup] = useState(config.metadataConfig.selectedGroup);
  // const [open, setOpen] = useState(false);
  // const [triggerMBDone, setTriggerMBDone] = useState(false);
  // const [triggerMBReset, setTriggerMBReset] = useState(false);
  // const [model, setModel] = useState<any>(config.metadataConfig.value);
  // const [summary, setSummary] = useState<any>(Summary);

  const { summary, openMetaModel } = props.summaryProps;
  const { open, onCancelClick, onSaveClick, dialogClose } = props.dialogProps;
  const {
    metadataProps,
    metadataSelectorProps,
    metadataSummaryProps,
    metadataWidgetProps,
  } = props.metaProps;

  // useEffect(() => {
  //   if (model) {
  //       //update summary with change in model
  //       const _summary = MetadataUtils.makeSummary(model, summary);
  //       setSummary(_summary);
  //   }
  // }, [model])
  //const onClickEdit = () => {};
  // const onClickDelete = (item: any, value: any) => {
  //   const model = MetadataUtils.deleteMetadataGroup(
  //     item.metaGroup.metatype,
  //     value
  //   );
  //   return model;
  // };
  // const openMetaModel = () => {
  //   setOpen(true);
  // };
  // const onCancelClick = () => {
  //   // const _summary = MetadataUtils.makeSummary(originalModel);
  //   // setSummary(_summary);
  //   setTriggerMBReset(true);
  //   setTimeout(() => {
  //     setTriggerMBReset(false);
  //   }, 1000);
  //   setOpen(false);
  // };
  // const onSaveClick = () => {
  //   const _summary = MetadataUtils.makeSummary(model, summary);
  //   setSummary(_summary);
  //   setTriggerMBDone(true);
  //   setTimeout(() => {
  //     setTriggerMBDone(false);
  //   }, 1000);
  //   setOpen(false);
  // };
  // // const handleGroupChange = (group: string) => {
  // //   selectedGroup(group)
  // // };
  // const handleWidgetChange = (
  //   type: string | number,
  //   value: any,
  //   olderValue: any,
  //   msid: any
  // ) => {
  //   const obj = MetadataUtils.makeMetaObjectForModel(
  //     type,
  //     value,
  //     olderValue,
  //     msid
  //   );
  //   return obj;
  //   // model[type] = obj;
  //   // const newObj = Object.assign({},model);
  //   // setModel(newObj);
  //   //console.log(group);
  // };
  // const makeSummary = (model: any, summary: any) => {
  //   const _summary = MetadataUtils.makeSummary(model, summary);
  //   return _summary;
  // };

  // const updateModel = (model: any) => {
  //   setModel(model);
  // };

  // const metadataProps = {
  //   title: 'Selected Group',
  //   summary: config.metadataConfig.summary,
  //   selectedGroup: config.metadataConfig.selectedGroup,
  // };

  // const handleAutocomplete = () => {
  //   let data = [
  //     {
  //       id: 'TRAVEL GUIDE',
  //       value: 'TRAVEL GUIDE',
  //       title: 'TRAVEL GUIDE',
  //       display: {
  //         title: 'TRAVEL GUIDE',
  //       },
  //     },
  //     {
  //       id: 'Travel News',
  //       value: 'Travel News',
  //       title: 'Travel News',
  //       display: {
  //         title: 'Travel News',
  //       },
  //     },
  //     {
  //       id: 'TRAVEL TIPS',
  //       value: 'TRAVEL TIPS',
  //       title: 'TRAVEL TIPS',
  //       display: {
  //         title: 'TRAVEL TIPS',
  //       },
  //     },
  //     {
  //       id: 'TRAVEL TRENDS',
  //       value: 'TRAVEL TRENDS',
  //       title: 'TRAVEL TRENDS',
  //       display: {
  //         title: 'TRAVEL TRENDS',
  //       },
  //     },
  //   ];
  //   return data;
  // };
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
            <div className={style['meta-data-wrapper']}>
              <div className={metaStyle['metadataLeftPanel']}>
                <MetadataSummary
                  title={META_CONST.metaSummaryTitle}
                  isButtonVisible={true}
                  isIconButtons={false}
                  value={summary}
                  openMetaModel={openMetaModel}
                />
              </div>
            </div>
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
      <CommonDialog
        open={open}
        titleVariant="contained"
        dialogProps={{ maxWidth: 'md' }}
        title="Add/Edit Metadata"
        actionOptionsList={[
          {
            onClick: onCancelClick,
            label: 'Cancel',
            variant: 'outlined',
            color: 'primary',
          },
          {
            onClick: onSaveClick,
            label: 'Save & Add',
            variant: 'contained',
            color: 'primary',
          },
        ]}
        handleClose={(event: any, reason: any) => {
          dialogClose(event, reason);
        }}
        content={
          <Metadata
            metadataConfig={metadataProps}
            metadataSelectorConfig={metadataSelectorProps}
            metadataWidgetConfig={metadataWidgetProps}
            metadataSummaryConfig={metadataSummaryProps}
          />
        }
      />
    </DenThemeProvider>
  );
};
export default ImageAuthoring;
