import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: [], isFetching: false, error: false
  },
  reducers: {
    addOrder: (state, action) => {
      state.orders = action.payload;
    },
  },
});

export const { addOrder } = orderSlice.actions;
export default orderSlice.reducer;