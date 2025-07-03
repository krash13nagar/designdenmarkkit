import React from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineOutlined from '@mui/icons-material/RemoveCircleOutlineOutlined';
import CachedOutlined from '@mui/icons-material/CachedOutlined';
import { KeywordItem } from './betakeywords.types';

export const NonStarKeywordIcon = () => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15.279" viewBox="0 0 16 15.279">
        <path id="Path_39110" data-name="Path 39110" d="M21.661,13.541l-5.143-.672L14.3,8.179a.364.364,0,0,0-.654,0l-2.217,4.689-5.143.672a.357.357,0,0,0-.2.618l3.762,3.562L8.9,22.828a.361.361,0,0,0,.527.382l4.544-2.472,4.544,2.472a.361.361,0,0,0,.527-.382L18.1,17.721l3.762-3.562A.362.362,0,0,0,21.661,13.541Zm-4.217,3.8a.366.366,0,0,0-.109.327l.854,4.544-4.035-2.217a.3.3,0,0,0-.182-.036.646.646,0,0,0-.182.036L9.757,22.21l.854-4.544a.366.366,0,0,0-.109-.327L7.14,14.159l4.58-.6a.379.379,0,0,0,.291-.2l1.963-4.18,1.981,4.162a.381.381,0,0,0,.273.2l4.58.618Z" transform="translate(-5.971 -7.975)" fill="#818181" />
      </svg>
    </>
  );
}

export const StarIcon = (props: { width?: number, height?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 13}
    height={props.height || 13.13}
    viewBox="0 0 10.675 10.025"
  >
    <path
      id="kid_star_24dp_818181_FILL0_wght300_GRAD0_opsz24"
      d="M104.114-856.4l-3.056,1.018a.2.2,0,0,0-.132.132.183.183,0,0,0,.029.183l1.969,2.779-.073,2.986a.192.192,0,0,0,.077.174.194.194,0,0,0,.186.032l3.137-.881,3.137.9a.2.2,0,0,0,.187-.032.192.192,0,0,0,.077-.173l-.073-3,1.969-2.746a.183.183,0,0,0,.029-.183.2.2,0,0,0-.132-.132l-3.056-1.052-1.977-2.609a.185.185,0,0,0-.161-.084.185.185,0,0,0-.161.084ZM106.251-854.076Z"
      transform="translate(-100.914 859.09)"
      fill="#ffce53"
    />
  </svg>
);

export const StarHoverIcon = (props: { width?: number, height?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={13}
    height={13.13}
    viewBox="0 0 10.675 10.025"
    {...props}
  >
    <path
      id="kid_star_24dp_818181_FILL0_wght300_GRAD0_opsz24"
      d="M104.114-856.4l-3.056,1.018a.2.2,0,0,0-.132.132.183.183,0,0,0,.029.183l1.969,2.779-.073,2.986a.192.192,0,0,0,.077.174.194.194,0,0,0,.186.032l3.137-.881,3.137.9a.2.2,0,0,0,.187-.032.192.192,0,0,0,.077-.173l-.073-3,1.969-2.746a.183.183,0,0,0,.029-.183.2.2,0,0,0-.132-.132l-3.056-1.052-1.977-2.609a.185.185,0,0,0-.161-.084.185.185,0,0,0-.161.084ZM106.251-854.076Z"
      transform="translate(-100.914 859.09)"
      fill="#ffce53"
      stroke="#B3B3B3"
      strokeWidth="1"
    />
  </svg>
);

export const CrossIcon = (props: { width?: number, height?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width ? props.width : 15}
    height={props.height ? props.height : 15}
    viewBox="0 0 16 16"
  >
    <g
      id="Group_164169"
      data-name="Group 164169"
      transform="translate(24551 4892)"
    >
      <path
        id="Path_39244"
        data-name="Path 39244"
        d="M8,0A8,8,0,1,1,0,8,8,8,0,0,1,8,0Z"
        transform="translate(-24551 -4892)"
        fill="#fff"
      />
      <g
        id="Group_1648"
        data-name="Group 1648"
        transform="translate(-24547 -4888.023)"
      >
        <path
          id="Path_846"
          data-name="Path 846"
          d="M9.2,17.26l8-8.063"
          transform="translate(-9.197 -9.197)"
          fill="none"
          stroke="#4d4d4d"
          strokeLinecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          strokeWidth="1.2"
        />
        <path
          id="Path_847"
          data-name="Path 847"
          d="M9.2,9.2l8,8.063"
          transform="translate(-9.197 -9.197)"
          fill="none"
          stroke="#4d4d4d"
          strokeLinecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          strokeWidth="1.2"
        />
      </g>
    </g>
  </svg>
);

export const StarKeywordIcon = () => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15.279" viewBox="0 0 16 15.279">
        <path id="Path_39109" data-name="Path 39109" d="M21.661,13.541l-5.143-.672L14.3,8.179a.364.364,0,0,0-.654,0l-2.217,4.689-5.143.672a.357.357,0,0,0-.2.618l3.762,3.562L8.9,22.828a.361.361,0,0,0,.527.382l4.544-2.472,4.544,2.472a.361.361,0,0,0,.527-.382L18.1,17.721l3.762-3.562A.362.362,0,0,0,21.661,13.541Z" transform="translate(-5.971 -7.975)" fill="#f8b84e" />
      </svg>
    </>
  );
}

