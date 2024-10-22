import React,{useState} from "react";
import styles from "./recommended.keywords.module.scss";
import { searchKeywordWrapper } from "./keywords.types";
import SearchKeyword from "./search.keyword";
import { DenButton, DenGrid } from "../../common";
import Suggestions from "./keywords.suggest";


export const SearchKeywordWrapper = (props: searchKeywordWrapper) => {
  const {searchKeywordConfig, addBtnConfig} = props;
  const [val, setval] = useState<string>("");
  const [focus, setFocus] = useState(false);

  const handleClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    if(addBtnConfig.addBtnCallbckfnc){
      addBtnConfig.addBtnCallbckfnc(e)
      setval("")
    }
  }

  const handleSuggestionKeywordFnc = (val:boolean)=>{
    setFocus(val);
  }

  const handleEnterKeyPressFnc = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (searchKeywordConfig.onEnterKeyPress) {
      searchKeywordConfig.onEnterKeyPress(event);
      setval("");
      setFocus(false)
    }
  }

  return (
    <div className={styles.searchKeywordWrapper}>
      <div className={styles.keywordNsuggestionWrapper}>
        <SearchKeyword bautocomplete={searchKeywordConfig.bautocomplete} label={searchKeywordConfig.label} placeholder={searchKeywordConfig.placeholder} searchCallbckfnc={searchKeywordConfig.searchCallbckfnc} searchKeywordVal={val} handleSearchKeywordVal={setval} handleSuggestionKeywordFnc={handleSuggestionKeywordFnc} onEnterKeyPress={handleEnterKeyPressFnc}/>
        <Suggestions suggestedData={searchKeywordConfig.suggestedKeywordsData} text={val} focus={focus} isSuggestedKeywordSkeleton={searchKeywordConfig.isSuggestedKeywordSkeleton} onSelectKeywordClick={searchKeywordConfig.onSelectKeywordClick} handleSearchKeywordVal={setval}/>
      </div>
      <div>
        <DenButton onClick={handleClick} variant="outlined">Add</DenButton>
      </div>
    </div>
  );
};

export default SearchKeywordWrapper;