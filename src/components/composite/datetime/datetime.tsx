import React from 'react';
import { DenFab, DenTooltip, DenTypography } from '../../common';
import { DateTimeDisplay } from './datetimedisplay.types';
import moment from 'moment';
import { Calendar } from '../../../assets/cdsicons/calendericon';
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
                {moment(creationDateTime).format('DD MMM YYYY  h:mm A')}
              </DenTypography>
            ) : null}
            {artDate ? (
              <DenTypography color="inherit">
                <span className={style['addedAt']}>Published at : </span>
                {moment(artDate).format('DD MMM YYYY  h:mm A')}
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
          <Calendar
            width={21}
            height={21}
            htmlColor="#2b2b2b"
            name="calender Icon"
          />
          {moment(creationDateTime).format('DD MMM YYYY  h:mm a')}
        </DenFab>
      </DenTooltip>
    </div>
  ) : null;
};
