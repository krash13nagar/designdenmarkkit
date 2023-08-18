// import React, { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { updateCommonModel } from '../../../actions/common.action';
// import Utils from '../../../utils/utils';
// import {
//   Grid,
//   Button,
//   TextField,
//   List,
//   ListItem,
//   IconButton,
//   Slider,
//   Select,
//   MenuItem,
// } from '@material-ui/core';
// import RemoveCircleOutlineOutlinedIcon from '@material-ui/icons/RemoveCircleOutlineOutlined';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import RecommendKeywords from './recommend.keywords';
// import Suggestions from './keyword.suggestion';

// import './keyword.scss';
// let timer = '';
// const Keywords = (props) => {
//   const dispatch = useDispatch();
//   // console.log(props.dependedModel,"checking the object of dependable")
//   const range = [20, 40, 60, 80, 100];

//   const title = '';
//   const bodyText = '';
//   const [text, setText] = useState('');
//   const [keywords, setKeywords] = useState([]);
//   const [focus, setFocus] = useState(false);
//   const [lasRemoved, setLasRemoved] = useState({});

//   const handleChange = (event) => {
//     setText(event.target.value);
//   };
//   const handleClean = () => {
//     setText('');
//   };
//   const handleFocus = () => {
//     setFocus(true);
//   };
//   const handleBlur = () => {
//     setTimeout(() => {
//       setFocus(false);
//     }, 300);
//   };

//   useEffect(() => {
//     if (!Utils.isEmpty(props.value)) {
//       setKeywords(props.value);
//     }
//   }, [props.value]);

//   const handleClick = () => {
//     //alert(text)
//     if (!Utils.isEmpty(text)) {
//       const list = text.split(',');
//       const tmplist = keywords.slice();
//       list.forEach((element) => {
//         if (!Utils.isEmpty(element) && element.trim() != '') {
//           const i = _.findIndex(tmplist, { keywordName: element.trim() });
//           if (i == -1) {
//             tmplist.push({
//               keyEnum: 'General',
//               keywordName: element.trim(),
//               relevance: 20,
//               source: 'Orion',
//             });
//           } else if (tmplist[i] && tmplist[i].botKeyword) {
//             tmplist.push({
//               keyEnum: 'General',
//               keywordName: element.trim(),
//               relevance: 20,
//               source: 'Orion',
//             });
//           }
//         }
//       });
//       setText('');
//       dispatchEvent(tmplist);
//       setKeywords(tmplist);
//     }
//   };

//   const keyPress = (event) => {
//     if (event.keyCode == 13) {
//       handleClick();
//     }
//   };

//   const relevenceChange = function (event, index) {
//     const _arr = _.cloneDeep(keywords);
//     let value = event.target.value;
//     _arr[index]['relevance'] = value;
//     setKeywords(_arr);
//     clearTimeout(timer);
//     if (event.target.value && Utils.isNumber(event.target.value)) {
//       timer = setTimeout(() => {
//         let value = Utils.nearestRound(_arr[index]['relevance']);
//         if (value) {
//           _arr[index]['relevance'] = value;
//           dispatchEvent(_.cloneDeep(_arr));
//           setKeywords(_arr);
//         }
//       }, 1000);
//     }
//   };
//   const remove = (event, index) => {
//     const _arr = keywords.slice();
//     let toberemoved = _arr[index];
//     setLasRemoved(toberemoved);
//     _arr.splice(index, 1);
//     dispatchEvent(_arr);
//     setKeywords(_arr);
//   };
//   const dispatchEvent = (arr) => {
//     dispatch(
//       updateCommonModel({
//         val: arr,
//         model: props.model,
//         store: props.storeKey,
//       })
//     );
//   };
//   const useStyles = makeStyles((theme) => ({
//     removeIcon: {
//       '& svg': {
//         fontSize: 20,
//       },
//     },
//     addIcon: {
//       '& svg': {
//         fontSize: 50,
//       },
//     },
//   }));

//   const classes = useStyles();

//   const makeTemplate = keywords.map((element, index) => {
//     return !element.botKeyword ? (
//       <Grid container key={index} specing={2} className="mt10">
//         <Grid
//           container
//           item
//           xs={1}
//           justifyContent="center"
//           alignContent="center"
//         >
//           <IconButton size="small" onClick={(event) => remove(event, index)}>
//             <RemoveCircleOutlineOutlinedIcon
//               className={classes.removeIcon}
//             ></RemoveCircleOutlineOutlinedIcon>
//           </IconButton>
//         </Grid>
//         <Grid item xs={8}>
//           <Grid container item>
//             <Typography className="keywordTitle pl8" variant="subtitle" noWrap>
//               {element.keywordName}
//             </Typography>
//           </Grid>
//           <Grid item>
//             <Typography className="keywordDetails pl8" variant="subtitle">
//               {element.source}
//             </Typography>
//           </Grid>
//         </Grid>
//         <Grid item xs={3} className="keywordSliderWrapper">
//           <TextField
//             value={element.relevance}
//             onChange={(event) => relevenceChange(event, index)}
//             type="number"
//             inputProps={{
//               max: 100,
//               min: 10,
//               step: 10,
//             }}
//             className="marks-input"
//           />
//         </Grid>
//       </Grid>
//     ) : null;
//   });

//   return (
//     <>
//       <Grid container spacing={4} className="wsKeywordWrapper">
//         <Grid item xs={9} className="wsKeywordGrid">
//           <TextField
//             onChange={handleChange}
//             onClick={handleFocus}
//             onBlur={handleBlur}
//             placeholder="Add Keyword"
//             value={text}
//             fullWidth
//             onKeyDown={keyPress}
//           />
//           <Suggestions
//             focus={focus}
//             dependedModel={props.dependedModel}
//             text={text}
//             handleClean={handleClean}
//             model={props.model}
//             storeKey={props.storeKey}
//             value={props.value}
//             dispatchEvent={dispatchEvent}
//           />
//         </Grid>
//         <Grid item xs={3}>
//           <Button variant="contained" color="primary" onClick={handleClick}>
//             {' '}
//             Add{' '}
//           </Button>
//         </Grid>
//       </Grid>
//       <Grid>{makeTemplate}</Grid>
//       <RecommendKeywords
//         lasRemoved={lasRemoved}
//         dependedfields={props.dependedfields}
//         dependedModel={props.dependedModel}
//         model={props.model}
//         storeKey={props.storeKey}
//       />
//     </>
//   );
// };

// export default Keywords;
import React, { useEffect, useState } from "react";
import RecommendKeywords from "./recommend.keywords";
import { keywordsMappingObj } from "./keywords.types";
import { Grid } from "@mui/material";
import Keywords from "./keywords";


export const KeywordsWrapper = () =>{

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <h1>Hello world</h1>
                </Grid>
                <Grid item xs={8}>
                    <Keywords/>
                    {/* <RecommendKeywords recommendedConfig={recommendedSchema.recommendedConfig} recommendedKeywords={recommendedSchema.recommendedKeywords}  /> */}
                </Grid>
            </Grid>
        </div>
    )
}

export default KeywordsWrapper;