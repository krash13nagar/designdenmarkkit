import React from 'react';
import style from './imageauth.module.scss';
import { Footer } from '../../composite';
import { DenThemeProvider } from '../../../styles';
import DenmarkDefault from '../../../styles/themes/denmarktheme';
import PrimeCategory from '../../composite/primecategory/primecategory.component';
import PublishDate from '../../composite/publishdate/publishdate.component';
import ActivationStatus from '../../composite/activationstatus/activationstatus.component';
import { ImageAuthoringProps } from './imageauth.types';
import ImageAuthLeftSection from './imageauthleftsection/imageauthleftsection';
import ImageAuthRightSection from './imageauthrightsection/imageauthrightsection';

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
    keywordConfig,
    selectedTab = '',
    handleTabChange = () => {},
    imageCTAs = [],
    handleItemClick = () => {},
    metaClassName = '',
    metaColumnCount = 4,
  } = props;

  return (
    <DenThemeProvider theme={DenmarkDefault}>
      <div className={style['image-auth-wrapper']}>
        <ImageAuthLeftSection
          src={src}
          metaInformation={metaInformation}
          imageCTAs={imageCTAs}
          handleItemClick={handleItemClick}
          metaClassName={metaClassName}
          metaColumnCount={metaColumnCount}
        />
        <ImageAuthRightSection
          tabTitleList={tabTitleList}
          selectedTab={selectedTab}
          handleTabChange={handleTabChange}
          title={title}
          titleForUrl={titleForUrl}
          imageCaption={imageCaption}
          keywordConfig={keywordConfig}
          msid={msid}
        />
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
