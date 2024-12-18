import React, { useEffect, useState } from 'react';
import style from './imagesearchcard.module.scss';
import { AGENCY_USAGE_QUOTA } from './sample';
import { imageSearchCardHoverConfig } from './imagesearchcard.types';
import { ICONS } from './imagesearchcard.constant';
import { DenButton, DenIconButton } from '../../common';
import moment from 'moment';
import MoreVert from '@mui/icons-material/MoreVert';
import { DenNestedMenu } from '../nestedmenu/nestedmenu';
import { renderMenu } from '../../../utility/utils';

export const ImageSearchCardHoverDetails = (
  props: imageSearchCardHoverConfig
) => {
  const {
    name,
    agencyName,
    dataSource,
    ingestionDate,
    resolution,
    agencyUsageData,
    onCallbackMenufnc,
    onCallbackSelectImagefnc,
    ingestionDateTimestamp,
    actionButtonsList,
    cardStyle = 'standard',
    imageCardMenuOptions = []
  } = props;

  const [agencyCount, setAgencyCount] = useState('Unlimited');
  const [agencyQuotaStyle, setAgencyQuotaStyle] = useState('agency-unlimited');

  const dateToShow =
    ingestionDate ||
    (ingestionDateTimestamp
      ? moment(ingestionDateTimestamp).format('Do MMM YYYY hh:mm A')
      : '');

  useEffect(() => {
    if (agencyUsageData?.defaultMessage) {
      return setAgencyCount(agencyUsageData.defaultMessage);
    }
    if (!agencyName) {
      return setAgencyCount('-/-');
    }
    var searchLimitObj = agencyUsageData?.allowed?.find?.(
      (obj: any) => obj.agencyName == agencyName
    );
    var searchCountObj = agencyUsageData?.current?.find?.(
      (obj: any) => obj.agencyName == agencyName
    );
    if (searchLimitObj || searchCountObj) {
      var limit = searchLimitObj ? searchLimitObj.limit : '-';
      var count = searchCountObj ? searchCountObj.count : '-';
      const percent = Number((count / limit) * 100).toFixed(2);
      const val = `${count}/${limit}`;
      setAgencyCount(val);
      handleAgencyQuotaStyle(percent);
    }
  }, []);

  const handleSelectImage = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();
    if (onCallbackSelectImagefnc) {
      onCallbackSelectImagefnc(e);
    }
  };

  const handleCardMenu = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (onCallbackMenufnc) {
      onCallbackMenufnc(e);
    }
  };

  const handleAgencyQuotaStyle = (percent: string) => {
    let customClass = '';
    if (Number(percent) > AGENCY_USAGE_QUOTA.alertPercent) {
      customClass = 'agency-red';
    } else if (Number(percent) > AGENCY_USAGE_QUOTA.warningPercent) {
      customClass = 'agency-yellow';
    } else {
      customClass = 'agency-green';
    }
    setAgencyQuotaStyle(customClass);
  };

  const renderMenuOptions = (menuOptions: any) => {
    return renderMenu(menuOptions)
  }

  return (
    <div className={`${style['card-reveal']} ${style['card-reveal-show']}`}>
      <div className={style['card-details']}>
        <div title={name} className={style['img_title']}>
          {name}
        </div>

        {cardStyle == 'standard' && (
          <div className={`${style['mb7']} ${style['vc-ellipsis']}`}>
            {agencyName && (
              <span title={`Agency:${agencyName}`}>
                <span className={style['secondaryText']}>Agency:</span>
                <span className={style['primaryText']}>{agencyName}</span>
              </span>
            )}
            {agencyName && dataSource && (
              <span className={style['primaryText']}> | </span>
            )}
            {dataSource && (
              <span title={`Source : ${dataSource}`}>
                <span className={style['secondaryText']}>Source:</span>
                <span className={style['primaryText']}>{dataSource}</span>
              </span>
            )}
          </div>
        )}
        {cardStyle == 'minimal' && (
          <div className={`${style['mb7']} ${style['vc-ellipsis']}`}>
            {agencyName && (
              <span title={`Agency:${agencyName}`}>
                <span className={style['secondaryText']}>{agencyName}</span>
              </span>
            )}
            {agencyName && resolution && (
              <span className={style['secondaryText']}> | </span>
            )}
            {resolution && (
              <span title={resolution}>
                <span className={style['secondaryText']}>{resolution}</span>
              </span>
            )}
          </div>
        )}
        <div
          className={`${style['mb7']} ${style['vc-ellipsis']}`}
          title={dateToShow}
        >
          {cardStyle == 'standard' && (
            <span className={`${style['mr4']} ${style['icon']}`}>
              {ICONS.pubDate}
            </span>
          )}
          <span className={style['secondaryText']}>{dateToShow}</span>
        </div>
        {cardStyle == 'standard' && (
          <div
            className={`${style['mb7']} ${style['secondaryText']} ${style['vc-ellipsis']}`}
          >
            <span title={resolution}>{resolution}</span>
            <span> | </span>
            <span title={`Agency Usage Quota : ${agencyCount}`}>
              Usage Quota :{' '}
              <span
                className={`${style['agencyQuota']} ${style[agencyQuotaStyle]}`}
              >
                {agencyCount}
              </span>
            </span>
          </div>
        )}
      </div>
      <div className={style['card-footer']}>
        <div className={style['card-footer-btn-wrapper']}>
          {actionButtonsList?.length > 0 &&
            actionButtonsList.map((btn, i) => (
              <DenButton
                onClick={(e) => {
                  e.stopPropagation();
                  btn?.onClick?.(e);
                }}
                variant={btn.variant || 'contained'}
                color={btn.color || 'primary'}
                key={i}
                className={style['primaryButton-cds']}
                sx={{
                  mr: '8px',
                  ...(btn.variant == 'outlined' && {
                    color: '#FFFFFF',
                    border: '1px solid #FFFFFF',
                    '&:hover': {
                      border: '1px solid #FFFFFF,',
                    },
                  }),
                }}
                {...btn.props}
              >
                {btn.label}
              </DenButton>
            ))}
          {!actionButtonsList && (
            <div onClick={handleSelectImage}>
              <button
                className={`${style['btn']} ${style['primaryButton-cds']}`}
              >
                Select Image
              </button>
            </div>
          )}
        </div>
        {imageCardMenuOptions?.length > 0 &&
          <DenNestedMenu
            trigger={
              <DenIconButton sx={{ color: "#FFFFFF", padding: 0 }} disableRipple>
                <MoreVert />
              </DenIconButton>}
            menu={renderMenuOptions(imageCardMenuOptions)}
          />}
      </div>
    </div>
  );
};
export default ImageSearchCardHoverDetails;
