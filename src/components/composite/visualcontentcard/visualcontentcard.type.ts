import type React from 'react';
import type { SVGTypes } from '../../common/svgicon/svgicon.types';

export type VisualContentCardVariant =
  | 'slideshow'
  | 'webstory'
  | 'immersive'
  | 'photofeature';

export type VisualContentCardIconComponent = React.ComponentType<
  Partial<SVGTypes>
>;

export interface VisualContentCardVariantMeta {
  title: string;
  countLabel: 'Slides' | 'Blocks';
  Icon: VisualContentCardIconComponent;
}

export type VisualContentCardAnchorEl = Record<number, HTMLElement | null>;

export interface VisualContentCardClasses {
  root?: string;
  menuOption?: string;
}

export interface VisualContentCardMenuOption {
  label: string;
  onClickFnc: React.MouseEventHandler<HTMLElement>;
  disable?: boolean;
  disableMsg?: string;
  disabled?: boolean;
  disabledMsg?: string;
}

export interface VisualContentCardProps {
  id?: string;
  msid?: string | number;
  slidesCount?: number;
  blocksCountValue?: number;
  imagesCount?: number;
  videosCount?: number;
  hostName?: string;
  channelIcon?: React.ReactNode;
  showStats?: boolean;
  showChannelBadge?: boolean;
  showChannelIcon?: boolean;
  showChannelTooltip?: boolean;
  channelTooltipData?: React.ReactNode;
  isChannelTooltipLoading?: boolean;
  showChannelIconTooltip?: boolean;
  channelIconTooltipData?: React.ReactNode;
  isChannelIconTooltipLoading?: boolean;
  contentType: VisualContentCardVariant;
  updatedDateTimeEpoch?: number;
  publishDateTimeEpoch?: number;
  imageUrl?: string;
  imgTitle?: string;
  cardMenuOptions?: VisualContentCardMenuOption[];
  handleClick?: React.MouseEventHandler<HTMLDivElement>;
  handleCTA?: React.MouseEventHandler<HTMLElement>;
  onChannelHover?: React.MouseEventHandler<HTMLElement>;
  onChannelIconHover?: React.MouseEventHandler<HTMLElement>;
  brokenImgText?: string;
  classes?: VisualContentCardClasses;
  active?: boolean;
}
