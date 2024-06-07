import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, routes } from "../../routes";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

export const contactApi = createApi({
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
    getOneCamper: builder.query({
      query: (id) => `${routes.HOME}${id}`,
      providesTags: ["Campers"],
    }),
  }),
});

export const { useGetAllCampersQuery, useGetOneCamperQuery } = contactApi;

const campersPersistConfig = {
  key: "campers",
  storage,
};

export const contactsReducer = persistReducer(
  campersPersistConfig,
  contactApi.reducer,
);
