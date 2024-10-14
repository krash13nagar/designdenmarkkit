import React, { useRef, useEffect } from 'react';
import SunEditor from 'suneditor-react';
import SunEditorCore from 'suneditor/src/lib/core';
import { SUNEDITOR_DESCRIPTION_OPTIONS } from './imagecaption.constant';
import Count from '../wordcount/wordcount.component';
import { DenInputLabel } from '../../common';
import { ErrorIcon, Warning } from '../../../assets';
import style from './imagecaption.module.scss';
import './suneditor.styles.scss';
import { ImageCaptionProps } from './imagecaption.types';
import clsx from 'clsx';
import './imagecaption.styles.scss';

export const ImageCaption: React.FC<ImageCaptionProps> = (props) => {
  const {
    caption,
    captionTitle,
    captionError,
    captionRequired,
    captionChildError,
    captionChildWarning,
    onChange,
    onClick,
    captionEditorOptions,
    countRequired = true,
  } = props;
  const [focus, setFocus] = React.useState(false);
  const editor = useRef<SunEditorCore>();
  // The sunEditor parameter will be set to the core suneditor instance when this function is called
  const getSunEditorInstance = (sunEditor: SunEditorCore) => {
    if (editor?.current) {
      editor.current = sunEditor;
    }
  };
  useEffect(() => {
    return () => {
      editor.current = null;
    };
  }, []);
  const handleChange = (str: string) => {
    if (onChange) {
      onChange(str);
    }
  };
  const handleFocus = () => {
    setFocus((prev) => !prev);
  };

  return (
    <div className={clsx(style['ws-text-editor'], 'cds-text-editor')}>
      <DenInputLabel
        className={focus ? style['focus'] : ''}
        required={captionRequired ? true : false}
      >
        {captionTitle}
      </DenInputLabel>
      <SunEditor
        getSunEditorInstance={getSunEditorInstance}
        width="100%"
        height={'200px'}
        autoFocus={false}
        onChange={handleChange}
        setOptions={captionEditorOptions || SUNEDITOR_DESCRIPTION_OPTIONS}
        setContents={caption}
        onBlur={handleFocus}
        onFocus={handleFocus}
        hideToolbar={!focus}
      />
      {captionError && <div className="has-error"> {captionError} </div>}
      {captionChildError && (
        <div className="error-with-icon desc-ws-error">
          <ErrorIcon />
          <span className={`errormessage`}>{captionChildError}</span>
        </div>
      )}
      {captionChildWarning && (
        <div className="error-with-icon desc-ws-error">
          <Warning />
          <span className={'warning'}>{captionChildWarning}</span>
        </div>
      )}
      {countRequired && <Count wordString={caption} />}
    </div>
  );
};
