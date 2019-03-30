import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const middlewares = [thunk];

const enhancers = composeWithDevTools(applyMiddleware(...middlewares));

const initialState = {};

const store = createStore(rootReducer, initialState, enhancers);

export default store;
