/* eslint-disable react/react-in-jsx-scope */

/**
 * @author: sandeep.gupta1@timesinternet.in
 * @desc: Display of Denmark UI components based on material UI
 */

import React from 'react';
import { Input, User } from './components/common';
import DenButton from './components/common/button/button.component';
import DenChip from './components/common/chip/chip.component';
import './styles/storybookBasesStyles.scss';
import MetadataList from './components/complex/imageauthoring/metadata/metadataList.config';
import MetadataGroupList from './components/complex/imageauthoring/metadata/metadataGroupList.config';
import Metadata from './components/complex/imageauthoring/metadata/metadata';

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

const summary = {
  "groupedList": {
      "3": {
          "id": 3,
          "name": "Template Rules",
          "rank": 3,
          "active": true,
          "positionInGroup": 15,
          "metatype": {
              "73": {
                  "id": 74,
                  "metatype": 73,
                  "name": "Latest News Flag",
                  "datatype": 2,
                  "hostId": -1,
                  "active": true,
                  "visibleOnForm": true,
                  "allowedMstypeBitmap": -1,
                  "editorWidgetCode": 4,
                  "accessibilityCode": 1,
                  "metadataDataType": "NUMBER",
                  "accessibility": "FULL_ACCESS",
                  "editorWidget": "CHECKBOX",
                  "value":"Yes"
              },
              "592": {
                  "id": 602,
                  "metatype": 592,
                  "name": "AMP Story",
                  "datatype": 0,
                  "hostId": -1,
                  "active": true,
                  "visibleOnForm": true,
                  "allowedMstypeBitmap": -1,
                  "editorWidgetCode": 2,
                  "accessibilityCode": 1,
                  "metadataDataType": "CHARACTER",
                  "accessibility": "FULL_ACCESS",
                  "editorWidget": "DROPDOWN",
                  "value":"Regular Slideshow"
              }
          },
          "count": 2,
          "expand": false
      },
      "14": {
          "id": 14,
          "name": "Gadgets",
          "rank": 14,
          "active": true,
          "positionInGroup": 7,
          "metatype": {
              "436": {
                  "id": 433,
                  "metatype": 436,
                  "name": "Reviewed",
                  "datatype": 0,
                  "hostId": -1,
                  "active": true,
                  "visibleOnForm": true,
                  "allowedMstypeBitmap": -1,
                  "editorWidgetCode": 4,
                  "accessibilityCode": 1,
                  "metadataDataType": "CHARACTER",
                  "accessibility": "FULL_ACCESS",
                  "editorWidget": "CHECKBOX",
                  "value":"No"
              }
          },
          "count": 1,
          "expand": false
      }
  },
  "metaCount": 3,
  "expand": false
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
      <div className='metadataWrapper'>
      <Metadata title="Selected Group" visibleSummary={true} summary={summary} metaGroup={MetadataGroupList} metaDefinationList={MetadataList} />
      </div>
      {/* <DenButton variant="outlined" color="primary">
        Metadata
      </DenButton> */}
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
    </div>
  );
};

export default TestCommon;
