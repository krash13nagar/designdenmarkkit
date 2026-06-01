export interface KeywordItem {
  keyEnum: string;
  keywordName: string;
  relevance: number | string;
  source: string;
  metaInfo?: string | object;
  id?: string | number;
}

export interface SuggestedKeywordsData {
  keywords: KeywordItem[];
  [key: string]: any;
}

export interface SeoAddedChipsProps {
  keywords: KeywordItem[];
  removeCallbackFn: (index: number, val: number) => void;
  markOrUnmarkStarCallbckfnc: (index: number, item: KeywordItem) => void;
}

export interface BetaRecommendChipsProps {
  suggestedChips: KeywordItem[];
  addSuggestedChipFn?: (elm: KeywordItem) => void;
  callFetchKeywordFnc?: () => void;
  handleRetry?: (event: React.MouseEvent) => void;
  story?: string;
  isDataLoading?: boolean;
  apiError?: boolean;
  retryIcon?: React.ReactNode;
  apiErrorMsg?: string;
  keywordValidationMsg?: string;
  showAPIErrorMsg?: boolean;
  showSuggestKeywordsBtn?: boolean;
  suggestKeywordsBtnLabel?: string;
}

export interface BetaKeywordsWrapperProps {
  wrapperClassName?: string;
  addedKeywordsClassName?: string;
  autoAddKeywordsClassName?: string;
  searchKeywordConfig: BetaSearchKeywordProps;
  addBtnConfig: BetaAddButtonProps;
  addedKeywordsConfig: BetaKeywordsAddedChipsProps;
  recommendConfig: BetaRecommendChipsProps;
  metaKeywordsConfig: BetaKeywordsMetaFieldsProps;
}

export interface BetaAddButtonProps {
  btnConfig?: {
    color?: string;
    variant?: string;
    size?: string;
  };
  addBtnCallbckfnc?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  addBtnLabel?: string;
}

export interface BetaKeywordsMetaFieldsProps {
  storeKey?: string;
  metaDescriptionPlaceholder?: string;
  metaDescriptionLabel?: string;
  metaKeywordsLabel?: string;
  metaTitleLabel?: string;
  metaKeywordsPlaceholder?: string;
  metaTitlePlaceholder?: string;
  metaDescriptionValue?: string;
  metaKeywordsValue?: string;
  metaTitleValue?: string;
  isMetaDataLoading?: boolean;
  isAutoAddMetaBtnEnable?: boolean;
  isClearAllMetaBtnEnable?: boolean;
  autoAddMetaLabel?: string;
  clearAllMetaLabel?: string;
  hideMetaComponent?: boolean;
  handleAutoAddMetasFnc?: () => void;
  handleClearAllMetaFnc?: () => void;
  handleMetaDescriptionFnc?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleMetaKeywordsFnc?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleMetaTitleFnc?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface BetaKeywordsSuggestionsProps {
  text: string;
  suggestedData: KeywordItem[];
  focus: boolean;
  isSuggestedKeywordSkeleton: boolean;
  onSelectKeywordClick?: (option: KeywordItem) => void;
  handleSearchKeywordVal?: (val: string) => void;
}

export interface BetaSearchKeywordWrapperProps {
  searchKeywordConfig: BetaSearchKeywordProps;
  addBtnConfig: BetaAddButtonProps;
}

export interface BetaSearchKeywordProps {
  bautocomplete?: string;
  label?: string;
  placeholder?: string;
  isAutoAddKeywordLoading?: boolean;
  searchCallbckfnc?: (value: string) => void;
  searchKeywordVal?: string;
  handleSearchKeywordVal?: (value: string) => void;
  handleSuggestionKeywordFnc?: (focus: boolean) => void;
  onEnterKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  autoComplete?: string;
  onFocus?: () => void;
  onBlur?: () => void;
  shouldAutoFocus?: boolean;
  onAutoFocusComplete?: () => void;
  suggestedKeywordsData?: KeywordItem[];
  isSuggestedKeywordSkeleton?: boolean;
  onSelectKeywordClick?: (option: KeywordItem) => void;
}

export interface BetaKeywordsAddedChipsProps {
  addedKeywordsChipsClassName?: string;
  addedChipClassName?: string;
  keywords: KeywordItem[];
  noKeywordsLabel?: string;
  removeCallbackFn?: (index: number, val: number) => void;
  markOrUnmarkStarCallbckfnc?: (index: number, item: KeywordItem) => void;
  starIcon?: React.ReactNode;
  starHoverIcon?: React.ReactNode;
  crossIcon?: React.ReactNode;
  isAutoAddKeywordLoading?: boolean;
  isAutoAddEnable?: boolean;
  autoAddLabel?: string;
  clearAllLabel?: string;
  handleAutoAddBtn?: () => void;
  handleClearAll?: () => void;
  label?: string;
  showComplianceIcons?: boolean;
  showNonCompliantIcon?: boolean;
  nonCompliantIcon?: React.ReactNode;
  complianceIcon?: React.ReactNode;
  showPreviewLabel?: boolean;
  previewLabel?: string;
  handlePreviewCallBack?: () => void;
  autoPopulateKeywordsAndMeta?: boolean;
  handleAutoPopulateKeywordsAndMeta?: () => void;
  labelComponent?: React.ReactNode;
}
