// import { createSlice } from "@reduxjs/toolkit";

// const fetchingStatusSlice = createSlice({
//   name: "fetching",
//   initialState: {
//     fetchDone: false,
//     currentlyFetching: false,
//   },
  
//   reducers: {
//     markFetchDone: (state) => {
//         return state.fetchDone = true;
//     },
//     makeFetchingStart: (state) => {
//         return state.currentlyFetching = true;
//     },
//     makeFetchingFinish: (state) => {
//         return state.currentlyFetching = false;
//     },
//   },
// });

// export const fetchingStatusActions = fetchingStatusSlice.actions;
// export default fetchingStatusSlice;






// fetchingStatusSlice.js
import { createSlice } from "@reduxjs/toolkit";

const fetchingStatusSlice = createSlice({
  name: "fetching",
  initialState: { fetchDone: false, currentlyFetching: false },
  reducers: {
    makeFetchingStart: (state) => {
      state.currentlyFetching = true; // Only modify the draft, do not return a new state
    },
    makeFetchingFinished: (state) => {
      state.currentlyFetching = false; // Only modify the draft, do not return a new state
    },
    markFetchDone: (state) => {
      state.fetchDone = true;
     
    },
  },
});

export const fetchingStatusActions = fetchingStatusSlice.actions;
export default fetchingStatusSlice;
