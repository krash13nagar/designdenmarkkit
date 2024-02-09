import React, { useEffect, useRef, useState } from 'react';
import style from  './imagesearchcard.module.scss';
import moment from 'moment';
import { AGENCY_USAGE_QUOTA } from './sample';


export const ImageSearchCardHoverDetails = (props: any) => {
    const item = props?.item;
    const ingestionDate = 1707215037000;
    const source = item.imageInput ? item.imageInput.dataSource : "";
    const isMultipleImagesSelected = props?.isMultipleImagesSelected;
    const _injDate = moment(ingestionDate).format('Do MMM YYYY hh:mm A');
    const agencyUsageData = props.agencyUsageData;
    const [agencyCount, setAgencyCount] = useState("Unlimited");
    const [agencyQuotaStyle, setAgencyQuotaStyle] = useState("agency-unlimited");

    useEffect(()=>{
      if(agencyUsageData?.defaultMessage){
        return setAgencyCount(agencyUsageData.defaultMessage)
      }
      if(!item.agencyName){
        return setAgencyCount('-/-');
      }
      var searchLimitObj = agencyUsageData?.allowed?.find?.((obj:any)=> obj.agencyName == item.agencyName);
      var searchCountObj = agencyUsageData?.current?.find?.((obj:any)=> obj.agencyName == item.agencyName);
      if( searchLimitObj || searchCountObj ){
        var limit = searchLimitObj ? searchLimitObj.limit : '-';
        var count = searchCountObj ? searchCountObj.count : '-';
        const percent = Number((count / limit) * 100).toFixed(2);
        const val = `${count}/${limit}`;
        setAgencyCount(val);
        handleAgencyQuotaStyle(percent);
      }
      handleAgencyQuotaStyle('123');
    },[])

    // const handleSelectImage = () => {
    //     if(props.onCallbackfnc){
    //         props.onCallbackfnc();
    //     }
    // }

    const handleCardMenu = (e:React.SyntheticEvent<HTMLElement>)=>{
      if(props.onCallbackMenufnc){
        props.onCallbackMenufnc(e);
      }
    }

  const handleAgencyQuotaStyle = (percent:string) => {
    let customClass = "";
    if (Number(percent) > AGENCY_USAGE_QUOTA.alertPercent) {
      customClass = "agency-red"
    }
    else if (Number(percent) > AGENCY_USAGE_QUOTA.warningPercent) {
      customClass = "agency-yellow"
    }
    else {
      customClass = "agency-green"
    }
    setAgencyQuotaStyle(customClass);
  }


    return (
        <div className={`${style["card-reveal"]} ${style['card-reveal-show']}`}>
          <div title={item.name} className={style["img_title"]}>
            {item.name}
          </div>

          <div className={`${style['mb7']} ${style['vc-ellipsis']}`}>
            {item.agencyName && <span title={`Agency:${item.agencyName}`}>
              <span className={style["secondaryText"]}>Agency:</span>
              <span className={style["primaryText"]}>{item.agencyName + " | "}</span>
            </span>}
            <span title={`Source : ${source}`}>
              <span className={style["secondaryText"]}>Source:</span>
              <span className={style["primaryText"]}>{source}</span>
            </span>

            </div>
          <div className={`${style['mb7']} ${style['vc-ellipsis']}`} title={_injDate}>
            {/* <span className="mr4 icon">{ICONS.pubDate}</span> */}
            <span className={style["secondaryText"]}>{_injDate}</span>
          </div>
          <div className={`${style['mb7']} ${style["secondaryText"]} ${style['vc-ellipsis']}`}>
            <span title={item.resolution}>{item.resolution}</span>
            <span> | </span>
            <span title={`Agency Usage Quota : ${agencyCount}`}>Usage Quota : <span className={`${style["agencyQuota"]} ${style[agencyQuotaStyle]}`}>{agencyCount}</span></span>
          </div>
          <div className={style["card-button-pos"]}>
            <button className={`${style['btn']} ${style["primaryButton-vc"]}`}>Select Image
            </button>
          </div>
            <div onClick={(e) => handleCardMenu(e)} className={style["card-menu-button"]}>
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" width="20px" fill="#D2D8DF">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                </svg>
            </div>
           
        </div>
    )
};
export default ImageSearchCardHoverDetails;
