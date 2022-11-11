import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiContactsSlice = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://636d4279ab4814f2b27d605e.mockapi.io/phonebook/api/v1',
  }),
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => '/contacts',
    }),
  }),
});

export const { useGetContactsQuery } = apiContactsSlice;
