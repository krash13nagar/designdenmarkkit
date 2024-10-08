import React from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineOutlined from '@mui/icons-material/RemoveCircleOutlineOutlined';
import CachedOutlined from '@mui/icons-material/CachedOutlined';
import { metaInfo, recommendedKeywords } from './keywords.types';

export const NonStarKeywordIcon = () => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15.279" viewBox="0 0 16 15.279">
        <path id="Path_39110" data-name="Path 39110" d="M21.661,13.541l-5.143-.672L14.3,8.179a.364.364,0,0,0-.654,0l-2.217,4.689-5.143.672a.357.357,0,0,0-.2.618l3.762,3.562L8.9,22.828a.361.361,0,0,0,.527.382l4.544-2.472,4.544,2.472a.361.361,0,0,0,.527-.382L18.1,17.721l3.762-3.562A.362.362,0,0,0,21.661,13.541Zm-4.217,3.8a.366.366,0,0,0-.109.327l.854,4.544-4.035-2.217a.3.3,0,0,0-.182-.036.646.646,0,0,0-.182.036L9.757,22.21l.854-4.544a.366.366,0,0,0-.109-.327L7.14,14.159l4.58-.6a.379.379,0,0,0,.291-.2l1.963-4.18,1.981,4.162a.381.381,0,0,0,.273.2l4.58.618Z" transform="translate(-5.971 -7.975)" fill="#818181" />
      </svg>
    </>
  );
}

export const StarKeywordIcon = () => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15.279" viewBox="0 0 16 15.279">
        <path id="Path_39109" data-name="Path 39109" d="M21.661,13.541l-5.143-.672L14.3,8.179a.364.364,0,0,0-.654,0l-2.217,4.689-5.143.672a.357.357,0,0,0-.2.618l3.762,3.562L8.9,22.828a.361.361,0,0,0,.527.382l4.544-2.472,4.544,2.472a.361.361,0,0,0,.527-.382L18.1,17.721l3.762-3.562A.362.362,0,0,0,21.661,13.541Z" transform="translate(-5.971 -7.975)" fill="#f8b84e" />
      </svg>
    </>
  );
}

export const config = {
  searchKeywordConfig: {
    bautocomplete: "off",
    label: 'Type Keyword',
    placeholder: 'Add multiple Keywords separated by comma(,)',
    isSuggestedKeywordSkeleton: false,
    suggestedKeywordsData: [
      {
        keywordName: 'Aisha Verma',
        keyEnum: 'Denny',
        source: 'Denny',
        id: 1,
        relevance: '80'
      },
      {
        keywordName: 'Guru Divekar',
        keyEnum: 'Denny',
        source: 'Denny',
        id: 2,
        relevance: '80'
      },
      {
        keywordName: 'young woman',
        keyEnum: 'Denny',
        source: 'Denny',
        id: 3,
        relevance: 20
      },
    ],
    searchCallbckfnc: function () {
      console.log('search keyword call back fnc');
    },
    onSelectKeywordClick: function(val:any){
      console.log(val)
    }
  },
  addBtnConfig: {
    btnConfig: {
      color: 'red',
    },
    addBtnCallbckfnc: function () {
      console.log('clicked add btn config function');
    },
  },
  addedKeywordsConfig: {
    label: 'Added Keywords',
    noKeywordsLabel: "Please add keywords or select from recommendations",
    addAutoLink: true,
    clearAllLink: true,
    showCount: true,
    handlerConfig: {
      removeLinkConfig: {
        callbackFn: function () {
          console.log('click remove btn');
        },
        removeIcon: <RemoveCircleOutlineOutlined />,
      },
      starLinkConfig: {
        starKeywordIcon: <StarKeywordIcon/>,
        nonStarKeywordIcon: <NonStarKeywordIcon/>,
        keyForStar: 'relevance',
        valueForStar: 100,
        maxStarLimit: 1,
        callbackFn: function () {
          console.log('click star link');
        }
      },
      addAutoConfig: {
        callbackFn: function () {
          console.log('click star link');
        }
      },
      clearAllConfig: {
        callbackFn: function () {
          console.log('click star link');
        }
      }
    },
    addedKeywordsList: [
      {
        keywordName: 'Aisha Verma',
        keyEnum: 'Denny',
        source: 'Denny',
        relevance: 50,
      },
      {
        keywordName: 'Guru Divekar',
        keyEnum: 'Denny',
        source: 'Denny',
        relevance: 20,
      },
      {
        keywordName: 'young woman',
        keyEnum: 'Denny',
        source: 'Denny',
        relevance: 100,
      },
      {
        keywordName: 'defenestration',
        keyEnum: 'Denny',
        source: 'Denny',
        relevance: 100,
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
    recommendedConfig: {
      title: 'Recommendations',
      nodatafound: 'No recommendation found',
      noKeywordsLabel: "Less content available to recommend keywords.",
      errorMsg: 'API Error',
      cardHeader: "Keywords",
      refreshIcon: <CachedOutlined fontSize="inherit" />,
      addKeywordIcon: <AddCircleOutlineIcon />,
      refreshCallbackFn: function () {
        console.log('clicked refresh btn');
      },
      addCallbackFn: function (elm: recommendedKeywords) {
        console.log('clicked refresh btn');
      },
    },
    recommendedKeywords: [
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
      }
    ] as recommendedKeywords[],
  },
  aiImageTagsConfig: {
    label: "AI Image Tags",
    nodatafound: 'Spot people or celebrities in your image?',
    clickForAItagsLabel: 'Click here for AI tags!',
    showAiImageTag: false,
    cardHeader: 'Tags',
    addKeywordIcon: <AddCircleOutlineIcon />,
    aiTagCallbackFn: function(){console.log("clicked ai tag fnc")},
    addCallbackFn: function (elm: recommendedKeywords) {
      console.log('clicked refresh btn');
    },
    aiTagsList: [
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
        keywordName: 'Guru Divekar',
        keyEnum: 'Denny',
        source: 'Denny',
        relevance: 100,
      }
    ]
  }
};
