import React from "react";
//import { Chip, Grid, Typography } from '@material-ui/core';
import { DenChip, DenGrid, DenTypography } from "../../../../common";

export const MetadataSingleSelectTemplate = (props: any) => {
    if(!props) {
        return;
    }
    const option = props.option;
    return (
        option ? <DenGrid container alignItems="center" spacing={2}>
            <DenGrid item xs={12} >
                <DenTypography variant="body1" noWrap color="textPrimary">
                    {option?.value || option?.title}
                </DenTypography>
            </DenGrid>
        </DenGrid>:null
    )
}



export const MetadataSingleSelectChip = (props: any) => {
    if(!props) {
        return;
    }
    const option = props.option;
    const tagProps = props.tagProps;
    const label = option ? (option?.value || option?.title) : ""
    return (
        option && <DenChip className="byline_suggestion" key={props.index + '_' + label} variant="outlined" label={label} {...tagProps} />
    )
}
