import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import productReducer from './productReducer';

const rootreducer=combineReducers({loginReducer,productReducer});

export default rootreducer;