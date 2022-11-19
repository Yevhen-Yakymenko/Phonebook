import { createSlice } from '@reduxjs/toolkit';

export const contactsFilterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContacts: (state, action) => (state = action.payload),
  },
});

export const { filterContacts } = contactsFilterSlice.actions;

export const contactsFilterReducer = contactsFilterSlice.reducer;
