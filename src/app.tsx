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

const App = (props: AppProps) => (
  // <AppRoutes reqObj={props.reqObj} callbackNgFn={props.callbackNgFn} />
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
    <ImagePreview {...sample} />
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
    <ImageAuthoring />
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
