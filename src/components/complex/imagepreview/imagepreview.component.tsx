import React, { FC, SyntheticEvent } from 'react';
import style from './imagepreview.module.scss';
import {
  AlingType,
  DenImageCard,
  LabelValue,
  ViewPortBlock,
} from '../../composite';
import {
  DenDialog,
  DenDialogTitle,
  DenButton,
  DenMenu,
  DenMenuItem,
  DenTypography,
  DenIconButton,
  DenDialogContent,
  DenAccordion,
  DenAccordionSummary,
  DenAccordionDetails,
  DenChip,
  DenListItemIcon,
} from '../../common';
import { viewPortDimenssions } from '../../composite/viewportblock/viewportblock.utils';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { sample } from './sample';
import {
  AnchorGeneric,
  ImagePreviewProps,
  MenuEnum,
} from './imagepreview.types';
import { DisplayCardDate } from '../../composite/datetime/datetime';
import { cleanHTML } from '../../../utility/utils';

export const ImagePreview: FC<ImagePreviewProps> = (
  props: ImagePreviewProps = sample
) => {
  const {
    msid,
    title,
    caption,
    containerHeader,
    imageSource,
    selectedAspectRatio,
    imageInfo,
    additionalInfo,
    viewPorts,
    actions,
    creationDateTime,
    artDate,
    maxWidth,
    showMoreShowLess,
    onClose = (_event: any) => {},
  } = props;
  const [anchorEl, setAnchorEl] = React.useState<AnchorGeneric>({});
  const [showFullTitle, setShowFullTitle] = React.useState(false);
  const [showFullCaption, setShowFullCaption] = React.useState(false);
  const [viewPort, setViewport] = React.useState<string | null>(
    selectedAspectRatio
  );
  const handleClick = (
    event: React.SyntheticEvent<HTMLElement>,
    index: number
  ) => {
    setAnchorEl((prev) => ({ ...prev, [index]: event.currentTarget }));
  };
  const handleClose = (
    event: React.SyntheticEvent<HTMLElement> | undefined,
    index: number,
    cb?: Function | undefined
  ) => {
    setAnchorEl((prev) => ({ ...prev, [index]: null }));
    if (cb) cb(event);
  };
  const { width, height } = viewPortDimenssions(viewPort);

  const toggleShowFullTitle =()=>{
    setShowFullTitle(!showFullTitle);
  }

  const toggleShowFullCaption =()=>{
    setShowFullCaption(!showFullCaption);
  }

  let titleContent = title.length <= 75 || !showMoreShowLess ? (
      title
    ) : (
      <>
        {showFullTitle ? (
          title
        ) : (
          <>
            {`${title.slice(0, 75)}...`}
          </>
        )}
        <span className={style['showFullContentSpan']} onClick={toggleShowFullTitle}>
          {showFullTitle ? ' Read Less' : 'Read More'}
        </span>
      </>
    );

  let captionContent = caption.length <= 125 || !showMoreShowLess ? (
      caption
    ) : (
      <>
        {showFullCaption ? (
          caption
        ) : (
          <>
            {`${caption.slice(0, 125)}...`}
          </>
        )}
        <span className={style['showFullContentSpan']} onClick={toggleShowFullCaption}>
          {showFullCaption ? ' Read Less' : 'Read More'}
        </span>
      </>
    );

  return (
    <DenDialog open={true} maxWidth={maxWidth ?? "lg"}>
      <DenDialogTitle classes={{ root: style['titleRootWrapper'] }}>
        <div className={style['titleWrapper']}>
          <div className={style['titleText']}>
            <DenTypography variant="h6">{containerHeader}</DenTypography>
          </div>
          <div className={style['titleIcon']}>
            <DenIconButton aria-label="close" onClick={onClose}>
              <CloseIcon />
            </DenIconButton>
          </div>
        </div>
      </DenDialogTitle>
      <DenDialogContent classes={{ root: style['dialogContentWrapper'] }}>
        <div className={style['imagePreviewWrapper']}>
          <div className={style['leftPanel']}>
            <DenImageCard src={imageSource} aspectRatio={width / height} />
          </div>
          <div className={style['rightPanel']}>
            <div className={style['rightPanel-content']}>
              <LabelValue
                label="MSID"
                value={msid}
                seperator=":"
                className={style['msid']}
              />
              <DenTypography
                variant="h6"
                className={`${style['image-title']} ${showFullTitle ? style['expanded'] : ''}`}
                title={cleanHTML(title)}
                dangerouslySetInnerHTML={{ __html: titleContent }}
              />
              <DenTypography
                variant="body1"
                className={`${style['image-caption']} ${showFullCaption ? style['expanded'] : ''}`}
                dangerouslySetInnerHTML={{ __html: captionContent }}
              />
              <DisplayCardDate
                creationDateTime={creationDateTime}
                artDate={artDate}
              />
              <div className={style['row']}>
                {imageInfo?.map((info) => (
                  <LabelValue
                    className={style[`column-${info.col ?? 6}`]}
                    label={info.label}
                    value={info.value}
                    labelProps={{
                      className: style['info-label'],
                    }}
                    valueProps={{
                      className: style['info-value'],
                    }}
                    align={
                      AlingType[info.align as AlingType] ?? AlingType.column
                    }
                  />
                ))}
              </div>
              {additionalInfo && (
                <DenAccordion>
                  <DenAccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className={style['panel-summary']}
                    classes={{
                      content: style['panel-content'],
                      expanded: style['panel-content'],
                    }}
                  >
                    <DenTypography className={style['panel-header']}>
                      {additionalInfo?.header}
                    </DenTypography>
                  </DenAccordionSummary>
                  <DenAccordionDetails>
                    {additionalInfo?.info?.map((info) => (
                      <LabelValue
                        label={info?.label}
                        value={info?.value}
                        seperator=" "
                        labelProps={{
                          className: `${style['column-6']} ${
                            style['additonal-info-label']
                          } ${style[info?.label]}`,
                        }}
                        valueProps={{
                          className: `${style['column-6']} ${
                            style['additonal-info-value']
                          } ${style[info?.label]}`,
                        }}
                        renderValue={
                          info?.value instanceof Array &&
                          info?.value.length &&
                          ((value: any) => {
                            if (value instanceof Array && value.length) {
                              return (
                                <div className={style['column-6']}>
                                  {value?.map((elm) => (
                                    <DenChip
                                      label={
                                        <span
                                          title={elm}
                                          className={style['chip-label']}
                                        >
                                          {elm as string}
                                        </span>
                                      }
                                      classes={{
                                        root: style['chip-root'],
                                      }}
                                    />
                                  ))}
                                </div>
                              );
                            }
                            return null;
                          })
                        }
                      />
                    ))}
                  </DenAccordionDetails>
                </DenAccordion>
              )}
              {viewPorts && (
                <DenAccordion>
                  <DenAccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className={style['panel-summary']}
                  >
                    <DenTypography className={style['panel-header']}>
                      {viewPorts?.header}
                    </DenTypography>
                  </DenAccordionSummary>
                  <DenAccordionDetails>
                    <div className={style['block-wrapper']}>
                      {viewPorts?.ports?.map((value) => {
                        return (
                          <ViewPortBlock
                            onClick={(_e) =>
                              setViewport(value?.value as string)
                            }
                            selected={viewPort === value?.value}
                            aspectRatio={value?.value as string}
                            label={value?.label}
                          />
                        );
                      })}
                    </div>
                  </DenAccordionDetails>
                </DenAccordion>
              )}
            </div>
            <div className={style['footerWrapper']}>
              {actions?.map((action, index: number) => {
                if (action.type === MenuEnum.button) {
                  return (
                    <DenButton
                      variant="contained"
                      className={style['edit-image']}
                      disabled={action?.disabled}
                      onClick={action?.onClick}
                    >
                      {action.label}
                    </DenButton>
                  );
                }
                if (action.type === MenuEnum.menu) {
                  return (
                    <>
                      <DenIconButton
                        aria-label="more"
                        id={action?.label + index}
                        aria-haspopup="true"
                        onClick={(e) => handleClick(e, index)}
                        className={style['more-icon-base']}
                        disableRipple
                        disabled={action?.disabled}
                      >
                        {action?.icon ? <action.icon /> : action?.label}
                      </DenIconButton>
                      <DenMenu
                        id="long-menu"
                        anchorEl={anchorEl?.[index]}
                        open={Boolean(anchorEl?.[index])}
                        onClose={() => handleClose(undefined, index)}
                      >
                        {action?.options?.map((option) => (
                          <DenMenuItem
                            key={option?.label}
                            onClick={(e) =>
                              handleClose(e, index, action.onClick)
                            }
                            {...(option?.optionProps ?? {
                              classes: {
                                root: style['menuOptions'],
                              },
                            })}
                            disabled={option?.disabled}
                          >
                            {option?.startIcon && (
                              <DenListItemIcon>
                                <option.startIcon fontSize="small" />
                              </DenListItemIcon>
                            )}
                            <DenTypography variant="inherit">
                              {option.label}
                            </DenTypography>
                            {option?.endIcon && (
                              <DenListItemIcon>
                                <option.endIcon fontSize="small" />
                              </DenListItemIcon>
                            )}
                          </DenMenuItem>
                        ))}
                      </DenMenu>
                    </>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </DenDialogContent>
    </DenDialog>
  );
};
export default ImagePreview;
