import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import createReducer from './rootReducer';

const middleWares = [] as any;

const logger = createLogger({ collapsed: true });
middleWares.push(logger);

const store = configureStore({
  reducer: createReducer(),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middleWares),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;