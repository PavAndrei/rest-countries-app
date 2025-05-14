import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  keywords: "",
  region: "",
};

const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    setKeywords(state, action) {
      state.keywords = action.payload;
    },
    setRegion(state, action) {
      state.region = action.payload;
    },
  },
});

// export const selectFilter = (state) => state.filter;
// export const selectSort = (state) => state.filter.sort;

export const { setKeywords, setRegion } = sortSlice.actions;

export default sortSlice.reducer;
