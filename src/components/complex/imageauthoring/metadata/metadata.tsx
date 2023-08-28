import React, { useState, useEffect, useRef } from 'react';
import { DenGrid, DenInputLabel } from '../../../common';
import { MetadataProps } from './metadata.types';
import style from './metadata.module.scss';
import MetadataSummary from './metadata.summary';
import MetadataSelector from './metadata.selector';
import MetadataWidgets from './metadata.widget';
import { META_CONST } from './metadata.constants';

export const Metadata = (props: MetadataProps) => {

    const {
        title = META_CONST.metaSelectorTitle,
        metaGroup,
        summary
    } = props;

    const model = {...props.value};

    const getMetaCount = (groupId: string) => {
        if(groupId) {
            //const summary = props.summary;
            if(summary && summary.groupedList){
                if(summary.groupedList[groupId]) {
                    return summary.groupedList[groupId].count ? summary.groupedList[groupId].count : 0
                }
            }
            return 0;
             
        }
        return 0;
    }
    const handleWidgetChanges = (type: any, value: any, olderValue: any, msid: any) => {
        props.onChangeWidget(type, value, olderValue, msid);
    }
    
    return ( 
        <DenGrid container item xs={12}>
            {summary && summary.visibleSummary &&
                <DenGrid item xs={5} className={style['metadataLeftPanel']}>
                    <MetadataSummary title={META_CONST.metaSummaryTitle} value={summary} onClickEdit={props.onClickEdit} onClickDelete={props.onClickDelete} onClickDeleteItem={props.onClickDeleteItem} />
                </DenGrid>
            }
            <DenGrid item sm={(summary && summary.visibleSummary) ? 7 : 12} className={style['metadataRightPanel']}>
                <DenGrid container item xs={12}>
                    <DenGrid  container item xs={9} alignContent="flex-start" justifyContent="left">
                    <DenInputLabel shrink>{title}</DenInputLabel>
                    </DenGrid>
                    <DenGrid  container item xs={3} alignContent="flex-end" justifyContent="center">
                    <DenInputLabel> Count : {getMetaCount(props.selectedGroup)}</DenInputLabel>
                    </DenGrid>                    
                    <DenGrid item xs={12}>
                    <MetadataSelector onChange={props.onChangeGroup} selectedGroup={props.selectedGroup} items={metaGroup} /> 
                    </DenGrid>

                 </DenGrid>
                <DenGrid item xs={12}>
                    <MetadataWidgets model={model} selectedGroup={props.selectedGroup} items={props.metaDefinationList} onChange={handleWidgetChanges} className={style['widgets-wrapper']} />
                </DenGrid>
            </DenGrid>
        </DenGrid>
    )
}
export default Metadata;
