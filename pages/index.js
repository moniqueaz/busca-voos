import { connect } from 'react-redux';
import Layout from '../src/components/Layout';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../src/store/actions/actionCreators';

function Home() {
  return <div></div>;
}
function mapStateToProps(state) {
  return {
    test: state.test,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default Layout(connect(mapStateToProps, mapDispatchToProps)(Home));
