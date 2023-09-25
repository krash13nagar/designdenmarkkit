import * as React from 'react';
import {
  LocalizationProvider,
  LocalizationProviderProps,
} from '@mui/x-date-pickers/LocalizationProvider';

export const DenLocalizationProvider = React.forwardRef<
  HTMLDivElement,
  LocalizationProviderProps<Date, Locale>
>((props) => <LocalizationProvider {...props} />);

export default DenLocalizationProvider;
