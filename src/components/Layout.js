import React from 'react';
import { Provider, connect } from 'react-redux';
// import styled from 'styled-components';
// import '../config/ReactotronConfig';

import store from '../store/index';
import Navbar from './molecules/NavBar';

const Layout = Page => {
  return class PageWrapper extends React.Component {
    render() {
      return (
        <Provider store={store}>
          <Navbar />
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
