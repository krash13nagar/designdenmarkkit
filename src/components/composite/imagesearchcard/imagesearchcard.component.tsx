import React, { useRef, useState } from 'react';
import cssClassName from './imagesearchcard.module.scss';
import { DenCard, DenCardActions, DenCardMedia } from '../../common';
import { cleanHTML } from '../../../utility/utils';
import ImageSearchCardHoverDetails from './imagesearchcardhover.component';
import { ClickAwayListener } from '@mui/material';
import { IMAGE_CARD_MENU_OPTIONS } from './sample';

/**
 * ImageCard Component.
 * @constructor
 * @param {string} props.src* -The source of the image card element.
 * @param {string} props.alt - Alt text for the image html tag element
 * @param {number} props.aspectRatio - Aspect ratio of the image
 * @param {string} props.imageClassName - Classname to be applied to the image lement
 * @param {string} props.wrapperClassName - Classname applied to the wrapper element.
 * The ref is forwarded to the root element.
 * for more details see http:localhost:6006
 */
export const ImageSearchCard = (props: any) => {
    const isShowResolution = true;
    const item: any = {
        "type": "3-0",
        "templatedata": null,
        "synopsis": "GLASGOW, SCOTLAND - FEBRUARY 06: Students gather outside 11 University Gardens which is occupied by activists from Glasgow Against Arms and Fossil Fuels on February 06, 2024 in Glasgow, Scotland. Students say that Glasgow University holds investments with firms that are involved with arming the Israeli Defence Force thus contributing to the casualties in the ongoing conflict in Gaza. (Photo by Jeff J Mitchell/Getty Images)",
        "primeCategoryId": 0,
        "name": "Students Demand University Cuts Ties With Arms Firms Over Gaza War",
        "isBinaryModified": false,
        "agencyName": "Getty Images",
        "activationStatus": "ACTIVE",
        "entityType": "IMAGES",
        "imageInput": {
            "type": 1,
            "mimeType": "JPEG",
            "imageUrl": "https://qc10denmark.timesinternet.in/apis/image/gettyExternalImage?securitykey=2992654ae785c210778b384d5cb39ef5&id=1990331476",
            "dataSource": "GETTYFEED",
            "imageSource": "DAM"
        },
        "imageUrl": "https://qc10denmark.timesinternet.in/apis/image/gettyExternalImage?securitykey=2992654ae785c210778b384d5cb39ef5&id=1990331476",
        "thumbUrl": "https://media.gettyimages.com/id/1990331476/photo/glasgow-scotland-students-gather-outside-11-university-gardens-which-is-occupied-by-activists.jpg?b=1&s=170x170&k=20&c=F7pdog3Ws6prWLLy4KDxyfrwqlbYnKA1OAl1QbpDe4Q=",
        "tileUrl": "https://media.gettyimages.com/id/1990331476/photo/glasgow-scotland-students-gather-outside-11-university-gardens-which-is-occupied-by-activists.jpg?b=1&s=594x594&w=0&k=20&c=fvxyuyCaLsVbIsO2jUWN8VdsA0p-oKk5XLecoaSR7zI=",
        "originalUrl": "https://qc10denmark.timesinternet.in/apis/image/gettyExternalImage?securitykey=2992654ae785c210778b384d5cb39ef5&id=1990331476",
        "resolution": "5369 x 3580",
        "ingestionDate": 1707215037000,
        "publishdate": 1707210774000,
        "isUrlExits": true,
        "photodatalength": 8044705,
        "persistableLiteMetadataMap": {
            "73": {
                "dataType": "NUMBER",
                "dbname": "latestnewsflag",
                "metatype": 73,
                "olderValue": null,
                "value": "1"
            },
            "223": {
                "metatype": 223,
                "value": "Jeff J Mitchell",
                "olderValue": null,
                "dataType": "STRING",
                "dbname": "ImageCreditAuthor"
            },
            "540": {
                "metatype": 540,
                "value": null,
                "olderValue": null,
                "dataType": "NUMBER",
                "dbname": "OriginalImageHeightPx"
            },
            "541": {
                "metatype": 541,
                "value": null,
                "olderValue": null,
                "dataType": "NUMBER",
                "dbname": "OriginalImageWidthPx"
            },
            "602": {
                "metatype": 602,
                "value": null,
                "olderValue": null,
                "dataType": "STRING",
                "dbname": "DominantColorHexValue"
            }
        },
        "additionalInfo": {
            "agencyJustification": ""
        },
        "originalContentInfo": {
            "damType": {
                "dataSource": "GETTYFEED",
                "dataSourceId": "1990331476",
                "mimetype": "JPEG"
            },
            "originalContentDam": {
                "dataSource": "GETTYFEED",
                "dataSourceId": "1990331476",
                "mimetype": "JPEG"
            }
        },
        "keywords": {
            "keyword": [
                "Education",
                "Outdoors",
                "Politics",
                "Photography",
                "Military",
                "War",
                "University",
                "Student",
                "Politics and Government",
                "Activist",
                "February",
                "2024",
                "Fossil Fuel"
            ]
        },
        "categories": {
            "category": [
                "Conflict"
            ]
        },
        "isStockImage": true
    }

    const fromNow = item.ingestionDate ? item.ingestionDate : "";
    const {
        src = 'https://media.gettyimages.com/id/1990331476/photo/glasgow-scotland-students-gather-outside-11-university-gardens-which-is-occupied-by-activists.jpg?b=1&s=594x594&w=0&k=20&c=fvxyuyCaLsVbIsO2jUWN8VdsA0p-oKk5XLecoaSR7zI=',
        alt = '',
        aspectRatio,
        // imageClassName = cssClassName['image'],
        // wrapperClassName = cssClassName['image-container'],
    } = props;

    const [showCardMenu, setShowCardMenu] = useState(false);
    const [cardMenuBtnClass, setCardMenuBtnClass] = useState("");

    const handleShowCardMenu = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setShowCardMenu(!showCardMenu);
        if (e.currentTarget) {
            var list = e.currentTarget.closest('.search-outcome');
            if (list) {
                var menuBtnRect = e.currentTarget.getBoundingClientRect()
                var listRect = list.getBoundingClientRect()
                if (listRect.right - menuBtnRect.right < 200) {
                    var shiftToLeft = true;
                    setCardMenuBtnClass("shiftToLeft");
                }
                else if (listRect.bottom - menuBtnRect.bottom < 120) {
                    if (shiftToLeft) {
                        setCardMenuBtnClass("shiftToLeft shiftToTop")
                    }
                    else {
                        setCardMenuBtnClass("shiftToTop");
                    }
                }
                else {
                    setCardMenuBtnClass("");
                }
            }
        }
    }

    const getClassNames = (item:any) => {
        let class_names = `default-card-wrapper ${item.type?.toLowerCase()}`;
        // if (invalidImages?.indexOf(item?.msId?.toString()) >= 0) {
        //     class_names = class_names + " invalid";
        // }
        return class_names;
    }

    return (
        <div>
            <DenCard classes={{ root: 'card-root' }} id={`vs-item-${item.msId}`} key={item.msId} className={cssClassName['default-card-wrapper']} onMouseLeave={()=>{setShowCardMenu(false)}}>
                <div aria-describedby="order of section children" className="heading-wrapper">
                    {/* <input disabled={!disableEvents} value={props?.index} onBlur={(e) => InputBlurHandler(item.msId, e, props?.index)} onChange={(e) => InputHandler(item.msId, e)} className={clsx("card-serial", { "card-error": props.error })} type="number" min={1} />
                    {!props.error && IsCheckVisisble && <span onClick={handleCheckIcon} className="check-icon-green"><CheckGreenIcon /></span>}
                    {!props.error && <span className="check-icon"><CheckGrayIcon /></span>} */}
                    {/* {
                        props.error &&
                        <span aria-errormessage="not a valid input">
                            <span>
                                <InvalidInputIcon />
                            </span>
                            <span className="input-error-message">{IMAGE_ERROR_MESSAGE.invalidInput}</span>

                        </span>
                    } */}

                </div>
                <div className={isShowResolution ? cssClassName["image-with-resolution-wrapper"] : ""}>
                    {/* {(isVisualContent && isShowResolution && item.resolution && isShown) && */}
                    {/* {(showCheckbox && isShown) &&
                        <div className="bulkAddition-checkbox-wrapper">
                            <Checkbox
                                checked={inputValue}
                                onClick={checkboxClick}
                                color="primary"
                                className="bulkAddition-checkbox"
                            />
                        </div>} */}
                    <DenCardMedia
                        src={src}
                        component="img"
                        title={item.name}
                        classes={{  
                            img: `${isShowResolution ? cssClassName["newCardMedia-image"] : cssClassName["cardMedia-image"]}`
                        }}
                        onError={e => {
                            // ImageUtils.imageFallback(src, item.type).then(function (url) {
                            //     e.target.src = url;
                            //     e.target.className += ' default-thumb-atom';
                            // })
                        }}
                    />
                    {(isShowResolution && item.resolution) &&
                    <div className={cssClassName["new-resolution"]}>
                        <span className={cssClassName["primaryText"]}>{item.agencyName? item.agencyName+" | " : ""}{fromNow}</span>
                        <span className={cssClassName["secondaryText"]}>{item.resolution}</span>
                    </div>
                    }
                    {isShowResolution &&
                    <ImageSearchCardHoverDetails item={item} onCallbackfnc=""  onCallbackMenufnc={handleShowCardMenu} agencyUsageData="" />
                    }
                </div>
                {!isShowResolution && <DenCardActions key={item.msId} className="card-action-wrapper" >
                    <div className="vsslide-details">
                        <div className={'dot-atom_status '}></div>
                        <div className={"slide-icon-" + item.type?.toLowerCase()}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10.047" height="9.042" viewBox="0 0 10.047 9.042"><path fill="curentColor" d="M10.54,4H9.45A1.514,1.514,0,0,0,8.028,3H6.019A1.514,1.514,0,0,0,4.6,4H3.507A1.512,1.512,0,0,0,2,5.512v5.023a1.512,1.512,0,0,0,1.507,1.507H10.54a1.512,1.512,0,0,0,1.507-1.507V5.512A1.512,1.512,0,0,0,10.54,4ZM7.023,10.033A2.009,2.009,0,1,1,9.033,8.023,2.009,2.009,0,0,1,7.023,10.033Z" transform="translate(-2 -3)" /></svg>
                        </div>
                        <div className="msid">
                            {item.msId}
                        </div>
                    </div>
                    <div className="vsslide-title textEllipisTwoline">{cleanHTML(item.name)}</div>
                </DenCardActions>
                }
                {isShowResolution && showCardMenu &&
                <ClickAwayListener onClickAway={() => { setShowCardMenu(false) }}>
                    <div className={`${cssClassName["card-menu"]} ${cssClassName[cardMenuBtnClass]}`}>
                        {IMAGE_CARD_MENU_OPTIONS.map((cardMenuItem, index) => {
                            return (
                              <>
                                <div
                                  className={cssClassName["card-menu-item"]}
                                //   onClick={() => {
                                //     handleOnCardMenuClick(cardMenuItem);
                                //   }}
                                >
                                  <span className={`${cssClassName["menu-icon"]} ${cssClassName["mr6"]}`}>
                                    {cardMenuItem.icon}
                                  </span>
                                  {cardMenuItem.name}
                                </div>
                              </>
                            );
                        })}
                    </div>
                </ClickAwayListener>
            }
            </DenCard>
        </div>
    );
};
export default ImageSearchCard;
