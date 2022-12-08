import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

// import { useAuth } from 'hooks/useAuth';

// Utility to add JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data, params }) => {
    try {
      if (method === 'get') {
        setAuthHeader(data);
      }

      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        params,
      });

      if (method !== 'get') {
        const token = result.data.token;
        token ? setAuthHeader(token) : clearAuthHeader();
      }

      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const userApi = createApi({
  reducerPath: 'user',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
  }),
  endpoints(build) {
    return {
      getUser: build.query({
        query: token => ({
          url: '/users/current',
          method: 'get',
          data: token,
        }),
      }),
      signUp: build.mutation({
        query: credentials => ({
          url: '/users/signup',
          method: 'post',
          data: credentials,
        }),
      }),
      logIn: build.mutation({
        query: credentials => ({
          url: '/users/login',
          method: 'post',
          data: credentials,
        }),
      }),
      logOut: build.mutation({
        query: () => ({
          url: '/users/logout',
          method: 'post',
        }),
      }),
    };
  },
});

export const {
  useGetUserQuery,
  useSignUpMutation,
  useLogInMutation,
  useLogOutMutation,
} = userApi;
