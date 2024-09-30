import React, { useEffect, useState } from 'react';
import moment, { Moment } from 'moment';
import { DateRangeIcon, HelpOutlineSharp } from '../../../assets';
import DenCalender from '../../complex/imageauthoring/metadata/metawidgetcomponents/calender.component';
import { DenTextField } from '../../common/textfield/textfield.component';
import { PublishModalProps } from './publishdate.types';
import {
  DenButton,
  DenGrid,
  DenInputLabel,
  DenTooltip,
  DenTypography,
} from '../../common';
import DenInputAdornment from '../../common/inputadornment/inputadornment.component';
import { TooltipProps, styled, tooltipClasses } from '@mui/material';
import { CommonDialog } from '../commondialog';
import './publish.modal.styles.scss';

const PublishDateModalComponent = (props: PublishModalProps) => {
  const {
    publishDate: pbDate,
    expiresIn,
    artInsDate,
    artUpdDate,
    setOpen,
    onAutoCorrect,
    onUpdate,
    open,
    PublishModalTitle = 'Publish and Expiry Date',
  } = props;
  const [publishDate, setPublishDate] = useState('');
  const [publishDateUnix, setPublishDateUnix] = useState(null);
  const [expiryDate, setExpiryDate] = useState('');
  const [expiryDateUnix, setExpiryDateUnix] = useState(null);
  const [expireDays, setExpireDays] = useState<string | number>('');

  useEffect(() => {
    if (pbDate) {
      const _pubDate = moment(new Date(pbDate)).format('DD/MM/YYYY HH:mm');
      setPublishDateUnix(pbDate);
      setPublishDate(_pubDate);
    }
    if (expiresIn) {
      const _expDate = moment(new Date(expiresIn)).format('DD/MM/YYYY HH:mm');
      const _days = Math.ceil((expiresIn - pbDate) / (1000 * 3600 * 24));
      setExpireDays(_days);
      setExpiryDate(_expDate);
      setExpiryDateUnix(expiresIn);
    }
  }, []);

  const handlePublishChange = (date: Moment) => {
    setPublishDate(date.format('DD/MM/YYYY HH:mm'));
    const val = date
      ? new Date(date.toLocaleString()).getTime()
      : new Date().getTime();
    setPublishDateUnix(val);
    if (expiryDateUnix) {
      const _days = Math.ceil((expiryDateUnix - val) / (1000 * 3600 * 24)) || 0;
      setExpireDays(_days);
    }
  };
  const handleValidChange = (date: Moment) => {
    setExpiryDate(date.format('DD/MM/YYYY HH:mm'));
    const val = date
      ? new Date(date.toLocaleString()).getTime()
      : new Date().getTime();
    setExpiryDateUnix(val);
    if (publishDate && publishDate != '') {
      //const _pubDate = new Date(publishDate).getTime()
      if (val) {
        const _days =
          Math.ceil((val - publishDateUnix) / (1000 * 3600 * 24)) || 0;
        setExpireDays(_days);
      }
    }
  };

  const handleExpiryChange: React.ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  > = (e) => {
    setExpireDays(e.target.value);
    const newDate =
      moment(publishDate, 'DD/MM/YYYY HH:mm').valueOf() +
      1000 * 60 * 60 * 24 * parseInt(e.target.value);
    setExpiryDate(moment(newDate).format('DD/MM/YYYY HH:mm'));
    setExpiryDateUnix(newDate);
  };
  const handleSetCurrent = () => {
    setPublishDate(moment().format('DD/MM/YYYY HH:mm'));
    const val = new Date().getTime();
    setPublishDateUnix(val);
  };
  const handleSetToMax = () => {
    setExpireDays('');
    setExpiryDate('');
    setExpiryDateUnix(null);
  };

  const handleDone = (event: any) => {
    const arr = [];
    if (publishDateUnix) {
      arr.push({ model: 'artDate', value: publishDateUnix });
    }
    if (expiryDateUnix) {
      arr.push({ model: 'artExpDate', value: expiryDateUnix });
    }
    if (onUpdate) {
      onUpdate(arr);
    }
    handleClose(event);
  };

  const handleAutoCorrect = () => {
    setExpireDays('');
    setExpiryDate('');
    setExpiryDateUnix(null);
    if (onAutoCorrect) {
      onAutoCorrect();
    }
  };
  const handleClose = (
    event: {},
    reason?: 'backdropClick' | 'escapeKeyDown'
  ) => {
    if (reason == 'backdropClick' || reason == 'escapeKeyDown') {
      return;
    }
    setOpen(false);
  };

  const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
    <DenTooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(13),
      border: '1px solid #dadde9',
      padding: '15px 20px',
    },
    [`& .${tooltipClasses.arrow}`]: {
      '&::after': {
        backgroundColor: '#f5f5f9 !important',
        color: 'rgba(0, 0, 0, 0.87) !important',
        border: '1px solid #dadde9 !important',
      },
      '&::before': {
        backgroundColor: '#f5f5f9 !important',
        color: 'rgba(0, 0, 0, 0.87) !important',
        border: '1px solid #dadde9 !important',
      },
    },
  }));

  return (
    <CommonDialog
      open={open}
      dialogTitleProps={{
        id: 'publish-modal-dialog-title',
      }}
      handleClose={handleClose}
      dialogProps={{
        onClose: handleClose,
        fullWidth: props?.fullWidth ?? false,
        maxWidth: props?.maxWidth ?? false,
        classes: { root: 'publish-modal-dialog-root' },
      }}
      title={PublishModalTitle}
      titleVariant={'contained'}
      actionChildren={
        <DenGrid container item xs={12} justifyContent="space-between">
          <DenGrid container item xs={4}>
            <HtmlTooltip
              title={
                <React.Fragment>
                  <ul>
                    <li>
                      <strong>Last Updated:</strong> Automatically set to the
                      latest time at which the content was updated. Only
                      considers selected attributes.
                    </li>
                    <li>
                      <strong>Created On:</strong> Timestamp at which the
                      content was created.
                    </li>
                    <li>
                      <strong>Max View Days:</strong> Maximum allowed view days
                      from Created Timestamp according to the Agency contract.
                    </li>
                  </ul>
                </React.Fragment>
              }
              placement="top-end"
              arrow={true}
            >
              <DenButton
                aria-label="info"
                size="small"
                color="inherit"
                startIcon={<HelpOutlineSharp name="Help Icon" />}
              >
                Know More
              </DenButton>
            </HtmlTooltip>
          </DenGrid>
          <DenGrid
            container
            item
            xs={8}
            justifyContent="flex-end"
            className="new-modal-footer"
          >
            <DenButton
              onClick={handleAutoCorrect}
              variant="outlined"
              color="primary"
              sx={{ mx: '5px' }}
            >
              Auto Correct
            </DenButton>
            <DenButton
              onClick={handleClose}
              variant="outlined"
              color="primary"
              sx={{ mx: '5px' }}
            >
              Cancel
            </DenButton>
            <DenButton
              onClick={handleDone}
              variant="contained"
              color="primary"
              sx={{ mx: '5px' }}
            >
              Update
            </DenButton>
          </DenGrid>
        </DenGrid>
      }
      dialogContentProps={{ dividers: true }}
    >
      <DenGrid container item xs={12} spacing={4}>
        <DenGrid item sm={9} className="metadataRightPanel">
          <DenGrid container item xs={12} className="mb10">
            <DenGrid item xs={12} className="mb10">
              <DenGrid
                item
                xs={12}
                className="mt10"
                data-meta-type={''}
                data-widget-type={''}
              >
                <DenInputLabel shrink> Publish Date:</DenInputLabel>

                <DenCalender
                  handleCallback={handlePublishChange}
                  styleCalender="vs-daterange"
                  timePicker={true}
                  format={'DD/MM/YYYY hh:mm'}
                  drops="down"
                >
                  <DenTextField
                    value={publishDate}
                    fullWidth
                    InputProps={{
                      startAdornment: (
                        <DenInputAdornment position="start">
                          <DateRangeIcon name="date range icon" />
                        </DenInputAdornment>
                      ),
                    }}
                  />
                </DenCalender>
              </DenGrid>
              <DenTypography
                className="publishDateLink"
                paragraph={true}
                onClick={handleSetCurrent}
              >
                Set to now
              </DenTypography>
            </DenGrid>
            <DenGrid item sx={{ mr: '6px', flex: 1 }}>
              <DenGrid item sm={12}>
                <DenInputLabel shrink>Valid Upto:</DenInputLabel>
                <DenCalender
                  handleCallback={handleValidChange}
                  timePicker={true}
                  format={'DD/MM/YYYY hh:mm'}
                  minDate={publishDateUnix ? publishDateUnix : new Date()}
                >
                  <DenTextField
                    value={expiryDate}
                    label=""
                    type="text"
                    fullWidth
                    InputProps={{
                      startAdornment: (
                        <DenInputAdornment position="start">
                          <DateRangeIcon name="date range icon" />
                        </DenInputAdornment>
                      ),
                    }}
                  />
                </DenCalender>
              </DenGrid>

              <DenTypography
                className="publishDateLink"
                paragraph={true}
                onClick={handleSetToMax}
              >
                Set to max
              </DenTypography>
            </DenGrid>
            <DenTextField
              id="standard-basic"
              label="Expiry In Day(s)"
              name="expireDays"
              placeholder="NA"
              value={expireDays as string}
              onChange={handleExpiryChange}
              wrapperClass="expiresInTextfield"
              valueProps={{ inputProps: { type: 'number' } }}
            />
          </DenGrid>
        </DenGrid>

        <DenGrid item xs={3} className="recommended-wrapper">
          <div className="publishRightSection">
            {artUpdDate && (
              <DenGrid item xs={12} className="mb10">
                <DenTypography color="textSecondary" variant="subtitle2">
                  <strong>Last Updated</strong>
                </DenTypography>
                <DenTypography color="textSecondary" variant="subtitle2">
                  {moment(artUpdDate).format('LLL')}
                </DenTypography>
              </DenGrid>
            )}
            {artInsDate && (
              <DenGrid item xs={12} className="mb10">
                <DenTypography color="textSecondary" variant="subtitle2">
                  <strong>Created On</strong>
                </DenTypography>
                <DenTypography color="textSecondary" variant="subtitle2">
                  {moment(artInsDate).format('LLL')}
                </DenTypography>
              </DenGrid>
            )}

            <DenGrid item xs={12} className="mb10">
              <DenTypography color="textSecondary" variant="subtitle2">
                <strong>Max view Days:</strong> Not Applicable
              </DenTypography>
            </DenGrid>
          </div>
        </DenGrid>
      </DenGrid>
    </CommonDialog>
  );
};

export default PublishDateModalComponent;
