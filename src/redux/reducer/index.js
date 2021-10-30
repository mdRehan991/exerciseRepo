import {combineReducers} from 'redux';
import homeReducer from './homeReducer';
import editReducer from './editReducer';

const rootReducer = combineReducers({
  homeRd: homeReducer,
  editRd: editReducer,
});

export default rootReducer;
