/**
 * @author: sandeep.gupta1@timesinternet.in
 * @desc: Denmark UI components: app
 */

import React, { useState } from 'react';
import DenLink from './components/common/link/link.component';
import { DenTypography } from './components';
import _ from 'lodash';
import { config } from './components/complex/keywords/keywords.sample';
import {
  addedKeywords,
  keywordsWrapperConfig,
  recommendedKeywords,
  suggestedData,
} from './components/complex/keywords/keywords.types';
import { richStoryCardSample } from './components/composite/richstorycard/sample';
import { ImageAuthModel } from './components/complex/imageauth';
import { MediaAuthModel } from './components/complex/mediaauthoring';
import '../src/styles/storybookBasesStyles.scss';
import { IMAGE_AUTH_TABS } from './components/complex/imageauth/imageauth.constants';
import CropOutlinedIcon from '@mui/icons-material/CropOutlined';
import { AutocompleteInputProps } from './components/common/autocompleteinput/autocompleteinput.types';
import { ButtonProps } from '@mui/material/Button';
import { DenThemeProvider } from './styles';
import { ImageAuthoringTheme } from './styles/themes/denmarktheme';

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

export const test = {
  primeCategoryLabel: 'Prime Category',
  handlePrimeChange: () => { },
  isPublished: false,
  primeType: 0,
  isPrimeEnable: true,
  primeCategories: [
    {
      categoryId: 100,
      category: 'Prime Category 1',
    },
  ],
  actionButtonsList: [
    {
      label: 'Secondary',
      onClick: () => { },
      variant: 'outlined' as ButtonProps['variant'],
      color: 'secondary' as ButtonProps['color'],
    },
    {
      label: 'Primary',
      onClick: () => { },
      variant: 'contained' as ButtonProps['variant'],
      color: 'primary' as ButtonProps['color'],
    },
  ],
  showAgencyMessage: true,
  agencyMessage: 'Test Agency Message',
  showBylineMessage: true,
  bylineMessage: 'Test Byline Message',
  /*
   *Seperated publish date
   */
  publishDate: {
    PublishModalTitle: 'Publish and Expiry Date',
    onAutoCorrect: () => { },
    onReset: () => { },
    onClose: () => { },
    onDone: () => { },
    preventCloseOnDone: false,
    overrideClose: '',
    callback: () => { },
    publishDateLabel: 'Publish Date',
    publishDate: 1693819795753,
    expiresIn: 1693824566621,
    artInsDate: 1693824566621,
    artUpdDate: 1693824566621,
  },

  activationStatusOptions: [
    { title: 'INACTIVE', value: 'INACTIVE' },
    { title: 'PENDING', value: 'PENDING_FOR_APPROVAL' },
    { title: 'ACTIVE', value: 'ACTIVE' },
    { title: 'CLOSED', value: 'CLOSED' },
    { title: 'IGNORE', value: 'IGNORE' },
  ],
  activationChangeHandle: () => { },
  activationStatus: '0',
  showActivationStatusEditIcon: true,
  onActivationStatusEditIconClick: () => {
    console.log('Activation status edit button click');
  },
  activationStatusEditIconTitle: 'Status History',
  imageCaption: {
    title: 'Image Caption',
    error: '',
    childError: '',
    childWarning: '',
    onChange: (str: string) => { },
    width: '100%',
    height: '200px',
    value: '<div>Caption value</div>',
  },
  titleForUrl: {
    seoTitleProps: {
      label: 'Title for URL',
      value: 'seo title',
      onChange: () => console.log(''),
      fullWidth: true,
    },
    overrideLinkProps: {
      label: 'Override Link',
      value: 'test Override link',
      onChange: () => console.log(''),
      fullWidth: true,
    },
  },
  title: {
    title: 'Image Title',
    error: 'test error',
    childError: '',
    childWarning: '',
    onChange: (str: string) => { },
    required: true,
    width: '100%',
    value: 'Title value',
  },
  justificationProps: {
    label: 'Justification',
    value: 'justification',
    onChange: () => console.log(''),
    errorText: 'Test Justification Error',
  },
  captionBylineProps: {
    title: 'Add Caption Byline',
    options: [] as string[],
  },
  photographerBylineProps: {
    title: 'Add Photographer Byline',
    options: [] as string[],
  },
  imageAgencyProps: {
    title: 'Add Image Agency',
    options: [] as string[],
    isError: true,
    errorMessage: 'Test Error Message',
  },
  captionAgencyProps: {
    title: 'Add Caption Agency',
    options: [] as string[],
    childError: {
      show: true,
      message: 'Test Child Error',
      level: 'WARNING' as AutocompleteInputProps['childError']['level'],
    },
  },
  tabTitleList: IMAGE_AUTH_TABS,
  src: 'https://picsum.photos/1600/800',
  metaInformation: [
    { label: 'Original Resolutions', value: '120x120 px' },
    { label: 'Original File Size', value: '31KB' },
    { label: 'Type', value: 'jpeg' },
    { label: 'Original Resolutions', value: '120x120 px' },
    { label: 'Original Resolutions', value: '120x120 px' },
    { component: <p>This is a test</p> },
  ],
  msid: '123456',
  parentMsid: '987656',
  keywordConfig: config,
  imageCTAs: [
    { Icon: CropOutlinedIcon, label: 'Crop Image', value: 'crop' },
    {
      Icon: CropOutlinedIcon,
      label: 'Download',
      value: [
        { label: 'Webp', value: 'webp' },
        { label: 'Jpeg', value: 'jpeg' },
      ],
    },
    {
      Icon: CropOutlinedIcon,
      label: 'Replace',
      value: [
        { label: 'Upload now', value: 'upload' },
        { label: 'Search', value: 'search' },
      ],
    },
    {
      Icon: CropOutlinedIcon,
      label: 'Set as thumbnail',
      value: 'setThumbnail',
    },
  ],
  handleItemClick: (val: any) => {
    console.log(val);
  },
  metaClassName: 'cds-column-6',
  enableReportButton: false,
  reportButtonProps: {
    onConfirm: (value: string) => {
      console.log(value);
    },
    onCancel: () => {
      console.log('Cancel');
    },
    title: "Report this image to ensure it is permanently removed from future search results.",
    dropdownLabel: 'Please specify the reason for your report',
    dropdownOptions: [{ id: 1, label: 'Irrelevant Image', value: 'Irrelevant Image' }, { id: 2, label: 'Incorrect Image', value: 'Incorrect Image' }],
    dropdownDefaultOption: 'Select',
  },
};

