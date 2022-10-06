
import { configureStore } from '@reduxjs/toolkit'
import { SearchReducer } from "./search/SearchReducer";

const store = configureStore({
  reducer: {
    search: SearchReducer
  }
});

export default store;
