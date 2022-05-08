import { createSlice } from "@reduxjs/toolkit";

const modelSlice = createSlice({
  name: "model",
  initialState: {
    open: false,
    type: [],
  },
  reducers: {
    openModel: (state, action) => {
      state.open = true;
      state.type = action.payload;
    },
    closeModel: (state) => {
      state.open = false;
      state.type = [];
    },
  },
});

export const { openModel, closeModel } = modelSlice.actions;
export default modelSlice.reducer;