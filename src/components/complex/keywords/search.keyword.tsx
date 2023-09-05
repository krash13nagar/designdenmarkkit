import React, { useEffect, useState } from "react";
import "./recommended.keywords.style.scss";
import { RecommendedKeywordsConfig, keywordsMappingObj, searchKeywordConfig } from "./keywords.types";
import { DenIconButton, DenTextField } from "../../common";
import RecommendWidget from "./recommend.widget";


export const SearchKeyword = (props:searchKeywordConfig) => {
    const {autocomplete, label, placeholder, searchCallbckfnc, searchKeywordVal, handleSearchKeywordVal} = props;

    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
      const val = e.target.value;
      handleSearchKeywordVal(val);
      searchCallbckfnc(val)
    }

  return (
    <div className="search-keyword">
        <DenTextField fullWidth={true} label={label}
        value={searchKeywordVal}
        labelProps={{
          classes:{root:"search-keyword-label"}
        }}
        valueProps={{
          onChange: (event)=>{handleChange(event)},
          placeholder: placeholder
        }}/>
    </div>
  );
};

export default SearchKeyword;