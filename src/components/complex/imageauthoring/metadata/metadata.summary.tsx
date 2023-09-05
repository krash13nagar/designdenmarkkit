import React, { useState, useEffect, useRef } from 'react';
import {
  DenGrid,
  DenTypography,
  DenButton,
  DenTooltip,
  DenIconButton,
} from '../../../common';
import { MetadataSummaryProps } from './metadata.types';
import { Delete, Create, Replay } from '../../../../assets';
import style from './metadata.module.scss';

export const MetadataSummary = (props: any) => {
  const [summary, setSummary] = useState(null);
  useEffect(() => {
    if (props.value) {
      const _summary = props.value;
      setSummary(_summary);
    }
  }, [props.value]);
  const makeArray = (list: any) => {
    //const arr = []
    // for (const [groupId, metaGroup] of Object.entries(list)) {
    //     arr.push({
    //         groupId: groupId,
    //         metaGroup: metaGroup
    //     })
    // }
    return Object.entries(list).map(([groupId, metaGroup]) => {
      return {
        groupId,
        metaGroup,
      };
    });
    // console.log(arr);
    // return arr;
  };
  const handleEdit = (group: any) => {
    props.onClickEdit(group);
  };
  const handleDelete = () => {
    props.onClickDelete();
  };
  const handleDeleteGroup = (item: any) => {
    //const model = MetadataUtils.deleteMetadataGroup(item.metaGroup.metatype, props.value)
    const model = props.onClickDelete(item, props.model);
    props.updateModel(model);
    //setSummary(MetadataUtils.makeSummary(model))
    // dispatch(updateCommonModel({
    //     val:model,
    //     model:props.model,
    //     store:props.storeKey
    // }));
  };

  const handleDeleteItem = (metaType: any, item: any) => {
    let model = props.model;
    item.isDeleted = !item.isDeleted;
    model[metaType] = item;
    props.updateModel(model);
    // dispatch(updateInMetadata({
    //         val: item,
    //         model: item.metatype,
    //         store: props.storeKey,
    //         store_action_key: props.storeActionKey
    //     }));
  };

  const renderDeleteIcon = (element: any) => {
    if (!props.model?.[element.metaGroup['metatype']]?.['isDeleted']) {
      return <Delete />;
    } else {
      return <Replay />;
    }
  };

  const renderSubItems = (list: any, i: any) => {
    const arr = makeArray(list);
    return arr.map((element: any, index) => (
      <DenGrid
        item
        container
        xs={12}
        key={index + '_' + i}
        className={style['metadata-summary-item-details']}
      >
        <DenGrid
          item
          container
          xs={11}
          key={index + '_' + i + 1}
          justifyContent="flex-start"
          alignItems="left"
        >
          <DenTooltip
            title={element.metaGroup.value}
            aria-label={element.metaGroup.value}
          >
            <DenTypography variant="body2" noWrap>
              {' '}
              {element.metaGroup.name + ` : ` + element.metaGroup.value}
            </DenTypography>
          </DenTooltip>
        </DenGrid>
        <DenGrid container item xs={1} key={index + '_' + i + 2}>
          {props.iconButtons && !element.metaGroup.isReadOnly && (
            <DenIconButton
              size={'small'}
              onClick={() =>
                handleDeleteItem(
                  element.metaGroup['metatype'],
                  props.model[element.metaGroup['metatype']]
                )
              }
            >
              {renderDeleteIcon(element)}
            </DenIconButton>
          )}
        </DenGrid>
      </DenGrid>
    ));
  };

  const renderItems = (list: any) => {
    const arr = makeArray(list);
    return arr.map(
      (element: any, index) =>
        element.metaGroup.name != 'Miscellaneous' && (
          <DenGrid item container xs={12} key={index}>
            <DenGrid item container xs={12}>
              {/* <DenGrid item xs={12}>
                        <DenTypography variant="subtitle2" className={style['metagroupHead']}> {element.metaGroup.name}</DenTypography>  
                    </DenGrid> */}
              <DenGrid item xs={props.iconButtons ? 10 : 12}>
                {props.iconButtons ? (
                  <DenTypography
                    variant="subtitle2"
                    className={style['metagroupHead']}
                    onClick={() => handleEdit(element.metaGroup.rank)}
                  >
                    {' '}
                    {element.metaGroup.name}{' '}
                  </DenTypography>
                ) : (
                  <DenTypography
                    variant="subtitle2"
                    className={style['metagroupHead']}
                  >
                    {' '}
                    {element.metaGroup.name}
                  </DenTypography>
                )}
              </DenGrid>
              {props.iconButtons && !element.metaGroup.isReadOnly && (
                <>
                  <DenGrid item xs={2}>
                    <DenGrid container item className="group-head-action">
                      <DenGrid
                        container
                        item
                        xs={6}
                        justifyContent="center"
                        alignItems="center"
                      >
                        <DenIconButton
                          size={'small'}
                          onClick={() => handleEdit(element.metaGroup.rank)}
                        >
                          <Create />
                        </DenIconButton>
                      </DenGrid>
                      <DenGrid
                        container
                        item
                        xs={6}
                        justifyContent="center"
                        alignItems="center"
                      >
                        <DenIconButton
                          size={'small'}
                          onClick={() => handleDeleteGroup(element)}
                        >
                          <Delete />
                        </DenIconButton>
                      </DenGrid>
                    </DenGrid>
                  </DenGrid>
                </>
              )}
            </DenGrid>
            <DenGrid item container xs={12}>
              {renderSubItems(element.metaGroup.metatype, index)}
            </DenGrid>
            {index < arr.length - 1 && (
              <DenGrid
                item
                container
                xs={12}
                className={style['borderBottomMetagroup']}
              ></DenGrid>
            )}
          </DenGrid>
        )
    );
  };
  //style.metadataAddedWrapper
  return (
    <DenGrid container>
      <DenGrid item container xs={12} direction="row">
        <DenGrid item container xs={6} alignItems="center">
          <DenTypography className={style['metadataAddedWrapper']}>
            {'Added(' + (summary != null ? summary?.metaCount : 0) + ')'}
          </DenTypography>
        </DenGrid>
        {summary && props.isButtonVisible && (
          <DenGrid
            item
            container
            xs={6}
            justifyContent="flex-end"
            alignItems="center"
          >
            <DenButton
              onClick={() => props.openMetaModel()}
              variant="outlined"
              size="small"
              color="primary"
            >
              Add/Edit Metadata
            </DenButton>
          </DenGrid>
        )}
      </DenGrid>
      <DenGrid item container xs={12}>
        {summary && renderItems(summary.groupedList)}
      </DenGrid>
    </DenGrid>
  );
};
export default MetadataSummary;
