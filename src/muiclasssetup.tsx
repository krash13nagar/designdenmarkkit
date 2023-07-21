// MuiClassNameSetup.js
import { unstable_ClassNameGenerator as ClassNameGenerator } from '@mui/material/className';

ClassNameGenerator.configure((componentName) => `cds-${componentName}`);
