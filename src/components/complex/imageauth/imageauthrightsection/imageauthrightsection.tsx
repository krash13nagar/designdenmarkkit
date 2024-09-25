import clsx from 'clsx';
import React, { FC } from 'react';
import style from './imageauthrightsection.module.scss';
import { ImageAuthRightSectionProps } from '../imageauth.types';
import KeywordsWrapper from '../../keywords/keywords.wrapper';
import SimpleTabs from '../../../composite/simpletabs/simpletabs.component';
import { TAB_MAP } from '../imageauth.constants';
import PrimaryDataForm from '../primarydataform/primarydataform.component';
import _ from 'lodash';

export const ImageAuthRightSection: FC<ImageAuthRightSectionProps> = ({
  tabTitleList,
  selectedTab,
  handleTabChange,
  msid,
  title,
  titleForUrl,
  imageCaption,
  keywordConfig,
  classes = {},
  captionBylineProps,
  photographerBylineProps,
  captionAgencyProps,
  imageAgencyProps,
  handleNotRelatedToAgencyChange = () => { },
  isNotRelatedToAgency = false,
  justificationProps = {},
  showAgencyMessage = false,
  agencyMessage = '',
  showBylineMessage = false,
  bylineMessage = '',
  MetadataComp,
}) => {
  const handleChange = (event: React.SyntheticEvent, value: any) => {
    handleTabChange(value);
  };

  return (
    <div className={clsx(style['image-auth-right-panel'], classes.root)}>
      <SimpleTabs
        tabsProps={{ centered: true, variant: 'standard', sx: { mb: '16px' } }}
        tabProps={{
          sx: {
            borderBottom: '1px solid #E9E9F0',
            paddingBottom: '4px !important',
          },
        }}
        value={selectedTab}
        handleChange={handleChange}
        tabsList={tabTitleList}
      />
      <div className={style['image-tab-content-wrapper']}>
        {selectedTab == TAB_MAP.primary && (
          <PrimaryDataForm
            title={title}
            imageCaption={imageCaption}
            titleForUrl={titleForUrl}
            msid={msid}
            captionBylineProps={captionBylineProps}
            photographerBylineProps={photographerBylineProps}
            captionAgencyProps={captionAgencyProps}
            imageAgencyProps={imageAgencyProps}
            handleNotRelatedToAgencyChange={handleNotRelatedToAgencyChange}
            isNotRelatedToAgency={isNotRelatedToAgency}
            justificationProps={justificationProps}
            showAgencyMessage={showAgencyMessage}
            agencyMessage={agencyMessage}
            showBylineMessage={showBylineMessage}
            bylineMessage={bylineMessage}
          />
        )}
        {selectedTab == TAB_MAP.keywords && (
          <div className={style['keywords-wrapper']}>
            <KeywordsWrapper
              searchKeywordConfig={keywordConfig.searchKeywordConfig}
              addBtnConfig={keywordConfig.addBtnConfig}
              addKeywordsConfig={keywordConfig.addKeywordsConfig}
              recommendConfig={keywordConfig.recommendConfig}
            />
          </div>
        )}

        {selectedTab == TAB_MAP.metadata && (
          <div className={style['meta-data-wrapper']}>
            {!_.isEmpty(MetadataComp) && MetadataComp}
          </div>
        )}
      </div>
    </div>
  );
};
export default ImageAuthRightSection;
