import React, { useEffect } from 'react';
import styles from './betakeywords.module.scss';
import { Divider } from '@mui/material';
import {
  BetaKeywordsWrapperProps
} from './betakeywords.types';
import { DenBox, DenCircularProgress, DenLink } from '../../common';
import BetaRecommendChips from './betarecommendchips';
import BetaKeywordsMetaFields from './betakeywords.metafields';
import BetaKeywordsAddedChips from './betakeywords.addedchips';
import BetaSearchKeywordWrapper from './betakeywords.searchwrapper';

export const BetaKeywordsWrapper = (props: BetaKeywordsWrapperProps) => {
  const {
    wrapperClassName,
    addedKeywordsClassName,
    autoAddKeywordsClassName,
    searchKeywordConfig,
    addBtnConfig,
    addedKeywordsConfig,
    recommendConfig,
    metaKeywordsConfig
  } = props;

  useEffect(() => {
    if (addedKeywordsConfig?.autoPopulateKeywordsAndMeta) {
      addedKeywordsConfig.handleAutoPopulateKeywordsAndMeta();
    }
  }, []);

  return (
    <div className={`${styles.seoKeywordsWrapper} ${wrapperClassName ? ' ' + wrapperClassName : ''}`}>
      <div className={styles.seoAddedKeywords}>
        <div className={styles.addedKeywordsWrapper}>
          <div className={`${styles['added-keywords']} ${addedKeywordsClassName ? ' ' + addedKeywordsClassName : ''}`}>
            {`${addedKeywordsConfig.label} (${addedKeywordsConfig.keywords?.length || 0})`}
            {addedKeywordsConfig.showComplianceIcons && (
              <div className={styles.seo_complianticon}>
                {addedKeywordsConfig.showNonCompliantIcon ? addedKeywordsConfig.nonCompliantIcon : addedKeywordsConfig.complianceIcon}
              </div>
            )}
            {addedKeywordsConfig.showPreviewLabel &&
              <>
                <div className={styles.preview_seprator}></div>
                <DenLink component='div' className={styles.preview_label} underline="hover" onClick={addedKeywordsConfig.handlePreviewCallBack}>
                  {addedKeywordsConfig.previewLabel}
                </DenLink>
              </>
            }
          </div>
          <div className={`${styles['autoAdd-keywords']} ${autoAddKeywordsClassName ? ' ' + autoAddKeywordsClassName : ''}`}>
            <div
              className={`${styles['autoAdd-label']} ${addedKeywordsConfig.isAutoAddEnable ? '' : styles.disabled}`}
              onClick={addedKeywordsConfig.handleAutoAddBtn}
            >
              {addedKeywordsConfig.autoAddLabel}
            </div>
            <div className={styles.seperator}></div>
            <div
              className={`${styles.clearAll} ${addedKeywordsConfig.keywords?.length > 0 ? '' : styles.disabled}`}
              onClick={addedKeywordsConfig.handleClearAll}
            >
              {addedKeywordsConfig.clearAllLabel}
            </div>
          </div>
        </div>
        {addedKeywordsConfig.isAutoAddKeywordLoading ? (
          <DenBox
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '20px',
              marginTop: '16px',
            }}
          >
            <DenCircularProgress size={22} />
          </DenBox>
        ) : (
          <BetaKeywordsAddedChips {...addedKeywordsConfig} />
        )}
      </div>
      <BetaSearchKeywordWrapper searchKeywordConfig={searchKeywordConfig} addBtnConfig={addBtnConfig} />
      <BetaRecommendChips {...recommendConfig} />
      {!metaKeywordsConfig?.hideMetaComponent && (
        <>
          <Divider />
          <BetaKeywordsMetaFields {...metaKeywordsConfig} />
        </>
      )}
    </div>
  );
};

export default BetaKeywordsWrapper;