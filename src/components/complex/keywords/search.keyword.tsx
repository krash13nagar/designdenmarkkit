import React, { useEffect, useState } from "react";
import styles from "./recommended.keywords.module.scss";
import { RecommendedKeywordsConfig, keywordsMappingObj, searchKeywordConfig } from "./keywords.types";
import { DenIconButton, DenTextField } from "../../common";


export const SearchKeyword = (props:searchKeywordConfig) => {
  const { bautocomplete, label, placeholder, searchCallbckfnc, searchKeywordVal, handleSearchKeywordVal, handleSuggestionKeywordFnc = () => { } } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const val = e.target.value;
    handleSearchKeywordVal(val);
    searchCallbckfnc(val)
  }

  const handleBlur = () => {
    setTimeout(() => {
      handleSuggestionKeywordFnc(false)
    }, 300)
  }

  return (
    <div className={styles["search-keyword"]}>
        <DenTextField fullWidth={true} label={label}
        onClick={()=>{handleSuggestionKeywordFnc(true)}} onBlur={handleBlur}
        InputProps={{
          autoComplete : bautocomplete
        }}
        value={searchKeywordVal}
        onChange = {(event)=>handleChange(event)}
        labelProps={{
          classes:{root:styles.searchkeywordlabel}
        }}
        valueProps={{
          placeholder: placeholder
        }}/>
    </div>
  );
};

export default SearchKeyword;