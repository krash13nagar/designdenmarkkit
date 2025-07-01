import React, { useState, useRef, useEffect } from 'react';
import style from './mediaauth.module.scss';
import { Footer } from '../../composite';
import PrimeCategory from '../../composite/primecategory/primecategory.component';
import PublishDate from '../../composite/publishdate/publishdate.component';
import ActivationStatus from '../../composite/activationstatus/activationstatus.component';
import { MediaAuthoringProps } from './mediaauth.types';
import MediaAuthLeftSection from './mediaauthleftsection/mediaauthleftsection';
import MediaAuthRightSection from './mediaauthrightsection/mediaauthrightsection';
import ReportPopup from './reportpopup/reportpopup.component';
import clsx from 'clsx';
import './mediaauth.styles.scss';
import {
  DenBox,
  DenButton,
  DenCheckbox,
  DenFormControlLabel,
} from '../../common';
import DenFormGroup from '../../common/formgroup/formgroup.component';

export const MediaAuthoring = (props: MediaAuthoringProps) => {
  const {
    metaInformation,
    src,
    tabTitleList,
    msid,
    parentMsid,
    slikeId,
    title,
    titleForUrl,
    mediaCaption,
    mediaSummary,
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
    MetadataComp,
    actionButtonsList = [],
    mediaError,
    footerCheckBoxList = [],
    onFooterCheckBoxChange = () => { },
    enableReportButton = false,
    reportButtonProps = {},
    mediaUploaderLoaderProps = {},
    publishSectionProps = {},
    primaryAuthorProps = {},
    secondaryAuthorProps = {},
    agencyProps = {}
  } = props;

  const [isReportPopupOpen, setIsReportPopupOpen] = useState(false);
  const [footerHeight, setFooterHeight] = useState(65);
  const reportButtonRef = useRef<HTMLButtonElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (footerRef.current) {
      setFooterHeight(footerRef.current.clientHeight);
    }
  }, []);

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
      <DenBox
        className={clsx(style['media-auth-wrapper'], 'cds-media-auth-wrapper')}
        sx={{
          height: `calc(100% - ${footerHeight + 2}px)`,
        }}
      >
        <MediaAuthLeftSection
          src={src}
          metaInformation={metaInformation}
          imageCTAs={imageCTAs}
          handleItemClick={handleItemClick}
          metaClassName={metaClassName}
          metaColumnCount={metaColumnCount}
          mediaError={mediaError}
          msid={msid}
          parentMsid={parentMsid}
          slikeId={slikeId}
          mediaUploaderLoaderProps={mediaUploaderLoaderProps}
        />
        <MediaAuthRightSection
          tabTitleList={tabTitleList}
          selectedTab={selectedTab}
          handleTabChange={handleTabChange}
          title={title}
          titleForUrl={titleForUrl}
          mediaCaption={mediaCaption}
          mediaSummary={mediaSummary}
          keywordConfig={keywordConfig}
          msid={msid}
          MetadataComp={MetadataComp}
          publishSectionProps={publishSectionProps}
          primaryAuthorProps={primaryAuthorProps}
          secondaryAuthorProps={secondaryAuthorProps}
          agencyProps={agencyProps}
        />
      </DenBox>
      <Footer ref={footerRef}>
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
        <div className="media-auth-footer-wrapper" style={{ position: 'relative' }}>
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
              <DenButton
                ref={reportButtonRef}
                variant="outlined"
                color="error"
                onClick={handleReportButtonClick}
              >
                Report
              </DenButton>
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
          <ReportPopup
            isOpen={isReportPopupOpen}
            reportButtonProps={reportButtonProps}
            onCancel={handleReportCancel}
            onConfirm={handleReportConfirm}
            position={{ top: '-160px', right: '197px' }}
          />
        </div>
      </Footer>
    </>
  );
};
export default MediaAuthoring;
