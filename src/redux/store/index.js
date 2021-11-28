import {createStore, applyMiddleware} from 'redux';
import homeReducer from '../reducer/homeReducer';
import thunk from 'redux-thunk';

const store = createStore(homeReducer, applyMiddleware(thunk));

export default store;
