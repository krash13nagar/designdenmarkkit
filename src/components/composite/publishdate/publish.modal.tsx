import React, { useEffect, useState } from 'react';
import moment, { Moment } from 'moment';
import { Cancel, DateRangeIcon, HelpOutlineSharp } from '../../../assets';
import DenCalender from '../../complex/imageauthoring/metadata/metawidgetcomponents/calender.component';
import { DenTextField } from '../../common/textfield/textfield.component';
import { PublishModalProps } from './publishdate.types';
import {
  DenButton,
  DenDialog,
  DenDialogActions,
  DenDialogContent,
  DenDialogTitle,
  DenGrid,
  DenIconButton,
  DenInputLabel,
  DenTooltip,
  DenTypography,
} from '../../common';
import DenInputAdornment from '../../common/inputadornment/inputadornment.component';
import { TooltipProps, styled, tooltipClasses } from '@mui/material';
import Draggable from 'react-draggable';
import DenPaper from '../../common/paper/paper.component';

const PublishDateModalComponent = (props: PublishModalProps) => {
  const {
    triggerMBDone,
    autoCorrect,
    publishDate: pbDate,
    expiresIn,
    artInsDate,
    artUpdDate,
    setOpen,
    open,
  } = props;
  const [publishDate, setPublishDate] = useState('');
  const [publishDateUnix, setPublishDateUnix] = useState(null);
  const [expiryDate, setExpiryDate] = useState('');
  const [expiryDateUnix, setExpiryDateUnix] = useState(null);
  const [expireDays, setExpireDays] = useState<string | number>('');
  function PaperComponent(props: any) {
    return (
      <Draggable
        handle="#draggable-DenDialog-title"
        cancel={'[class*="MuiDialogContent-root"]'}
      >
        <DenPaper {...props} />
      </Draggable>
    );
  }
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

  useEffect(() => {
    if (props.autoCorrect) {
      setExpireDays('');
      setExpiryDate('');
      setExpiryDateUnix(null);
      //props.handleAutoCorrect()
    }
  }, [autoCorrect]);

  useEffect(() => {
    if (props.triggerMBDone) {
      const arr = [];
      if (publishDateUnix) {
        arr.push({ model: 'artDate', value: publishDateUnix });
      }
      if (expiryDateUnix) {
        arr.push({ model: 'artExpDate', value: expiryDateUnix });
      }
      props.callback(arr);
    }
  }, [triggerMBDone]);

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
  const handleReset = () => {
    //handleClose()
    if (props.onReset) {
      props.onReset();
    }
  };

  const handleDone = () => {
    //handleClose()
    if (props.onDone) {
      props.onDone(props.preventCloseOnDone);
    }
  };
  const handleAutoCorrect = () => {
    if (props.onAutoCorrect) {
      props.onAutoCorrect();
    }
  };
  const handleClose = (
    event: {},
    reason?: 'backdropClick' | 'escapeKeyDown'
  ) => {
    if (props.overrideClose) {
      if (typeof props.overrideClose == 'function') {
        props.overrideClose();
        setOpen(false);
        return;
      } else if (typeof props.overrideClose == 'string') {
        if (methodMap[props.overrideClose as keyof typeof methodMap]) {
          if (props.confirmBeforeClose) {
            const confirm =
              methodMap?.[props.overrideClose as keyof typeof methodMap](event);
            // if (!confirm) {
            //   return;
            // }
          } else {
            methodMap?.[props.overrideClose as keyof typeof methodMap](event);
          }
          setOpen(false);
          return;
        }
      }
    }
    // if (props.onClose) {
    //   props.onClose();
    // }
    setOpen(false);
  };
  const methodMap = {
    reset: handleReset,
    done: handleDone,
    close: handleClose,
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
    arrow: {
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

  const cursor = props.isDragable ? 'move' : 'default';
  return (
    <DenDialog
      onClose={handleClose}
      aria-labelledby="draggable-DenDialog-title"
      fullWidth={props?.fullWidth ?? false}
      maxWidth={props?.maxWidth ?? false}
      open={open}
      // PaperComponent={props.isDragable ? PaperComponent : null}
      // scroll={'paper'}
      // className={props.wrapperClass}
    >
      <DenDialogTitle
        id="draggable-DenDialog-title"
        style={{ cursor: cursor }}
        // className={props.titleClass || "defaultthumb-DenDialog-title"}
      >
        <DenGrid container>
          <DenGrid item xs={11}>
            <DenTypography variant="h6">
              {props.PublishModalTitle}
            </DenTypography>
          </DenGrid>
          <DenGrid container item xs={1} alignContent={'flex-end'}>
            <DenIconButton aria-label="close" onClick={handleClose}>
              <Cancel />
            </DenIconButton>
          </DenGrid>
        </DenGrid>
      </DenDialogTitle>
      <DenDialogContent
        dividers
        // className={props.contentClass}
      >
        <>
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
                        type="text"
                        label=""
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
                <DenGrid item sm={9} className="mb10">
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
                <DenGrid item sm={3} className="mb10 pt2">
                  <DenTextField
                    id="standard-basic"
                    label="Expiry In Day(s)"
                    name="expireDays"
                    placeholder="NA"
                    value={expireDays as string}
                    onChange={handleExpiryChange}
                  />
                </DenGrid>
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
        </>
      </DenDialogContent>
      <DenDialogActions
      // className={props.actionClass}
      >
        <DenGrid container item xs={12} justifyContent="space-between">
          <DenGrid container item xs={4}>
            {props.visibleUpdateButton && (
              <>
                <HtmlTooltip
                  title={
                    <React.Fragment>
                      <ul>
                        <li>
                          <strong>Last Updated:</strong> Automatically set to
                          the latest time at which the content was updated. Only
                          considers selected attributes.
                        </li>
                        <li>
                          <strong>Created On:</strong> Timestamp at which the
                          content was created.
                        </li>
                        <li>
                          <strong>Max View Days:</strong> Maximum allowed view
                          days from Created Timestamp according to the Agency
                          contract.
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
                    {' '}
                    Know More
                  </DenButton>
                </HtmlTooltip>
              </>
            )}
          </DenGrid>
          <DenGrid
            container
            item
            xs={8}
            justifyContent="flex-end"
            className="new-modal-footer"
          >
            {props.visibleCorrectButton && (
              <DenButton
                onClick={handleAutoCorrect}
                variant="outlined"
                color="primary"
                className="ml5 mr5"
              >
                Auto Correct
              </DenButton>
            )}
            {props.visibleResetButton && (
              <DenButton
                onClick={handleReset}
                variant="outlined"
                color="primary"
                className="ml5 mr5"
              >
                Reset
              </DenButton>
            )}
            {props.visibleDoneButton && (
              <DenButton
                onClick={handleDone}
                variant="contained"
                color="primary"
                className="ml5 mr5"
              >
                Save
              </DenButton>
            )}
            {props.visibleCancelButton && (
              <DenButton
                onClick={handleClose}
                variant="outlined"
                color="primary"
                className="ml5 mr5"
              >
                Cancel
              </DenButton>
            )}

            {props.visibleUpdateButton && (
              <DenButton
                onClick={handleDone}
                variant="contained"
                color="primary"
                className="ml5 mr5"
              >
                Update
              </DenButton>
            )}
            {props.visibleOkayButton && (
              <DenButton
                onClick={handleClose}
                variant="contained"
                color="primary"
                className="mb2"
              >
                Okay
              </DenButton>
            )}
          </DenGrid>
        </DenGrid>
      </DenDialogActions>
    </DenDialog>
  );
};

export default PublishDateModalComponent;
