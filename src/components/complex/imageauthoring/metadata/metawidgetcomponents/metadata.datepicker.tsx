// import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { InputLabel, TextField, InputAdornment } from '@material-ui/core';
// import DateRangeIcon from '@material-ui/icons/DateRange';
// import MetadataUtils from "../../../utils/metadata.utils";

// import Calender from "../../commons/calender/calender";
// const MetadataDatePicker = (props) => {
    
//     const [value, setValue] = useState(props.value);
//     useEffect(() => {
//       if(props.value) {
//         setValue(MetadataUtils.formatDate(props.value))
//       }
      
//     },[props.value])
//     const handleChange = (start, end, label) => {
//       if(start)
//       start = new Date(start).getTime()
//       if (props.onChange) {
//           props.onChange(props.widget.metadataDefinition.metatype, start, props.olderValue, props.msid)
//       }
//   }

//     const handleChangeDate = event => {
//      const val = event.target.value;
//      setValue(val)
//   }

//     return (
//         <>
//         <InputLabel shrink>{props.title}</InputLabel>
//         <div className="metadata-calendar-wrapper">
//           <div className="daterange">
//          <DateRangeIcon />
//          </div>
//         <Calender onApply={handleChange} drops={"down"} opens={"right"} timePicker={true} format={'DD/MM/YYYY hh:mm A'} minDate="01/01/1" maxDate="31/12/9999" locale={{format:'DD/M/YYYY hh:mm A'}} startDate={value}>
//           <input onChange={handleChangeDate} value={value} type="text" className="input-calendar"/>
//         </Calender>
//           </div>
//         </>
        
//     )
// }
// export default MetadataDatePicker;