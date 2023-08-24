import React, { useEffect, useState } from "react";
import { DenGrid, DenInputLabel } from "../../../common";
import MetadataDropdown from "./metawidgetcomponents/metadata.dropdown";
import Metadatalabel from "./metawidgetcomponents/metadata.label";
import MetadataTextarea from "./metawidgetcomponents/metadata.textarea";
import MetadataCheckbox from "./metadata.checkbox";
import { DenTextField } from "../../../common/textfield/textfield.component";
//import { DateRange } from "@mui/icons-material";
import DateRangeIcon from '@mui/icons-material/DateRange';
import DenDateRangePicker from "../../../common/daterangepicker/daterangepicker.component";
import moment from "moment";
import MetadataDuration from "./metawidgetcomponents/metadata.duration";
import MetadataTextBox from "./metawidgetcomponents/metadata.textbox";
import MetadataDatePicker from "./metawidgetcomponents/metadata.datepicker";
import MetadataSingleSelect from "./metawidgetcomponents/metadata.singleselect";
import MetadataMultiSelect from "./metawidgetcomponents/metadata.multiselect";
import style from './metadata.module.scss';

export const MetadataWidgets = (props: any) => {
    const [model, setModel] = useState(props.model)
    const [widgets, setWidgets] = useState([]);
    const [options, setOptions] = useState([]);
    const [group, setGroup] = useState(props.selectedGroup)
    const list = props.items
    const chunkSize = props.chunkSize || 2;
    const gridSize=props.gridSize || 6;
    const isPublished = props.isPublished;
    
    useEffect(() => {
        setGroup(props.selectedGroup)
        handleWigets(props.selectedGroup)
    }, [props.selectedGroup])

    useEffect(() => {
        setModel(props.model)
    },[props.model])
    const handleWigets = (key: any) => {
        let arr = []
        if (!list) {
            return;
        }
        let isnum = /^\d+$/.test(key);
        if (key && isnum) {
            for (var i in list) {
                if (list[i].parentGroups != null) {
                    for (var j = 0; j < list[i].parentGroups.length; j++) {
                        if (list[i].parentGroups[j].id == key) {
                            if (list[i].metadataDefinition && list[i].metadataDefinition.metadataDataType) {
                                arr.push(list[i]);
                            }
                        }
                    }
                }
            }
            arr.sort(function (a, b) {
                return ((a.parentGroups[0].positionInGroup) - (b.parentGroups[0].positionInGroup));
            });
            arr = chunkArray(arr, chunkSize);
        }
        setWidgets(arr);
    }

    const chunkArray = (arr:any, size:any) => {
        var newArr = [];
        for (var i = 0; i < arr.length; i += size) {
            newArr.push(arr.slice(i, i + size));
        }
        return newArr;
    }

    const handleChange = (type: any, value: any, olderValue: any) => {
        if (props.onChange && typeof props.onChange === "function") {
            props.onChange(type, value, olderValue)
            setOptions([])
        }
    }

    const onCloseAutoComplete = () => {
        setOptions([])  
    }

    const handleAutocompleteTextChange = (type: any, query: any) => {
        if(query) {
            let data = [
                {
                    "id": "TRAVEL GUIDE",
                    "value": "TRAVEL GUIDE",
                    "title": "TRAVEL GUIDE",
                    "display": {
                        "title": "TRAVEL GUIDE"
                    }
                },
                {
                    "id": "Travel News",
                    "value": "Travel News",
                    "title": "Travel News",
                    "display": {
                        "title": "Travel News"
                    }
                },
                {
                    "id": "TRAVEL TIPS",
                    "value": "TRAVEL TIPS",
                    "title": "TRAVEL TIPS",
                    "display": {
                        "title": "TRAVEL TIPS"
                    }
                },
                {
                    "id": "TRAVEL TRENDS",
                    "value": "TRAVEL TRENDS",
                    "title": "TRAVEL TRENDS",
                    "display": {
                        "title": "TRAVEL TRENDS"
                    }
                }
            ] ;
            //let data = ['a1','a2','a3'];
            setOptions(data);
        } else {
            setOptions([])
        }
        
    }

    const parseDefaultValue = (widgetType: any) => {
        switch (widgetType) {
            case 'LABEL':
            case 'TEXTBOX':
            case "TEXTAREA":
            case "DURATION":
            case "DATEPICKER":
                return ""
            case "DROPDOWN":
                return null
            case "SINGLESELECTSUGGESTIONTEXTBOX":
            case "DROPDOWNSUGGESTIONTEXTBOX":
            case "MULTISELECTSUGGESTIONTEXTBOX":
                return null
            case "CHECKBOX":
                return false
            default:
                return ""
        }
    }

    const renderWidgets = () => {
        return (
            <>
            {
                 widgets.map((wd, i) => (
                        <DenGrid key={i} container spacing={4}>{wd.map((item: any, index: any) => {
                            const metaWidget = item?.metadataDefinition?.editorWidget;
                            const metaType = item['metadataDefinition']['metatype'];
                            let metaValue = model[metaType] && model[metaType].value ? model[metaType].value : parseDefaultValue(metaWidget);
                            const olderValue = model[metaType] && model[metaType].olderValue ? model[metaType].olderValue : null;
                            const msid = model[metaType] && model[metaType].msid ? model[metaType].msid : null;
                            const isDisabled = (isPublished && metaType == 592) ? true : false;
                            switch (metaWidget) {
                                case 'LABEL':
                                    return <DenGrid key={index} item xs={gridSize} data-meta-type={metaType} data-widget-type={metaWidget}>
                                            <DenTextField label={item.metadataDefinition.name} fullWidth value={metaValue} valueProps={{
                                            readOnly: true,
                                            disabled: true
                                            }} />
                                    </DenGrid>
                                case 'TEXTBOX':
                                    //143-144 k liye flot
                                    return <DenGrid key={index} item xs={gridSize} data-meta-type={metaType} data-widget-type={metaWidget}> <MetadataTextBox title={item.metadataDefinition.name} widget={item} value={metaValue} olderValue={olderValue} msid={msid} onChange={handleChange} /> </DenGrid>
                                case "TEXTAREA":
                                    return <DenGrid key={index} item xs={gridSize} data-meta-type={metaType} data-widget-type={metaWidget}>
                                    <DenTextField label={item.metadataDefinition.name} value={metaValue} fullWidth={true} valueProps={{multiline: true,
                                         onChange:(event) => handleChange(item.metadataDefinition.metatype, event.target.value, olderValue)}}/>
                                     </DenGrid>
                                case "DROPDOWN":
                                    return <DenGrid key={index} item xs={gridSize} data-meta-type={metaType} data-widget-type={metaWidget}> <MetadataDropdown title={item.metadataDefinition.name} widget={item} value={metaValue} olderValue={olderValue} msid={msid} onChange={handleChange} isDisabled={isDisabled} /> </DenGrid>
                                case "CHECKBOX":
                                    // need to handle for multiple tags
                                    return <DenGrid key={index} item xs={gridSize} data-meta-type={metaType} data-widget-type={metaWidget}> <MetadataCheckbox title={item.metadataDefinition.name} widget={item} value={metaValue} olderValue={olderValue} msid={msid} onChange={handleChange} /> </DenGrid>
                                case "DURATION":
                                    return <DenGrid key={index} item xs={gridSize} data-meta-type={metaType} data-widget-type={metaWidget}> <MetadataDuration title={item.metadataDefinition.name} widget={item} value={metaValue} olderValue={olderValue} msid={msid} onChange={handleChange}  /> 
                                    </DenGrid>
                                case "DATEPICKER":
                                    return <DenGrid key={index} item xs={gridSize} data-meta-type={metaType} data-widget-type={metaWidget}> <MetadataDatePicker title={item.metadataDefinition.name} widget={item} value={metaValue} olderValue={olderValue} msid={msid} onChange={handleChange} /> </DenGrid>
                                case "SINGLESELECTSUGGESTIONTEXTBOX":
                                case "DROPDOWNSUGGESTIONTEXTBOX":
                                    return <DenGrid key={index} item xs={gridSize} data-meta-type={metaType} data-widget-type={metaWidget}> <MetadataSingleSelect title={item.metadataDefinition.name} widget={item} options={options} value={metaValue} msid={msid} olderValue={olderValue} onChange={handleChange} onTextChange={handleAutocompleteTextChange} onClose={onCloseAutoComplete} /> </DenGrid>
                                case "MULTISELECTSUGGESTIONTEXTBOX":
                                    // need to handle for multiple metadata
                                    return <DenGrid key={index} item xs={gridSize} data-meta-type={metaType} data-widget-type={metaWidget}><MetadataMultiSelect title={item.metadataDefinition.name} widget={item} options={options} value={metaValue} msid={msid} olderValue={olderValue} onChange={handleChange} onTextChange={handleAutocompleteTextChange} onClose={onCloseAutoComplete}/> </DenGrid>
                            }
                        })
                        }
                        </DenGrid>
                    ))
            }
            </>
     
        )
    }

    return (
        renderWidgets()
    )
}

export default MetadataWidgets;