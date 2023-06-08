/**
 * @author: sandeep.gupta1@timesinternet.in
 * @desc: Denmark UI components: app
 */

import React from 'react';
import PropTypes from 'prop-types';
//import AppRoutes from './app.routes';
import TestCommon from "./testcommon";

const App = (props) => (
  // <AppRoutes reqObj={props.reqObj} callbackNgFn={props.callbackNgFn} />
  <>
  Test App
  <TestCommon></TestCommon>
  </>
);
if (module.hot) { module.hot.accept(App); }

App.defaultProps = {
  reqObj: {},
  callbackNgFn: () => {},
};

App.propTypes = {
  reqObj: PropTypes.object,
  callbackNgFn: PropTypes.func,
};

export default App;
