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
        className="vs-calendar-icon"
        onClick={() => {
          setOpen(true);
        }}
      />

      <div className={publishDateLabelClass}>
        <span className={'publishDateLink'} onClick={() => setOpen(true)}>
          {publishDateLabel}
        </span>

        {publishDate && (
          <div className={'foramtted-date' + publishDateClass}>
            {moment(publishDate)?.format(publishDateFormat)}
          </div>
        )}
      </div>
      {days ? (
        <div>
          <div className="">{expiresInDaysLabel}:</div>
          <div className="color-Red">{`${days} days`}</div>
        </div>
      ) : (
        ''
      )}
      {open && (
        <PublishDateModalComponent
          open={open}
          setOpen={setOpen}
          {...props}
          isDragable={false}
        />
      )}
    </div>
  );
};
export default PublishDate;
