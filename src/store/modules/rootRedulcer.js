import { combineReducers } from 'redux';

import flights from './flights/reducer';

export default combineReducers({
  flights,
});
