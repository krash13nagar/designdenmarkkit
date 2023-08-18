// export default Keywords;
import React, { useEffect, useState } from 'react';
import { Grid, TextField } from '@mui/material';
import { DenIconButton, DenTextField } from '../../common';
import {
  RemoveCircleOutline,
  RemoveCircleOutlineOutlined,
} from '@mui/icons-material';
import './recommended.keywords.style.scss';

export const Keywords = () => {
  const keywordsArray = ['23', '234', '2234', '45', '78', '78', '78'];
  return (
    <>
      {/* <div className="add_keyword_Wrapper layoutRow" ng-if="parentModel[properties.model].length > 0">
          <div layout="column" className="repeat-col" flex="50" ng-repeat="item in parentModel[properties.model]" ng-if="!item.botKeyword">
            <div layout="row">

             <div flex="5" layout-align="start center">
              <i class="remove-keyword" ng-click="removeKeywords($index)" data-selenium-id="removekeyword">
                <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="currentColor"><path d="M0 0h24v24H0z" fill="none"/><path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
              </i>
              <DenIconButton size="small"  onClick={}><RemoveCircleOutlineOutlined className="remove-keyword"></RemoveCircleOutlineOutlined></DenIconButton>
            </div>
            <div flex="75" layout-align="start center" className="pl8">
              <div data-selenium-id="keywordName{{$index}}" className="txtCap truncate keywordTitle" title="Name:{{item.keywordName.toLowerCase()}}">
                {{item.keywordName.toLowerCase()}}
              </div>
              <div className="otherDetails" ng-class="getKeyEnumDisplayName(item).toLowerCase() != 'unknown' && getKeyEnumDisplayName(item).toLowerCase() != 'general' && getKeyEnumDisplayName(item).toLowerCase() != 'agency' && getKeyEnumDisplayName(item).toLowerCase() != ''  ? 'showKeyEnum' : 'hideKeyEnum'">
                <div layout="row">
                <div layout="column" ng-show="item.source != ''" className="sourceName">{{item.source}}</div> 
                <div layout="column" className="seprator">|</div> 
                <div layout="column"  className="seprator ng-hide">{{item}} + {{item.source}} + {{getKeyEnumDisplayName(item)}}</div> 

                <div layout="column" className="keyEnumName">{{getKeyEnumDisplayName(item).toLowerCase() != 'unknown' && getKeyEnumDisplayName(item).toLowerCase() != 'general' ? getKeyEnumDisplayName(item).toLowerCase() : ''}}</div></div>
              </div>
            </div>
            <div flex="20" layout-align="center center">
            <DenTextField
                            value={element.relevance}
                            onChange={(event) => relevenceChange(event, index)}
                            type="number"
                            inputProps={{ 
                                max: 100, min: 10,step: 10
                            }}
                            className="marks-input"
        />
            </div>
            
          </div>
          </div>
        </div>*/}
      <div className="addKeywordsWrapperClass">
        <Grid container spacing={1}>
          {keywordsArray.map((item, index) => {
            return (
              <Grid item xs={6}>
                <div className="keywordflexContainer">
                  <div className="removeIcondiv">
                    <DenIconButton
                      size="small"
                      onClick={() => {
                        console.log('hello world');
                      }}
                    >
                      <RemoveCircleOutlineOutlined className=""></RemoveCircleOutlineOutlined>
                    </DenIconButton>
                    <div>{item}</div>
                  </div>
                  <div>
                    <TextField
                      value={56}
                      type="number"
                      inputProps={{
                        max: 100,
                        min: 10,
                        step: 10,
                      }}
                      className="marks-input"
                    />
                    {true && <div className="seprator">|</div>}
                  </div>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </>
  );
};

export default Keywords;
