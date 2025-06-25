import clsx from 'clsx';
import React, { FC } from 'react';
import { EditorTextField, PublishSection, TitleForUrl } from '../../../composite';
import style from './mediaprimarydataform.module.scss';
import { MediaPrimaryDataFormProps } from '../mediaauth.types';
import {
  AutoCompleteInput,
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
      <PublishSection {...publishSectionProps} />
      <EditorTextField key={'caption'} {...mediaCaption} />
      <EditorTextField key={'summary'} {...mediaSummary} />
      <DenTypography className={style['credits']}>Credits</DenTypography>
      <DenGrid container justifyContent={'space-between'} sx={{marginTop: '14px'}}>
        <DenGrid item xs={6} className={style['media-grid-field']}>
          <Author {...primaryAuthorProps} />
        </DenGrid>
        <DenGrid item xs={6} className={style['media-grid-field']}>
          <Author {...secondaryAuthorProps} />
        </DenGrid>
      </DenGrid>
      <DenGrid container sx={{marginTop: '14px'}}>
        <DenGrid item xs={6} className={style['media-grid-field']}>
          <AutoCompleteInput {...agencyProps} />
        </DenGrid>
      </DenGrid>
      <div className={'cds-row'}>
      </div>
    </div>
  );
};
export default MediaPrimaryDataForm;
