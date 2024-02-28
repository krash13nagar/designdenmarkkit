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
    primeCategoris = [],
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
        variant='outlined'
        value={primeType}
        onChange={handlePrimeChange}
        className="primeSelector"
      >
        {!isPublished && (
          <DenMenuItem key="0" value="0">
            Select
          </DenMenuItem>
        )}
        {primeCategoris?.map((item, index) => (
          <DenMenuItem key={index + 1} value={item.categoryId}>
            {item.category}
          </DenMenuItem>
        ))}
      </DenSelect>
    </DenFormControl>
  ) : null;
};
export default PrimeCategory;
