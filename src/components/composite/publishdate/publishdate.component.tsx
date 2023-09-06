import React, { useState } from 'react';
import { Today } from '../../../assets/cdsicons/todayicon';
import { PublishDateProps } from './publishdate.types';
import PublishDateModalComponent from './publish.modal';
import moment from 'moment';

const PublishDate = (props: PublishDateProps) => {
  const {
    publishDate,
    publishDateLabel = 'Publish Date',
    expiresIn,
    expiresInDaysLabel = 'Expire In',
    artUpdDate,
    publishDateFormat = 'LLL',
  } = props;
  let days: number = 0;
  if (expiresIn && publishDate) {
    days = Math.ceil((expiresIn - publishDate) / (1000 * 3600 * 24));
  }
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Today
        name="Today Icon"
        className="vs-calendar-icon"
        onClick={() => {
          setOpen(true);
        }}
      />

      <div>
        <span className="publishDateLink" onClick={() => setOpen(true)}>
          {publishDateLabel}
        </span>

        {publishDate && (
          <div className="foramtted-date">
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
