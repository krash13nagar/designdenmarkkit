import React, { useEffect, useState } from "react";
import "./recommended.keywords.style.scss";
import { searchKeywordWrapper } from "./keywords.types";
import SearchKeyword from "./search.keyword";
import { DenButton } from "../../common";


export const SearchKeywordWrapper = (props: searchKeywordWrapper) => {
  const {searchKeywordConfig, addBtnConfig} = props;
  const [searchVal, setSearchVal] = useState<string>("");

  return (
    <div className="searchKeywordWrapper">
        <SearchKeyword autocomplete={searchKeywordConfig.autocomplete} label={searchKeywordConfig.label} placeholder={searchKeywordConfig.placeholder} searchCallbckfnc={searchKeywordConfig.searchCallbckfnc} />
        <DenButton variant="outlined">Add</DenButton>
    </div>
  );
};

export default SearchKeywordWrapper;