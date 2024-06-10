import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, routes } from "../../routes";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

export const campersApi = createApi({
  reducerPath: "campers",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["Campers"],
  endpoints: (builder) => ({
    getAllCampers: builder.query({
      query: () => routes.HOME,
      providesTags: ["Campers"],
    }),
  }),
});

export const { useGetAllCampersQuery } = campersApi;

const campersPersistConfig = {
  key: "campers",
  storage,
};

export const campersReducer = persistReducer(
  campersPersistConfig,
  campersApi.reducer,
);
