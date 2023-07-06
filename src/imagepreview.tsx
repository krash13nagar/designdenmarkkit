import React from 'react';
import style from './imagepreview.module.scss';
import DenImageCard from './components/composite/imagecard/imagecard.component';
import DenDialog from './components/common/dialog/dialog.component';
import DenDialogTitle from './components/common/dialogtitle/dialogtitle.component';
import { DenButton, DenMenu, DenMenuItem, DenTypography } from './components';
import DenIconButton from './components/common/iconbutton/iconbutton.component';
import CloseIcon from '@mui/icons-material/Close';
import DenDialogContent from './components/common/dialogcontent/dialogcontent.component';
import LabelValue from './components/composite/labelvalue/labelvalue.component';
import DenAccordion from './components/common/accordion/accordion.component';
import DenAccordionSummary from './components/common/accordionsummary/accordionsummary.component';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DenAccordionDetails from './components/common/accordiondetails/accordiondetails.component';
import DenChip from './components/common/chip/chip.component';
import ViewPortBlock from './components/composite/viewportblock/viewportblock.component';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DenListItemIcon from './components/common/listitemicon/listitemicon.component';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import { viewPortDimenssions } from './components/composite/viewportblock/viewportblock.utils';
export const ImagePreview = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [viewPort, setViewport] = React.useState<string | null>('16:9');
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { width, height } = viewPortDimenssions(viewPort);
  return (
    <DenDialog open={true} maxWidth="lg">
      <DenDialogTitle classes={{ root: style['titleRootWrapper'] }}>
        <div className={style['titleWrapper']}>
          <div className={style['titleText']}>
            <DenTypography variant="h6">View Image</DenTypography>
          </div>
          <div className={style['titleIcon']}>
            <DenIconButton
              aria-label="close"
              // onClick={ }
            >
              <CloseIcon />
            </DenIconButton>
          </div>
        </div>
      </DenDialogTitle>
      <DenDialogContent>
        <div className={style['imagePreviewWrapper']}>
          <div className={style['leftPanel']}>
            <DenImageCard
              src="https://picsum.photos/800/400"
              aspectRatio={width / height}
            />
          </div>
          <div className={style['rightPanel']}>
            <div className={style['rightPanel-content']}>
              <LabelValue
                label={'MSID'}
                value="1234567"
                seperator=":"
                className={style['msid']}
              />
              <DenTypography variant="h6" className={style['image-title']}>
                Modi’s inauguration ceremony at the New Parliament
              </DenTypography>
              <DenTypography variant="body1" className={style['image-caption']}>
                Indian prime minister Narendra Modi prays before inaugurating
                the new parliament building, in New Delhi, India, Sunday,
                May…2023. The new triangular parliament building, built at an
                estimated cost of $120 million, is part of a $2.8 billion revamp
                of British-era offices and residences in central New Delhi
                called “Central Vista”, even as India’s major opposition parties
                boycotted the inauguration, in a rare show of unity against the
                Hindu nationalist ruling party that has completed nine years in
                power and is seeking a third term in crucial general elections
                next year. (AP Photo)
              </DenTypography>
              <div className={style['row']}>
                <LabelValue
                  className={style['column-6']}
                  label={'Agency'}
                  value="ANI"
                  align="column"
                />
                <LabelValue
                  className={style['column-6']}
                  label={'Source'}
                  value="PTI"
                  align="column"
                />
                <LabelValue
                  className={style['column-6']}
                  label={'Original Resolution'}
                  value="1070x580 px"
                  align="column"
                />
                <LabelValue
                  className={style['column-6']}
                  label={'Original File Size'}
                  value="31 kb"
                  align="column"
                />
                <LabelValue
                  className={style['column-6']}
                  label={'Type'}
                  value="Jpeg"
                  align="column"
                />
                <LabelValue
                  className={style['column-6']}
                  label={'Agency Usage Quota'}
                  value="480/600"
                  valueProps={{
                    className: style['agency-usage-quota'],
                  }}
                  align="column"
                />
              </div>
              <DenAccordion>
                <DenAccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <DenTypography className={style['panel-header']}>
                    Additional Info
                  </DenTypography>
                </DenAccordionSummary>
                <DenAccordionDetails>
                  <LabelValue
                    label={'Photographer'}
                    value="Ramnik Mukherjee"
                    seperator=" "
                    labelProps={{
                      className: style['column-6'],
                    }}
                    valueProps={{
                      className: style['column-6'],
                    }}
                  />
                  <LabelValue
                    label={'Category'}
                    value="Politics"
                    seperator=" "
                    labelProps={{
                      className: style['column-6'],
                    }}
                    valueProps={{
                      className: style['column-6'],
                    }}
                  />
                  <LabelValue
                    label={'Keywords'}
                    renderValue={(value) => {
                      if (value instanceof Array && value.length) {
                        return (
                          <div>
                            {value.map((elm) => (
                              <DenChip
                                label={
                                  <span className={style['chip-label']}>
                                    {elm as string}
                                  </span>
                                }
                              />
                            ))}
                          </div>
                        );
                      }
                      return null;
                    }}
                    value={['keywords', 'test']}
                    seperator=" "
                    labelProps={{
                      className: style['column-6'],
                    }}
                    valueProps={{
                      className: style['column-6'],
                    }}
                  />
                </DenAccordionDetails>
              </DenAccordion>
              <DenAccordion>
                <DenAccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <DenTypography className={style['panel-header']}>
                    Show image in different viewports
                  </DenTypography>
                </DenAccordionSummary>
                <DenAccordionDetails>
                  <div className={style['block-wrapper']}>
                    {['16:9', '9:16', '1.91:1', '1:1', '3:2', '4:3'].map(
                      (value) => {
                        return (
                          <ViewPortBlock
                            onClick={(_e) => setViewport(value)}
                            selected={viewPort === value}
                            aspectRatio={value}
                          />
                        );
                      }
                    )}
                  </div>
                </DenAccordionDetails>
              </DenAccordion>
            </div>
            <div className={style['footerWrapper']}>
              <DenButton variant="contained" className={style['edit-image']}>
                Edit Image
              </DenButton>
              <DenIconButton
                aria-label="more"
                id="long-button"
                aria-haspopup="true"
                onClick={handleClick}
                // color="primary"
                className={style['more-icon-base']}
                disableRipple
              >
                <MoreVertIcon />
              </DenIconButton>
              <DenMenu
                id="long-menu"
                MenuListProps={{
                  'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                {['Download', 'Set as Thumbnail'].map((option) => (
                  <DenMenuItem key={option} onClick={handleClose}>
                    <DenListItemIcon>
                      <PriorityHighIcon fontSize="small" />
                    </DenListItemIcon>
                    <DenTypography variant="inherit">{option}</DenTypography>
                  </DenMenuItem>
                ))}
              </DenMenu>
            </div>
          </div>
        </div>
      </DenDialogContent>
    </DenDialog>
  );
};
export default ImagePreview;