export const betaKeywordsConfig = {
  searchKeywordConfig: {
    bautocomplete: "off",
    placeholder: 'Type Keywords separated by comma(,)',
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
    },
    onEnterKeyPress: function(e:any){
      console.log('pressed enter key',e);
    }
  },
  addBtnConfig: {
    addBtnLabel: 'Add',
    btnConfig: {
      color: 'red',
    },
    addBtnCallbckfnc: function () {
      console.log('clicked add btn config function');
    },
  },
  addedKeywordsConfig: {
    label: 'Added Keywords',
    noKeywordsLabel: "Please add relevant keywords or choose from recommendations (min 5, max 10 keywords).",
    isAutoAddKeywordLoading: true,
    isAutoAddEnable: true,
    autoAddLabel: 'Auto Add',
    clearAllLabel: 'Clear All',
    showArticlePreview: false,
    crossIcon: <CrossIcon />,
    starIcon: <StarIcon />,
    starHoverIcon: <StarHoverIcon />,
    apiError: false,
    handleAutoAddBtn: function () {
      console.log('handle auto add btn');
    },
    handleClearAll: function () {
      console.log('handle clear all');
    },
    keywords: [
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
      suggestKeywordsBtnLabel: 'Suggest Keywords',
      isDataLoading: false,
      story: 'Recommendations story',
      apiError: false,
      retryIcon: <CachedOutlined fontSize="inherit" />,
      apiErrorMsg: 'Unable to fetch keywords, Please try again.',
      keywordValidationMsg: 'The body should be longer than 100 words for keyword recommendation.',
      addSuggestedChipFn: function (elm: KeywordItem) {
        console.log('clicked refresh btn');
      },
      callFetchKeywordFnc: function () {
        console.log('clicked refresh btn');
      },
      handleRetry: function () {
        console.log('clicked refresh btn');
      },
    },
    suggestedChips: [
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
        keywordName: 'young woman union budget of india young woman union budget of india young woman union budget of india',
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
    ]
  },
  metaKeywordsConfig: {
    metaDescriptionPlaceholder: 'Enter Meta Description',
    metaDescriptionLabel: 'Meta Description Label',
    metaKeywordsLabel: 'Meta Keywords Label',
    metaTitleLabel: 'Meta Title Label',
    metaKeywordsPlaceholder: 'Enter Meta Keywords',
    metaTitlePlaceholder: 'Enter Meta Title',
    metaDescriptionValue: 'Meta Description Value',
    metaKeywordsValue: 'Meta Keywords Value',
    metaTitleValue: 'Meta Title Value',
    isMetaDataLoading: false,
    isAutoAddMetaBtnEnable: true,
    isClearAllMetaBtnEnable: true,
    autoAddMetaLabel: 'Auto Add Metas',
    clearAllMetaLabel: 'Clear All',
    handleAutoAddMetasFnc: ()=>{
      console.log('handle auto add metas');
    },
    handleClearAllMetaFnc: ()=>{
      console.log('handle clear all meta');
    },
    handleMetaDescriptionFnc: (e:React.ChangeEvent<HTMLInputElement>)=>{
      console.log('handle meta description',e);
    },
    handleMetaKeywordsFnc: (e:React.ChangeEvent<HTMLInputElement>)=>{
      console.log('handle meta keyword',e);
    },
    handleMetaTitleFnc: (e:React.ChangeEvent<HTMLInputElement>)=>{
      console.log('handle meta title',e);
    }
  }
};
