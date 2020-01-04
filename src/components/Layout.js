import React from 'react';
import { Provider, connect } from 'react-redux';
import ResetStyle from '../style/reset';
import GlobalStyle from '../style/global';

import api from '../services/api';
// import styled from 'styled-components';
// import '../config/ReactotronConfig';

import store from '../store/index';

const Layout = Page => {
  return class PageWrapper extends React.Component {
    render() {
      return (
        <Provider store={store}>
          <ResetStyle />
          <GlobalStyle />
          <Page />
        </Provider>
      );
    }
  };
};
// function mapStateToProps(state) {
//   return {
//     ...state,
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(actionCreators, dispatch);
// }

export default Layout;
