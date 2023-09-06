import React, { useEffect, useState } from 'react';
import {
  DenFormControl,
  DenInputLabel,
  DenMenuItem,
  DenSelect,
} from '../../../../common';
const MetadataDropdown = (props: any) => {
  const [dropdown, setDropdown] = useState(
    props.value ? props.value : 'Select'
  );
  const [items, setItems] = useState([]);
  useEffect(() => {
    if (props.widget.orderedSelection) {
      let arr: any = [];
      let orderSelection = props.widget.orderedSelection;
      Object.keys(orderSelection).forEach(function (key) {
        var value = orderSelection[key];
        if (key && key.toLocaleLowerCase() !== 'select') {
          arr.push({
            label: key,
            value: value,
          });
        }
      });
      setItems(arr);
    }
  }, [props.widget.orderedSelection]);

  useEffect(() => {
    setDropdown(props.value ? props.value : 'Select');
  }, [props.value]);

  const handleChange = (event: any) => {
    if (props.onChange) {
      props.onChange(
        props.widget.metadataDefinition.metatype,
        event.target.value,
        props.olderValue,
        props.msid
      );
    }
  };

  return (
    <>
      <DenInputLabel shrink>{props.title}</DenInputLabel>
      <DenFormControl fullWidth>
        <DenSelect
          value={dropdown}
          onChange={handleChange}
          SelectDisplayProps={{
            id: 'menu',
          }}
          disabled={props.isDisabled ? props.isDisabled : false}
        >
          <DenMenuItem key="0" value={'Select'}>
            Select
          </DenMenuItem>
          {items.map((item, index) => (
            <DenMenuItem key={index + 1} value={item.value}>
              {item.label}
            </DenMenuItem>
          ))}
        </DenSelect>
      </DenFormControl>
    </>
  );
};
export default MetadataDropdown;
