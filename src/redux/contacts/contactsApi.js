import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, ...props }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, ...props });
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

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
  }),
  tagTypes: ['Contact'],
  endpoints(build) {
    return {
      getContacts: build.query({
        query: () => ({
          url: '/contacts',
          method: 'get',
        }),
        providesTags: ['Contact'],
      }),
      addNewContact: build.mutation({
        query: newContact => ({
          url: '/contacts',
          method: 'post',
          data: newContact,
        }),
        invalidatesTags: ['Contact'],
      }),
      updateContact: build.mutation({
        query: data => ({
          url: `/contacts/${data.id}`,
          method: 'patch',
          data: data,
        }),
        invalidatesTags: ['Contact'],
      }),
      deleteContact: build.mutation({
        query: contactId => ({
          url: `/contacts/${contactId}`,
          method: 'DELETE',
        }),
        invalidatesTags: ['Contact'],
      }),
    };
  },
  // endpoints: builder => ({
  //   getContacts: builder.query({
  //     query: () => '/contacts',
  //     providesTags: ['Contact'],
  //   }),
  //   getContactById: builder.query({
  //     query: contactId => `/posts/${contactId}`,
  //     providesTags: ['Contact'],
  //   }),
  //   addNewContact: builder.mutation({
  //     query: newContact => ({
  //       url: '/contacts',
  //       method: 'POST',
  //       body: newContact,
  //     }),
  //     invalidatesTags: ['Contact'],
  //   }),
  //   updateContact: builder.mutation({
  //     query: data => ({
  //       url: `/contacts/${data.id}`,
  //       method: 'DELETE',
  //       body: data,
  //     }),
  //     invalidatesTags: ['Contact'],
  //   }),
  //   deleteContact: builder.mutation({
  //     query: contactId => ({
  //       url: `/contacts/${contactId}`,
  //       method: 'DELETE',
  //     }),
  //     invalidatesTags: ['Contact'],
  //   }),
  // }),
});

export const {
  useGetContactsQuery,
  // useGetContactByIdQuery,
  useAddNewContactMutation,
  useUpdateContactMutation,
  useDeleteContactMutation,
} = contactsApi;
