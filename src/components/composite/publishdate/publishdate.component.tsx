import React, { useState } from 'react';
import { Today } from '../../../assets/cdsicons/todayicon';
import { PublishDateProps } from './publishdate.types';
import PublishDateModalComponent from './publish.modal';
import style from './publishdate.module.scss';
import moment from 'moment';

const PublishDate = (props: PublishDateProps) => {
  const {
    publishDate,
    publishDateLabel = 'Publish Date',
    expiresIn,
    expiresInDaysLabel = 'Expire In',
    artUpdDate,
    publishDateFormat = 'LLL',
    publishDateWrapper = style['publishDateWrapper'],
    publishDateClass = style['publishDate'],
    publishDateLabelClass = style['publishDateLabel'],
  } = props;


  let days: number = 0;
  if (expiresIn && publishDate) {
    days = Math.ceil((expiresIn - publishDate) / (1000 * 3600 * 24));
  }
  const [open, setOpen] = useState(false);

  return (
    <div className={publishDateWrapper}>
      <Today
        name="Today Icon"
        className="cds-calendar-icon"
        onClick={() => {
          setOpen(true);
        }}
      />

      <div className={publishDateLabelClass}>
        <label className={'publishDateLink'} onClick={() => setOpen(true)}>
          {publishDateLabel}
        </label>
        {publishDate && (
          <div className={'foramtted-date' + publishDateClass} style={{ paddingTop: '4px' }}>
            {moment(publishDate)?.format(publishDateFormat)}
          </div>
        )}
      </div>
      {days ? (
        <div className={style['expiryDateWrapper']} >
          <label className={style['expiryDateLabel']}>{expiresInDaysLabel}:</label>
          <div className="color-Red" style={{ paddingTop: '4px' }}>{`${days} days`}</div>
        </div>
      ) : (
        ''
      )}
      {open && (
        <PublishDateModalComponent open={open} setOpen={setOpen} {...props} />
      )}
    </div>
  );
};
export default PublishDate;
