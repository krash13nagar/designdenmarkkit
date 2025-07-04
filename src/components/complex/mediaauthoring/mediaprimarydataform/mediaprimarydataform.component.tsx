import clsx from 'clsx';
import React, { FC } from 'react';
import { EditorTextField, PublishSection, TitleForUrl } from '../../../composite';
import style from './mediaprimarydataform.module.scss';
import { MediaPrimaryDataFormProps } from '../mediaauth.types';
import {
  AutoCompleteInput,
  DenBox,
  DenGrid,
  DenTypography,
} from '../../../common';
import Author from '../../../composite/author/author';

export const MediaPrimaryDataForm: FC<MediaPrimaryDataFormProps> = ({
  msid,
  title,
  titleForUrl,
  mediaCaption,
  mediaSummary,
  classes = {},
  publishSectionProps={},
  primaryAuthorProps={},
  secondaryAuthorProps={},
  agencyProps={}
}) => {
  return (
    <div className={clsx(style['primary-data-wrapper'], classes.root)}>
      <EditorTextField
        key={'title'}
        {...title}
        classes={{ root: style['media-title'] }}
        small
      />
      <TitleForUrl {...titleForUrl} />
      <DenBox sx={{ marginTop: '16px' }}>
        <PublishSection {...publishSectionProps}/>
      </DenBox>
      <DenBox sx={{ marginTop: '16px' }}>
        <EditorTextField key={'caption'} {...mediaCaption} />
      </DenBox>
      <DenBox>
        <EditorTextField key={'summary'} {...mediaSummary} />
      </DenBox>
      <DenTypography className={style['credits']}>Credits</DenTypography>
      <DenGrid container spacing={2} justifyContent={'space-between'} sx={{marginTop: '14px'}}>
        <DenGrid item xs={6}>
          <Author {...primaryAuthorProps} />
        </DenGrid>
        <DenGrid item xs={6}>
          <Author {...secondaryAuthorProps} />
        </DenGrid>
        <DenGrid item xs={6}>
          <AutoCompleteInput {...agencyProps} />
        </DenGrid>
      </DenGrid>
      <div className={'cds-row'}>
      </div>
    </div>
  );
};
export default MediaPrimaryDataForm;
