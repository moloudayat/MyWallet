import { configureStore } from '@reduxjs/toolkit';
import walletReducer from './slices/walletSlice';
import auditReducer from './slices/auditSlice';

export const store = configureStore({
  reducer: {
    wallet: walletReducer,
    audit: auditReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
