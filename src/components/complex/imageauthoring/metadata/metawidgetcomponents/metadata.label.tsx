import React from "react";
import { DenTextField } from "../../../../common/textfield/textfield.component";
import { MetaLabelProps } from "./metawidget.components.types";
const Metadatalabel = (props: MetaLabelProps) => {
    return (
       <> 
       <DenTextField label={props.title} fullWidth value={props.value} valueProps={{
            readOnly: true,
            disabled: true
          }} />
       </>
    )
}

export default Metadatalabel;