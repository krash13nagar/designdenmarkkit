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
import { config } from './components/complex/keywords/keywords.sample';
import { keywordsWrapperConfig, recommendedKeywords } from './components/complex/keywords/keywords.types';
import _ from 'lodash';

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

const App = (props: AppProps) => {
  // <AppRoutes reqObj={props.reqObj} callbackNgFn={props.callbackNgFn} />
  const [addKeywordState, setAddKeywords] = useState(config.addKeywordsConfig.addedKeywords);
  const [recommndKeywordsState, setRecommndKeywordsState] = useState<recommendedKeywords[]>(config.recommendConfig.recommendedKeywords)
  const [searchKeywordVal, setSearchKeywordVal] = useState("");

  const removeCallbackFn = (index: number) => {
    const tmplist = addKeywordState.slice();
    let toberemoved = tmplist[index];
    let tobeadded: recommendedKeywords = {
      keywordName: toberemoved.keywordName,
      keyEnum: toberemoved.keyEnum,
      source: toberemoved.source,
      relevance: toberemoved.relevance,
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

  return (
  <>
    {/* Test App */}
    {/* <TestCommon />
    <BasicMenu />
    <DenLink underline="none">MUI</DenLink>
    <DenBreadcrumbs
      aria-label="breadcrumb"
      separator={<NavigateNextIcon fontSize="small" />}
    >
      {breadcrumbs}
    </DenBreadcrumbs>
    <TrendingSearchCard
      label="World Cup Schedule"
      count={'100k+'}
      icon={<TwitterIcon style={{ color: '#5da8dc' }} />}
    /> */}
    {/* <ImagePreview {...sample} /> */}
    {/* <Title
      label="Image Title"
      fullWidth
      value="jdkash akjdh kajshd kjahs dkjahs dkjha dskj"
    />
    <TitleForUrl
      seoTitleProps={{
        label: 'Seo Title',
        value:
          'test seo title dsajh dsakjhd kjsah dkjsah dkjsah dkjhsadkjh sakjdh kjsahd kjsahdkjsah kdjh askjdh kasjdh kjsah dkjsahdkjjksah dkjh sakjdh kjsah dk dkasjh dasjhdkjash dkjash dkjash djkashjkdh askjhd kjasd hkjash dkjash kjadsh kjdash kjdsah kjdsah kjasdh kjsadh kjdh skjh dsakj',
        onChange: () => console.log(''),
        fullWidth: true,
      }}
      overrideLinkProps={{
        label: 'Ovveride Link',
        value: 'test Ovveride link',
        onChange: () => console.log(''),
        fullWidth: true,
      }}
    /> */}
    <ImageAuthoring keywordconfig={kewordConfig}/>
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
