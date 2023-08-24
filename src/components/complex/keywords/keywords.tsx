import React, { useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import { DenGrid, DenIconButton } from '../../common';
import {
  RemoveCircleOutline,
  RemoveCircleOutlineOutlined,
} from '@mui/icons-material';
import './recommended.keywords.style.scss';
import { keywordsConfig } from './keywords.types';

export const Keywords = (props : keywordsConfig) => {
  const {addedKeywordsConfig, addedKeywords} = props;
  return (
    <>
      <div className="addKeywordsTitle">
        {addedKeywordsConfig.title}{` (${addedKeywords.length}):`}
      </div>
      <div className="addKeywordsWrapperClass">
        <DenGrid container spacing={1}>
          {addedKeywords.map((item, index) => {
            return (
              <DenGrid item xs={6} className={(index % 2 == 0) ? "keywordTypeEven": ""}>
                <div className="keywordflexContainer">
                  <div className="removeIcondiv">
                    <DenIconButton
                      size="small"
                      onClick={addedKeywordsConfig.removeCallbackFn}
                    >
                      {addedKeywordsConfig.removeKeywordIcon}
                    </DenIconButton>
                    <div>{item.keywordName}</div>
                  </div>
                  <div>
                    <TextField
                      value={item.relevance}
                      type="number"
                      size="small"
                      inputProps={{
                        max: 100,
                        min: 10,
                        step: 10,
                      }}
                      className="marks-input"
                    />
                    {/* true && <div className="seprator">|</div> */}
                  </div>
                </div>
              </DenGrid>
            );
          })}
        </DenGrid>
      </div>
    </>
  );
};

export default Keywords;
