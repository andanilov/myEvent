import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { api } from './api';
import userReducer from './userSlice';

// Combine all reducers into rootReducer
const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  user: userReducer,
});

export const store = configureStore({
  // Include api to store
  reducer: rootReducer,
  // Include middleware to store
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

// Export rootReducer type for useSelector state
export type IRootState = ReturnType<typeof rootReducer>