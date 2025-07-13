import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '@/store/slices/CounterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  devTools: process.env.NODE_ENV !== 'production', // enable redux dev tools in dev only
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
