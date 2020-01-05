import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import Head from './Head';
import Header from './Header';

import api from '../services/api';
// import styled from 'styled-components';
// import '../config/ReactotronConfig';

const Layout = Page => {
  return class PageWrapper extends React.Component {
    render() {
      return (
        <Provider store={store}>
          <Head />
          <Header />
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
