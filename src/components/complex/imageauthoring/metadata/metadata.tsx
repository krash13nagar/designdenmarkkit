import React, { useState, useEffect, useRef } from 'react';
import { DenGrid, DenInputLabel } from '../../../common';
import { MetadataProps } from './metadata.types';
import style from './metadata.module.scss';
import MetadataSummary from './metadata.summary';
import MetadataSelector from './metadata.selector';
import MetadataWidgets from './metadata.widget';
import { META_CONST } from './metadata.constants';
import MetadataUtils from './metadata.utils';

export const Metadata = (props: any) => {
  const {
    title = META_CONST.metaSelectorTitle,
    existingSummary,
    selectedGroup,
    value,
    makeSummary,
    modelUpdate,
    triggerMBDone,
    triggerMBReset,
  } = props.metadataConfig;

  const { metaGroup } = props.metadataSelectorConfig;
  const { metaDefinationList, onChangeWidget, handleAutocomplete } =
    props.metadataWidgetConfig;
  const { onClickDelete } = props.metadataSummaryConfig;

  const [group, setGroup] = useState(selectedGroup);
  const [model, setModel] = useState<any>({ ...value });
  const [summary, setSummary] = useState<any>(existingSummary);

  const getMetaCount = (groupId: string) => {
    if (groupId) {
      if (summary && summary.groupedList) {
        if (summary.groupedList[groupId]) {
          return summary.groupedList[groupId].count
            ? summary.groupedList[groupId].count
            : 0;
        }
      }
      return 0;
    }
    return 0;
  };
  const handleWidgetChanges = (
    type: any,
    value: any,
    olderValue: any,
    msid: any
  ) => {
    const obj = onChangeWidget(type, value, olderValue, msid);
    model[type] = obj;
    const newObj = Object.assign({}, model);
    setModel(newObj);
  };

  useEffect(() => {
    if (model) {
      setSummary(makeSummary(model, summary));
    }
  }, [model]);

  const handleGroupChange = (group: string) => {
    setGroup(group);
  };

  const updateModel = (model: any) => {
    setSummary(makeSummary(model, summary));
    setModel(model);
  };

  useEffect(() => {
    if (triggerMBReset) {
      setModel({ ...value });
    }
  }, [triggerMBReset]);

  useEffect(() => {
    if (triggerMBDone) {
      modelUpdate(model);
    }
  }, [triggerMBDone]);

  return (
    <DenGrid container item xs={12}>
      {summary && summary.visibleSummary && (
        <DenGrid item xs={5} className={style['metadataLeftPanel']}>
          <MetadataSummary
            isButtonVisible={false}
            iconButtons={true}
            title={META_CONST.metaSummaryTitle}
            model={model}
            value={summary}
            onClickEdit={handleGroupChange}
            onClickDelete={onClickDelete}
            updateModel={updateModel}
            dialogProps=""
            metaProps=""
          />
        </DenGrid>
      )}
      <DenGrid
        item
        sm={summary && summary.visibleSummary ? 7 : 12}
        className={style['metadataRightPanel']}
      >
        <DenGrid container item xs={12}>
          <DenGrid
            container
            item
            xs={9}
            alignContent="flex-start"
            justifyContent="left"
          >
            <DenInputLabel shrink>{title}</DenInputLabel>
          </DenGrid>
          <DenGrid
            container
            item
            xs={3}
            alignContent="flex-end"
            justifyContent="center"
          >
            <DenInputLabel> Count : {getMetaCount(group)}</DenInputLabel>
          </DenGrid>
          <DenGrid item xs={12}>
            <MetadataSelector
              onChange={handleGroupChange}
              selectedGroup={group}
              items={metaGroup}
            />
          </DenGrid>
        </DenGrid>
        <DenGrid item xs={12}>
          <MetadataWidgets
            className={style['widgets-wrapper']}
            model={model}
            selectedGroup={group}
            items={metaDefinationList}
            onChange={handleWidgetChanges}
            handleAutocomplete={handleAutocomplete}
          />
        </DenGrid>
      </DenGrid>
    </DenGrid>
  );
};
export default Metadata;
