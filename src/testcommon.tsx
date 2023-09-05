/* eslint-disable react/react-in-jsx-scope */

/**
 * @author: sandeep.gupta1@timesinternet.in
 * @desc: Display of Denmark UI components based on material UI
 */

import React, {useState, useEffect} from 'react';
import { Input, User } from './components/common';
import DenButton from './components/common/button/button.component';
import DenChip from './components/common/chip/chip.component';
import { KeywordsWrapper } from './components';
import { config } from './components/complex/keywords/keywords.sample';
import _ from 'lodash';
import { recommendedKeywords } from './components/complex/keywords/keywords.types';

const TestCommon = () => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };
  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    console.log(event);
  };
  const handleKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(event);
  };

  const [addKeywordState, setAddKeywords] = useState(config.addKeywordsConfig.addedKeywords);
  const [recommndKeywordsState, setRecommndKeywordsState] = useState<recommendedKeywords[]>(config.recommendConfig.recommendedKeywords)
  const [searchKeywordVal, setSearchKeywordVal] = useState("");

const removeCallbackFn = (index:number) => {
  const tmplist = addKeywordState.slice();
  let toberemoved=tmplist[index];
  let tobeadded:recommendedKeywords = {
    keywordName: toberemoved.keywordName,
    keyEnum:toberemoved.keyEnum,
    source:toberemoved.source,
    relevance:toberemoved.relevance,
  }
  // setLasRemoved(toberemoved)
  tmplist.splice(index, 1);
  setAddKeywords(tmplist);
  setRecommndKeywordsState([...recommndKeywordsState, tobeadded])
}

const handleAddbtn = () => {
  const list = searchKeywordVal.split(',');
  const tmplist = addKeywordState.slice();
  list.forEach((element) => {
    if (element.trim() != '') {
      const i = _.findIndex(tmplist, { keywordName: element.trim() });
      if (i == -1) {
        tmplist.push({
          keyEnum: 'General',
          keywordName: element.trim(),
          relevance: 20,
          source: 'Orion',
        });
      }
      // else if(tmplist[i] && tmplist[i].botKeyword) {
      //     tmplist.push({
      //         "keyEnum": "General",
      //         "keywordName": element.trim(),
      //         "relevance": 20,
      //         "source": "Orion"
      //     })
      // }
    }
  });
  setAddKeywords(tmplist);
};

  const handleSearchCallbckfnc = (text:string)=>{
    setSearchKeywordVal(text);
  }

  const addCallbackFn = (elm: recommendedKeywords) => {
    const tmplist = addKeywordState.slice();
    const recommndList = recommndKeywordsState.slice();
    const index = _.findIndex(recommndList, { keywordName: elm.keywordName });
    const i = _.findIndex(tmplist, { keywordName: elm.keywordName });
    if (i == -1) {
      tmplist.push({
        keyEnum: elm.keyEnum,
        keywordName: elm.keywordName,
        relevance: elm.relevance,
        source: elm.source,
      });
    }
    recommndList.splice(index, 1);
    setAddKeywords(tmplist);
    setRecommndKeywordsState(recommndList);
  }

  const searchKeywordConfig = {...config.searchKeywordConfig, searchCallbckfnc:handleSearchCallbckfnc}
  const addBtnConfig = {...config.addBtnConfig, addBtnCallbckfnc:handleAddbtn}
  const addKeywordsConfig = {...config.addKeywordsConfig, addedKeywordsConfig:{...config.addKeywordsConfig.addedKeywordsConfig, removeCallbackFn:removeCallbackFn}, addedKeywords:addKeywordState}
  const recommendConfig = {...config.recommendConfig, recommendedConfig:{...config.recommendConfig.recommendedConfig, addCallbackFn:addCallbackFn}, recommendedKeywords:recommndKeywordsState}


  return (
    <div>
      User:
      <User name="Sandeep" age={23} />
      <Input
        label="Test"
        name="Title"
        onBlur={handleBlur}
        onKeyUp={handleKey}
        onChange={handleChange}
        helperText="Enter the Title"
      />
      <DenButton variant="contained" color="primary">
        Test
      </DenButton>
      <DenChip label="chip" color="primary" />
      {/* <SelectComponent
              label="Status"
              value={status}
              name="Status"
              selectItems={statusConst}
              helperText=""
              className={`${status?.name}`}
              onSelect={(value) => {
                handleChange({ target: { name: 'status', value } }, false);
              }}
            /> */}
        <KeywordsWrapper searchKeywordConfig={searchKeywordConfig} addBtnConfig={addBtnConfig} addKeywordsConfig={addKeywordsConfig} recommendConfig={recommendConfig}></KeywordsWrapper>
      
    </div>
  );
};

export default TestCommon;
