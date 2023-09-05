import React, { useEffect, useState } from "react";
import "./recommended.keywords.style.scss";
import { RecommendedKeywordsConfig, keywordsMappingObj } from "./keywords.types";
import { DenIconButton } from "../../common";
import RecommendWidget from "./recommend.widget";
import _ from "lodash";


export const RecommendKeywords = (props: RecommendedKeywordsConfig) => {
  const {recommendedConfig, recommendedKeywords} = props;
  const [loading, setLoading] = useState<boolean>(false);
  const [keywordsObj, setKeywordsObj] = useState<keywordsMappingObj>({});

  useEffect(()=>{
    console.log(keywordsMapping());
    setKeywordsObj(keywordsMapping());    
  },[recommendedKeywords])

  const keywordsMapping = () => {
    let obj: keywordsMappingObj = {};
    
    recommendedKeywords.forEach(item => obj[item.source] = []);
    recommendedKeywords.forEach(item => {
      //Utils.cleanRelevance(item,"relevance")
      //if(item.metaInfo) item.metaInfo=JSON.stringify(item.metaInfo);
      if(recommendedConfig.addCallbackFn && recommendedConfig.addKeywordIcon){
        item["addKeywordIcon"] = recommendedConfig.addKeywordIcon;
      }

      if (item.source) {
        const index = _.findIndex(obj[item.source], { "keywordName":item["keywordName"] })
        if (obj[item.source]) {
          if(index===-1)
          obj[item.source].push(item);
        } else {
          obj[item.source] = [item];
        }
      } else {
        let source = "Orion";
        if (obj[source]) {
          obj[source].push(item);
        } else {
          obj[source] = [item];
        }

      }
    });

    return obj;
  }


  return (
    <div className="recommended-wrapper">
      <div className="recommend">
        {recommendedConfig.title}
        <DenIconButton
          onClick={recommendedConfig.refreshCallbackFn}
          aria-label="refresh"
          className="recommended-refresh"
          size="small"
        >
          {recommendedConfig.refreshIcon}
        </DenIconButton>
      </div>
      <RecommendWidget recommendWidgetObj={keywordsObj} addCallbckFnc={recommendedConfig.addCallbackFn} />
      { false &&
          <div className="no-recommendation">No Recommendations available.</div>
      }
    </div>
  );
};

export default RecommendKeywords;
