/* eslint-disable react/react-in-jsx-scope */

/**
 * @author: sandeep.gupta1@timesinternet.in
 * @desc: Display of Denmark UI components based on material UI
 */

import React from 'react';
import { Input, User } from './components/common';
import DenButton from './components/common/button/button.component';
import DenChip from './components/common/chip/chip.component';
import { KeywordsWrapper } from './components';
import { config } from './components/complex/keywords/keywords.sample';

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
        <KeywordsWrapper searchKeywordConfig={config.searchKeywordConfig} addBtnConfig={config.addBtnConfig} addKeywordsConfig={config.addKeywordsConfig} recommendConfig={config.recommendConfig}></KeywordsWrapper>
      
    </div>
  );
};

export default TestCommon;
