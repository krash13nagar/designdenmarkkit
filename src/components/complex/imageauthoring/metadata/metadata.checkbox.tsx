import React, { useEffect, useState } from "react";
import DenFormControlLabel from "../../../common/formcontrollabel/formcontrolllabel.component";
import DenCheckbox from "../../../common/checkbox/checkbox.component";

const MetadataCheckbox = (props: any) => {
    const [isChecked, setCheckBoxState] = useState(false);
    useEffect(() => {
        const checked = setChecboxState(props.value, props.widget)
        setCheckBoxState(checked);
    }, [props.value])

    const handleChange = (event: any) => {
        if (props.onChange) {
            const val=event.target.checked? "1" : "0";
            props.onChange(props.widget.metadataDefinition.metatype, val, props.olderValue, props.msid)
        }
    }
    const setChecboxState = (value: any, widget: any) => {
        const dataType = props.widget.metadataDefinition.metadataDataType;
        if(dataType && dataType=='CHARACTER') {
           if(typeof value === "boolean") {
                return value 
            }
            return value=="true" || value=="1"  ? true : false
        }
        return value && value!="0" ? true : false
    }

    

    return (
        <DenFormControlLabel
            control={<DenCheckbox
                checked={isChecked}
                onChange={handleChange}
                name={props.name}
                color="primary"
            />
            }
            label={props.title} />
    )
}

export default MetadataCheckbox;