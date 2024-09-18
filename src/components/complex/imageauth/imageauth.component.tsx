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
import clsx from 'clsx';
import './imageauth.styles.scss';
import { DenBox, DenButton } from '../../common';

export const ImageAuthoring = (props: ImageAuthoringProps) => {
  const {
    metaInformation,
    src,
    tabTitleList,
    msid,
    title,
    titleForUrl,
    imageCaption,
    primeCategories,
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
    captionBylineProps = {},
    imageAgencyProps = {},
    captionAgencyProps = {},
    photographerBylineProps = {},
    isNotRelatedToAgency = false,
    handleNotRelatedToAgencyChange = () => {},
    justificationProps = {},
    showAgencyMessage = false,
    agencyMessage = '',
    showBylineMessage = false,
    bylineMessage = '',
    MetadataComp,
    actionButtonsList = [],
  } = props;

  return (
    <DenThemeProvider theme={DenmarkDefault}>
      <div
        className={clsx(style['image-auth-wrapper'], 'cds-image-auth-wrapper')}
      >
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
          captionBylineProps={captionBylineProps}
          photographerBylineProps={photographerBylineProps}
          imageAgencyProps={imageAgencyProps}
          captionAgencyProps={captionAgencyProps}
          handleNotRelatedToAgencyChange={handleNotRelatedToAgencyChange}
          isNotRelatedToAgency={isNotRelatedToAgency}
          justificationProps={justificationProps}
          showAgencyMessage={showAgencyMessage}
          agencyMessage={agencyMessage}
          showBylineMessage={showBylineMessage}
          bylineMessage={bylineMessage}
          MetadataComp={MetadataComp}
        />
      </div>
      <Footer>
        <DenBox sx={{ flex: 1 }}></DenBox>
        <div className="image-auth-footer-wrapper">
          <PrimeCategory
            primeCategories={primeCategories}
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

          <div className="cds-action-buttons-wrapper">
            {actionButtonsList?.map((action) => (
              <DenButton
                key={action.label}
                onClick={action.onClick}
                variant={action.variant}
                color={action.color}
                {...(action.props || {})}
              >
                {action.label}
              </DenButton>
            ))}
          </div>
        </div>
      </Footer>
    </DenThemeProvider>
  );
};
export default ImageAuthoring;
