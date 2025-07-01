import clsx from 'clsx';
import React, { FC } from 'react';
import style from './mediaauthrightsection.module.scss';
import { MediaAuthRightSectionProps } from '../mediaauth.types';
import KeywordsWrapper from '../../keywords/keywords.wrapper';
import SimpleTabs from '../../../composite/simpletabs/simpletabs.component';
import { TAB_MAP } from '../mediaauth.constants';
import MediaPrimaryDataForm from '../mediaprimarydataform/mediaprimarydataform.component';
import _ from 'lodash';

export const MediaAuthRightSection: FC<MediaAuthRightSectionProps> = ({
  tabTitleList,
  selectedTab,
  handleTabChange,
  msid,
  title,
  titleForUrl,
  mediaCaption,
  mediaSummary,
  keywordConfig,
  classes = {},
  MetadataComp,
  publishSectionProps={},
  primaryAuthorProps={},
  secondaryAuthorProps={},
  agencyProps={}
}) => {
  const handleChange = (event: React.SyntheticEvent, value: any) => {
    handleTabChange(value);
  };

  return (
    <div className={clsx(style['media-auth-right-panel'], classes.root)}>
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
      <div className={style['media-tab-content-wrapper']}>
        {selectedTab == TAB_MAP.primary && (
          <MediaPrimaryDataForm
            title={title}
            mediaCaption={mediaCaption}
            mediaSummary={mediaSummary}
            titleForUrl={titleForUrl}
            msid={msid}
            publishSectionProps={publishSectionProps}
            primaryAuthorProps={primaryAuthorProps}
            secondaryAuthorProps={secondaryAuthorProps}
            agencyProps={agencyProps}
          />
        )}
        {selectedTab == TAB_MAP.keywords && (
          <div className={style['keywords-wrapper']}>
            <KeywordsWrapper
              searchKeywordConfig={keywordConfig.searchKeywordConfig}
              addBtnConfig={keywordConfig.addBtnConfig}
              addedKeywordsConfig={keywordConfig.addedKeywordsConfig}
              recommendConfig={keywordConfig.recommendConfig}
              aiImageTagsConfig={keywordConfig.aiImageTagsConfig}
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
export default MediaAuthRightSection;
