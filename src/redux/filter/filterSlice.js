import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tags: [],
  search: "",
  author: "",
};

const filterSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    tagSelected: (state, action) => {
      state.tags.push(action.payload);
    },
    tagRemoved: (state, action) => {
      const indexToRemove = state.tags.indexOf(action.payload);

      if (indexToRemove !== -1) {
        state.tags.splice(indexToRemove, 1);
      }
    },
    tagRemoveAll: (state, action) => {
      state.tags = [];
      state.search="";
    },
    searched: (state, action) => {
      state.search = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { tagSelected, tagRemoved, tagRemoveAll, searched } =
  filterSlice.actions;
