import React from 'react';
import {
  InputAdornment,
  CircularProgress,
} from '@mui/material';
import styles from './betakeywords.module.scss';
import { BetaKeywordsMetaFieldsProps } from './betakeywords.types';
import { DenBox, DenTextField, DenTypography } from '../../common';

const BetaKeywordsMetaFields = (props: BetaKeywordsMetaFieldsProps) => {
  const {
    metaDescriptionPlaceholder,
    metaDescriptionLabel,
    metaKeywordsLabel,
    metaTitleLabel,
    metaKeywordsPlaceholder,
    metaTitlePlaceholder,
    metaDescriptionValue,
    metaKeywordsValue,
    metaTitleValue,
    isMetaDataLoading,
    isAutoAddMetaBtnEnable,
    isClearAllMetaBtnEnable,
    autoAddMetaLabel,
    clearAllMetaLabel,
    handleAutoAddMetasFnc,
    handleClearAllMetaFnc,
    handleMetaDescriptionFnc,
    handleMetaKeywordsFnc,
    handleMetaTitleFnc,
  } = props;

  return (
    <DenBox className={styles['meta-container']}>
      <DenBox className={styles['meta-container-title']}>
        <DenTypography className={styles['meta-title']}>{metaTitleLabel}</DenTypography>
        <DenBox className={styles['meta-auto-add-clearAll-wrapper']}>
          <div
            className={`${styles['auto-add-metas']} ${
              isAutoAddMetaBtnEnable ? '' : styles.disabled
            }`}
            onClick={handleAutoAddMetasFnc}
          >
            {autoAddMetaLabel}
          </div>
          <div className={styles.seperator}></div>
          <div
            className={`${styles['clear-all']} ${isClearAllMetaBtnEnable ? '' : styles.disabled}`}
            onClick={handleClearAllMetaFnc}
          >
            {clearAllMetaLabel}
          </div>
        </DenBox>
      </DenBox>

      <DenTextField
        placeholder={isMetaDataLoading && !metaTitleValue ? '' : metaTitlePlaceholder}
        fullWidth
        wrapperClass={styles['metaTitle-txtfield']}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleMetaTitleFnc(event)}
        autoComplete="off"
        value={isMetaDataLoading && !metaTitleValue ? '' : metaTitleValue}
        InputProps={{
          startAdornment: isMetaDataLoading && !metaTitleValue ? (
            <InputAdornment position="start">
              <CircularProgress size={18} />
            </InputAdornment>
          ) : null,
          sx: {
            height: "30px",
            marginBottom: "16px",
            borderRadius: "2px",
          },
        }}
      />

      <DenTypography className={styles['meta-keywords-title']}>{metaKeywordsLabel}</DenTypography>

      <DenTextField
        placeholder={isMetaDataLoading && !metaKeywordsValue ? '' : metaKeywordsPlaceholder}
        fullWidth
        wrapperClass={styles['metaKeyword-txtfield']}
        onChange={handleMetaKeywordsFnc}
        autoComplete="off"
        value={isMetaDataLoading && !metaKeywordsValue ? '' : metaKeywordsValue}
        InputProps={{
          startAdornment: isMetaDataLoading && !metaKeywordsValue ? (
            <InputAdornment position="start">
              <CircularProgress size={18} />
            </InputAdornment>
          ) : null,
          sx: {
            height: "30px",
            marginBottom: "16px",
            borderRadius: "2px",
          },
        }}
      />

      <DenTypography className={styles['meta-description-title']}>
        {metaDescriptionLabel}
      </DenTypography>

      <DenTextField
        placeholder={isMetaDataLoading && !metaDescriptionValue ? '' : metaDescriptionPlaceholder}
        fullWidth
        wrapperClass={styles['metaDescrptn-txtfield']}
        onChange={handleMetaDescriptionFnc}
        autoComplete="off"
        value={isMetaDataLoading && !metaDescriptionValue ? '' : metaDescriptionValue}
        InputProps={{
          startAdornment: isMetaDataLoading && !metaDescriptionValue ? (
            <InputAdornment position="start">
              <CircularProgress size={18} />
            </InputAdornment>
          ) : null,
          sx: {
            height: "30px",
            marginBottom: "16px",
            borderRadius: "2px",
          },
        }}
      />
    </DenBox>
  );
};

export default BetaKeywordsMetaFields; 