import { compose, createStore, applyMiddleware, Middleware } from 'redux';
import logger from 'redux-logger';
import { rootReducer } from './root-reducer';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import thunk from 'redux-thunk';
import createSagaMiddleWare from 'redux-saga';
import { rootSaga } from './root-saga'

export type RootState = ReturnType<typeof rootReducer>

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}
const sagaMiddleware = createSagaMiddleWare();

const middleWares = [
  process.env.NODE_ENV !== 'production' && logger,
  sagaMiddleware,
].filter((middleware): middleware is Middleware => Boolean(middleware));
  
  const composeEnhancer =
    (process.env.NODE_ENV !== 'production' &&
      window &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;
  
type ExtendedPersitConfig = PersistConfig<RootState> & {
  whitelist: (keyof RootState)[];
}

  const persistConfig: ExtendedPersitConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'],
  };
  
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  
  const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));
  
  export const store = createStore(
    persistedReducer,
    undefined,
    composedEnhancers
  );
  
sagaMiddleware.run(rootSaga);

  export const persistor = persistStore(store);