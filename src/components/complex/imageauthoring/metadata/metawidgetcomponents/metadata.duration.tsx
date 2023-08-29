import React, { useEffect, useState } from "react";
import ScheduleSharpIcon from '@mui/icons-material/ScheduleSharp';
import { DenInputLabel, DenMenu, DenMenuItem } from "../../../../common";
import { DenTextField } from "../../../../common/textfield/textfield.component";
import DenInputAdornment from "../../../../common/inputadornment/inputadornment.component";

function prepareDropdown(hours12: any, step: any) {
    let i = 0, j;
    let h = '';
    let m = '';
    const items = []
    for (i = 0, j = 0; i < (hours12 ? 12 : 24); i += 1) {
        for (j = 0; j < 60; j += step) {
            h = (i < 10 ? '0' : '') + i;
            m = (j < 10 ? '0' : '') + j;
            items.push(h + ':' + m)
        }
    }
    return items;
}

//const options = prepareDropdown(false, 1)

// const convertMinsToHrsMins = (mins: any) => {
//     let h: any = Math.floor(mins / 60);
//     let m: any = mins % 60;
//     h = h < 10 ? '0' + h : h;
//     m = m < 10 ? '0' + m : m;
//     return `${h}:${m}`
// }

const MetadataDuration = (props: any) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [value, setValue] = useState(props.value);
    const hours12 = props.hours12 ? true : false
    const step = props.step ? props.step : 1;
    const options = prepareDropdown(hours12, step);

    useEffect(() => {
        if(props.value) {
            setValue(props.value)
        }
    },[props.value])

    const open = Boolean(anchorEl);

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget)
    };
    const handleClose = () => {
        setAnchorEl(null);
    }
    const handleSelect = (value: any) => {
        if(props.onChange){
            props.onChange(props.widget.metadataDefinition.metatype, value, props.olderValue)
        }
        handleClose()
    }
    

    return (
        <>
            {props.inputLabel && <DenInputLabel> {props.title} </DenInputLabel>}
            <DenTextField label={props.title} value={value} fullWidth valueProps={{
                startAdornment: (
                    <DenInputAdornment position="start">
                        <ScheduleSharpIcon />
                    </DenInputAdornment> 
                ), onChange: (event: any) => { handleClick(event) } }} />
            <DenMenu anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                keepMounted
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                >
                {options.map((option) => (
                    <DenMenuItem divider key={option} selected={option === value} value={option} onClick={()=>handleSelect (option)}>
                        {option}
                    </DenMenuItem>
                ))}

            </DenMenu>
        </>
    )
}


export default MetadataDuration;