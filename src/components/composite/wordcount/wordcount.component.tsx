import React from 'react';
import { getWordCharCount } from './wordcount.utils';
import style from './wordcount.module.scss';
import { WordCountProps } from './wordcount.types';
export const Count = (props: WordCountProps) => {
  const { words, characters, spaces } = getWordCharCount(
    props?.wordString ?? ''
  );
  const {
    charLabelText = 'Chars',
    wordLabelText = 'Words',
    wrapperClassName = style['wrapper'],
  } = props;
  return (
    <div className={wrapperClassName}>
      {`${charLabelText} ${characters} / ${wordLabelText} ${words}`}
    </div>
  );
};
export default Count;
