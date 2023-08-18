import React, { useState, useEffect, useRef } from 'react';
import { DenGrid, DenInputLabel } from '../../../common';
import { MetadataProps } from './metadata.types';
import style from './metadata.module.scss';
import MetadataSummary from './metadata.summary';
import MetadataSelector from './metadata.selector';
import MetadataWidgets from './metadata.widget';

export const Metadata = (props: MetadataProps) => {

    const metaGroup = props.metaGroup;
    const [model, setModel] = useState({...props.value})
    const [group, selectedGroup] = useState('Select');

    const handleChange = (group: string) => {
        selectedGroup(group)
    }

    useEffect(() => {
        setModel({...props.value})
    }, [props.value])

    const getMetaCount = (groupId: string) => {
        if(groupId) {
            const summary = props.summary;
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
            {props.visibleSummary &&
                <DenGrid item xs={5} className={style['metadataLeftPanel']}>
                    <MetadataSummary title="Summary" value={props.summary} />
                </DenGrid>
            }
            <DenGrid item sm={props.visibleSummary ? 7 : 12} className={style['metadataRightPanel']}>
                <DenGrid container item xs={12}>
                    <DenGrid  container item xs={9} alignContent="flex-start" justifyContent="left">
                    <DenInputLabel shrink> {props.title}</DenInputLabel>
                    </DenGrid>
                    <DenGrid  container item xs={3} alignContent="flex-end" justifyContent="center">
                    <DenInputLabel> Count : {getMetaCount(group)}</DenInputLabel>
                    </DenGrid>                    
                    <DenGrid item xs={12}>
                    <MetadataSelector onChange={handleChange} selectedGroup={group} items={metaGroup} /> 
                    </DenGrid>

                 </DenGrid>
                <DenGrid item xs={12}>
                    <MetadataWidgets model={model} selectedGroup={group} items={props.metaDefinationList} onChange={handleWidgetChanges} />
                </DenGrid>
            </DenGrid>
        </DenGrid>
    )
}
export default Metadata;
