import React, { useRef, useState } from 'react';
import cssClassName from './richstorycard.module.scss';
import './richstorycard.styles.scss';
import {
  DenButton,
  DenCard,
  DenCardActions,
  DenCardContent,
  DenCardMedia,
  DenIconButton,
  DenListItemIcon,
  DenMenu,
  DenMenuItem,
  DenTooltip,
  DenTypography,
} from '../../common';
import { cleanHTML } from '../../../utility/utils';
import { ClickAwayListener, Typography } from '@mui/material';
import { richStoryCardConfig } from './richstorycard.types';
import { OpenInNewIcon } from '../../../assets';
import style from '../datetime/datetime.module.scss';
import moment from 'moment';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { AnchorGeneric } from '../../complex/imagepreview/imagepreview.types';
import ImageIcon from '../../../assets/cdsicons/imageicon';
import VideoIcon from '../../../assets/cdsicons/videoicon';
import SlideShowIcon from '../../../assets/cdsicons/slideshowicon';
import WebStoryIcon from '../../../assets/cdsicons/webstoryicon';
import clsx from 'clsx';

export const RichStoryCard = (props: richStoryCardConfig) => {
  const {
    id,
    slidesCount,
    imagesCount,
    videosCount,
    contentType,
    hostName,
    updatedDateTimeEpoch,
    publishDateTimeEpoch,
    imageUrl,
    imgTitle,
    cardMenuOptions,
    handleClick,
    handleCTA,
    classes = {},
    active,
  } = props;

  const [anchorEl, setAnchorEl] = React.useState<AnchorGeneric>({});
  const ingestionDate = moment(updatedDateTimeEpoch).format('HH:mm, DD MMM');

  const handleCTAFnc = (e: React.MouseEvent<HTMLButtonElement>) => {
    handleCTA(e);
    e.stopPropagation();
  };

  const handleContextClick = (
    event: React.SyntheticEvent<HTMLElement>,
    index: number
  ) => {
    setAnchorEl((prev: any) => ({ ...prev, [index]: event.currentTarget }));
    event.stopPropagation();
  };

  const handleClose = (
    event: React.SyntheticEvent<HTMLElement> | undefined,
    index: number,
    cb?: Function | undefined
  ) => {
    setAnchorEl((prev: any) => ({ ...prev, [index]: null }));
    event?.stopPropagation();
    if (cb) cb(event);
  };

  const handleDenMenuOnClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    handleClose(undefined, 1);
    e.stopPropagation();
  };

  return (
    <div>
      <DenCard
        classes={{ root: clsx(cssClassName['card-root'], classes?.root) }}
        className={`${cssClassName['richStorycard-wrapper']} ${
          active ? cssClassName.active : ''
        }`}
        onClick={handleClick}
      >
        <div className={cssClassName['image-with-resolution-wrapper']}>
          <DenCardMedia
            sx={{ height: 143 }}
            src={imageUrl}
            component="img"
            title=""
            className={cssClassName['richstoryThumb']}
          />
          <div className={cssClassName['new-resolution']}>
            <div className={cssClassName['slidesCnt']}>
              <div className={cssClassName['slideImg']}>
                {contentType == 'slideshow' && (
                  <SlideShowIcon
                    width={12.375}
                    height={16.438}
                    htmlColor="#2b2b2b"
                    name="Image Icon"
                  />
                )}
                {contentType == 'webstory' && (
                  <WebStoryIcon
                    width={16}
                    height={16.4}
                    htmlColor="#2b2b2b"
                    name="Image Icon"
                  />
                )}
              </div>
              <div
                className={cssClassName['primaryText']}
              >{`Slides : ${slidesCount}`}</div>
            </div>
            <div className={cssClassName['cardAssestWrapper']}>
              {imagesCount && (
                <div className={cssClassName['imgCount']}>
                  <ImageIcon
                    width={12}
                    height={11}
                    htmlColor="#2b2b2b"
                    name="Image Icon"
                    className={cssClassName['imgCount']}
                  />
                  {imagesCount}
                </div>
              )}

              {videosCount && (
                <div className={cssClassName['videoCount']}>
                  <VideoIcon
                    width={13}
                    height={9.72}
                    htmlColor="#2b2b2b"
                    name="Video Icon"
                  />
                  {videosCount}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className={cssClassName['card-action-wrapper']}>
          <div className={cssClassName['richStoryCard-channel']}>
            <div className={''}>
              {ingestionDate && (
                <DenTooltip
                  arrow
                  placement="top-start"
                  classes={{
                    tooltip: style['tooltip-wrapper'],
                    arrow: 'richstorycard-tooltip-arrow',
                  }}
                  title={
                    <div className={style['tooltip-content']}>
                      {publishDateTimeEpoch ? (
                        <DenTypography color="inherit">
                          <span className={style['addedAt']}>
                            Published at :{' '}
                          </span>
                          {moment(publishDateTimeEpoch).format(
                            'H:mm,  DD MMM YYYY'
                          )}
                        </DenTypography>
                      ) : null}
                      {updatedDateTimeEpoch ? (
                        <DenTypography color="inherit">
                          <span className={style['addedAt']}>Updated at :</span>
                          {moment(updatedDateTimeEpoch).format(
                            'H:mm,  DD MMM YYYY'
                          )}
                        </DenTypography>
                      ) : null}
                    </div>
                  }
                >
                  <span>{ingestionDate}</span>
                </DenTooltip>
              )}
              {hostName && <span> | {hostName}</span>}
            </div>

            <div>
              {
                <DenIconButton
                  title="Open in new tab"
                  onClick={(e) => {
                    handleCTAFnc(e);
                  }}
                  className={cssClassName.ctaIcon}
                  size={'small'}
                  disableRipple
                  sx={{ p: 0 }}
                >
                  {
                    <OpenInNewIcon
                      hoverHtmlColor="#0E88FF"
                      htmlColor="#dddddd"
                    />
                  }
                </DenIconButton>
              }
            </div>
          </div>
          <div title={imgTitle} className={cssClassName['img_title']}>
            {imgTitle}
          </div>
          <div className={cssClassName['richStorycard-footer']}>
            <div className={cssClassName['idWrapper']}>
              <span className={cssClassName['richStoryCardId']}>ID</span>
              <span className={cssClassName['richStoryCardIdNo']}>{id}</span>
            </div>
            <div>
              <DenIconButton
                aria-label="more"
                id={''}
                aria-haspopup="true"
                onClick={(e) => handleContextClick(e, 1)}
                className={cssClassName['more-icon-base']}
                disableRipple
                //disabled={action?.disabled}
              >
                <MoreVertIcon sx={{ width: '16px', height: '16px' }} />
              </DenIconButton>
              <DenMenu
                id="long-menu"
                anchorEl={anchorEl?.[1]}
                open={Boolean(anchorEl?.[1])}
                onClose={handleDenMenuOnClose}
              >
                {cardMenuOptions?.map((option) => (
                  <DenMenuItem
                    key={option?.label}
                    onClick={(e) => handleClose(e, 1, option?.onClickFnc)}
                  >
                    <DenTypography variant="inherit">
                      {option.label}
                    </DenTypography>
                  </DenMenuItem>
                ))}
              </DenMenu>
            </div>
          </div>
        </div>
      </DenCard>
    </div>
  );
};
export default RichStoryCard;
