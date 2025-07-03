import React from 'react';
import styles from './betakeywords.module.scss';
import { Divider } from '@mui/material';
import { 
  BetaKeywordsWrapperProps
} from './betakeywords.types';
import { DenBox, DenCircularProgress } from '../../common';
import BetaRecommendChips from './betarecommendchips';
import BetaKeywordsMetaFields from './betakeywords.metafields';
import BetaKeywordsAddedChips from './betakeywords.addedchips';
import BetaSearchKeywordWrapper from './betakeywords.searchwrapper';

export const BetaKeywordsWrapper = (props: BetaKeywordsWrapperProps) => {
  const {
    searchKeywordConfig,
    addBtnConfig,
    addedKeywordsConfig,
    recommendConfig,
    metaKeywordsConfig
  } = props;

  return (
    <div className={styles.seoKeywordsWrapper}>
      <div className={styles.seoAddedKeywords}>
        <div className={styles.addedKeywordsWrapper}>
          <div className={styles['added-keywords']}>
            {`${addedKeywordsConfig.label} (${addedKeywordsConfig.keywords?.length || 0})`}
            {/* {addedKeywordsConfig.showComplianceIcons && <div className={styles.seo_complianticon}>
              {addedKeywordsConfig.showNonCompliantIcon ? 
                {addedKeywordsConfig.nonCompliantIcon} : 
                {addedKeywordsConfig.complianceIcon}
              }
            </div>
            } */}
            {addedKeywordsConfig.showArticlePreview && 
            <>
            <div className={styles.preview_seprator}></div>
            {/* <ArticlePreview 
              seoArticlePreviewCallBck={seoArticlePreviewCallBck} 
              isEscKeyPressed={isEscKeyPressed} 
              setIsEscKeyPressed={setIsEscKeyPressed}
            /> */}
            <div>Article Preview</div>
            </>
            }
          </div>
          <div className={styles['autoAdd-keywords']}>
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
      <Divider />
      <BetaKeywordsMetaFields {...metaKeywordsConfig} />
    </div>
  );
};

export default BetaKeywordsWrapper;