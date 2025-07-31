import React, { useState, useRef } from 'react';
import style from './imageauth.module.scss';
import { Footer } from '../../composite';
import PrimeCategory from '../../composite/primecategory/primecategory.component';
import PublishDate from '../../composite/publishdate/publishdate.component';
import ActivationStatus from '../../composite/activationstatus/activationstatus.component';
import { ImageAuthoringProps } from './imageauth.types';
import ImageAuthLeftSection from './imageauthleftsection/imageauthleftsection';
import ImageAuthRightSection from './imageauthrightsection/imageauthrightsection';
import ReportPopup from './reportpopup/reportpopup.component';
import clsx from 'clsx';
import './imageauth.styles.scss';
import {
  DenBox,
  DenButton,
  DenCheckbox,
  DenFormControlLabel,
} from '../../common';
import DenFormGroup from '../../common/formgroup/formgroup.component';
import { CheckboxTypes } from '../../common/checkbox/checkbox.types';

export const ImageAuthoring = (props: ImageAuthoringProps) => {
  const {
    metaInformation,
    src,
    tabTitleList,
    msid,
    parentMsid,
    title,
    titleForUrl,
    imageCaption,
    primeCategories,
    primeCategoryLabel = 'Prime Category',
    primeType,
    publishDate,
    isPrimeEnable,
    isPublished,
    handlePrimeChange,
    activationChangeHandle,
    activationStatus,
    activationStatusOptions,
    activationStatusLabel,
    showActivationStatusEditIcon = false,
    onActivationStatusEditIconClick = () => { },
    activationStatusEditIconTitle = '',
    keywordConfig,
    selectedTab = '',
    handleTabChange = () => { },
    imageCTAs = [],
    handleItemClick = () => { },
    metaClassName = '',
    metaColumnCount = 4,
    captionBylineProps = {},
    imageAgencyProps = {},
    captionAgencyProps = {},
    photographerBylineProps = {},
    isNotRelatedToAgency = false,
    handleNotRelatedToAgencyChange = () => { },
    justificationProps = {},
    showAgencyMessage = false,
    agencyMessage = '',
    showBylineMessage = false,
    bylineMessage = '',
    MetadataComp,
    actionButtonsList = [],
    imageError,
    footerCheckBoxList = [],
    onFooterCheckBoxChange = () => { },
    enableReportButton = false,
    reportButtonProps = {}
  } = props;

  const [isReportPopupOpen, setIsReportPopupOpen] = useState(false);
  const reportButtonRef = useRef<HTMLButtonElement>(null);

  const handleReportButtonClick = () => {
    setIsReportPopupOpen(prev => !prev);
  };

  const handleReportCancel = () => {
    setIsReportPopupOpen(false);
    reportButtonProps.onCancel?.();
  };

  const handleReportConfirm = (selectedOption: string) => {
    setIsReportPopupOpen(false);
    reportButtonProps.onConfirm?.(selectedOption);
  };

  return (
    <>
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
          imageError={imageError}
          msid={msid}
          parentMsid={parentMsid}
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
        <DenBox sx={{ flex: 1, pl: '8px !important' }}>
          <DenFormGroup sx={{ flexDirection: 'row' }}>
            {footerCheckBoxList?.length > 0 &&
              footerCheckBoxList.map((chkbox, i) => {
                if (!chkbox.hide) {
                  return (
                    <DenFormControlLabel
                      key={(chkbox.id || i) as React.Key}
                      sx={{
                        marginLeft: '-11px !important',
                        marginRight: '16px !important',
                        '& .cds-MuiTypography-root': {
                          font: "normal normal normal 12px/17px 'Source Sans 3'",
                          color: '#4D4D4D',
                        },
                      }}
                      classes={{ label: 'mediumText' }}
                      control={
                        <DenCheckbox
                          sx={{
                            padding: '4px',
                            pl: '12px',
                          }}
                          disableRipple
                          id={chkbox.id}
                          onChange={(event) => {
                            onFooterCheckBoxChange?.({
                              id: chkbox.id,
                              checked: event.target.checked,
                              index: i,
                            });
                          }}
                          checked={chkbox.checked}
                          disabled={chkbox.disabled}
                        />
                      }
                      label={chkbox.label}
                      color="primary"
                    />
                  );
                }
                return null;
              })}
          </DenFormGroup>
        </DenBox>
        <div className="image-auth-footer-wrapper" style={{ position: 'relative' }}>
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
            showEditIcon={showActivationStatusEditIcon}
            onEditIconClick={onActivationStatusEditIconClick}
            editIconTitle={activationStatusEditIconTitle}
          />

          <div className="cds-action-buttons-wrapper">
            {enableReportButton && (
              <DenBox sx={{ position: 'relative' }}>
                <DenButton
                  ref={reportButtonRef}
                  variant="outlined"
                  color="error"
                  onClick={handleReportButtonClick}
                >
                  Report
                </DenButton>
                <ReportPopup
                  isOpen={isReportPopupOpen}
                  reportButtonProps={reportButtonProps}
                  onCancel={handleReportCancel}
                  onConfirm={handleReportConfirm}
                  position={{ top: '-165px', right: '0px' }}
                />
              </DenBox>
            )}

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

          {/* Report Popup */}
        </div>
      </Footer>
    </>
  );
};
export default ImageAuthoring;
