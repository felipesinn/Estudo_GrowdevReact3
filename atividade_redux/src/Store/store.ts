// store.ts
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import transactionReducer from '../Slice/slice';

const rootReducer = combineReducers({
  transactions: transactionReducer
});

const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
