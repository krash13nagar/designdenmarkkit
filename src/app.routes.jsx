/**
 * @author: sandeep.gupta1@timesinternet.in
 * @desc: Denmark UI components: app routes, This is not in used for time being
 */

import React from 'react';
import PropTypes from 'prop-types';

const AppRoutes = (props) => {
  if (props) {
    const { reqObj } = props;

    switch (reqObj.compId) {
        default:
        return (
          <>Test default routes</>
        );
    }
  }
  return null;
};

AppRoutes.defaultProps = {
  reqObj: {},
};

AppRoutes.propTypes = {
  reqObj: PropTypes.object,
};
export default AppRoutes;
