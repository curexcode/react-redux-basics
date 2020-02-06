import isLoggedInReducer from './isLoggedIn';
import counterReducer from './counter';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    counter: counterReducer,
    isLoggedIn: isLoggedInReducer
});

export default allReducers;