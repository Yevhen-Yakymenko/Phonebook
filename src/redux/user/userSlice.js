import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { userApi } from './userApi';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const userSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
  },
  extraReducers: builder => {
    builder
      .addMatcher(userApi.endpoints.signUp.matchFulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addMatcher(userApi.endpoints.logIn.matchFulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addMatcher(userApi.endpoints.logOut.matchFulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addMatcher(userApi.endpoints.getUser.matchPending, state => {
        state.isRefreshing = true;
      })
      .addMatcher(userApi.endpoints.getUser.matchFulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addMatcher(userApi.endpoints.getUser.matchPending, (state, action) => {
        state.isRefreshing = false;
      });
  },
});

export const { setUser } = userSlice.actions;

export const userReducer = persistReducer(authPersistConfig, userSlice.reducer);
