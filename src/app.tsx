/**
 * @author: sandeep.gupta1@timesinternet.in
 * @desc: Denmark UI components: app
 */

import React, { useState } from 'react';
import TestCommon from './testcommon';
import BasicMenu from './testmenu';
import DenLink from './components/common/link/link.component';
import DenBreadcrumbs from './components/common/breadcrumbs/breadcrumbs.component';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import TwitterIcon from '@mui/icons-material/Twitter';
import {
  DenTypography,
  ImagePreview,
  Title,
  TitleForUrl,
  ImageAuthoring,
} from './components';
import { TrendingSearchCard } from './components/composite/trendingsearchcard';
import { sample } from './components/complex/imagepreview/sample';
import { Cancel } from './assets';
import ImageAuthModel from './components/complex/imageauth/imageauthmodel';
import _ from 'lodash';
import { config } from './components/complex/keywords/keywords.sample';
import { keywordsWrapperConfig, recommendedKeywords } from './components/complex/keywords/keywords.types';

declare const module: {
  hot: {
    accept: any;
  };
};

interface AppProps {
  reqObj: object;
  callbackNgFn: () => void;
}

const breadcrumbs = [
  <DenLink underline="hover" key="1" color="inherit" href="/">
    MUI
  </DenLink>,
  <DenLink underline="hover" key="2" color="inherit" href="/">
    Core
  </DenLink>,
  <DenTypography key="3" color="text.primary" variant="inherit">
    Breadcrumb
  </DenTypography>,
];
const test = {
  primeCategoryLabel: '',
  handlePrimeChange: () => {},
  isPublished: false,
  primeType: 0,
  isPrimeEnable: true,
  primeCategoris: [
    {
      categoryId: 100,
      category: 'Prime Category 1',
    },
  ],
  /*
   *Seperated publish date
   */
  publishDate: {
    PublishModalTitle: 'Publish and expiry Date',
    onAutoCorrect: () => {},
    onReset: () => {},
    onClose: () => {},
    onDone: () => {},
    preventCloseOnDone: false,
    overrideClose: '',
    callback: () => {},
    publishDateLabel: 'Publish Date',
    publishDate: 1693819795753,
    expiresIn: 1693824566621,
  },

  activationStatusOptions: [
    { title: 'Active', value: '0', icon: <Cancel /> },
    { title: 'InActive', value: '1', icon: <Cancel /> },
    { title: 'Unavaialble', value: '2', icon: <Cancel /> },
    { title: 'block', value: '3', icon: <Cancel /> },
  ],
  activationChangeHandle: () => {},
  activationStatus: '0',
  imageCaption: {
    caption: 'caption of image',
    captionError: '',
    captionChildError: '',
    captionChildWarning: '',
    onChange: (str: string) => {},
    captionTitle: 'Title of caption',
    captionRequired: false,
    onClick: (event: any) => {},
    countRequired: false,
  },
  titleForUrl: {
    seoTitleProps: {
      label: 'Title for URL',
      value: 'seo title',
      onChange: () => console.log(''),
      fullWidth: true,
    },
    overrideLinkProps: {
      label: 'Ovveride Link',
      value: 'test Ovveride link',
      onChange: () => console.log(''),
      fullWidth: true,
    },
  },
  title: {
    label: 'Image Title',
    value: 'Title value',
    onChange: () => console.log(''),
  },
  tabTitleList: ['Primary Data', 'Keywords', 'Meta Data'],
  src: 'https://picsum.photos/1600/800',
  metaInformation: [
    { label: 'Original Resolutions', value: '120x120 px' },
    { label: 'Original File Size', value: '31KB' },
    { label: 'Type', value: 'jpeg' },
    { label: 'Original Resolutions', value: '120x120 px' },
    { label: 'Original Resolutions', value: '120x120 px' },
  ],
  msid: '123456',
  keywordConfig:config
};

const App = (props: AppProps) => {
  // <AppRoutes reqObj={props.reqObj} callbackNgFn={props.callbackNgFn} />
  const [addKeywordState, setAddKeywords] = useState(config.addKeywordsConfig.addedKeywords);
  const [recommndKeywordsState, setRecommndKeywordsState] = useState<recommendedKeywords[]>(config.recommendConfig.recommendedKeywords)
  const [searchKeywordVal, setSearchKeywordVal] = useState("");

  const removeCallbackFn = (index: number, val:number) => {
    const tmplist = addKeywordState.slice();
    let toberemoved = tmplist[index];
    let tobeadded: recommendedKeywords = {
      keywordName: toberemoved.keywordName,
      keyEnum: toberemoved.keyEnum,
      source: toberemoved.source,
      relevance: val,
    }
    // setLasRemoved(toberemoved)
    tmplist.splice(index, 1);
    setAddKeywords(tmplist);
    setRecommndKeywordsState([...recommndKeywordsState, tobeadded])
  }

  const handleAddbtn = () => {
    const list = searchKeywordVal.split(',');
    const tmplist = addKeywordState.slice();
    list.forEach((element) => {
      if (element.trim() != '') {
        const i = _.findIndex(tmplist, { keywordName: element.trim() });
        if (i == -1) {
          tmplist.push({
            keyEnum: 'General',
            keywordName: element.trim(),
            relevance: 20,
            source: 'Orion',
          });
        }
        // else if(tmplist[i] && tmplist[i].botKeyword) {
        //     tmplist.push({
        //         "keyEnum": "General",
        //         "keywordName": element.trim(),
        //         "relevance": 20,
        //         "source": "Orion"
        //     })
        // }
      }
    });
    setAddKeywords(tmplist);
  };

  const handleSearchCallbckfnc = (text: string) => {
    setSearchKeywordVal(text);
  }

  const addCallbackFn = (elm: recommendedKeywords) => {
    const tmplist = addKeywordState.slice();
    const recommndList = recommndKeywordsState.slice();
    const index = _.findIndex(recommndList, { keywordName: elm.keywordName });
    const i = _.findIndex(tmplist, { keywordName: elm.keywordName });
    if (i == -1) {
      tmplist.push({
        keyEnum: elm.keyEnum,
        keywordName: elm.keywordName,
        relevance: elm.relevance,
        source: elm.source,
      });
    }
    recommndList.splice(index, 1);
    setAddKeywords(tmplist);
    setRecommndKeywordsState(recommndList);
  }

  const searchKeywordConfig = { ...config.searchKeywordConfig, searchCallbckfnc: handleSearchCallbckfnc }
  const addBtnConfig = { ...config.addBtnConfig, addBtnCallbckfnc: handleAddbtn }
  const addKeywordsConfig = { ...config.addKeywordsConfig, addedKeywordsConfig: { ...config.addKeywordsConfig.addedKeywordsConfig, removeCallbackFn: removeCallbackFn }, addedKeywords: addKeywordState }
  const recommendConfig = { ...config.recommendConfig, recommendedConfig: { ...config.recommendConfig.recommendedConfig, addCallbackFn: addCallbackFn }, recommendedKeywords: recommndKeywordsState }

  const kewordConfig:keywordsWrapperConfig = {searchKeywordConfig, addBtnConfig, addKeywordsConfig, recommendConfig}
  const testConfig = {...test, keywordConfig:kewordConfig}

  return (
  <>
    <ImageAuthModel {...testConfig} />
    {/* <TestCommon /> */}
  </>
  )
};
if (module?.hot) {
  module.hot.accept(App);
}

App.defaultProps = {
  reqObj: {},
  callbackNgFn: () => {},
};

export default App;
