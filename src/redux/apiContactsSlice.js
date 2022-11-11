import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiContactsSlice = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://636d4279ab4814f2b27d605e.mockapi.io/phonebook/api/v1',
  }),
  tagTypes: ['Contact'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['Contact'],
    }),
    getContact: builder.query({
      query: contactId => `/posts/${contactId}`,
      providesTags: ['Contact'],
    }),
    addNewContact: builder.mutation({
      query: newContact => ({
        url: '/contacts',
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: ['Contact'],
    }),
    updateContact: builder.mutation({
      query: data => ({
        url: `/contacts/${data.id}`,
        method: 'DELETE',
        body: data,
      }),
      invalidatesTags: ['Contact'],
    }),
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useGetContactQuery,
  useAddNewContactMutation,
  useUpdateContactMutation,
  useDeleteContactMutation,
} = apiContactsSlice;
