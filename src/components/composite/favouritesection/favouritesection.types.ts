import { RefObject } from 'react';
import { FavouriteItem } from '../publishsection/publishsection.types';

export interface FavouriteSectionProps {
  favourite?: FavouriteItem[];
  containerRef?: RefObject<HTMLElement>;
  handleFavDelete?: (fav: FavouriteItem) => void;
  handleFavClick?: (fav: FavouriteItem) => void;
  openedFrom?: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'text' | 'outlined' | 'contained';
  clickable?: boolean;
  handleFavChange?: (value: any) => void;
  setFavourite?: (favourites: FavouriteItem[]) => void;
  filterCurrentHostFavs?: boolean;
  anchorElFavourite?: HTMLElement | null;
  handleFavouriteSection?: (event: React.MouseEvent<HTMLElement>) => void;
  handleFavClose?: () => void;
  favAnchorEl?: HTMLElement | null;
  renderFavouriteOptions?: (fav: any, index: any) => React.ReactElement;
}
