import { configureStore } from "@reduxjs/toolkit";

import sort from "./slices/sortSlice";
import countries from "./slices/countriesSlice";

export const store = configureStore({
  reducer: {
    sort,
    countries,
  },
});
