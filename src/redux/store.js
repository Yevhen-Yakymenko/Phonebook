import { configureStore } from '@reduxjs/toolkit';
import { apiContactsSlice } from './apiContactsSlice';
import { filterReducer } from './filterSlice';

// import { contactsReducer } from './contactsSlice';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    [apiContactsSlice.reducerPath]: apiContactsSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiContactsSlice.middleware),
});
