import clsx from 'clsx';
import React, { FC } from 'react';
import { EditorTextField, LabelValue, TitleForUrl } from '../../../composite';
import style from './primarydataform.module.scss';
import { PrimaryDataFormProps } from '../imageauth.types';
import {
  DenCheckbox,
  DenFormControlLabel,
  DenGrid,
  DenTextField,
  DenTypography,
} from '../../../common';
import AutoCompleteInput from '../../../common/autocompleteinput/autocompleteinput.component';
import AgencyIcon from '../../../../assets/cdsicons/agencyicon';

export const PrimaryDataForm: FC<PrimaryDataFormProps> = ({
  msid,
  title,
  titleForUrl,
  imageCaption,
  classes = {},
  captionBylineProps,
  photographerBylineProps,
  captionAgencyProps,
  imageAgencyProps,
  isNotRelatedToAgency = false,
  handleNotRelatedToAgencyChange = () => {},
  justificationProps = {},
  showAgencyMessage = false,
  agencyMessage = '',
  showBylineMessage = false,
  bylineMessage = '',
}) => {
  return (
    <div className={clsx(style['primary-data-wrapper'], classes.root)}>
      <LabelValue label="MSID" value={msid ?? 'New'} seperator=":" />
      <EditorTextField key={'title'} {...title} isTitle />
      <TitleForUrl {...titleForUrl} />
      <EditorTextField key={'caption'} {...imageCaption} />
      <DenTypography variant="h6">Credits</DenTypography>
      <div className={'cds-row'}>
        <DenFormControlLabel
          sx={{
            marginLeft: '-11px !important',
            marginRight: '16px !important',
          }}
          control={
            <DenCheckbox
              onChange={handleNotRelatedToAgencyChange}
              checked={isNotRelatedToAgency}
              disabled={
                imageAgencyProps.value?.length > 0 ||
                captionAgencyProps.value?.length > 0
              }
            />
          }
          label="Not related to any agency"
          color="primary"
        />
        <DenTextField
          wrapperClass={style['justification']}
          label="Justification"
          fullWidth
          disabled={!isNotRelatedToAgency}
          {...justificationProps}
        />
        <DenGrid container spacing={'16px'} sx={{ mb: '16px' }}>
          <DenGrid item xs={6}>
            <AutoCompleteInput
              disabled={isNotRelatedToAgency}
              hideSearchIcon
              {...imageAgencyProps}
              nowrap
            />
          </DenGrid>
          <DenGrid item xs={6}>
            <AutoCompleteInput
              disabled={isNotRelatedToAgency}
              hideSearchIcon
              {...captionAgencyProps}
              nowrap
            />
          </DenGrid>
          <DenGrid
            item
            xs={12}
            sx={{ pt: '2px !important', pb: '2px !important' }}
          >
            {showAgencyMessage && (
              <div>
                <AgencyIcon width="13" height="10" />
                <span className={style['helper-text-agency']}>
                  {agencyMessage}
                </span>
                <br />
              </div>
            )}
          </DenGrid>
        </DenGrid>
        <DenGrid container spacing={'16px'} sx={{ mb: '16px' }}>
          <DenGrid item xs={6}>
            <AutoCompleteInput {...captionBylineProps} hideSearchIcon />
          </DenGrid>
          <DenGrid item xs={6}>
            <AutoCompleteInput {...photographerBylineProps} hideSearchIcon />
          </DenGrid>
          <DenGrid
            item
            xs={12}
            sx={{ pt: '2px !important', pb: '2px !important' }}
          >
            {showBylineMessage && (
              <div>
                <AgencyIcon width="13" height="10" />
                <span className={style['helper-text-agency']}>
                  {bylineMessage}
                </span>
                <br />
              </div>
            )}
          </DenGrid>
        </DenGrid>
      </div>
    </div>
  );
};
export default PrimaryDataForm;
