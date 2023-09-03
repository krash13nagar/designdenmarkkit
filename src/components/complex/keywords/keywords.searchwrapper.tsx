import React,{useState} from "react";
import "./recommended.keywords.style.scss";
import { searchKeywordWrapper } from "./keywords.types";
import SearchKeyword from "./search.keyword";
import { DenButton } from "../../common";


export const SearchKeywordWrapper = (props: searchKeywordWrapper) => {
  const {searchKeywordConfig, addBtnConfig} = props;
  const [val, setval] = useState<string>("");

  const handleClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    if(addBtnConfig.addBtnCallbckfnc){
      addBtnConfig.addBtnCallbckfnc(e)
      setval("")
    }
  }

  return (
    <div className="searchKeywordWrapper">
        <SearchKeyword autocomplete={searchKeywordConfig.autocomplete} label={searchKeywordConfig.label} placeholder={searchKeywordConfig.placeholder} searchCallbckfnc={searchKeywordConfig.searchCallbckfnc} searchKeywordVal={val} handleSearchKeywordVal={setval}/>
        <DenButton onClick={handleClick} variant="outlined">Add</DenButton>
    </div>
  );
};

export default SearchKeywordWrapper;