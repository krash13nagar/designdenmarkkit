import React, { useMemo, useState } from 'react';
import cssClassName from './visualcontentcard.module.scss';
import {
  DenBox,
  DenCard,
  DenCircularProgress,
  DenIconButton,
  DenMenu,
  DenMenuItem,
  DenTooltip,
  DenTypography,
  ImageWithFallback,
} from '../../common';
import DenCustomTooltip from '../../common/tooltip/customtooltip.component';
import clsx from 'clsx';
import moment from 'moment';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ImmersiveStoryIcon from '../../../assets/cdsicons/immersivestoryicon';
import PhotoFeatureIcon from '../../../assets/cdsicons/photofeatureicon';
import VisualFooterImageIcon from '../../../assets/cdsicons/visualfooterimageicon';
import VisualFooterVideoIcon from '../../../assets/cdsicons/visualfootervideoicon';
import VisualSlideShowIcon from '../../../assets/cdsicons/visualslideshowicon';
import VisualWebStoryIcon from '../../../assets/cdsicons/visualwebstoryicon';
import BrokenImgIcon from '../../../assets/cdsicons/brokenimgicon';
import {
  VisualContentCardAnchorEl,
  VisualContentCardMenuOption,
  VisualContentCardProps,
  VisualContentCardVariant,
  VisualContentCardVariantMeta,
} from './visualcontentcard.type';

const VARIANT_META: Record<VisualContentCardVariant, VisualContentCardVariantMeta> =
{
  slideshow: {
    title: 'Slideshow',
    countLabel: 'Slides',
    Icon: VisualSlideShowIcon,
  },
  webstory: {
    title: 'Webstory',
    countLabel: 'Slides',
    Icon: VisualWebStoryIcon,
  },
  immersive: {
    title: 'Immersive Story',
    countLabel: 'Blocks',
    Icon: ImmersiveStoryIcon,
  },
  photofeature: {
    title: 'Photofeature',
    countLabel: 'Slides',
    Icon: PhotoFeatureIcon,
  },
};

const getVariantFromContentType = (
  contentType: VisualContentCardProps['contentType']
): VisualContentCardVariant => {
  const normalizedType = (contentType || '')
    .replace(/[_\s-]/g, '')
    .toLowerCase();

  const variantMap: Partial<Record<string, VisualContentCardVariant>> = {
    slideshow: 'slideshow',
    webstory: 'webstory',
    immersive: 'immersive',
    photofeature: 'photofeature',
  };

  return variantMap[normalizedType] ?? 'slideshow';
};

const getChannelBadgeLabel = (hostName?: string): string => {
  if (!hostName) return '';

  const trimmedHostName = hostName.trim();
  if (!trimmedHostName) return '';

  if (trimmedHostName.length <= 4 && trimmedHostName === trimmedHostName.toUpperCase()) {
    return trimmedHostName;
  }

  const words = trimmedHostName
    .split(/\s+/)
    .filter((word) => !['the', 'a', 'an'].includes(word.toLowerCase()));

  const wordsToUse = words.length ? words : trimmedHostName.split(/\s+/);
  if (wordsToUse.length === 1) {
    return wordsToUse[0].slice(0, 3).toUpperCase();
  }

  const abbreviation = wordsToUse
    .map((word) => word[0])
    .join('')
    .toUpperCase();

  if (abbreviation) return abbreviation.slice(0, 4);
  return trimmedHostName.slice(0, 3).toUpperCase();
};

const getMenuOptionDisabledMeta = (option: VisualContentCardMenuOption) => {
  const isDisabled = Boolean(option.disable || option.disabled);
  const disabledMessage = option.disableMsg || option.disabledMsg || '';

  return { isDisabled, disabledMessage };
};

