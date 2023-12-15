import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { FiltersSlice } from "@/app/store/slices/filters.slice";
import { filmsAPI } from "@/app/store/api/filmAPI";

export const store = configureStore({
  reducer: {
    filters: FiltersSlice.reducer,
    [filmsAPI.reducerPath]: filmsAPI.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([filmsAPI.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
