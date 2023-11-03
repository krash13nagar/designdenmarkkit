import React, { useEffect, useState } from "react";
import { DenTextField } from "../../../../common/textfield/textfield.component";
import { MetaTextAreaProps } from "./metawidget.components.types";

const MetadataTextarea = (props: any) => {
    const handleChange = (event: any) => {
        if(props.onChange) {
            props.onChange(props.widget.metadataDefinition.metatype, event.target.value, props.olderValue, props.msid)
        }
    }
    return (
        <>
            {/* <InputLabel>{props.title} </InputLabel> */}
            <DenTextField label={props.title} value={props.value} fullWidth={true} valueProps={{multiline: true, onChange: handleChange}}/>
        </>
    )
}

export default MetadataTextarea;