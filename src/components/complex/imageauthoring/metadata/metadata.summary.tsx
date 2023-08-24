import React, { useState, useEffect, useRef } from 'react';
import { DenGrid, DenTypography, DenButton, DenTooltip } from '../../../common';
import { MetadataSummaryProps } from './metadata.types';
import style from './metadata.module.scss';

export const MetadataSummary = (props: MetadataSummaryProps) => {
    const [summary, setSummary] = useState(null);
    useEffect(() => {
        if (props.value) {
            const _summary = props.value;
            setSummary(_summary);
        }
    }, [props.value])
    const makeArray = (list:any) => {
        const arr = []
        for (const [groupId, metaGroup] of Object.entries(list)) {
            arr.push({
                groupId: groupId,
                metaGroup: metaGroup
            })
        }
        console.log(arr);
        return arr;
    }
   
    const renderSubItems = (list:any, i:any) => {
        const arr = makeArray(list)
        return (
            arr.map((element:any, index) => (
                    <DenGrid item container xs={12} key={index + '_' + i} className={style['metadata-summary-item-details']}>
                        <DenGrid item container xs={12} key={index + '_' + i + 1} justifyContent="flex-start" alignItems="left">
                            <DenTypography variant="body2" noWrap> {(element.metaGroup.name)+` : `+(element.metaGroup.value)}</DenTypography>
                        </DenGrid>
                    </DenGrid>
                ))
        )
    }
    const renderItems = (list:any) => {
        const arr = makeArray(list);
        return (
            arr.map((element:any, index) => (
                element.metaGroup.name != "Miscellaneous" &&
                <DenGrid item container xs={12} key={index}>
                    <DenGrid item container xs={12}>
                    <DenGrid item xs={12}>
                        <DenTypography variant="subtitle2" className={style['metagroupHead']}> {element.metaGroup.name}</DenTypography>  
                    </DenGrid>
                    </DenGrid>
                    <DenGrid item container xs={12}>{
                        renderSubItems(element.metaGroup.metatype, index)
                    }
                     </DenGrid>
                    {
                        index < (arr.length) - 1 && <DenGrid item container xs={12} className={style['borderBottomMetagroup']}></DenGrid>
                    }
                </DenGrid>
            ))
        )
    }
    //style.metadataAddedWrapper
    return (
        <DenGrid container>
            <DenGrid item container xs={12} direction="row">
                <DenGrid item container xs={6} alignItems="center">
                    <DenTypography className={style['metadataAddedWrapper']}>{'Added('+(summary!=null ? summary?.metaCount : 0)+')'}</DenTypography>
                </DenGrid>
                {
                    props.isButtonVisible && 
                    <DenGrid item container xs={6} justifyContent="flex-end" alignItems="center">
                        <DenButton variant="outlined" size="small" color="primary">Add Metadata</DenButton>
                    </DenGrid>
                }
            </DenGrid>
            <DenGrid item container xs={12}>{
                summary && renderItems(summary.groupedList)
            }
            </DenGrid>
        </DenGrid>
    );
  }
export default MetadataSummary;
