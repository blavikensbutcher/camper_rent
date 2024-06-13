import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

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

const filtersPersistConfig = {
  key: "filters",
  storage,
};

export const { addFilteredVans } = filtersSlice.actions;

export const filtersReducer = persistReducer(
  filtersPersistConfig,
  filtersSlice.reducer,
);

// Исправленный селектор
export const selectFilteredVans = (state) => state.filters.filteredVans;
export const selectFavorite = (state) => state.filters.isFavorite;
