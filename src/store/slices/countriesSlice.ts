import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCountries = createAsyncThunk(
  "countries/fetchCountriesData",
  async ({ url, region }) => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (region) {
        return data.filter((item) => item.region === region);
      }

      return data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
);

const initialState = {
  countries: [],
  isLoading: true,
  error: null,
};

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.pending, (state) => {
      state.error = null;
      state.isLoading = true;
      state.countries = [];
    });
    builder.addCase(fetchCountries.fulfilled, (state, action) => {
      state.error = null;
      state.isLoading = false;
      state.countries = action.payload;
    });
    builder.addCase(fetchCountries.rejected, (state, action) => {
      state.error = action.error.message || "failed to fetch countries...";
      state.isLoading = false;
      state.countries = [];
    });
  },
});

export default countriesSlice.reducer;
