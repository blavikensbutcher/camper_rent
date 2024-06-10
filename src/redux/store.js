import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { filtersReducer } from './filters/filterSlice';
import { campersApi, campersReducer } from './contacts/camperApi.js';

export const store = configureStore({
  reducer: {
    filteredVans: filtersReducer,
    [campersApi.reducerPath]: campersReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    campersApi.middleware,
  ],

});

export const persistor = persistStore(store);
