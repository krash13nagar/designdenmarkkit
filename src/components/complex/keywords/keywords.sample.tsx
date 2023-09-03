import React from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {RemoveCircleOutlineOutlined} from '@mui/icons-material';
import { CachedOutlined } from '@mui/icons-material';
import { metaInfo } from './keywords.types';

export const config = {
  searchKeywordConfig:{
    autocomplete: false,
    label:"Type Keyword",
    placeholder:"Add multiple Keywords separated by comma(,)",
    searchCallbckfnc: function(){
        console.log("search keyword call back fnc");
    }
  },
  addBtnConfig: {
    btnConfig: {
        color: "red"
    },
    addBtnCallbckfnc: function(){
        console.log("clicked add btn config function");
    } 
  },
  addKeywordsConfig: {
    "addedKeywordsConfig": {
      removeCallbackFn: function () {
        console.log('click remove btn');
      },
      title: 'Added Keywords',
      removeKeywordIcon: <RemoveCircleOutlineOutlined/>
    },
    "addedKeywords": [
      {
        keywordName: 'Aisha Verma',
        keyEnum: 'Denny',
        source: 'Denny',
        relevance: 100,
      },
      {
        keywordName: 'Guru Divekar',
        keyEnum: 'Denny',
        source: 'Denny',
        relevance: 100,
      },
      {
        keywordName: 'young woman',
        keyEnum: 'Denny',
        source: 'Denny',
        relevance: 80,
      },
      {
        keywordName: 'defenestration',
        keyEnum: 'Denny',
        source: 'Denny',
        relevance: 80,
      },
      {
        keywordName: 'masked man',
        keyEnum: 'Denny',
        source: 'Denny',
        relevance: 80,
      },
      {
        keywordName: 'CBI',
        keyEnum: 'Denny',
        source: 'Denny',
        relevance: 20,
      },
      {
        keywordName: 'Mumbai',
        keyEnum: 'TOPIC',
        keywordType: 'place',
        source: 'TOPIC',
        relevance: 60,
      },
    ],
  },
  recommendConfig: {
    "recommendedConfig": {
      title: 'Recommended Keywords',
      nodatafound: 'No recommendation found',
      errorMsg: 'API Error',
      refreshIcon: <CachedOutlined fontSize="inherit" />,
      addKeywordIcon: <AddCircleOutlineIcon />,
      refreshCallbackFn: function () {
        console.log('clicked refresh btn');
      },
      addCallbackFn: function () {
        console.log('clicked refresh btn');
      },
    },
    "recommendedKeywords": [
      {
        keywordName: 'Aisha Verma',
        keyEnum: 'Denny',
        source: 'Denny',
        relevance: '100',
        metaInfo: undefined,
      },
      {
        keywordName: 'Guru Divekar',
        keyEnum: 'Denny',
        source: 'Denny',
        relevance: '100',
        metaInfo: undefined,
      },
      {
        keywordName: 'young woman',
        keyEnum: 'Denny',
        source: 'Denny',
        relevance: '80',
        metaInfo: {
          hostId: 83,
          aliasName:
            'union budget of india,Indian union budget,budget session india,indias budget session,annual budget of india,india annual budget',
          entityName: 'budget',
          keywordSubtype: 'undefined',
          entityId: 'budget',
          seoPath: 'politics/budget',
          msId: 62690834,
        },
      },
      {
        keywordName: 'defenestration',
        keyEnum: 'Denny',
        source: 'Denny',
        relevance: '80',
        metaInfo: undefined,
      },
      {
        keywordName: 'masked man',
        keyEnum: 'Denny',
        source: 'Denny',
        relevance: '80',
        metaInfo: undefined,
      },
      {
        keywordName: 'CBI',
        keyEnum: 'Denny',
        source: 'Denny',
        relevance: '20',
        metaInfo: undefined,
      },
      {
        keywordName: 'Mumbai',
        keyEnum: 'TOPIC',
        keywordType: 'place',
        source: 'TOPIC',
        relevance: '60',
        metaInfo: undefined as metaInfo,
      },
      {
        keywordName: 'Aditya',
        keyEnum: 'TOPIC',
        keywordType: 'cinema-entertainment',
        source: 'TOPIC',
        relevance: '60',
        metaInfo: undefined,
      },
      {
        keywordName: 'Aisha',
        keyEnum: 'TOPIC',
        keywordType: 'cinema-entertainment',
        source: 'TOPIC',
        relevance: '60',
        metaInfo: undefined,
      },
      {
        keywordName: 'Guru',
        keyEnum: 'TOPIC',
        keywordType: 'cinema-entertainment',
        source: 'TOPIC',
        relevance: '60',
        metaInfo: undefined,
      },
      {
        keywordName: 'Uttar Pradesh',
        keyEnum: 'TOPIC',
        keywordType: 'place',
        source: 'TOPIC',
        relevance: '60',
        metaInfo: undefined,
      },
      {
        keywordName: 'murder case',
        keyEnum: 'TOPIC',
        keywordType: 'miscellaneous',
        source: 'TOPIC',
        relevance: '60',
        metaInfo: undefined,
      },
      {
        keywordName: 'World Health Organisation',
        keyEnum: 'TOPIC',
        keywordType: 'organisation-company',
        source: 'TOPIC',
        relevance: '60',
        metaInfo: undefined,
      },
      {
        keywordName: 'aisha verma',
        keyEnum: 'General',
        source: 'Orion',
        relevance: '100',
        metaInfo: undefined,
      },
      {
        keywordName: 'guru',
        keyEnum: 'General',
        source: 'Orion',
        relevance: '80',
        metaInfo: undefined,
      },
      {
        keywordName: 'guru divekar',
        keyEnum: 'General',
        source: 'Orion',
        relevance: '50',
        metaInfo: undefined,
      },
      {
        keywordName: 'debu',
        keyEnum: 'General',
        source: 'Orion',
        relevance: '50',
        metaInfo: undefined,
      },
      {
        keywordName: 'aditya rathore',
        keyEnum: 'General',
        source: 'Orion',
        relevance: '50',
        metaInfo: undefined,
      },
      {
        keywordName: 'cbi',
        keyEnum: 'General',
        source: 'Orion',
        relevance: '50',
        metaInfo: undefined,
      },
      {
        keywordName: 'caesar',
        keyEnum: 'General',
        source: 'Orion',
        relevance: '50',
        metaInfo: undefined,
      },
      {
        keywordName: 'aisha',
        keyEnum: 'General',
        source: 'Orion',
        relevance: '50',
        metaInfo: undefined,
      },
      {
        keywordName: 'mumbai',
        keyEnum: 'General',
        source: 'Orion',
        relevance: '20',
        metaInfo: undefined,
      },
    ],
  },
};