export const testMedia = {
  primeCategoryLabel: 'Prime Category',
  handlePrimeChange: () => { },
  isPublished: false,
  primeType: 0,
  isPrimeEnable: true,
  primeCategories: [
    {
      categoryId: 100,
      category: 'Prime Category 1',
    },
  ],
  actionButtonsList: [
    {
      label: 'Secondary',
      onClick: () => { },
      variant: 'outlined' as ButtonProps['variant'],
      color: 'secondary' as ButtonProps['color'],
    },
    {
      label: 'Primary',
      onClick: () => { },
      variant: 'contained' as ButtonProps['variant'],
      color: 'primary' as ButtonProps['color'],
    },
  ],
  showAgencyMessage: true,
  agencyMessage: 'Test Agency Message',
  showBylineMessage: true,
  bylineMessage: 'Test Byline Message',
  /*
   *Seperated publish date
   */
  publishDate: {
    PublishModalTitle: 'Publish and Expiry Date',
    onAutoCorrect: () => { },
    onReset: () => { },
    onClose: () => { },
    onDone: () => { },
    preventCloseOnDone: false,
    overrideClose: '',
    callback: () => { },
    publishDateLabel: 'Publish Date',
    publishDate: 1693819795753,
    expiresIn: 1693824566621,
    artInsDate: 1693824566621,
    artUpdDate: 1693824566621,
  },

  activationStatusOptions: [
    { title: 'INACTIVE', value: 'INACTIVE' },
    { title: 'PENDING', value: 'PENDING_FOR_APPROVAL' },
    { title: 'ACTIVE', value: 'ACTIVE' },
    { title: 'CLOSED', value: 'CLOSED' },
    { title: 'IGNORE', value: 'IGNORE' },
  ],
  activationChangeHandle: () => { },
  activationStatus: '0',
  showActivationStatusEditIcon: true,
  onActivationStatusEditIconClick: () => {
    console.log('Activation status edit button click');
  },
  activationStatusEditIconTitle: 'Status History',
  mediaCaption: {
    title: 'Media Caption',
    error: '',
    childError: '',
    childWarning: '',
    onChange: (str: string) => { },
    width: '100%',
    height: '200px',
    value: '<div>Caption value</div>',
  },
  mediaSummary: {
    title: 'Media Summary',
    error: '',
    childError: '',
    childWarning: '',
    onChange: (str: string) => { },
    width: '100%',
    height: '200px',
    value: '<div>Summary value</div>',
  },
  titleForUrl: {
    seoTitleProps: {
      label: 'Title for URL',
      value: 'seo title',
      onChange: () => console.log(''),
      fullWidth: true,
    },
    overrideLinkProps: {
      label: 'Override Link',
      value: 'test Override link',
      onChange: () => console.log(''),
      fullWidth: true,
    },
  },
  title: {
    title: 'Media Title',
    error: 'test error',
    childError: '',
    childWarning: '',
    onChange: (str: string) => { },
    required: true,
    width: '100%',
    value: 'Title value',
  },
  tabTitleList: IMAGE_AUTH_TABS,
  src: 'https://picsum.photos/1600/800',
  metaInformation: [
    { label: 'Original Resolutions', value: '120x120 px' },
    { label: 'Original File Size', value: '31KB' },
    { label: 'Type', value: 'jpeg' },
    { label: 'Original Resolutions', value: '120x120 px' },
    { label: 'Original Resolutions', value: '120x120 px' },
    { component: <p>This is a test</p> },
  ],
  msid: '123456',
  parentMsid: '987656',
  slikeId: '123456789',
  keywordConfig: config,
  imageCTAs: [
    { Icon: CropOutlinedIcon, label: 'Crop Image', value: 'crop' },
    {
      Icon: CropOutlinedIcon,
      label: 'Download',
      value: [
        { label: 'Webp', value: 'webp' },
        { label: 'Jpeg', value: 'jpeg' },
      ],
    },
    {
      Icon: CropOutlinedIcon,
      label: 'Replace',
      value: [
        { label: 'Upload now', value: 'upload' },
        { label: 'Search', value: 'search' },
      ],
    },
    {
      Icon: CropOutlinedIcon,
      label: 'Set as thumbnail',
      value: 'setThumbnail',
    },
  ],
  handleItemClick: (val: any) => {
    console.log(val);
  },
  metaClassName: 'cds-column-6',
  enableReportButton: false,
  reportButtonProps: {
    onConfirm: (value: string) => {
      console.log(value);
    },
    onCancel: () => {
      console.log('Cancel');
    },
    title: "Report this image to ensure it is permanently removed from future search results.",
    dropdownLabel: 'Please specify the reason for your report',
    dropdownOptions: [{ id: 1, label: 'Irrelevant Image', value: 'Irrelevant Image' }, { id: 2, label: 'Incorrect Image', value: 'Incorrect Image' }],
    dropdownDefaultOption: 'Select',
  },
};