export const VisualContentCard = (props: VisualContentCardProps) => {
  const {
    msid,
    slidesCount,
    blocksCountValue,
    imagesCount,
    videosCount,
    contentType,
    hostName,
    showStats = true,
    showChannelTooltip,
    channelTooltipData,
    isChannelTooltipLoading,
    updatedDateTimeEpoch,
    publishDateTimeEpoch,
    imageUrl,
    imgTitle,
    cardMenuOptions = [],
    handleClick,
    onChannelHover,
    classes = {},
    active,
    brokenImgText = '',
  } = props;

  const [anchorEl, setAnchorEl] = useState<VisualContentCardAnchorEl>({});

  const tooltipstyles = useMemo(
    () => ({
      font: 'normal normal 400 13px/18px "Source Sans 3"',
      textColor: '#4D4D4D',
    }),
    []
  );

  const visualVariant = useMemo(() => {
    return getVariantFromContentType(contentType);
  }, [contentType]);

  const variantMeta = useMemo(() => {
    return VARIANT_META[visualVariant];
  }, [visualVariant]);

  const ingestionDate = useMemo(() => {
    return updatedDateTimeEpoch
      ? moment(updatedDateTimeEpoch).format('HH:mm, DD MMM')
      : '';
  }, [updatedDateTimeEpoch]);

  const channelBadgeLabel = useMemo(() => {
    return getChannelBadgeLabel(hostName);
  }, [hostName]);

  const resolvedShowChannelTooltip = useMemo(() => {
    if (showChannelTooltip !== undefined) return showChannelTooltip;
    return true;
  }, [showChannelTooltip]);

  const resolvedChannelTooltipLoading = useMemo(() => {
    if (!resolvedShowChannelTooltip) return false;
    if (isChannelTooltipLoading !== undefined) return isChannelTooltipLoading;
    return !channelTooltipData;
  }, [resolvedShowChannelTooltip, isChannelTooltipLoading, channelTooltipData]);

  const channelTooltipContent = useMemo(() => {
    if (!resolvedShowChannelTooltip) return '';
    if (resolvedChannelTooltipLoading) {
      return (
        <DenBox className={cssClassName['channel-tooltip-loader']}>
          <DenCircularProgress size={22} />
        </DenBox>
      );
    }
    if (typeof channelTooltipData === 'string') {
      return <span dangerouslySetInnerHTML={{ __html: channelTooltipData }} />;
    }
    return channelTooltipData || hostName || '';
  }, [resolvedShowChannelTooltip, resolvedChannelTooltipLoading, channelTooltipData, hostName]);

  const slidesCountValue =
    typeof slidesCount === 'number' && Number.isFinite(slidesCount)
      ? slidesCount
      : 0;
  const blocksCount =
    typeof blocksCountValue === 'number' && Number.isFinite(blocksCountValue)
      ? blocksCountValue
      : 0;
  const countValue =
    variantMeta.countLabel === 'Blocks' ? blocksCount : slidesCountValue;
  const imagesCountValue =
    typeof imagesCount === 'number' && Number.isFinite(imagesCount)
      ? imagesCount
      : 0;
  const videosCountValue =
    typeof videosCount === 'number' && Number.isFinite(videosCount)
      ? videosCount
      : 0;
  const storyId = msid ?? '';

  const handleContextClick = (event: React.MouseEvent<HTMLElement>, index: number) => {
    setAnchorEl((prev) => ({ ...prev, [index]: event.currentTarget }));
    event.stopPropagation();
  };

  const handleClose = (
    event: React.MouseEvent<HTMLElement> | undefined,
    index: number,
    cb?: VisualContentCardMenuOption['onClickFnc']
  ) => {
    setAnchorEl((prev) => ({ ...prev, [index]: null }));
    if (!event) return;

    event.stopPropagation();
    cb?.(event);
  };

  const handleDenMenuOnClose = (event: React.MouseEvent<HTMLButtonElement>) => {
    handleClose(undefined, 1);
    event.stopPropagation();
  };

  const handleChannelHover = (event: React.MouseEvent<HTMLElement>) => {
    if (!resolvedShowChannelTooltip) return;
    event.stopPropagation();
    onChannelHover?.(event);
  };

  return (
    <DenCard
      classes={{ root: clsx(cssClassName['card-root'], classes?.root) }}
      className={clsx(
        cssClassName['visualcontentcard-wrapper'],
        visualVariant === 'webstory' && cssClassName['visualcontentcard-wrapper-webstory'],
        classes?.root,
        active && cssClassName['active']
      )}
      onClick={handleClick}
    >
      <div className={cssClassName['card-header']}>
        <div className={cssClassName['card-header-left']}>
          {ingestionDate && (
            <DenTooltip
              arrow
              placement="top-start"
              classes={{
                tooltip: cssClassName['tooltip-wrapper'],
                arrow: cssClassName['tooltip-arrow'],
              }}
              title={
                <div className={cssClassName['tooltip-content']}>
                  {publishDateTimeEpoch ? (
                    <DenTypography color="inherit">
                      <span className={cssClassName['tooltip-label']}>Published at : </span>
                      {moment(publishDateTimeEpoch).format('HH:mm, DD MMM YYYY')}
                    </DenTypography>
                  ) : null}
                  {updatedDateTimeEpoch ? (
                    <DenTypography color="inherit">
                      <span className={cssClassName['tooltip-label']}>Updated at : </span>
                      {moment(updatedDateTimeEpoch).format('HH:mm, DD MMM YYYY')}
                    </DenTypography>
                  ) : null}
                </div>
              }
            >
              <span className={cssClassName['card-date']}>{ingestionDate}</span>
            </DenTooltip>
          )}
          <DenTooltip title={variantMeta.title} arrow placement="top">
            <span className={cssClassName['variant-icon-wrapper']}>
              <variantMeta.Icon width={24} height={24} />
            </span>
          </DenTooltip>
        </div>

        <div className={cssClassName['card-header-right']}>
          <DenIconButton
            aria-label="more"
            id={''}
            aria-haspopup="true"
            onClick={(e) => handleContextClick(e, 1)}
            className={clsx(
              cssClassName['more-icon-base'],
              Boolean(anchorEl?.[1]) && cssClassName['menu-open']
            )}
            disableRipple
          >
            <MoreVertIcon sx={{ fontSize: '20px', color: 'inherit' }} />
          </DenIconButton>
          <DenMenu
            id="visual-content-card-menu"
            anchorEl={anchorEl?.[1] || null}
            open={Boolean(anchorEl?.[1])}
            onClose={handleDenMenuOnClose}
          >
            {cardMenuOptions.map((option, index) => {
              const { isDisabled, disabledMessage } =
                getMenuOptionDisabledMeta(option);

              return (
                <DenTooltip
                  key={`${option?.label}-${index}`}
                  title={isDisabled ? disabledMessage : ''}
                  disableHoverListener={!isDisabled}
                  PopperProps={{
                    sx: {
                      '& .cds-MuiTooltip-tooltip': {
                        font: "normal normal normal 12px/20px 'Source Sans 3' !important",
                        padding: '1px 4px 1px 4px !important',
                        backgroundColor: '#4D4D4D !important',
                      },
                    },
                  }}
                  arrow
                >
                  <span className={cssClassName['menu-item-wrapper']}>
                    <DenMenuItem
                      onClick={(e) => handleClose(e, 1, option?.onClickFnc)}
                      classes={{
                        root: classes?.menuOption,
                      }}
                      disabled={isDisabled}
                    >
                      <DenTypography variant="inherit">{option.label}</DenTypography>
                    </DenMenuItem>
                  </span>
                </DenTooltip>
              );
            })}
          </DenMenu>
        </div>
      </div>

      <div className={cssClassName['card-content']}>
        <DenCustomTooltip
          title={imgTitle || ''}
          arrow
          placement="bottom-start"
          {...tooltipstyles}
          textColor="#2B2B2B"
          maxWidth="230px"
        >
          <div className={cssClassName['img-title']}>{imgTitle}</div>
        </DenCustomTooltip>
      </div>

      <div
        className={clsx(
          cssClassName['card-media'],
          visualVariant === 'webstory' && cssClassName['card-media-webstory']
        )}
      >
        <ImageWithFallback
          src={imageUrl}
          width={'100%'}
          height={'100%'}
          placeholderIcon={
            <div className={cssClassName['brokenImgClass']}>
              <BrokenImgIcon htmlColor="#4D4D4D" />
              {brokenImgText && (
                <p className={cssClassName['visualcontentcard-broken-img-text']}>
                  {brokenImgText}
                </p>
              )}
            </div>
          }
          className={clsx(
            cssClassName['media-image'],
            visualVariant === 'webstory' && cssClassName['media-image-webstory']
          )}
        />

        <div className={cssClassName['media-footer']}>
          <div className={cssClassName['media-footer-left']}>
            {channelBadgeLabel && (
              (resolvedShowChannelTooltip ? (
                <DenTooltip
                  title={channelTooltipContent}
                  arrow
                  placement="top"
                  PopperProps={{
                    sx: {
                      '& .cds-MuiTooltip-tooltip': {
                        backgroundColor: 'white',
                        padding: '0',
                        boxShadow: '0px 3px 6px #00000029',
                      },
                      '& .cds-MuiTooltip-arrow': {
                        color: 'white',
                      },
                    },
                  }}
                >
                  <span
                    className={cssClassName['channel-badge']}
                    onMouseEnter={handleChannelHover}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {channelBadgeLabel}
                  </span>
                </DenTooltip>
              ) : (
                <span
                  className={cssClassName['channel-badge']}
                  onClick={(e) => e.stopPropagation()}
                >
                  {channelBadgeLabel}
                </span>
              ))
            )}
            <span className={cssClassName['story-id']}>ID : {storyId}</span>
          </div>

          {showStats && (
            <span className={cssClassName['slides-count-wrapper']}>
              <span className={cssClassName['slides-count']}>
                {variantMeta.countLabel} : {countValue}
              </span>
              <span className={cssClassName['slides-hover-stats']}>
                <span className={cssClassName['hover-stat']}>
                  <VisualFooterImageIcon width={24} height={24} />
                  <span>{imagesCountValue}</span>
                </span>
                <span className={cssClassName['hover-stat']}>
                  <VisualFooterVideoIcon width={24} height={24} />
                  <span>{videosCountValue}</span>
                </span>
              </span>
            </span>
          )}
        </div>
      </div>
    </DenCard>
  );
};

export default VisualContentCard;
