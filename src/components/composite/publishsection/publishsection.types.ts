import { ReactNode, MouseEventHandler, ChangeEventHandler, RefObject } from 'react';

export interface PublishSectionFilter {
  value: string;
  label: string;
}

export interface PublishSectionOption {
  id: string;
  [key: string]: any;
}

export interface FavouriteItem {
  msId: string;
  parents?: Array<{ hostId: string }>;
  activationStatus?: string;
  name?: string;
  aliasName?: string;
  path?: string;
  [key: string]: any;
}

export interface ChannelOption {
  value: string;
  label: string;
  [key: string]: any;
}

export interface PublishSectionProps {
  // Basic props
  title: string;
  id?: string;
  placeholder?: string;
  overridePlaceholder?: boolean;
  disableTextFieldToggle?: boolean;
  publishType?: string;
  storeKey?: string;
  primarySectionModel?: string;
  secondarySectionModel?: string;

  // Event handlers
  onSelectPublishSection?: (section: any) => void;
  onDeletePublishSection?: (section: any) => void;
  onChannelSelect?: (channel: any) => void;

  // Values
  hostId?: string;
  channelList?: any[];
  primarySectionValue?: any;
  secondarySectionValue?: any[];
  selectedChannel?: any;

  // Display options
  showFav?: boolean;
  isPublished?: boolean;
  entityType?: string;
  entityTitle?: string;
  entitySynopsis?: string;
  enableMultipublish?: boolean;
  openedFrom?: string;
  isHostDropdownDisabled?: boolean | null;

  // Mode and options
  mode?: string;
  options?: PublishSectionOption[];
  statusFilter?: string;
  isReadOnly?: boolean;
  publishSectionText?: string;
  primarySection?: any;
  secondarySection?: any;
  inMemory?: boolean;
  showFilter?: boolean;
  favourite?: FavouriteItem[];
  isPrimarySectionMode?: boolean;

  // Handler functions
  handleAddfav?: (item: any) => void;
  handleFavChange?: (value: any) => void;
  handleFilterChange?: ChangeEventHandler<HTMLInputElement>;
  dropdownOptions?: ChannelOption[];
  handleChannelSelect?: (option: any) => void;
  inputRef?: RefObject<HTMLElement>;
  containerRef?: RefObject<HTMLDivElement>;
  handleAddSection?: () => void;
  renderPrimarySectionChips?: () => ReactNode;
  renderSecondarySectionChips?: () => ReactNode;
  handleShowTextField?: () => boolean;
  errorMessage?: string;
  handleShowEditModal?: (show: boolean) => void;
  handleChange?: (event: any, value: any) => void;
  handleTextChange?: (event: any, value: any) => void;
  handleSetPublishSectionText?: (text: string) => void;
  getHostId?: () => string;
  handleSetFavourite?: (favourites: FavouriteItem[]) => void;
  anchorElFavourite?: HTMLElement | null;
  handleFavouriteSection?: (event: React.MouseEvent<HTMLElement>) => void;
  handleFavDelete?: (fav: FavouriteItem) => void;
  handleFavClose?: () => void;
  handleFavClick?: (fav: FavouriteItem) => void;
  publishSectionFilters?: PublishSectionFilter[];
  isTextFieldVisible?: boolean;
  renderOptions?: (props: any, option: any) => React.ReactElement;
  favAnchorEl?: HTMLElement | null;
  renderFavouriteOptions?: (fav: any, index: any) => React.ReactElement;
  required?: boolean;
}

export interface ElementWithOverridenLinkContentNode {
  overridenLinkContentNode?: {
    msId?: string;
  };
  added?: boolean;
  option: PublishSectionOption;
  handleAddfav?: (event: React.MouseEvent, item: any) => void;
  showFav?: boolean;
  favouriteList?: FavouriteItem[];
  showDelete?: boolean;
  cleanHTMLtag?: (text: string) => string;
}

export interface PublishSectionOptionProps {
  option: PublishSectionOption;
  handleAddfav?: (event: React.MouseEvent, item: any) => void;
  showFav?: boolean;
  favouriteList?: FavouriteItem[];
  showDelete?: boolean;
  onDelete?: (event: React.MouseEvent, item: any) => void;
  onClick?: (event: React.MouseEvent) => void;
}

export interface PublishChipProps {
  option: any;
  hideTooltip?: boolean;
  tagProps?: any;
  index: number;
  chipClick?: (event: React.MouseEvent) => void;
  getChannelIconCssByHostId?: (hostId: string) => string;
  cleanHTMLtag?: (text: string) => string;
}

export interface PublishSectionTemplateProps {
  handleFavChange?: (event: any, value: any) => void;
  handleChannelChange?: (channel: any) => void;
  setStatusFilter?: (filter: string) => void;
  hostId?: string;
  channelList?: any[];
  showOnLeft?: boolean;
  title?: string;
  placeholder?: string;
  value?: any;
  limit?: number;
  isReadOnly?: boolean;
  handleChange?: (event: any, value: any) => void;
  handleTextChange?: (event: any, value: any) => void;
  options?: any[];
  renderTags?: () => React.ReactNode;
  renderOptions?: () => React.ReactNode;
  errorMessage?: string;
  isError?: boolean;
  showFav?: boolean;
  id?: string;
}
