import React, { useEffect, useState } from "react";
import styles from "./recommended.keywords.module.scss";
import { RecommendedKeywordsConfig, keywordsMappingObj, searchKeywordConfig } from "./keywords.types";
import { DenIconButton, DenTextField } from "../../common";


export const SearchKeyword = (props:searchKeywordConfig) => {
    const {autocomplete, label, placeholder, searchCallbckfnc, searchKeywordVal, handleSearchKeywordVal} = props;

    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
      const val = e.target.value;
      handleSearchKeywordVal(val);
      searchCallbckfnc(val)
    }

  return (
    <div className={styles["search-keyword"]}>
        <DenTextField fullWidth={true} label={label}
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