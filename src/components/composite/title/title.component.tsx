import * as React from 'react';
import { DenTextField } from '../../common/textfield/textfield.component';
import { TextFieldProps } from '../../common/textfield/textfield.types';

export const Title: React.FC<TextFieldProps> = (props) => {
  return <DenTextField {...props} />;
};