const App = (props: AppProps) => {
  const [selectedTab, setSelectedTab] = useState(test.tabTitleList[0]?.name);
  // <AppRoutes reqObj={props.reqObj} callbackNgFn={props.callbackNgFn} />
  const [addKeywordState, setAddKeywords] = useState(
    config.addedKeywordsConfig.addedKeywordsList
  );
  const [suggestedKeywordsDataState, setsuggestedKeywordsDataState] = useState(
    config.searchKeywordConfig.suggestedKeywordsData
  );
  const [recommndKeywordsState, setRecommndKeywordsState] = useState<
    recommendedKeywords[]
  >(config.recommendConfig.recommendedKeywords);
  const [aiImageTagsList, setAiImageTagsList] = useState<recommendedKeywords[]>(
    config.aiImageTagsConfig.aiTagsList
  );
  const [searchKeywordVal, setSearchKeywordVal] = useState('');
  const [loading, setLoading] = useState(false);

  const removeCallbackFn = (index: number, val: number) => {
    const tmplist = addKeywordState.slice();
    let toberemoved = tmplist[index];
    let tobeadded: recommendedKeywords = {
      keywordName: toberemoved.keywordName,
      keyEnum: toberemoved.keyEnum,
      source: toberemoved.source,
      relevance: val,
    };
    // setLasRemoved(toberemoved)
    tmplist.splice(index, 1);
    setAddKeywords(tmplist);
    setRecommndKeywordsState([...recommndKeywordsState, tobeadded]);
  };

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
      }
    });
    setAddKeywords(tmplist);
  };

  const handleSearchCallbckfnc = (text: string) => {
    setSearchKeywordVal(text);
  };

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
  };

  const addCallbackFnForAIImg = (elm: recommendedKeywords) => {
    const tmplist = addKeywordState.slice();
    const recommndList = aiImageTagsList.slice();
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
    setAiImageTagsList(recommndList);
  };

  const handleOnSuggestedKeywordClickFnc = (item: suggestedData) => {
    let keywords = [...addKeywordState];
    const i = _.findIndex(keywords, { keywordName: item['keywordName'] });
    //var hostId = Utils.getHostIdAnyHow(dependedModel)
    //var growthRxObj = Utils.makeGrowthRxObj(hostId, storeData.msId, item.relevance, item.keywordName, item.source);
    if (i == -1) {
      //Utils.trackEvents(storeData.entityType,"KEYWORD-SUGGESTION","click",growthRxObj);
      let newItem: addedKeywords = {
        keyEnum: item.keyEnum,
        keywordName: item.keywordName,
        relevance: item.relevance ? Number(item.relevance) : NaN,
        source: item.source,
      };
      // if(item.metaInfo){
      //   item.metaInfo= JSON.stringify(item.metaInfo);
      // }
      // if(item.relevance){
      //   newItem.relevance= Number(item.relevance)
      // }
      // item.relevance = 20;
      keywords.push(newItem);
      setAddKeywords(keywords);
    } else {
      console.log('duplicate entry not allowed');
    }
  };

  const searchKeywordConfig = {
    ...config.searchKeywordConfig,
    searchCallbckfnc: handleSearchCallbckfnc,
    suggestedKeywordsData: suggestedKeywordsDataState,
    isSuggestedKeywordSkeleton: loading,
    onSelectKeywordClick: handleOnSuggestedKeywordClickFnc,
  };
  const addBtnConfig = {
    ...config.addBtnConfig,
    addBtnCallbckfnc: handleAddbtn,
  };
  // const addKeywordsConfig = {
  //   ...config.addKeywordsConfig,
  //   addedKeywordsConfig: {
  //     ...config.addKeywordsConfig.addedKeywordsConfig,
  //     removeCallbackFn: removeCallbackFn,
  //   },
  //   addedKeywords: addKeywordState,
  // };

  const addedKeywordsConfig = {
    ...config.addedKeywordsConfig,
    handlerConfig: {
      ...config.addedKeywordsConfig.handlerConfig,
      removeLinkConfig: {
        ...config.addedKeywordsConfig.handlerConfig.removeLinkConfig,
        callbackFn: removeCallbackFn,
      },
    },
    addedKeywordsList: addKeywordState,
  };
  const recommendConfig = {
    ...config.recommendConfig,
    recommendedConfig: {
      ...config.recommendConfig.recommendedConfig,
      addCallbackFn: addCallbackFn,
    },
    recommendedKeywords: recommndKeywordsState,
  };

  const aiImageTagsConfig = {
    ...config.aiImageTagsConfig,
    aiTagsList: aiImageTagsList,
    addCallbackFn: addCallbackFnForAIImg,
  };

  const kewordConfig: keywordsWrapperConfig = {
    searchKeywordConfig,
    addBtnConfig,
    addedKeywordsConfig,
    recommendConfig,
    aiImageTagsConfig,
  };

  const [title, setTitle] = useState('My test title');
  test.title.value = title;
  test.title.onChange = (str) => setTitle(str);
  const [imageCaption, setImageCaption] = useState(
    '<p>test test</p><p><br /></p><p>test test</p><p><br /></p><p>test test</p>'
  );
  test.imageCaption = {
    ...test.imageCaption,
    value: imageCaption,
    onChange: (str: string) => {
      console.log(str);
      setImageCaption(str);
    },
  };

  const [footerCheckBoxList, setFooterCheckBoxList] = useState([
    {
      label: 'Set as Thumbnail',
      id: 'setasthumb',
      checked: false,
    },
    {
      label: 'Embed in body',
      id: 'embedinbody',
      checked: false,
    },
    {
      label: 'Add as Related',
      id: 'addasrelated',
      checked: false,
    },
  ]);

  React.useEffect(() => {
    console.log(footerCheckBoxList);

    // return () => {
    //   second
    // }
  }, [footerCheckBoxList]);

  const testConfig = {
    ...test,
    keywordConfig: kewordConfig,
    footerCheckBoxList: footerCheckBoxList,
    onFooterCheckBoxChange: ({
      checked,
      index,
    }: {
      checked: boolean;
      index: number | string;
    }) => {
      setFooterCheckBoxList((list) => {
        const newList = [...list];
        newList[index as number].checked = checked;
        return newList;
      });
    },
  };

  const testMediaConfig = {
    ...testMedia,
    keywordConfig: kewordConfig,
    footerCheckBoxList: footerCheckBoxList,
    onFooterCheckBoxChange: ({
      checked,
      index,
    }: {
      checked: boolean;
      index: number | string;
    }) => {
      setFooterCheckBoxList((list) => {
        const newList = [...list];
        newList[index as number].checked = checked;
        return newList;
      });
    },
  }

  return (
    <DenThemeProvider theme={ImageAuthoringTheme}>
      <MediaAuthModel
        {...testMediaConfig}
        selectedTab={selectedTab}
        handleTabChange={setSelectedTab}
        mediaUploaderLoaderProps={{
          showProgress: true,
          progressText: "Uploading",
          progressValue: 40,
          onClose: () => {
            console.log('Close test');
          },
          onUpload: () => {
            console.log('Upload');
          },
        }}
      />
      {/* <TestCommon /> */}
      {/* <RichStoryCard {...richStoryCardSample} /> */}
      {/* <ImageSearchCardWrapper imagesearchcardwrapper={imageSearchCardWrapperSample} /> */}
    </DenThemeProvider>
  );
};
if (module?.hot) {
  module.hot.accept(App);
}

App.defaultProps = {
  reqObj: {},
  callbackNgFn: () => { },
};

export default App;
