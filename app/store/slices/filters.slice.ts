import {createSlice, PayloadAction} from '@reduxjs/toolkit'

type DefaultState = {
  period: number[],
  genres: number[],
  search: string
}

const initialState: DefaultState = {
  period: [1980, 2024],
  genres: [],
  search: ''
};

export const FiltersSlice = createSlice({
  name: 'filters',
  initialState: initialState,
  reducers: {
    setPeriod: (state, action: PayloadAction<number[]>) => {
      state.period = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setGenres: (state, action: PayloadAction<number>) => {
      const existedGenre = state.genres.findIndex((item) => item === action.payload);

      if (existedGenre === -1) {
        state.genres.push(action.payload);
      } else {
        state.genres.splice(existedGenre, 1);
      }
    },
  },
});

export default FiltersSlice.reducer;
export const {
  setPeriod,
  setGenres,
  setSearch
} = FiltersSlice.actions;
