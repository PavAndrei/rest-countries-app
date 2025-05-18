import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  keywords: "",
  region: "",
  currentPage: 1,
  itemsPerPage: 12,
};

const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    setKeywords(state, action) {
      state.keywords = action.payload;
      state.currentPage = 1;
    },
    setRegion(state, action) {
      state.region = action.payload;
      state.currentPage = 1;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    resetFilters: () => initialState,
  },
});

// export const selectFilter = (state) => state.filter;
// export const selectSort = (state) => state.filter.sort;

export const { setKeywords, setRegion, setCurrentPage, resetFilters } =
  sortSlice.actions;

export default sortSlice.reducer;
