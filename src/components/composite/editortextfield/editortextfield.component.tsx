import React, { useRef, useEffect } from 'react';
import SunEditor from 'suneditor-react';
import SunEditorCore from 'suneditor/src/lib/core';
import { SUNEDITOR_DESCRIPTION_OPTIONS } from './editortextfield.constant';
import Count from '../wordcount/wordcount.component';
import { DenBox, DenInputLabel } from '../../common';
import { ErrorIcon, Warning } from '../../../assets';
import style from './editortextfield.module.scss';
import './suneditor.styles.scss';
import { EditorTextfieldProps } from './editortextfield.types';
import clsx from 'clsx';
import './editortextfield.styles.scss';

export const EditorTextField: React.FC<EditorTextfieldProps> = (props) => {
  const {
    value,
    title,
    error,
    required,
    childError,
    childWarning,
    onChange,
    editorOptions,
    countRequired = true,
    width = '',
    height = '',
    isTitle = false,
    autoFocus = false,
    setAllPlugins = true,
  } = props;
  const [focus, setFocus] = React.useState(false);
  const [content, setContent] = React.useState('');

  useEffect(() => {
    const str = value ? value : '';
    setContent(str);
  }, [value]);

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
    setFocus(true);
  };

  const handleBlur = () => {
    setFocus(false);
  };

  //setting default tag value to p as defaultTag div does not work properly
  const editorOptionsReceived = editorOptions;
  if (editorOptionsReceived) {
    editorOptionsReceived.defaultTag = 'p';
  }

  return (
    <div
      className={clsx(
        style['ws-text-editor'],
        'cds-text-editor',
        isTitle ? 'cds-image-title' : ''
      )}
    >
      <DenInputLabel
        className={focus ? style['focus'] : ''}
        required={required ? true : false}
      >
        {title}
      </DenInputLabel>
      <SunEditor
        getSunEditorInstance={getSunEditorInstance}
        {...(width && { width: width })}
        {...(height && { height: height })}
        autoFocus={autoFocus}
        onChange={handleChange}
        setOptions={editorOptionsReceived || SUNEDITOR_DESCRIPTION_OPTIONS}
        setContents={content}
        onBlur={handleBlur}
        onFocus={handleFocus}
        hideToolbar={!focus}
        setAllPlugins={setAllPlugins}
      />
      <DenBox sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <DenBox sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          {error && <div className="has-error"> {error} </div>}
          {childError && (
            <div className="error-with-icon desc-ws-error">
              <ErrorIcon />
              <span className={`errormessage`}>{childError}</span>
            </div>
          )}
          {childWarning && (
            <div className="error-with-icon desc-ws-error">
              <Warning />
              <span className={'warning'}>{childWarning}</span>
            </div>
          )}
        </DenBox>

        {countRequired && <Count wordString={value} />}
      </DenBox>
    </div>
  );
};
