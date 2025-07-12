import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./itemsSlice";
import fetchingStatusSlice from "./fetchingStatusSlice";
import bagSlice from "./bagSlice";

const Store = configureStore({
  reducer: { items: itemsSlice.reducer, 
    fetching: fetchingStatusSlice.reducer ,
    bag: bagSlice.reducer,
    }
});

export default Store;
