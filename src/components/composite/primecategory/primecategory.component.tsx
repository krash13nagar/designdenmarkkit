import React from 'react';
import {
  DenSelect,
  DenMenuItem,
  DenInputLabel,
  DenFormControl,
} from '../../common';
import { PrimeCategoryProps } from './primecategory.types';
import './primecategory.styles.scss';

export const PrimeCategory = (props: PrimeCategoryProps) => {
  const {
    primeCategoryLabel = 'Prime Category',
    primeType = 0,
    primeCategories = [],
    isPrimeEnable = false,
    isPublished = false,
    handlePrimeChange,
  } = props;
  return isPrimeEnable ? (
    <DenFormControl className="cds-prime-category-root" sx={{ marginTop: '10px', marginRight: '10px' }}>
      <DenInputLabel id="cds-simple-select-label">
        {primeCategoryLabel}
      </DenInputLabel>
      <DenSelect
        value={primeType}
        onChange={handlePrimeChange}
        className="cds-prime-selector-root"
        plain
      >
        {!isPublished && (
          <DenMenuItem key="0" value="0">
            Select
          </DenMenuItem>
        )}
        {primeCategories?.map((item, index) => (
          <DenMenuItem key={index + 1} value={item.categoryId}>
            {item.category}
          </DenMenuItem>
        ))}
      </DenSelect>
    </DenFormControl>
  ) : null;
};
export default PrimeCategory;
