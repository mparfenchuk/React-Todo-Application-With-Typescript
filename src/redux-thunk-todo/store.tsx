import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { reducer } from '../app/reducer';

export type AppState = ReturnType<typeof reducer> 

const middlewares = [
    thunkMiddleware
]

const store = createStore(reducer, compose(applyMiddleware(...middlewares)));

export default store;