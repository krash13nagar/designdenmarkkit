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
import { DenTypography } from './components';

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
  <DenLink underline="hover" key="1" color="inherit" href="/">MUI</DenLink>,
  <DenLink underline="hover" key="2" color="inherit" href="/">Core</DenLink>,
  <DenTypography key="3" color="text.primary" variant="inherit">Breadcrumb</DenTypography>,
];

const App = (props: AppProps) => (

  // <AppRoutes reqObj={props.reqObj} callbackNgFn={props.callbackNgFn} />
  <>
    Test App
    <TestCommon />
    <BasicMenu />
    <DenLink underline='none'>MUI</DenLink>
    <DenBreadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>{breadcrumbs}</DenBreadcrumbs>
  </>
);
if (module?.hot) {
  module.hot.accept(App);
}

App.defaultProps = {
  reqObj: {},
  callbackNgFn: () => { },
};

export default App;
