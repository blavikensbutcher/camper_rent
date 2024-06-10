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
    removeVan: (state, action) => {
      state.filteredVans = state.filteredVans.filter(item => item.id !== action.payload.id);
    },
  },
});

export const { addFilteredVans, removeVan } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;

// Исправленный селектор
export const selectFilteredVans = state => state.filteredVans.filteredVans;
