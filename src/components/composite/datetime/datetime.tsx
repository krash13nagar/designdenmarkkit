import React from 'react';
import { DenFab, DenTooltip, DenTypography } from '../../common';
import { DateTimeDisplay } from './datetimedisplay.types';
import moment from 'moment';
import { Calender } from '../../../asset/calender';
import style from './datetime.module.scss';

export const DisplayCardDate: React.FC<DateTimeDisplay> = (
  props: DateTimeDisplay
) => {
  const { creationDateTime, artDate } = props;
  return creationDateTime ? (
    <div>
      <DenTooltip
        classes={{
          tooltip: style['tooltip-wrapper'],
        }}
        title={
          <div className={style['tooltip-content']}>
            {creationDateTime ? (
              <DenTypography color="inherit">
                <span className={style['addedAt']}>Added at : </span>
                {moment(creationDateTime).format('DD MMM YYYY  h:mm a')}
              </DenTypography>
            ) : null}
            {artDate ? (
              <DenTypography color="inherit">
                <span className={style['addedAt']}>Published at :</span>
                {moment(artDate).format('DD MMM YYYY  h:mm a')}
              </DenTypography>
            ) : null}
          </div>
        }
      >
        <DenFab
          variant="extended"
          size="small"
          aria-label="art creation date"
          classes={{ root: style['fab-button-wrapper'] }}
        >
          <Calender />
          {moment(creationDateTime).format('DD MMM YYYY  h:mm a')}
        </DenFab>
      </DenTooltip>
    </div>
  ) : null;
};
