import * as React from 'react';
import { DenTextField } from '../../common/textfield/textfield.component';
import { TextFieldProps } from '../../common/textfield/textfield.types';
import Count from '../wordcount/wordcount.component';

/**
 * Title Component.
 * @constructor
 * @param {string} props.label* -.label of the element to display
 * @param {string} props.value - text of value element.
 * @param {string} props.labelClass - Classname to be applied to the Label element
 * @param {string} props.valueClass - Classname to be applied to the value element
 * @param {string} props.wrapperClass - Classname to be applied to the wrapper element
 * @param {string} props.labelProps - Classname applied to the label element.
 * @param {string} props.valueProps - Classname applied to the value element.
 * The ref is forwarded to the root element.
 * for more details see http:localhost:6006
 */
export const Title: React.FC<TextFieldProps> = (props) => {
  return (
    <>
      <DenTextField {...props} />
      <Count wordString={props.value ?? ''} />
    </>
  );
};
