/**
 * @author: sandeep.gupta1@timesinternet.in
 * @desc: Denmark UI components: app
 */

import React from 'react';
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
};

const App = (props: AppProps) => (
  // <AppRoutes reqObj={props.reqObj} callbackNgFn={props.callbackNgFn} />
  <>
    <ImageAuthModel {...test} />
    {/* <TestCommon /> */}
  </>
);
if (module?.hot) {
  module.hot.accept(App);
}

App.defaultProps = {
  reqObj: {},
  callbackNgFn: () => {},
};

export default App;
