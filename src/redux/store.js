import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { userApi } from './user/userApi';
import { userReducer } from './user/userSlice';
import { contactsApi } from './contacts/contactsApi';
import { contactsFilterReducer } from './contacts/contactsFilterSlice';

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    auth: userReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: contactsFilterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(userApi.middleware)
      .concat(contactsApi.middleware),
});

export const persistor = persistStore(store);
setupListeners(store.dispatch);
