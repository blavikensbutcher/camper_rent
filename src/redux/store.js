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
import { contactApi, contactsReducer } from './contacts/camperApi.js';

export const store = configureStore({
  reducer: {
    filteredVans: filtersReducer,
    [contactApi.reducerPath]: contactsReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    contactApi.middleware,
  ],

  // devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
