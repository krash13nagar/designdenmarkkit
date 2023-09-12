import { SelectChangeEvent } from '@mui/material';

export interface PrimeCategory {
  categoryId: number;
  category: string;
}
export interface Categories {
  [key: string]: PrimeCategory[];
}

export interface PrimeCategoryProps {
  primeCategoryLabel: string;
  primeCategoris: PrimeCategory[];
  isPrimeEnable: boolean;
  primeType: number;
  isPublished: boolean;
  handlePrimeChange: (
    event: SelectChangeEvent<unknown>,
    child: React.ReactNode
  ) => void;
}
