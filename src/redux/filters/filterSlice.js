import { createSlice } from '@reduxjs/toolkit';


const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    filteredVans: []
  },
  reducers: {
    addFilteredContacts: (state, action) => {
      state.filteredVans = action.payload;
    },
  },
});

export const { addFilteredContacts } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;

export const selectFilteredVans = state => state.filteredVans.filteredVans;
