/* eslint-disable react/react-in-jsx-scope */

/**
 * @author: sandeep.gupta1@timesinternet.in
 * @desc: Display of Denmark UI components based on material UI
 */

import React, { useEffect, useState } from 'react';
import { Input, User } from './components/common';
import DenButton from './components/common/button/button.component';
import DenChip from './components/common/chip/chip.component';
import './styles/storybookBasesStyles.scss';
import MetadataList from './components/complex/imageauthoring/metadata/metadataList.config';
import MetadataGroupList from './components/complex/imageauthoring/metadata/metadataGroupList.config';
import Metadata from './components/complex/imageauthoring/metadata/metadata';
import MetadataUtils from './components/complex/imageauthoring/metadata/metadata.utils';
import { DenCustomRadioGroup } from './components';

const TestCommon = () => {
  let defaultRadio = 'Breaking News';
  const [selectedValue, setSelectedValue] = useState(defaultRadio);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };
  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    console.log(event);
  };
  const handleKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(event);
  };
  const onhandleChange = (val: string) => {
    setSelectedValue(val);
    console.log(val);
  };

  const summary1 = {
    visibleSummary: true,
    iconButtons: true,
    isButtonVisible: false,
    groupedList: {
      '3': {
        id: 3,
        name: 'Template Rules',
        //"rank": 3,
        //"active": true,
        //"positionInGroup": 15,
        isReadOnly: false,
        metatype: {
          '73': {
            id: 74,
            //"metatype": 73,
            name: 'Latest News Flag',
            //"datatype": 2,
            //"hostId": -1,
            //"active": true,
            //"visibleOnForm": true,
            //"allowedMstypeBitmap": -1,
            //"editorWidgetCode": 4,
            //"accessibilityCode": 1,
            //"metadataDataType": "NUMBER",
            //"accessibility": "FULL_ACCESS",
            //"editorWidget": "CHECKBOX",
            value: 'Yes',
            isReadOnly: false,
          },
          '592': {
            id: 602,
            //"metatype": 592,
            name: 'AMP Story',
            //"datatype": 0,
            //"hostId": -1,
            //"active": true,
            //"visibleOnForm": true,
            //"allowedMstypeBitmap": -1,
            //"editorWidgetCode": 2,
            //"accessibilityCode": 1,
            //"metadataDataType": "CHARACTER",
            //"accessibility": "FULL_ACCESS",
            //"editorWidget": "DROPDOWN",
            value: 'Regular Slideshow',
            isReadOnly: false,
          },
        },
        count: 2,
        expand: false,
      },
      '14': {
        id: 14,
        name: 'Gadgets',
        //"rank": 14,
        active: true,
        //"positionInGroup": 7,
        isReadOnly: false,
        metatype: {
          '436': {
            id: 433,
            //"metatype": 436,
            name: 'Reviewed',
            //"datatype": 0,
            //"hostId": -1,
            active: true,
            //"visibleOnForm": true,
            //"allowedMstypeBitmap": -1,
            //"editorWidgetCode": 4,
            //"accessibilityCode": 1,
            //"metadataDataType": "CHARACTER",
            //"accessibility": "FULL_ACCESS",
            //"editorWidget": "CHECKBOX",
            value: 'No',
            isReadOnly: false,
          },
        },
        count: 1,
        expand: false,
      },
    },
    metaCount: 3,
    expand: false,
  };

  /**
   *
   * {
   *
   * }
   */

  const model1: any = {
    '73': {
      metatype: 73,
      value: '1',
      olderValue: '',
      dataType: 'NUMBER',
      dbname: 'latestnewsflag',
    },
    '436': {
      metatype: 436,
      value: '0',
      olderValue: '',
      dataType: 'CHARACTER',
      dbname: 'GadgetsMarkedReviewed',
    },
    '592': {
      metatype: 592,
      value: '0',
      olderValue: '',
      dataType: 'CHARACTER',
      dbname: 'AMPStory',
    },
  };

  const [model, setModel] = useState(model1);
  const [summary, setSummary] = useState(summary1);
  const [group, selectedGroup] = useState('Select');

  const handleGroupChange = (group: string) => {
    selectedGroup(group);
  };

  useEffect(() => {
    if (model) {
      // update summary with change in model
      // const _summary = MetadataUtils.makeSummary(model, summary);
      // setSummary(_summary);
    }
  }, [model]);

  const handleWidgetChange = (
    type: any,
    value: any,
    olderValue: any,
    msid: any
  ) => {
    const obj = MetadataUtils.makeMetaObjectForModel(
      type,
      value,
      olderValue,
      msid
    );
    model[type] = obj;
    const newObj = Object.assign({}, model);
    setModel(newObj);
    console.log(group);
  };
  const onClickEdit = () => {};
  const onClickDelete = () => {};
  const list = [
    {
      value: 'Breaking News',
      label: 'Breaking News',
    },
    {
      value: 'Alert',
      label: 'Alert',
    },
    {
      value: 'Flash',
      label: 'Flash',
    },
  ];

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
      <DenCustomRadioGroup
        radioGroupLabel="Type"
        defaultRadio={defaultRadio}
        radioButtonList={list}
        selectedValue={selectedValue}
        onHandleChange={onhandleChange}
      />
      <div className="metadataWrapper">
        {/* <Metadata title="Selected Group" value={model} summary={summary} metaGroup={MetadataGroupList} metaDefinationList={MetadataList} onChangeWidget={handleWidgetChange} onChangeGroup={handleGroupChange} selectedGroup={group} onClickDelete={onClickDelete} onClickEdit={onClickEdit} /> */}
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
      {/* <KeywordsWrapper searchKeywordConfig={searchKeywordConfig} addBtnConfig={addBtnConfig} addKeywordsConfig={addKeywordsConfig} recommendConfig={recommendConfig}></KeywordsWrapper> */}
    </div>
  );
};

export default TestCommon;
