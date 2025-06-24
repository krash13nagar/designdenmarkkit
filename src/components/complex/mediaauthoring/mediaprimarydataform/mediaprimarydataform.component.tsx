import clsx from 'clsx';
import React, { FC } from 'react';
import { EditorTextField, TitleForUrl } from '../../../composite';
import style from './mediaprimarydataform.module.scss';
import { MediaPrimaryDataFormProps } from '../mediaauth.types';
import {
  DenTypography,
} from '../../../common';

export const MediaPrimaryDataForm: FC<MediaPrimaryDataFormProps> = ({
  msid,
  title,
  titleForUrl,
  mediaCaption,
  mediaSummary,
  classes = {}
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
      <EditorTextField key={'caption'} {...mediaCaption} />
      <EditorTextField key={'summary'} {...mediaSummary} />
      <DenTypography className={style['credits']}>Credits</DenTypography>
      <div className={'cds-row'}>
      </div>
    </div>
  );
};
export default MediaPrimaryDataForm;
