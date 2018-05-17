import {createStore} from 'redux';
import rootReducer from './reducer';
import thunk from 'redux-thunk';
import {compose,applyMiddleware} from 'redux';
import createHistory from 'history/createBrowserHistory';
import {routerMiddleware} from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import { watcherSaga } from './sagas/sagas'
export const history=createHistory();
const sagaMiddleware = createSagaMiddleware();

const middleware=[sagaMiddleware,thunk,routerMiddleware(history)];
const composedMiddleware=applyMiddleware(...middleware);
const store=createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    compose(composedMiddleware));
sagaMiddleware.run( watcherSaga );
export default store;