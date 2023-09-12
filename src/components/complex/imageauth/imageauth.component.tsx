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
import PrimeCategory from '../../composite/primecategory/primecategory.component';
import PublishDate from '../../composite/publishdate/publishdate.component';
import ActivationStatus from '../../composite/activationstatus/activationstatus.component';
import { SelectChangeEvent } from '@mui/material';
import { Cancel } from '../../../assets';
import { ImageAuthoringProps } from './imageauth.types';
import AsyncAutoComplete from '../../common/asynchronousautocomplete/asyncautocomplete.component';
import { AutocompleteRenderInputParams } from '@mui/material/Autocomplete/Autocomplete';

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

export const ImageAuthoring = (props: ImageAuthoringProps) => {
  const {
    metaInformation,
    src,
    tabTitleList,
    msid,
    title,
    titleForUrl,
    imageCaption,
    primeCategoris,
    primeCategoryLabel,
    primeType,
    publishDate,
    isPrimeEnable,
    isPublished,
    handlePrimeChange,
    activationChangeHandle,
    activationStatus,
    activationStatusOptions,
    activationStatusLabel,
  } = props;
  const tabComponentRef = useRef(null);
  useCustomScrollbar(tabComponentRef);
  const onClickEdit = () => {};
  const onClickDelete = () => {};
  return (
    <DenThemeProvider theme={DenmarkDefault}>
      <div className={style['image-auth-wrapper']}>
        <div className={style['image-auth-left-panel']}>
          <DenImageCard
            src={src}
            wrapperClassName={style['image-container']}
            imageClassName={style['image']}
          />
          <div className={style['meta-info-wrapper'] + ' row'}>
            {metaInformation.map((elm) => (
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
            tabTitleList={tabTitleList}
            centered={true}
            variant="standard"
          >
            <div
              ref={tabComponentRef}
              className={style['primary-data-wrapper']}
            >
              <LabelValue label="MSID" value={msid ?? 'New'} seperator=":" />
              <Title {...title} wrapperClass={style['title-wrapper']} />
              <TitleForUrl {...titleForUrl} />
              <ImageCaption {...imageCaption} />
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
                  disabled={true}
                />
                <AsyncAutoComplete
                  renderInput={function (
                    params: AutocompleteRenderInputParams
                  ): React.ReactNode {
                    throw new Error('Function not implemented.');
                  }}
                  options={[]}
                  label="Image Agency"
                />
                <AsyncAutoComplete
                  label="Add Caption Agency"
                  wrapperClass="column-6"
                  renderInput={function (
                    params: AutocompleteRenderInputParams
                  ): React.ReactNode {
                    throw new Error('Function not implemented.');
                  }}
                  options={[]}
                />
                <AsyncAutoComplete
                  label="Add Photographer Byline"
                  wrapperClass="column-6"
                  renderInput={function (
                    params: AutocompleteRenderInputParams
                  ): React.ReactNode {
                    throw new Error('Function not implemented.');
                  }}
                  options={[]}
                />
              </div>
            </div>
            <div className={style['keywords-wrapper']}>tab 2</div>
            <div className={style['meta-data-wrapper']}>
              <DenGrid item xs={5} className={metaStyle['metadataLeftPanel']}>
                <MetadataSummary
                  title={META_CONST.metaSummaryTitle}
                  value={Summary}
                  onClickEdit={onClickEdit}
                  onClickDelete={onClickDelete}
                />
              </DenGrid>
            </div>
          </DenCustomTabs>
        </div>
      </div>
      <Footer>
        <PrimeCategory
          primeCategoris={primeCategoris}
          primeCategoryLabel={primeCategoryLabel}
          primeType={primeType}
          isPrimeEnable={isPrimeEnable}
          isPublished={isPublished}
          handlePrimeChange={handlePrimeChange}
        />
        <PublishDate {...publishDate} />
        <ActivationStatus
          activationStatusOptions={activationStatusOptions}
          activationChangeHandle={activationChangeHandle}
          activationStatus={activationStatus}
          activationStatusLabel={activationStatusLabel}
        />
      </Footer>
    </DenThemeProvider>
  );
};
export default ImageAuthoring;
