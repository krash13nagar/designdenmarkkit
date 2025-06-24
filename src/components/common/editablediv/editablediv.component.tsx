import clsx from 'clsx';
import React, { useEffect, useRef } from 'react';
import './editablediv.style.scss';
import { EditableDivProps } from './editablediv.types';

const EditableDiv: React.FC<EditableDivProps> = ({ label = '', value = '', onChange, wrapperClass, editableDivClass, disabled = false }) => {

  const contentRef = useRef<HTMLDivElement>(null);

  const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
    if (contentRef.current) {
      onChange(contentRef.current.innerHTML); // Update parent state
    }
  };

  useEffect(() => {
    const element = contentRef.current;
    if (element && element.innerHTML !== value) {
      element.innerHTML = value || ""; // Update content only if different
    }
  }, [value]);

  return (
    <>
      <div className={clsx("article3_content_editable_container",wrapperClass)}>
        {label && <label>{label}</label>}
        <div
          contentEditable={disabled?"false":"true"}
          ref={contentRef}
          className={clsx('input_box',editableDivClass,disabled?'disabled' : '')}
          onInput={handleInput}
        >
        </div>
      </div>
    </>
  );
};

export default React.memo(EditableDiv);
