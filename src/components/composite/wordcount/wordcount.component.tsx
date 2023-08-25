import React from 'react';
import { getWordCharCount } from './wordcount.utils';
import style from './wordcount.module.scss';
import { WordCountProps } from './wordcount.types';
export const Count = React.forwardRef<HTMLDivElement, WordCountProps>((props: WordCountProps, ref) => {
  const { words, characters, spaces } = getWordCharCount(
    props?.wordString ?? ''
  );
  const {
    charLabelText = 'Chars',
    wordLabelText = 'Words',
    wrapperClassName = style['wrapper'],
  } = props;
  return (
    <div ref={ref} className={wrapperClassName}>
      {`${charLabelText} ${characters} / ${wordLabelText} ${words}`}
    </div>
  );
});
export default Count;
