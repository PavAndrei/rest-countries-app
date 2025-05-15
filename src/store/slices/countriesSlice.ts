import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCountries = createAsyncThunk(
  "countries/fetchCountriesData",
  async ({ url, region, keywords }) => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      const normalizedKeywords = keywords?.toLowerCase().trim();

      const filtered = data.filter((item) => {
        const matchesRegion = region ? item.region === region : true;
        const matchesKeywords = normalizedKeywords
          ? item.name.toLowerCase().includes(normalizedKeywords)
          : true;

        return matchesRegion && matchesKeywords;
      });

      return filtered;
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
