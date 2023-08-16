import React, {  useEffect, useState } from "react";
import { MetadataSelectorProps } from "./metadata.types";
import { DenFormControl, DenInputLabel, DenMenuItem, DenSelect } from "../../../common";


export const MetadataSelector = (props: MetadataSelectorProps) => {
    const [dropdown, setDropdown] = useState(props.selectedGroup ? props.selectedGroup : 'Select');
    
    useEffect(() => {
        setDropdown(props.selectedGroup ? props.selectedGroup : 'Select') 
    },[props.selectedGroup])

    const handleChange = (event:any) => {
        const val = event.target.value;
        setDropdown(val);
        if(props.onChange && typeof props.onChange === "function") {
            props.onChange(val);
        }
    }
    return (
        <DenFormControl fullWidth>
            {props.title && <DenInputLabel shrink>props.title</DenInputLabel> }
            <DenSelect
                value={dropdown}
                onChange={handleChange}
                SelectDisplayProps={{
                    id: "menu"
                  }}
                > 
                <DenMenuItem key="0" value={'Select'}>Select Metadata Group</DenMenuItem>
                {
                    props.items.map((item:any, index:any) => (
                        <DenMenuItem key={index + 1} value={item.id}>{item.name}</DenMenuItem>
                    ))
                }
            </DenSelect>
        </DenFormControl>
    )
}

export default MetadataSelector;