import moment from "moment";
import MetadataGroupList from "./metadataGroupList.config";
import MetadataList from "./metadataList.config";

const MetadataUtils = {
    //metadataDefination: MetadataGroupList,
    metadataDefination: MetadataList,
    makeSummary: function (model: any, existingSummary?: any) {
        if (!model) {
            return null
        }
        const metadataDefination = MetadataUtils.metadataDefination;
        const groupedList = MetadataUtils.makeMetaDataGroupList(metadataDefination, model, existingSummary);
        const count = MetadataUtils.returnMetaCount(metadataDefination, model);
        return {
            visibleSummary: true,
            iconButtons: true,
            isButtonVisible: true,
            groupedList: groupedList,
            metaCount: count,
            expand: false
        }
    },
    getCheckboxDisplayStr: function (value: any, metadata: any) {
        const dataType = metadata.metadataDataType;
        if(dataType && dataType=='CHARACTER') {
           if(typeof value === "boolean") {
                return value ? 'Yes' : 'No'
            } 
           return value=="true" || value=="1" ? 'Yes' : 'No'
        }
        return value && value!="0" ? 'Yes' : 'No'

    },
    setDisplayValue: function (model: any, metadata: any) {
        switch (metadata.editorWidget) {
            case 'CHECKBOX':
                return MetadataUtils.getCheckboxDisplayStr(model[metadata['metatype']].value, metadata) //props.value[metadata['metatype']].value ? 'Yes' : 'No'
            case 'DATEPICKER':
                return MetadataUtils.formatDate(model[metadata['metatype']].value, 'LLL')
            case 'DROPDOWN':
                return MetadataUtils.getSummaryDropdownValue(metadata, model[metadata['metatype']].value)
            default:
                return model[metadata['metatype']].value
        }
    },
    makeMetaDataGroupList: function (list: any, model: any, existingSummary: any) {
        if (model) {
            var out:any = {};
            for (var key in list) {
                if (list[key].parentGroups) {
                    for (var i = 0; i < list[key].parentGroups.length; i++) {
                        if (model[list[key].metadataDefinition.metatype]) {
                            if (model.hasOwnProperty(list[key].metadataDefinition.metatype) && model[list[key].metadataDefinition.metatype].value && list[key].parentGroups[i].name != 'Miscellaneous') {
                                if (!out.hasOwnProperty(list[key].parentGroups[i].id)) {
                                    out[list[key].parentGroups[i].id] = list[key].parentGroups[i];
                                }
                                if (!out[list[key].parentGroups[i].id].hasOwnProperty('metatype')) {
                                    out[list[key].parentGroups[i].id].metatype = {};
                                }
                                out[list[key].parentGroups[i].id].metatype[list[key].metadataDefinition.metatype] = list[key].metadataDefinition;
                                out[list[key].parentGroups[i].id].metatype[list[key].metadataDefinition.metatype].value = MetadataUtils.setDisplayValue(model, list[key].metadataDefinition);
                                out[list[key].parentGroups[i].id].count = MetadataUtils.returnGroupMetaCount(out[list[key].parentGroups[i].id].metatype, model, out[list[key].parentGroups[i].id].name);
                                
                                out[list[key].parentGroups[i].id].expand = MetadataUtils.isExpanded(existingSummary, list[key].parentGroups[i].id) ? true : false;
                            }
                        }
                    }
                }
            }
            return out;
        }
    },
    returnMetaCount: function (configModel:any, model:any) {
        let count = 0;
        const obj = model;
        for (let key in obj) {
            if (key) {
                let groupName = '';
                for (const [k, o] of Object.entries(configModel)) {
                    let val: any = o;
                    if (val.metadataDefinition.metatype) {
                        if (val.metadataDefinition.metatype == key) {
                            if (val.parentGroups && val.parentGroups[0].name) {
                                groupName = val.parentGroups[0].name
                            }
                        }
                    }
                }
                if (obj[key]) {
                    if ((obj.hasOwnProperty(key) && obj[key].value) && (groupName != 'Miscellaneous')) {
                        count++
                    }
                }
            }
        }
        return count
    },
    returnGroupMetaCount: function (configModel:any, model:any, groupName:any) {
        let count = 0;
        const obj = model;
        for (let key in configModel) {
            for (let i in obj) {
                if (i == key) {
                    if (obj[i]) {
                        if ((obj.hasOwnProperty(i) && obj[i].value) && (groupName != 'Miscellaneous')) {
                            count++
                        }
                    }
                }
            }
        }
        return count;
    },
    isExpanded : (existingSummary:any, id:any) => {
        return existingSummary && existingSummary.groupedList && existingSummary.groupedList[id] && existingSummary.groupedList[id]['expand'] ? existingSummary.groupedList[id]['expand'] : false
    },
    formatDate: (d:any, format:any) => {
        return moment.unix(Math.floor(d/1000)).format("DD/MM/YYYY HH:mm")
   },
   getSummaryDropdownValue: function (metadata:any, value:any) {
        let metadataDefinition:any = MetadataUtils.metadataDefination;
        if (metadataDefinition[metadata['metatype']].orderedSelection) {
            const orderedSelection = metadataDefinition[metadata['metatype']].orderedSelection;
            for (let k in orderedSelection) {
                if (orderedSelection[k] == value) {
                    return k;
                }
            }
        }
    },
    makeMetaObjectForModel: (type: any, value: any, olderValue: any = null, isDeleted = false, msid: any = null) => {
        const metadata: any = MetadataUtils.metadataDefination && MetadataUtils?.metadataDefination[type] ;
        const obj: any = {
            "metatype": type,
            "value": MetadataUtils.parseValue(value, metadata?.metadataDefinition?.metadataDataType,  metadata?.metadataDefinition?.editorWidget),
            "msid": msid,
            "olderValue": olderValue,
            "dataType": metadata?.metadataDefinition?.metadataDataType,
            "dbname": metadata?.dbname,
            "isDeleted": isDeleted
        }
        return obj;
    },
    parseValue: (value: any, dataType: any, widgetType: any) => {
        if(widgetType=="CHECKBOX") {
            if (value && typeof value === "string" && value.toLowerCase() == "select") {
                return null
            }
            if(dataType=="NUMBER") {
               return value ? 1 : 0
            }
            return value
        } 
        return value
        
    }
}

export default MetadataUtils ;