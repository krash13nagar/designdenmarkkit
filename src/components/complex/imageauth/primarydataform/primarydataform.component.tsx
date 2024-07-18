import clsx from 'clsx';
import React, { FC } from 'react';
import {
  ImageCaption,
  LabelValue,
  Title,
  TitleForUrl,
} from '../../../composite';
import style from './primarydataform.module.scss';
import { PrimaryDataFormProps } from '../imageauth.types';
import {
  DenCheckbox,
  DenFormControlLabel,
  DenTextField,
  DenTypography,
} from '../../../common';
import AsyncAutoComplete from '../../../common/asynchronousautocomplete/asyncautocomplete.component';
import { AutocompleteRenderInputParams } from '@mui/material/Autocomplete/Autocomplete';

export const PrimaryDataForm: FC<PrimaryDataFormProps> = ({
  msid,
  title,
  titleForUrl,
  imageCaption,
  classes = {},
}) => {
  return (
    <div className={clsx(style['primary-data-wrapper'], classes.root)}>
      <LabelValue label="MSID" value={msid ?? 'New'} seperator=":" />
      <Title {...title} wrapperClass={style['title-wrapper']} />
      <TitleForUrl {...titleForUrl} />
      <ImageCaption {...imageCaption} />
      <DenTypography variant="h6">Credits</DenTypography>
      <div className={'cds-row'}>
        <DenFormControlLabel
          control={<DenCheckbox defaultChecked />}
          label="Not related to any agency"
          className={'cds-column-12'}
          color="primary"
        />
        <DenTextField
          label="Justification"
          wrapperClass={'cds-column-6'}
          valueProps={{ sx: { mr: '25px', mb: '25px' } }}
          disabled={true}
        />
        <AsyncAutoComplete
          renderInput={function (
            params: AutocompleteRenderInputParams
          ): React.ReactNode {
            throw new Error('Function not implemented.');
          }}
          options={[]}
          label="Image Agency"
        />
        <AsyncAutoComplete
          label="Add Caption Agency"
          wrapperClass={'cds-column-6'}
          renderInput={function (
            params: AutocompleteRenderInputParams
          ): React.ReactNode {
            throw new Error('Function not implemented.');
          }}
          options={[]}
        />
        <AsyncAutoComplete
          label="Add Photographer Byline"
          wrapperClass={'cds-column-6'}
          renderInput={function (
            params: AutocompleteRenderInputParams
          ): React.ReactNode {
            throw new Error('Function not implemented.');
          }}
          options={[]}
        />
      </div>
    </div>
  );
};
export default PrimaryDataForm;
