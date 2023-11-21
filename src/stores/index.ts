import thunk from 'redux-thunk';
import {configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import reducers from './reducers';
import reactotron from '~/configs/Reactotron';
import {reduxStorage} from '~/configs/ReduxStorage';

const persistConfig = {
  key: '@BaseCode2023',
  version: 1,
  storage: reduxStorage,
  blacklist: ['loading'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
  enhancers: [reactotron.createEnhancer()],
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
