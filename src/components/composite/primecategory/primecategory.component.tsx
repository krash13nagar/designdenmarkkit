import React from 'react';
import {
  DenSelect,
  DenMenuItem,
  DenInputLabel,
  DenFormControl,
} from '../../common';
import { PrimeCategoryProps } from './primecategory.types';
const PrimeCategory = (props: PrimeCategoryProps) => {
  const {
    primeCategoryLabel = 'Prime Category',
    primeType = 0,
    category = [],
    isPrimeEnable = false,
    isPublished = false,
    handlePrimeChange,
  } = props;
  return isPrimeEnable ? (
    <DenFormControl>
      <DenInputLabel id="demo-simple-select-label" shrink>
        {primeCategoryLabel}
      </DenInputLabel>
      <DenSelect
        value={primeType}
        onChange={handlePrimeChange}
        className="primeSelector"
      >
        {!isPublished && (
          <DenMenuItem key="0" value="0">
            Select
          </DenMenuItem>
        )}
        {category?.map((item, index) => (
          <DenMenuItem key={index + 1} value={item.categoryId}>
            {item.category}
          </DenMenuItem>
        ))}
      </DenSelect>
    </DenFormControl>
  ) : null;
};
export default PrimeCategory;
