// Core
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
// Engine
import { createBrowserHistory } from 'history';
import { createReduxHistoryContext } from 'redux-first-history';
import { thanosGloveReducer } from '../core/thanos-glove/slice';
// import rootSaga from './rootSaga';

const { createReduxHistory, routerMiddleware, routerReducer } =
   createReduxHistoryContext({
      history: createBrowserHistory(),
   });

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
   reducer: {
      thanosGlove: thanosGloveReducer,
      router: routerReducer,
   },
   middleware: () => [routerMiddleware, sagaMiddleware],
});

// sagaMiddleware.run(rootSaga);

export const history = createReduxHistory(store);
