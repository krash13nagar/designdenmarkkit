import React, { useRef, useState } from 'react';
import cssClassName from './richstorycard.module.scss';
import { DenButton, DenCard, DenCardActions, DenCardContent, DenCardMedia, DenTypography } from '../../common';
import { cleanHTML } from '../../../utility/utils';
import { ClickAwayListener, Typography } from '@mui/material';


export const RichStoryCard = (props: any) => {
  const isShowResolution = true;
  const {
    msid,
    type,
    name,
    agencyName,
    entityType,
    fromNow,
    imageUrl,
    dataSource,
    imageSource,
    resolution,
    ingestionDate,
    imageCardMenuOptions,
    onCallbackSelectImagefnc
  } = props;


  return (
    // /* <DenCard classes={{ root: 'card-root' }} id={`vs-item-${msid}`} key={msid} className={cssClassName['default-card-wrapper']} onMouseLeave={() => { setShowCardMenu(false) }}>
    //     <div aria-describedby="order of section children" className="heading-wrapper">
    //         {/* <input disabled={!disableEvents} value={props?.index} onBlur={(e) => InputBlurHandler(msid, e, props?.index)} onChange={(e) => InputHandler(msid, e)} className={clsx("card-serial", { "card-error": props.error })} type="number" min={1} />
    //         {!props.error && IsCheckVisisble && <span onClick={handleCheckIcon} className="check-icon-green"><CheckGreenIcon /></span>}
    //         {!props.error && <span className="check-icon"><CheckGrayIcon /></span>} */}
    //         {/* {
    //             props.error &&
    //             <span aria-errormessage="not a valid input">
    //                 <span>
    //                     <InvalidInputIcon />
    //                 </span>
    //                 <span className="input-error-message">{IMAGE_ERROR_MESSAGE.invalidInput}</span>

    //             </span>
    //         }

    //     </div>
    //     <div className={isShowResolution ? cssClassName["image-with-resolution-wrapper"] : ""}>
    //         {/* {(isVisualContent && isShowResolution && resolution && isShown) && */}
    //         {/* {(showCheckbox && isShown) &&
    //             <div className="bulkAddition-checkbox-wrapper">
    //                 <Checkbox
    //                     checked={inputValue}
    //                     onClick={checkboxClick}
    //                     color="primary"
    //                     className="bulkAddition-checkbox"
    //                 />
    //             </div>} */}
    //         <DenCardMedia
    //             src={imageUrl}
    //             component="img"
    //             title={name}
    //             classes={{
    //                 img: `${isShowResolution ? cssClassName["newCardMedia-image"] : cssClassName["cardMedia-image"]}`
    //             }}
    //             onError={e => {
    //                 // ImageUtils.imageFallback(src, type).then(function (url) {
    //                 //     e.target.src = url;
    //                 //     e.target.className += ' default-thumb-atom';
    //                 // })
    //             }}
    //         />
    //         {(isShowResolution && resolution) &&
    //             <div className={cssClassName["new-resolution"]}>
    //                 <span className={cssClassName["primaryText"]}>{agencyName ? agencyName + " | " : ""}{fromNow}</span>
    //                 <span className={cssClassName["secondaryText"]}>{resolution}</span>
    //             </div>
    //         }
    //         {isShowResolution &&
    //             <ImageSearchCardHoverDetails name={name} agencyName={agencyName} dataSource={dataSource} ingestionDate={ingestionDate} resolution={resolution} agencyUsageData={{}} onCallbackMenufnc={handleShowCardMenu} onCallbackSelectImagefnc={onCallbackSelectImagefnc} />
    //         }
    //     {!isShowResolution && <DenCardActions key={msid} className="card-action-wrapper" >
    //         <div className="vsslide-details">
    //             <div className={'dot-atom_status '}></div>
    //             <div className={"slide-icon-" + type?.toLowerCase()}>
    //                 <svg xmlns="http://www.w3.org/2000/svg" width="10.047" height="9.042" viewBox="0 0 10.047 9.042"><path fill="curentColor" d="M10.54,4H9.45A1.514,1.514,0,0,0,8.028,3H6.019A1.514,1.514,0,0,0,4.6,4H3.507A1.512,1.512,0,0,0,2,5.512v5.023a1.512,1.512,0,0,0,1.507,1.507H10.54a1.512,1.512,0,0,0,1.507-1.507V5.512A1.512,1.512,0,0,0,10.54,4ZM7.023,10.033A2.009,2.009,0,1,1,9.033,8.023,2.009,2.009,0,0,1,7.023,10.033Z" transform="translate(-2 -3)" /></svg>
    //             </div>
    //             <div className="msid">
    //                 {msid}
    //             </div>
    //         </div>
    //         <div className="vsslide-title textEllipisTwoline">{cleanHTML(name)}</div>
    //     </DenCardActions>
    //     }
    //     {isShowResolution && showCardMenu &&
    //         <ClickAwayListener onClickAway={() => { setShowCardMenu(false) }}>
    //             <div className={`${cssClassName["card-menu"]} ${cssClassName[cardMenuBtnClass]}`}>
    //                 {imageCardMenuOptions.map((cardMenuItem, index) => {
    //                     return (
    //                         <>
    //                             <div
    //                                 className={cssClassName["card-menu-item"]}
    //                                 key={index}
    //                                 onClick={(e) => {
    //                                     handleOnCardMenuClick(e, cardMenuItem);
    //                                 }}
    //                             >
    //                                 <span className={`${cssClassName["menu-icon"]} ${cssClassName["mr6"]}`}>
    //                                     {cardMenuItem.icon}
    //                                 </span>
    //                                 {cardMenuItem.label}
    //                             </div>
    //                         </>
    //                     );
    //                 })}
    //             </div>
    //         </ClickAwayListener>
    //     }
    // </DenCard> */}
    <div>
      <DenCard className={cssClassName['richStorycard-wrapper']}>
        <div className={cssClassName["image-with-resolution-wrapper"]}>
          <DenCardMedia
            sx={{ height: 143 }}
            src={"https://qc10denmark.timesinternet.in/apis/image/gettyExternalImage?securitykey=2992654ae785c210778b384d5cb39ef5&id=1990331476"}
            component="img"
            title="green iguana"
          />
          <div className={cssClassName["new-resolution"]}>
            <span className={cssClassName["primaryText"]}>{"Slides : 10"}</span>
            <span className={cssClassName["secondaryText"]}>{"img icon"}</span>
          </div>
        </div>
        <div className={cssClassName['card-action-wrapper']}>
          {/* <DenCardContent sx={{ height: '105' }}> */}
          <div className={cssClassName['richStoryCard-channel']}>
            <div className={''}>
              <span>12:36, 5 Mar | </span>
              <span>The Times of India</span>
            </div>
            <div>icon</div>
          </div>
          <div className={cssClassName['img_title']}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </div>
          {/* </DenCardContent> */}
          {/* <DenCardActions sx={{ height: 105 }}> */}
          <div className={cssClassName['richStorycard-footer']}>
            <div className={cssClassName['richStorycard-footer-id']}>
              <span>ID</span>
              <span>789866578</span>
            </div>
            <div>icon</div>
          </div>
          {/* </DenCardActions> */}
        </div>
      </DenCard>
    </div>
  );
};
export default RichStoryCard;