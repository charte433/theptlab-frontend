import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products:[],
        quantity: 0,
        total: 0,
    },
    reducers:{
        addProduct:(state, action)=>{
            state.quantity += 1;
            state.products.push(action.payload);
            state.total += action.payload.price * action.payload.quantity;
        },
        removeProduct: (state, action) => {
            state.products = state.products.filter(
              (item) =>
                item._id + item.color + item.size !==
                action.payload.product._id +
                  action.payload.product.color +
                  action.payload.product.size
            );
            state.total -= action.payload.price * action.payload.quantity;
            state.quantity -= 1;
          },
          addProductQuantity: (state, action) => {
            state.products.find(
              (item) =>
                item._id + item.color + item.size ===
                action.payload.product._id +
                  action.payload.product.color +
                  action.payload.product.size
            ).quantity += 1;
            state.total += action.payload.product.price;
          },
          subtractProductQuantity: (state, action) => {
            state.products.find(
              (item) =>
                item._id + item.color + item.size ===
                action.payload.product._id +
                  action.payload.product.color +
                  action.payload.product.size
            ).quantity -= 1;
            state.total -= action.payload.product.price;
          },
        paidProduct: (state) => {
            state.quantity = 0;
            state.total = 0;
            state.products = [];
          },
    },
});

export const { addProduct, paidProduct, subtractProductQuantity, addProductQuantity, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;

