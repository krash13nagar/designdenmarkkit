import { SelectChangeEvent } from '@mui/material';

export interface PrimeCategoryTypes {
  categoryId: number;
  category: string;
}
export interface Categories {
  [key: string]: PrimeCategoryTypes[];
}

export interface PrimeCategoryProps {
  primeCategoryLabel: string;
  primeCategories: PrimeCategoryTypes[];
  isPrimeEnable: boolean;
  primeType: number;
  isPublished: boolean;
  handlePrimeChange: (
    event: SelectChangeEvent<unknown>,
    child: React.ReactNode
  ) => void;
}
