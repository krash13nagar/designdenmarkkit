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
  const [searchKeywordVal, setSearchKeywordVal] = useState("");

//   const manageRemove=(keydata=[],original={})=>{
//     const copyAvaialble=_.cloneDeep(original);
//     console.log(keydata,original,"checking remove")
//     keydata.forEach(item=>{
//            if(copyAvaialble[item.source]){
//                const i = _.findIndex(copyAvaialble[item.source], { "keywordName":item["keywordName"] })
//                if(i===-1){
//                  copyAvaialble[item.source].push(item);

//                }
//            }else{
//             copyAvaialble[item.source]=[item];
//             }
//     })
//     console.log(copyAvaialble)
//     return copyAvaialble;
// }

const removeCallbackFn = (index:number) => {
  //const _arr = addKeywordsConfigState.addedKeywords.slice();
  const tmplist = addKeywordState.slice();
  let toberemoved=tmplist[index];
  // setLasRemoved(toberemoved)
  console.log(toberemoved)
  tmplist.splice(index, 1);
  setAddKeywords(tmplist);
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

  const searchKeywordConfig = {...config.searchKeywordConfig, searchCallbckfnc:handleSearchCallbckfnc}
  const addBtnConfig = {...config.addBtnConfig, addBtnCallbckfnc:handleAddbtn}
  const addKeywordsConfig = {...config.addKeywordsConfig, addedKeywordsConfig:{...config.addKeywordsConfig.addedKeywordsConfig, removeCallbackFn:removeCallbackFn}, addedKeywords:addKeywordState}


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
        <KeywordsWrapper searchKeywordConfig={searchKeywordConfig} addBtnConfig={addBtnConfig} addKeywordsConfig={addKeywordsConfig} recommendConfig={config.recommendConfig}></KeywordsWrapper>
      
    </div>
  );
};

export default TestCommon;
