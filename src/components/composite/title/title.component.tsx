import * as React from 'react';
import { DenTextField } from '../../common/dentextfield/dentextfield.component';
import { TextFieldProps } from '../../common/dentextfield/dentextfield.types';

export const Title: React.FC<TextFieldProps> = (props) => {
  return <DenTextField forwardedRef={props?.forwardedRef} {...props} />;
};
