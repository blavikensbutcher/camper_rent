import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filter",
  initialState: {
    filteredVans: [],
  },
  reducers: {
    addFilteredVans: (state, action) => {
      state.filteredVans = action.payload;
    },
  },
});

export const { addFilteredVans } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;

// Исправленный селектор
export const selectFilteredVans = state => state.filteredVans.filteredVans;
